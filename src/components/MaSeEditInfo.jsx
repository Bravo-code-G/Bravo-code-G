import React, { useState, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';

const MaSeEditInfo = (props) => {

  const { dataElementos } = props;
  const { MaSeEditInfoData, setMaSeEditInfoData } = useState();
  // const editInfo = () => {

  // };

  // useEffect = (() => {
  //   editInfo();
  // }, []);

  return (
    <>
      <ul className='ListadoMaSe'>
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
          {' '}

        </li>
      </ul>
      <i id='EditIconMaSe'><EditIcon fontSize='small' /></i>
    </>
  );
};

export default MaSeEditInfo;
