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
  const [prueba, setprueba] = useState([]);
  const obtenerFallasDeElement = () => {
    DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
      .collection('elementos')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === idDeElement) {
            const tru = doc.data();
            if (tru.hasOwnProperty('Fallas')) {
              if (tru.Fallas.length > 0) {
                setprueba(tru.Fallas);
              } else {
                setprueba([]);
              }
            } else {
              setprueba([]);
            }
          }
        });
      });
  };
  // console.log(prueba);
  // console.log(values);
  // const te = dataFallas;
  // const pte = te.push('test');
  // console.log(te.map((pt) => pt));
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const addOrEditElementTEST = (Fallas) => {
    const fireReferencia = DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
      .collection('elementos')
      .doc(idDeElement);
    fireReferencia.update({ Fallas })
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
    prueba.push(values);
    e.preventDefault();
    if (values.Fallas !== []) {
      addOrEditElementTEST(prueba);
      // props.addElement(values);
      setValues({ ...initialStateValues });
    } else {
      console.log('name invalido');
      alert('Agrega un nombre de Elemento');
    }

  };
  useEffect(() => {
    obtenerFallasDeElement();

  }, []);

  return (
    <>
      <input type='text' onChange={handleInputChange} name='nameFalla' placeholder='titulo de la falla' maxLength='100' />
      <textarea name='descripcion' id='agregarFalla' onChange={handleInputChange} placeholder='max caracteres 900' rows='10' cols='40' maxLength='900' />

      <button type='button' id='agregarFallaButton' onClick={handleSubmit}>Agregar</button>
    </>
  );
};

export default TextareaFallas;
