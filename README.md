## Demo link
[Quiz app](https://simple-math-app.netlify.app/)

## Technologies used 
### Client
- ReactJS
- SCSS

### Server
- Node.js / Express
- AWS DynamoDB

## Screenshots 
### Sign up
![SignUp](https://raw.githubusercontent.com/haingo-raz/quiz_app/master/public/UI/signup.png)

### Login
![Login](https://raw.githubusercontent.com/haingo-raz/quiz_app/master/public/UI/login.png)

### Menu
![Menu](https://raw.githubusercontent.com/haingo-raz/quiz_app/master/public/UI/menu.png)

### Info
![Info](https://raw.githubusercontent.com/haingo-raz/quiz_app/master/public/UI/info.png)

### Quiz
![Quiz](https://raw.githubusercontent.com/haingo-raz/quiz_app/master/public/UI/quiz.png)

### Statistics
![Statistics](https://raw.githubusercontent.com/haingo-raz/quiz_app/master/public/UI/statistics.png)

## How to run it on your computer
1. Clone the project using the command `git clone https://github.com/haingo-raz/React-quiz-app.git`

2. Navigate to the working directory `cd quiz_app`

### Client
1. Run `npm install`

2. Run `npm start`

3. Open `localhost:3000` (insert your chosen port)

### Server
1. AWS should be set up with the project. I have created two DynamoDB tables named `maths_user_credentials` and `maths_result` to respectively save the user credentials and the game statistics.

2. Navigate to the server directory `cd server`

3. Run `npm start` to download the required packages

4. Run `npm run dev` to start the server

5. The server can be accessed at http://localhost:8080

