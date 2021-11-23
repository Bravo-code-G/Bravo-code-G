import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/components/MaquinasSelect.scss';
// import { array, objectOf, string } from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@material-ui/icons/Edit';
import { DataFiree, FireApp } from './firebase';
import { ventanaA, ventanaB, ventanaC, ventanaD } from './MaquinaSelectt';
import { getLinks, onDeleteLink, obtenerDocumentos, addOrEditElement, DatabaseNewFireElement, obtenerDocumento } from './DatabaseFire';
import MaquinaFallas from './MaquinaFallas';
import TextareaFallas from './TextareaFallas';
import MaSeEditInfo from './MaSeEditInfo';

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
            const tru = doc.id;
            DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
              .collection('elementos')
              .doc(tru)
              .collection('Fallas')
              .onSnapshot((querySnapshot) => {
                const docsElement = [];
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, ' => ', doc.data());
                  docsElement.push({ ...doc.data(), id: doc.id });
                });
                setDataFallas(docsElement);
              });
          };
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
  console.log(dataFallas);
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
  const dataElementoss = dataElementos;
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
              <div id='BoxPbaA' className='BoxListadoMaSe'>
                <MaSeEditInfo {...{ dataElementos }} />
                {/* <i id='EditIconMaSe'><EditIcon fontSize='small' /></i> */}
              </div>
            </div>
            <div>
              <button className='BotonAccion' onClick={ventanaB}><h3 className='TituloSubMenu'>Productos </h3></button>
              <ul id='BoxPbaB' className='BoxListadoMaSe'>
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
              <div id='BoxPbaC' className='BoxListadoMaSe'>
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
                  <MaquinaFallas {...dElement} idDeElement={idDeElement} />
                )))}
              </div>

            </div>
            <div>
              <button className='BotonAccion' onClick={ventanaD}><h3 className='TituloSubMenu'>Piezas </h3></button>
              <ul id='BoxPbaD' className='BoxListadoMaSe'>
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
        <ToastContainer />
      </div>

    </>
  );
};

export default MaquinaSelect;
