import React from 'react';
import { Link } from 'react-router-dom';
import { SayButton } from 'react-say';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faPlus, faMinus, faXmark, faDivide } from "@fortawesome/free-solid-svg-icons";
import audio from '../audio/button-pixabay.mp3';

function Menu() {

    const playClickAudio = () => {
      new Audio(audio).play();
    }

    return (
        <section className="menu">
          <h1>
          Choose an option: 
          <SayButton
              speak="Choose an option:"
              rate={ 0.6 }
              
          >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
          </SayButton> 
          </h1>

          <Link to="/addition" className="btnStyle" onClick={playClickAudio}>Addition <FontAwesomeIcon icon={ faPlus } />
            <SayButton
              speak="Addition"
              rate={ 0.6 }
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </Link>

          <Link to="/substraction" className="btnStyle" onClick={playClickAudio}>Substraction <FontAwesomeIcon icon={ faMinus } />
            <SayButton
              speak="Substraction"
              rate={ 0.6 }
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </Link>

          <Link to="multiplication" className="btnStyle" onClick={playClickAudio}>Multiplication<FontAwesomeIcon icon={ faXmark } />
            <SayButton
              speak="Multiplication"
              rate={ 0.6 }
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </Link>

          <Link to="division" className="btnStyle" onClick={playClickAudio}>Division <FontAwesomeIcon icon={ faDivide} />
            <SayButton
              speak="Division"
              rate={ 0.6 }  
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </Link>
      </section>
    );
}

export default Menu;