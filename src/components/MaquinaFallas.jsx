import React from 'react';
import { DataFiree } from './firebase';
import '../assets/styles/components/MaquinaFallas.scss';
import { toast } from 'react-toastify';

const MaquinaFallas = (props) => {
  const {nameFalla, descripcion, id, idDeElement} = props

  const mostrarFalla = () => {
    let descripcionFalla = document.getElementById(id)
    // descripcionFalla.style.cssText = 'visibility: visible; display: grid;'
    const ter = descripcionFalla.style.visibility;
    if( ter === 'hidden' ){
      descripcionFalla.style.cssText = 'visibility: visible; display: grid;'
    }else{
      descripcionFalla.style.cssText = 'visibility: hidden; display:none;'
    }
  }
  const onDeleteLink = () => {
    const fireReferencia = DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
    .collection('elementos')
    .doc(idDeElement)
    .collection('Fallas').doc(id);
    if(window.confirm('Deceas borrar esta Falla')){
     fireReferencia.delete(id)
     toast('Eliminado',{
       type: 'deleted',
       autoClose: 2000,
     })
    }
  }

  setTimeout(() => {
  const primert = document.getElementById(id)
  primert.style.cssText = 'visibility: hidden; display:none;'
  },1000)
  
  return (
    <div id='MaquinaFallasP'>
      <div>
         <button type className='MaquinaFallas' onClick={mostrarFalla}>
        <h3>{nameFalla}</h3>
      </button>
      <button onClick={onDeleteLink}>borrar</button>
      </div>
     
      <div id={id} className='descripcionfallas'>
      <h5>{descripcion}</h5> 
      <button type className='descrpcionFallaCerrar' onClick={mostrarFalla}>Cerrar</button>
      </div>
    </div>
  );
};

export default MaquinaFallas;
