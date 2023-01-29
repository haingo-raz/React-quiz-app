import React from 'react';
import { Link } from 'react-router-dom';
import { SayButton } from 'react-say';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faPlus, faMinus, faXmark, faDivide } from "@fortawesome/free-solid-svg-icons";
import audio from '../audio/button-pixabay.mp3';
import './Menu.scss';

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
              rate={ 0.8 }
              
          >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
          </SayButton> 
          </h1>

          <div className="menuItem">
            <Link to="/addition" className="btnStyle" onClick={playClickAudio} tabIndex="0">
              Addition &nbsp; <FontAwesomeIcon icon={ faPlus } />
            </Link>
            <SayButton
                speak="Addition"
                rate={ 0.8 }
                className="speechContainer"
              >
                <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </div>
          

          <div className="menuItem">
            <Link to="/subtraction" className="btnStyle" onClick={playClickAudio} tabIndex="0">
              Subtraction &nbsp; <FontAwesomeIcon icon={ faMinus } />
            </Link>
            <SayButton
                speak="Subtraction"
                rate={ 0.8 }
              >
                <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </div>
          
          <div className="menuItem">
            <Link to="multiplication" className="btnStyle" onClick={playClickAudio} tabIndex="0">
                Multiplication &nbsp; <FontAwesomeIcon icon={ faXmark } />
            </Link>
            <SayButton
                speak="Multiplication"
                rate={ 0.8 }
              >
                <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </div>
          
          <div className="menuItem">
            <Link to="division" className="btnStyle" onClick={playClickAudio} tabIndex="0">
              Division &nbsp; <FontAwesomeIcon icon={ faDivide} />
            </Link>
            <SayButton
                speak="Division"
                rate={ 0.8 }  
              >
                <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </div>
          
          
      </section>
    );
}

export default Menu;