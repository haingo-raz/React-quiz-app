// Operations with DynamoDB
const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');

AWS.config.update({region:'us-east-1'});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const usersTable = 'maths_user_credentials';
const resultsTable = 'maths_result';

async function register(userInfo){
    const username = userInfo.username;
    const password = userInfo.password;
    if (!username || !password) {
        return {
            statusCode: 400,
            message: "All fields are required"
        }
    }

    // Check if user already exists
    const dynamoUser = await getUser(username.toLowerCase().trim());
    if (dynamoUser && dynamoUser.username){
        return {
            statusCode: 400,
            message: "Username already exists, please choose another one"
        }
    }

    // Encrypt the password
    const encryptedPassword = await bcrypt.hash(password.trim(), 10);
    const user = {
        username : username.toLowerCase().trim(),
        password : encryptedPassword
    }

    // Save to the database
    const saveUserResponse = await saveUser(user);
    if (!saveUserResponse){
        return {
            statusCode: 503,
            message: "Server Error. Please try again later."
        }
    }
    return {
        statusCode: 200,
        username: username
    }
}

async function getUser(username){
    const params = {
        TableName: usersTable,
        Key: {
            username: username
        }
    }

    return await dynamodb.get(params).promise().then((data) => {
        return data.Item;
    }).catch((err) => {
        console.log(err);
    });
}

async function saveUser(user){
    const params = {
        TableName: usersTable,
        Item: user
    }
    return await dynamodb.put(params).promise().then(() => {
        return true;
    }).catch((err) => {
        console.log(err);
    });
}


async function login(userInfo){
    const username = userInfo.username;
    const password = userInfo.password;
    if (!username || !password) {
        return {
            statusCode: 400,
            message: "All fields are required"
        }
    }

    // Check if user exists
    const dynamoUser = await getUser(username.toLowerCase().trim());
    if (!dynamoUser || !dynamoUser.username){
        return {
            statusCode: 400,
            message: "Username or password is incorrect"
        }
    }

    // Compare the password
    const validPassword = await bcrypt.compare(password.trim(), dynamoUser.password);
    if (!validPassword){
        return {
            statusCode: 400,
            message: "Username or password is incorrect"
        }
    }

    return {
        statusCode: 200,
        username: dynamoUser.username
    }
}

async function saveGame(gameData){
    const params = {
        TableName: resultsTable,
        Item: gameData
    }
    return await dynamodb.put(params).promise().then(() => {
        return true;
    }).catch((err) => {
        console.log(err);
    });
}

module.exports.register = register;
module.exports.login = login;
module.exports.saveGame = saveGame;