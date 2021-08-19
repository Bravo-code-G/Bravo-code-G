import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/components/MaquinasSelect.scss';
import { array, objectOf, string } from 'prop-types';
import { DataFiree, FireApp } from './firebase';
import { ventanaA, ventanaB, ventanaC, ventanaD } from './MaquinaSelectt';
import { getLinks, onDeleteLink, obtenerDocumentos, addOrEditElement, DatabaseNewFireElement, obtenerDocumento } from './DatabaseFire';
import MaquinaFallas from './MaquinaFallas';
import TextareaFallas from './TextareaFallas';

const MaquinaSelect = () => {
  const { idDeElement } = useParams();

  const [dataElementos, setDataElementos] = useState([]);
  const [dataFallas, setDataFallas] = useState([]);
  const obtenerDocumentosElement = () => {
    DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
      .collection('elementos')
      .onSnapshot((querySnapshot) => {
        // const docsElement = [];
        querySnapshot.forEach((doc) => {
          if (doc.id === idDeElement) {
            setDataElementos({ ...doc.data(), id: doc.id });
          }
        });
      });
  };
  const obtenerFallasDeElement = () => {
    DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
      .collection('elementos')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === idDeElement) {
            const tru = doc.data();
            if (tru.hasOwnProperty('Fallas')) {
              if (tru.Fallas.length > 0) {
                setDataFallas(tru.Fallas);
              } else {
                setDataFallas([]);
              }
            } else {
              setDataFallas([]);
            }
          }
        });
      });
  };

  setTimeout(() => {
    const desplegarA = document.getElementById('BoxPbaA');
    desplegarA.style.cssText = 'visibility: hidden; display:none';
    const desplegarB = document.getElementById('BoxPbaB');
    desplegarB.style.cssText = 'visibility: hidden; display:none';

    const desplegarC = document.getElementById('BoxPbaC');
    desplegarC.style.cssText = 'visibility: hidden; display:none';

    const desplegarD = document.getElementById('BoxPbaD');
    desplegarD.style.cssText = 'visibility: hidden; display:none';
  }, 1000);
  // console.log(dataFallas);
  const ter = { ...dataFallas };
  // const initialStateValues = {
  //   NombreDelElemento: '',
  //   V: '',
  //   Hz: '',
  //   A: '',
  //   PresionHidraulica: '',
  //   PresionNeumatica: '',
  //   CircuitoElectrico: '',
  //   ProductosQueFabrica: '',
  //   Fallas: [],
  // };
  // const [values, setValues] = useState(initialStateValues);

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
    if (values.NombreDelElemento !== '') {
      addOrEditElementTEST(values);
      // props.addElement(values);
      setValues({ ...initialStateValues });
    } else {
      console.log('name invalido');
      alert('Agrega un nombre de Elemento');
    }

  };

  useEffect(() => {
    obtenerDocumentosElement();
    obtenerFallasDeElement();

  }, []);

  return (
    <>
      <div id='Box'>
        <div id='BoxP'>
          <section id='BoxPa'>
            <div id='ImagenMa'> </div>
            <div id='InfoE'>
              <h3 id='InfoEa'>{dataElementos.NombreDelElemento}</h3>
              <h4 className='pMaquinaSelect'>
                funcion
                {/* {dataElementos.} */}
                <br />
                Estado:
                {' '}
                {/* {estado} */}
                funcionando
              </h4>
            </div>
          </section>

          <section id='BoxPb'>
            <div className='BoxPba'>
              <button type='button' className='BotonAccion' onClick={ventanaA}>
                <h3 className='TituloSubMenu'>
                  <p className='pMaquinaSelect'>

                    {`Informacion tecnica de ${dataElementos.NombreDelElemento}`}
                  </p>
                </h3>
              </button>
              <ul id='BoxPbaA' className='Listado'>
                <li>
                  <p className='pMaquinaSelect'>
                    {`V: ${dataElementos.V}`}

                  </p>

                </li>
                <li>
                  <p className='pMaquinaSelect'>
                    {`Hz: ${dataElementos.Hz}`}
                  </p>

                </li>
                <li>
                  <p className='pMaquinaSelect'>
                    {`A: ${dataElementos.A}`}
                  </p>

                </li>
                <li>
                  <p className='pMaquinaSelect'>
                    {`Presion hidraulica: ${dataElementos.PresionHidraulica}`}
                  </p>

                </li>
                <li>
                  <p className='pMaquinaSelect'>
                    {`Presion Neumatica: ${dataElementos.PresionNeumatica}`}
                  </p>

                </li>
              </ul>
            </div>
            <div>
              <button className='BotonAccion' onClick={ventanaB}><h3 className='TituloSubMenu'>Productos </h3></button>
              <ul id='BoxPbaB' className='Listado'>
                <li>
                  205846
                  {}
                </li>
                <li>
                  58546
                  {}
                </li>
                <li>
                  2516
                  {}
                </li>
                <li>
                  897846
                  {}
                </li>
                <li>
                  94866
                  {}
                </li>
              </ul>
            </div>
            <div>
              <button type='button' className='BotonAccion' onClick={ventanaC}><h3 className='TituloSubMenu'>Fallas</h3></button>
              <div id='BoxPbaC' className='Listado'>
                <h3>Agregar nueva falla</h3>
                <TextareaFallas datos={dataElementos} dataF={ter} idDeElement={idDeElement} />
                {/* <textarea name='descripcion' id='agregarFalla' value={values.Fallas}  placeholder='max caracteres 900' rows='10' cols='40' maxLength='900' /> */}
                {/*
                <button type='button' id='agregarFallaButton' onClick={handleSubmit}>Agregar</button>
                <br /> */}
                {
                  dataFallas.length > 0 && (<h3>Historial de fallas</h3>)
                }

                {dataFallas.length > 0 && (dataFallas.map((dElement) => (
                  <MaquinaFallas {...dElement} />
                )))}
              </div>

            </div>
            <div>
              <button className='BotonAccion' onClick={ventanaD}><h3 className='TituloSubMenu'>Piezas </h3></button>
              <ul id='BoxPbaD' className='Listado'>
                <li>
                  cilindro 2544
                  {}
                </li>
                <li>
                  bomba hidrahulics
                  {}
                </li>
                <li>
                  balero 20/50
                  {}
                </li>
              </ul>
            </div>

          </section>

        </div>
        <div id='BackImg'> </div>
      </div>

    </>
  );
};

export default MaquinaSelect;
