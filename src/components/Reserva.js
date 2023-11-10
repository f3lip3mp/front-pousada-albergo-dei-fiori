import React from 'react';
import CardCabana from './CardCabana';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Reserva = () => {
  return (
    <div className="container-reservas">
        <div className='slide'></div>
      <div className='header-menu'>
        <div className="wrap-logo">
          <img className='logo' src={Logo} />
        </div>
      </div>
      <div className="wrap-reserva">
        <CardCabana cabanaName="Cabana 1" apiURL="http://18.230.53.156:8000/cabana/1/1" />
        <CardCabana cabanaName="Cabana 2" apiURL="http://18.230.53.156:8000/cabana/2/1" />
        <CardCabana cabanaName="Cabana 3" apiURL="http://18.230.53.156:8000/cabana/3/1" />
        <CardCabana cabanaName="Cabana 4" apiURL="http://18.230.53.156:8000/cabana/4/1" />
      </div>
    </div>
  );
};

export default Reserva;
