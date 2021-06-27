import React from 'react';
import {Link} from 'react-router-dom';
import Description from './Description.jsx';
import '../assets/styles/components/Maquinas.scss';

const Maquinas = () => (
<div id="carruselmaquinas">
<div className="carruselmaquinas_item">
    
        <Link href="#" className="carrusel_soldadora" >
            <button type="button" className="carruselmaquinas_boton"> 
            <h4 className="maquinas_boton_font">Engine</h4>
            </button>
        </Link>
        <Description/>
</div>
        
<div className="carruselmaquinas_item">
    <div >
        <Link href="#" className="carrusel_cortadora">
            <button type="button" className="carruselmaquinas_boton" > 
            <h4 className="maquinas_boton_font">Cortadora</h4>
            </button>
        </Link> 
    </div>
</div>
<div className="carruselmaquinas_item">
    <div >
        <Link to href="#" className="carrusel_cortadora">
            <button type="button" className="carruselmaquinas_boton" > 
            <h4 className="maquinas_boton_font">Cortadora</h4>
            </button>
        </Link> 
    </div>
</div>
<div className="carruselmaquinas_item">
    <div >
        <Link href="#" className="carrusel_cortadora">
            <button type="button" className="carruselmaquinas_boton" > 
            <h4 className="maquinas_boton_font">Cortadora</h4>
            </button>
        </Link> 
    </div>
</div>
<div className="carruselmaquinas_item">
    <div >
        <Link href="#" className="carrusel_cortadora">
            <button type="button" className="carruselmaquinas_boton" > 
            <h4 className="maquinas_boton_font">Cortadora</h4>
            </button>
        </Link> 
    </div>
</div>
<div className="carruselmaquinas_item">
    <div >
        <Link href="#" className="carrusel_cortadora">
            <button type="button" className="carruselmaquinas_boton" > 
            <h4 className="maquinas_boton_font">Cortadora</h4>
            </button>
        </Link> 
    </div>
</div>
</div>
);

export default Maquinas;
