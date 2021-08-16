import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/components/MaquinaFallas.scss';

const MaquinaFallas = (props) => {
  const {nameFalla, descripcion} = props

  const mostrarFalla = () => {
    let descripcionFalla = document.getElementById(nameFalla.toString())
    // descripcionFalla.style.cssText = 'visibility: visible; display: grid;'
    const ter = descripcionFalla.style.visibility;
    if( ter === 'hidden' ){
      descripcionFalla.style.cssText = 'visibility: visible; display: grid;'
    }else{
      descripcionFalla.style.cssText = 'visibility: hidden; display:none;'
    }
  }
  setTimeout(() => {
  const primert = document.getElementById(nameFalla.toString())
  primert.style.cssText = 'visibility: hidden; display:none;'
  },1000)
  
  return (
    <div id='MaquinaFallasP'>
      <button type className='MaquinaFallas' onClick={mostrarFalla}>
        <h3>{nameFalla}</h3>
      </button>
      <div id={nameFalla.toString()} className='descripcionfallas'>
      <h5>{descripcion}</h5> 
      <button type className='descrpcionFallaCerrar' onClick={mostrarFalla}>Cerrar</button>
      </div>
    </div>
  );
};

export default MaquinaFallas;
