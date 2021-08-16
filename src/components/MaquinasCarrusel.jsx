import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../assets/styles/components/MaquinasCarrusel.scss';
import MaquinasItem from './MaquinasItem';
import FormAdd from './FormAdd';
import MaquinaSelect from './MaquinaSelect';
import { DataFiree, FireApp } from './firebase';
import { obtenerDocumento, obtenerDocumentos } from './DatabaseFire';
import { openModalToFire, closedModalToFire } from './FormAddd';

const MaquinasCarrusel = () => {
//   obtenerDocumentos();
  const inputRef = useRef();
  const [dataElementos, setDataElementos] = useState([]);
  const obtenerDocumentosCarrusel = () => {
    DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
      .collection('elementos')
      .onSnapshot((querySnapshot) => {
        const docsElement = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          docsElement.push({ ...doc.data(), id: doc.id });
        });
        setDataElementos(docsElement);
      });
  };
  const enfoque = () => {
    inputRef.current.focus();
  };

  const stepp = () => {
    enfoque();
    openModalToFire();
  };
  useEffect(() => {
    obtenerDocumentosCarrusel();
    enfoque();
  }, []);
  return (
    <div id='carruselmaquinasA'>

      {' '}
      <button type='button' id='NuevoelementFire' data-open='modalNewElement' onClick={stepp}>Nuevo elemento</button>
      {' '}

      <div id='modalNewElement'>
        {' '}
        <div ref={inputRef} id='pantallaPosteriorElement' onClick={closedModalToFire} />
        {' '}
        <FormAdd />
      </div>
      <div id='carruselMaquinasFire'>
        {
          dataElementos.map((dElement) => (
            <Link key={dElement.id} to={`/Maquinas/${dElement.id}`}>
              <MaquinasItem key={`${dElement.id}`} {...dElement} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default MaquinasCarrusel;
