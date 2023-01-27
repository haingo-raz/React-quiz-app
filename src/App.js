import React, { useState } from 'react';
import { Say, SayButton } from 'react-say';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faPlus, faMinus, faXmark, faDivide } from "@fortawesome/free-solid-svg-icons";
import './App.scss';
import Questions from './components/Questions';


function App() {

  return (
    <div className="App">
      <div className="container">

        <section className="menu">
          <h1>
            Choose an option: 
            <SayButton
              speak="Choose an option:"
              rate={ 0.4 }
              
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton> 
          </h1>
          <button className="btnStyle">Addition <FontAwesomeIcon icon={ faPlus } />
            <SayButton
              speak="Addition"
              rate={ 0.4 }
              
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </button>

          <button className="btnStyle">Substraction <FontAwesomeIcon icon={ faMinus } />
            <SayButton
              speak="Substraction"
              rate={ 0.4 }
     
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </button>

          <button className="btnStyle">Multiplication <FontAwesomeIcon icon={ faXmark } />
            <SayButton
              speak="Multiplication"
              rate={ 0.4 }
              
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </button>

          <button className="btnStyle">Division <FontAwesomeIcon icon={ faDivide} />
            <SayButton
              speak="Division"
              rate={ 0.4 }
              
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </button>
        </section>

        {/* <section className="questionBox">
          <h1> How much is <Questions/> ?</h1>
          <form>
            <input type="text"/>
            <button className="btnStyle">Check answer</button>
          </form>
        </section> */}


      </div>
    </div>
  );
}

export default App;



 





