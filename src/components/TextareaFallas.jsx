import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { DataFiree } from './firebase';

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

  const initialStateValues = {
    nameFalla: '',
    descripcion: '',
  };
  // const initialStateValues = dataElementos;
  const [values, setValues] = useState(initialStateValues);
  const [prueba, setprueba] = useState([]);
  const obtenerFallasDeElement = () => {
    DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
      .collection('elementos')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === idDeElement) {
            const tru = doc.id;
            DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
              .collection('elementos')
              .doc(tru)
              .collection('Fallas')
              .onSnapshot((querySnapshot) => {
                const docsElement = [];
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                  // console.log(doc.id, ' => ', doc.data());
                  docsElement.push({ ...doc.data(), id: doc.id });
                });
                setprueba(prueba);
              });
          };
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

  const addOrEditElementTEST = () => {
    const fireReferencia = DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
      .collection('elementos')
      .doc(idDeElement)
      .collection('Fallas');
    fireReferencia.add(values)
      .then(() => {
        toast('Agregado', {
          type: 'success',
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });

    // updateTimestamp(fireReferencia);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.nameFalla && values.descripcion !== '') {
      addOrEditElementTEST(values);
      // props.addElement(values);
      setValues({ ...initialStateValues });
    } else {
      toast('Agrega nombre de la falla y descripcion', {
        type: 'error',
        autoClose: 3000,
      });
    }

  };
  function countChars() {
    const maxLength = 20;
    const strLength = obj.value.length;

    if (strLength > maxLength) {
      document.getElementById('agregarFalla').innerHTML = `<span style="color: red;">${strLength} out of ${maxLength} characters</span>`;
    } else {
      document.getElementById('agregarFalla').innerHTML = `${strLength} out of ${maxLength} characters`;
    }
  }
  useEffect(() => {
    obtenerFallasDeElement();

  }, []);

  return (
    <>
      <input type='text' id='agregarFallaName' onChange={handleInputChange} name='nameFalla' value={values.nameFalla} placeholder='-Titulo de la falla...' maxLength='100' />
      <textarea name='descripcion' id='agregarFalla' onChange={handleInputChange} value={values.descripcion} placeholder='Max caracteres 900...' rows='10' cols='40' maxLength='900' />
      <button type='button' id='agregarFallaButton' onClick={handleSubmit}>Agregar</button>
    </>
  );
};

export default TextareaFallas;
