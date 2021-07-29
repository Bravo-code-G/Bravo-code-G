import React from 'react';
import '../assets/styles/components/MaquinasSelect.scss';
import { ventanaA, ventanaB, ventanaC, ventanaD } from './MaquinaSelect';

const NameMa = 'Sxc';
const FuncionMa = 'Cortadora';
const Estado = 'Detenida';

const MaPrimera = () => (
  <>

    <div id='Box'>
      <div id='BoxP'>
        <section id='BoxPa'>
          <div id='ImagenMa'> </div>
          <div id='InfoE'>
            <h2 id='InfoEa'>{NameMa}</h2>
            <h3>
              {FuncionMa}
              <br />
              Estado:
              {' '}
              {Estado}
            </h3>
          </div>
        </section>

        <section id='BoxPb'>
          <div className='BoxPba'>
            <button className='BotonAccion' onClick={ventanaA}>
              <h3 className='TituloSubMenu'>
                Informacion tecnica de
                {NameMa}
              </h3>
            </button>
            <ul id='BoxPbaA' className='Listado'>
              <li>
                V:
                {}
              </li>
              <li>
                Hz:
                {}
              </li>
              <li>
                A:
                {}
              </li>
              <li>
                Presion hidraulica:
                {}
              </li>
              <li>
                Presion Neumatica:
                {}
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
            <button className='BotonAccion' onClick={ventanaC}><h3 className='TituloSubMenu'>Fallas</h3></button>
            <ul id='BoxPbaC' className='Listado'>
              <li>
                Corto
                {}
              </li>
              <li>
                Motor
                {}
              </li>
              <li>
                cilindro A
                {}
              </li>
              <li>
                Presion hidraulica
                {}
              </li>
              <li>
                Presion Neumatica
                {}
              </li>
            </ul>
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

export default MaPrimera;
