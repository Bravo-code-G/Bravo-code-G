import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import '../assets/styles/components/FormAdd.scss';
// import firebase from 'firebase/app';
import 'firebase/firestore';
import { string } from 'prop-types';
import { DataFiree, FireApp } from './firebase';
import { getLinks, onDeleteLink, obtenerDocumentos, addOrEditElement, DatabaseNewFireElement, obtenerDocumento } from './DatabaseFire';
import { addDataNewElementTec, closedModalToFire } from './FormAddd';
// FireApp();
const FormAdd = () => {
  const docRef = DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos');

  //añadir Marca de tiempo del servidor//////////////////////////////
  // Update the timestamp field with the value from the server
  const updateTimestamp = () => {
    docRef.update({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const initialStateValues = {
    NombreDelElemento: '',
    V: '',
    Hz: '',
    A: '',
    PresionHidraulica: '',
    PresionNeumatica: '',
    CircuitoElectrico: '',
    ProductosQueFabrica: '',
    Fallas: [],
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  // const addElement = (objectx) => {
  //   const nameDoc = values.NombreDelElemento;
  //   DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
  //     .collection(nameDoc)
  //     .doc(nameDoc)
  //     .set(objectx)
  //     .then(() => {
  //       console.log('Element added successfully');
  //     })
  //     .catch((error) => {
  //       console.error('Error adding document: ', error);
  //     });
  //   updateTimestamp();
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.NombreDelElemento !== '') {
      addOrEditElement(values);
      // props.addElement(values);
      setValues({ ...initialStateValues });
    } else {
      console.log('name invalido');
      alert('Agrega un nombre de Elemento');
    }

  };

  // const getLinkById = async (id) => {
  //   const doc = await DataFiree.collection('links').doc(id).get();
  //   setValues({ ...doc.data() });
  // };

  // useEffect(() => {
  //   if (currentId === '') {
  //     setValues({ ...initialStateValues });
  //   } else {
  //     getLinkById(currentId);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentId]);

  return (
    <div id='HeaderNewElement'>
      <h3 id='EncNewElement'>Agregar un nuevo elemento</h3>
      <div id='formNewElement'>
        <h3 className='sectionNewFire'>Nombre del elemento</h3>
        <h5 id='datoImportante'>Dato obligatorio</h5>
        <input
          type='text'
          id='elementName'
          name='NombreDelElemento'
          className='liNewFire'
          value={values.NombreDelElemento}
          onChange={handleInputChange}
        />
        <h2 className='sectionNewFire'>Datos técnicos</h2>

        <div id='addDataNewElementTec'>
          <label htmlFor='text'>V:</label>
          <input
            type='text'
            name='V'
            value={values.V}
            onChange={handleInputChange}
            className='liNewFire'
          />
          <label htmlFor='text'>Hz:</label>
          <input
            type='text'
            name='Hz'
            value={values.Hz}
            onChange={handleInputChange}
            className='liNewFire'
          />
          <label htmlFor='text'>A:</label>
          <input
            type='text'
            name='A'
            value={values.A}
            onChange={handleInputChange}
            className='liNewFire'
          />
          <label htmlFor='text'>Circuito electrico:</label>
          <input
            type='text'
            name='CircuitoElectrico'
            value={values.CircuitoElectrico}
            onChange={handleInputChange}
            className='liNewFire'
          />
          <label htmlFor='text'>Presion hidraulica:</label>
          <input
            type='text'
            name='PresionHidraulica'
            value={values.PresionHidraulica}
            onChange={handleInputChange}
            className='liNewFire'
          />
          <label htmlFor='text'>Presion Neumatica:</label>
          <input
            type='text'
            name='PresionNeumatica'
            value={values.PresionNeumatica}
            onChange={handleInputChange}
            className='liNewFire'
          />
        </div>
        <button onClick={addDataNewElementTec} id='addDataTecNewElement' className='addDataTecNewElement'>+</button>
        <h2 className='sectionNewFire'>Producto</h2>
        <label htmlFor='text'>Productos que fabrica</label>
        <input
          type='text'
          name='ProductosQueFabrica'
          value={values.ProductosQueFabrica}
          onChange={handleInputChange}
          id='password'
        />
        <button type='submit' value='Submit' id='addNewFire' onClick={handleSubmit}>
          Agregar
        </button>
      </div>
      <button id='cerrarModal' onClick={closedModalToFire}>Cerrar</button>
    </div>
  );
};
export default FormAdd;
