import React from 'react';
import {Link} from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import '../assets/styles/components/Header.scss';
import Auth from './Auth.jsx';
import { AbrirModal, CerrarModal, signOut} from './Header';
import {authStateListener, UsuarioP} from '../routes/App';

// const AbrirModal = () => {
//     const modalIniciar = document.getElementById('modalIniciar');
//     modalIniciar.style.cssText = 'visibility: visible; opacity: 100%;transition-duration2s;'
// }
// const CerrarModal = () => {
//     const modalIniciar = document.getElementById('modalIniciar');
//     modalIniciar.style.cssText = 'visibility: hidden; opacity: 0%;transition-duration2s;'
// }

const Header = () => (
    <div id="header" >
            <div className="en1" >
                <div className="emp">
                    <div><Link to='/'><button type="button"  className="empBoton" >
                        <h1>Proyecto BRAVO</h1>
                    </button></Link></div>
                </div>
                <div className="usuario">
                    <div className="caproUserPage"></div>
                        <ul className="usuarioul">
                            <li><Link to="/User"><button type="button" className="botonuser">Mi Perfil</button></Link></li>
                            <li><a href="https://www.facebook.com" target="_blank"><button type="button" className="botonuser" >Mi facebook </button></a></li>
                            <li><a href="mailto:luisgarcia.mec@outlook.com"><button type="button" className="botonuser">Correo</button></a></li>
                            <li><a href="tel:8121576420"><button type="button" className="botonuser">Telefono</button></a></li>
                            <li> <button id='IniciarSesion' data-open='modalIniciar'className="botonuser" onClick={AbrirModal}>Iniciar Sesion</button> </li>
                            <li><button onClick={signOut}>Cerrar sesión</button></li>
                        </ul>
                </div>
                <div id='modalIniciar'> <div id='pantallaPosterior' onClick={CerrarModal}></div>  <Auth /></div>
            </div>
                <div className="menuA">
                    <div ><Link to='/Especial'><button type="button" className="menuAboton" value="">Hitorial de fallas</button></Link></div>
                    <div ><Link to='/'><button type="button" className="menuAboton" value="">Fallas actuales</button></Link></div>
                    <div ><Link to='/'><button type="button" className="menuAboton" value="">Preventivos</button></Link></div>
                    <div ><Link to='/'><button type="button" className="menuAboton" value="">Correctivos</button></Link></div>
                    <div ><Link to="/Maquinas"><button type="button" className="menuAboton" value="">Maquinas</button></Link></div>
                    <div ><Link to='/'><button type="button"  className="menuAboton" value="">Piezas</button></Link></div>
                </div>
                    <div id="WB"><a  id="WBa"><button id="WBe" onClick={authStateListener}>WB</button></a></div>
                    <div id="WBc"><a  id="WBac"><button id="WBec" onClick={UsuarioP}>WB2</button></a></div>
        </div>
);

export default Header;