import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Description from './Description.jsx';
import '../assets/styles/components/Maquinas.scss';

import MaquinasSelect from './MaquinaSelect.js';

const MaquinasItem= (props) => {
    
    var titlee = "Test";
    const {id, title, area, imgURL, ULink} = props;

    return (
    // <MaquinasSelect/>
    <div id="carruselmaquinas">
        <div className="carruselmaquinas_item" >
            <img className='ImgM' src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <Link to='' className="carruselmaquinas_Link" >
                <button type="button" className="carruselmaquinas_boton" value=""> 
                <h4 className="maquinas_boton_font">{titlee}</h4>
                </button>
            </Link>
        </div>
    </div>


// <div id="carruselmaquinas">
// <div className="carruselmaquinas_item">
    
//         <Link href="#" className="carrusel_soldadora" >
//             <button type="button" className="carruselmaquinas_boton"> 
//             <h4 className="maquinas_boton_font">Engine</h4>
//             </button>
//         </Link>
//         <Description/>
// </div>
        
// <div className="carruselmaquinas_item">
//     <div >
//         <Link href="#" className="carrusel_cortadora">
//             <button type="button" className="carruselmaquinas_boton" > 
//             <h4 className="maquinas_boton_font">Cortadora</h4>
//             </button>
//         </Link> 
//     </div>
// </div>
// <div className="carruselmaquinas_item">
//     <div >
//         <Link to href="#" className="carrusel_cortadora">
//             <button type="button" className="carruselmaquinas_boton" > 
//             <h4 className="maquinas_boton_font">Cortadora</h4>
//             </button>
//         </Link> 
//     </div>
// </div>
// <div className="carruselmaquinas_item">
//     <div >
//         <Link href="#" className="carrusel_cortadora">
//             <button type="button" className="carruselmaquinas_boton" > 
//             <h4 className="maquinas_boton_font">Cortadora</h4>
//             </button>
//         </Link> 
//     </div>
// </div>
// <div className="carruselmaquinas_item">
//     <div >
//         <Link href="#" className="carrusel_cortadora">
//             <button type="button" className="carruselmaquinas_boton" > 
//             <h4 className="maquinas_boton_font">Cortadora</h4>
//             </button>
//         </Link> 
//     </div>
// </div>
// <div className="carruselmaquinas_item">
//     <div >
//         <Link href="#" className="carrusel_cortadora">
//             <button type="button" className="carruselmaquinas_boton" > 
//             <h4 className="maquinas_boton_font">Cortadora</h4>
//             </button>
//         </Link> 
//     </div>
// </div>
// </div>
// // 
)}


MaquinasItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
  };

export default MaquinasItem;
