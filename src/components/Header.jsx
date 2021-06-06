import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';

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
                            <li><a href="User.html"><button type="button" className="botonuser">Mi Perfil</button></a></li>
                            <li><a href="https://www.facebook.com" target="_blank"><button type="button" className="botonuser" >Mi facebook </button></a></li>
                            <li><a href="mailto:luisgarcia.mec@outlook.com"><button type="button" className="botonuser">Correo</button></a></li>
                            <li><a href="tel:8121576420"><button type="button" className="botonuser">Telefono</button></a></li>
                        </ul>
                </div>
            </div>
                <div className="menuA">
                    <div ><Link to='/'><button type="button" className="menuAboton" value="">Hitorial de fallas</button></Link></div>
                    <div ><Link to='/'><button type="button" className="menuAboton" value="">Fallas actuales</button></Link></div>
                    <div ><Link to='/'><button type="button" className="menuAboton" value="">Preventivos</button></Link></div>
                    <div ><Link to='/'><button type="button" className="menuAboton" value="">Correctivos</button></Link></div>
                    <div ><Link to="/Maquinas"><button type="button" className="menuAboton" value="">Maquinas</button></Link></div>
                    <div ><Link to='/'><button type="button" className="menuAboton" value="">Piezas</button></Link></div>
                </div>
                    <div id="WB"><a href="WBindex.html" id="WBa"><button id="WBe">WB</button></a></div>
        </div>
);

export default Header;