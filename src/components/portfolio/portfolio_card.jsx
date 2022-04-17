import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function PortfolioCard(props) {
  const { img } = props;
  return (
    <section className='portfolio__card'>
      <img src={img} alt="Logo compony" className='logoimg' />
      <div className="detiles">
        <span className='detiles__content'>Compony Name</span>
        <a href="https://www.google.com/" target="_blank" className='detiles__content' aria-hidden="true" rel="nofollow">
          Show Web Site
          <FontAwesomeIcon icon={faUpRightFromSquare}/>
        </a>
      </div>
      </section>
  )
}

export default PortfolioCard;