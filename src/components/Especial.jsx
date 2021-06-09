import React from 'react'
import {Link} from 'react-router-dom'
import Tunel from '../assets/static/tunel.mp4';
import '../assets/styles/components/Especial.scss'


// this.handleClick = this.handleClick.bind(this);
// {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

const Especial = () => {
    // var direccionamiento= document.getElementById("paginabraco");
    // direccionamiento.addEventListener("click", aInicio);
    // this.aInicio = this.aInicio.bind(this);
    function aInicio(){
        setTimeout(tiempoEspera,6000);
    }
    function tiempoEspera(){
        // location.href = "../inicio.html"
        <Link to='/'/>
        }
    var cambioDeEstilo= document.getElementById("paginabraco");
    // cambioDeEstilo.addEventListener("click", Cestilo,false);
    // cambioDeEstilo.addEventListener("mousemove", Cestilo2,false);
    // cambioDeEstilo.addEventListener("mouseout", Cestilo3,false);
    function Cestilo2 (){
        let cambioBox1a = document.getElementById("box1a");
        cambioBox1a.style.cssText = "box-shadow: 0px 0px 6px 5px rgba(104, 104, 104, 0.493); transition-duration:400ms; ;"
    }
    function Cestilo3 (){
        let cambioBox1a = document.getElementById("box1a");
        cambioBox1a.style.cssText = "box-shadow: 0px 0px 1px .01px; transition-duration:400ms;"
    }
    function Cestilo(){
        let cambioDeEstilo = document.getElementById("paginabraco");
        cambioDeEstilo.style.cssText = 'transform: translateX(130vw) translateY(-150vh);background-color:rgb(8, 218, 255);border-radius: 50%;transition-duration: 3s';
        let cambioBox1a = document.getElementById("box1a");
        cambioBox1a.style.cssText = "box-shadow: 0px 0px 6px 5px rgba(104, 104, 104, 0.493) ;"
        setTimeout(formaB,1000);
        function formaB(){
            let formaBB = document.getElementById("forma");
            formaBB.style.cssText = " width:0px; height:0px; transform: translate(0px, 400px);"
            setTimeout(fondoimagenA,1000)
            function fondoimagenA(){
                let fondoimagenAB = document.getElementById("imagenfondo");
                fondoimagenAB.style.cssText = "transform: scale(.4);margin-top: 8vw; transition-duration:3s;"
            }
        }
        
    }
    return ( 
    <React.Fragment>
    <div id="container" >
    <div id="forma">
        <div className="enc">
            <h1>Proyecto Braco</h1>
        </div>
       <p></p>
<div className="box1">
    <div id="box1a">
        <p>
            Proyecto iniciado el 31 de enero de 2021
        </p>
        <p>
            En construccion
        </p>
    </div> 
</div>
    <div><button type="button" id="paginabraco" onClick={aInicio, Cestilo } onMouseMove={Cestilo2} onMouseOut={Cestilo3}>Ir a Proyecto</button></div>
    </div>
    <video muted autoPlay="autoPlay" loop="loop" className="video_background" preload="auto" volume="50">
    <source src={Tunel} type="video/mp4" />
</video>
    </div>
    </React.Fragment>
    )
};

export default Especial;
