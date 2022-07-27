import React from 'react';
import '../styles/Logo.css';
import SelectLogo from '../images/logo-IR.png';

function Logo() {
  return(
    <div className='content-logo'>
      <img src={ SelectLogo }
           className='logo' 
           alt='Logo seleccionado' />
    </div>
  );
}

export default Logo;