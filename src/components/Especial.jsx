import React from 'react';
import { Link } from 'react-router-dom';
// import Tunel from '../assets/static/tunel.mp4';
import '../assets/styles/components/Especial.scss';

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
  function aInicio() {
    setTimeout(tiempoEspera, 6000);
  }
  function tiempoEspera() {
    // location.href = "../inicio.html"
    <Link to='/' />;
  }
  const cambioDeEstilo = document.getElementById('paginabraco');
  // cambioDeEstilo.addEventListener("click", Cestilo,false);
  // cambioDeEstilo.addEventListener("mousemove", Cestilo2,false);
  // cambioDeEstilo.addEventListener("mouseout", Cestilo3,false);
  function Cestilo2() {
    const cambioBox1a = document.getElementById('box1a');
    cambioBox1a.style.cssText = 'box-shadow: 0px 0px 6px 5px rgba(104, 104, 104, 0.493); transition-duration:400ms; ;';
  }
  function Cestilo3() {
    const cambioBox1a = document.getElementById('box1a');
    cambioBox1a.style.cssText = 'box-shadow: 0px 0px 1px .01px; transition-duration:400ms;';
  }
  function Cestilo() {
    const cambioDeEstilo = document.getElementById('paginabraco');
    cambioDeEstilo.style.cssText = 'transform: translateX(130vw) translateY(-150vh);background-color:rgb(8, 218, 255);  z-index: -2;border-radius: 50%;transition-duration: 3s';
    const cambioBox1a = document.getElementById('box1a');
    cambioBox1a.style.cssText = 'box-shadow: 0px 0px 6px 5px rgba(104, 104, 104, 0.493) ;';
    setTimeout(formaB, 1000);
    function formaB() {
      const formaBB = document.getElementById('forma');
      formaBB.style.cssText = ' width:0px; height:0px; transform: translate(0px, 1200px); z-index: -10;';
      // setTimeout(fondoimagenA,1000)
      // function fondoimagenA(){
      //     let fondoimagenAB = document.getElementById("imagenfondo");
      //     fondoimagenAB.style.cssText = "transform: scale(.4);margin-top: 8vw; transition-duration:3s;"
      // }
    }

  }
  return (
    <>
      <div id='container'>
        <div id='forma'>
          <div className='enc'>
            <h1>Proyecto Braco</h1>
          </div>
          <p />
          <div className='box1'>
            <div id='box1a'>
              <p>
                Proyecto de pruebas de Braco
              </p>
              <p>
                En construccion
              </p>
            </div>
          </div>
          <div><button type='button' id='paginabraco' onClick={aInicio, Cestilo} onMouseMove={Cestilo2} onMouseOut={Cestilo3}>Boton SN</button></div>
        </div>
        {/* <video width='100%' muted autoPlay='autoPlay' loop='loop' className='video_background' preload='auto' volume='50'>
          <source controls src={Tunel} type='video/mp4' />
        </video> */}
      </div>
    </>
  );
};

export default Especial;
