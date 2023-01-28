import React from 'react';
import { Link } from 'react-router-dom';
import { Say, SayButton } from 'react-say';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faPlus, faMinus, faXmark, faDivide } from "@fortawesome/free-solid-svg-icons";
import Questions from './Questions';
import Addition from './Addition';

function Menu() {
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

          <button className="btnStyle"><Link to="/addition">Addition </Link><FontAwesomeIcon icon={ faPlus } />
            <SayButton
              speak="Addition"
              rate={ 0.6 }
              
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </button>

          <button className="btnStyle"><Link to="/substraction">Substraction</Link> <FontAwesomeIcon icon={ faMinus } />
            <SayButton
              speak="Substraction"
              rate={ 0.6 }
    
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </button>

          <button className="btnStyle"><Link to="multiplication">Multiplication</Link> <FontAwesomeIcon icon={ faXmark } />
            <SayButton
              speak="Multiplication"
              rate={ 0.6 }
              
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </button>

          <button className="btnStyle"><Link to="division">Division</Link> <FontAwesomeIcon icon={ faDivide} />
            <SayButton
              speak="Division"
              rate={ 0.6 }
              
            >
              <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
            </SayButton>
          </button>
      </section>
    );
}

export default Menu;