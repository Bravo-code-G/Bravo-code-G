import React, { useState, useEffect } from 'react';
import { DataFiree, FireApp } from './firebase';

const TextareaFallas = (props) => {
  const { dataElementos, idDeElement } = props;
  //   const initialStateValues = {
  //     NombreDelElemento: '',
  //     V: '',
  //     Hz: '',
  //     A: '',
  //     PresionHidraulica: '',
  //     PresionNeumatica: '',
  //     CircuitoElectrico: '',
  //     ProductosQueFabrica: '',
  //     Fallas: [],
  //   };
  const initialStateValues = dataElementos;
  const [values, setValues] = useState(initialStateValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const addOrEditElementTEST = () => {
    const fireReferencia = DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
      .collection('elementos')
      .doc(idDeElement);
    const vet = values;
    fireReferencia.update(vet)
      .then(() => {
        p;
        console.log('Element added successfully');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });

    // updateTimestamp(fireReferencia);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.Fallas !== []) {
      addOrEditElementTEST(values);
      // props.addElement(values);
      setValues({ ...initialStateValues });
    } else {
      console.log('name invalido');
      alert('Agrega un nombre de Elemento');
    }

  };

  return (
    <>
      <textarea name='descripcion' id='agregarFalla' onChange={handleInputChange} placeholder='max caracteres 900' rows='10' cols='40' maxLength='900' />

      <button type='button' id='agregarFallaButton' onClick={handleSubmit}>Agregar</button>
    </>
  );
};

export default TextareaFallas;
