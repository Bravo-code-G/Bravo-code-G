/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import '../assets/styles/components/Header.scss';
import Auth from './Auth';
import { AbrirModal, CerrarModal, signOut } from './Header';
import { authStateListener, UsuarioP } from './AuthMethods';
// import DatabaseFire from './DatabaseFire.js';
import { obtenerDocumento } from './DatabaseFire';
// import {DatabaseFireSet} from './DatabaseFire.js';

const Header = () => (
  <div id='header'>
    <div className='en1'>
      <div className='emp'>
        <div>
          <Link to='/'>
            <button type='button' className='empBoton'>
              <h1>Proyecto BRAVO</h1>
            </button>
          </Link>
        </div>
      </div>
      <div className='usuario'>
        <div className='caproUserPage' />
        <ul className='usuarioul'>
          <li><Link to='/User'><button type='button' className='botonuser'>Mi Perfil</button></Link></li>
          <li><a href='https://www.facebook.com' target='_blank' rel='noreferrer'><button type='button' className='botonuser'>Mi facebook </button></a></li>
          <li><a href='mailto:luisgarcia.mec@outlook.com'><button type='button' className='botonuser'>Correo</button></a></li>
          <li><a href='tel:8121576420'><button type='button' className='botonuser'>Telefono</button></a></li>
          <li>
            {' '}
            <button type='button' id='IniciarSesion' data-open='modalIniciar' className='botonuser' onClick={AbrirModal}>Iniciar Sesion</button>
            {' '}
          </li>
          <li><button type='button' onClick={signOut}>Cerrar sesión</button></li>
        </ul>
      </div>
      <div id='modalIniciar'>
        {' '}
        <div id='pantallaPosterior' onClick={CerrarModal} />
        {' '}
        <Auth />
      </div>
    </div>
    <div className='menuA'>
      <div><Link to='/Especial'><button type='button' className='menuAboton' value=''>Hitorial de fallas</button></Link></div>
      <div><Link to='/'><button type='button' className='menuAboton' value=''>Fallas actuales</button></Link></div>
      <div><Link to='/'><button type='button' className='menuAboton' value=''>Preventivos</button></Link></div>
      <div><Link to='/'><button type='button' className='menuAboton' value=''>Correctivos</button></Link></div>
      <div><Link to='/Maquinas'><button type='button' className='menuAboton' value=''>Maquinas</button></Link></div>
      <div><Link to='/'><button type='button' className='menuAboton' value=''>Piezas</button></Link></div>
    </div>
    <div id='WB'><a id='WBa'><button type='button' id='WBe' onClick={authStateListener}>WB</button></a></div>
    <div id='WBc'><a id='WBac'><button type='button' id='WBec' onClick={UsuarioP}>WB2</button></a></div>
    <div id='WBf'><a id='WBacf'><button type='button' id='WBecf' >escribir documento</button></a></div>
    <div id='WBf'><a id='WBacg'><button type='button' id='WBecg' onClick={obtenerDocumento}>obtener documento</button></a></div>

  </div>
);

export default Header;
