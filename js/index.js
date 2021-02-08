
var direccionamiento= document.getElementById("paginabraco");
direccionamiento.addEventListener("click", aInicio);

function aInicio(){
    
    setTimeout(tiempoEspera,6000);

}

function tiempoEspera(){
    location.href = "https://bravo-code-g.github.io/Inicio.html"
    }


var cambioDeEstilo= document.getElementById("paginabraco");
cambioDeEstilo.addEventListener("click", Cestilo,false);

function Cestilo(){
    let cambioDeEstilo = document.getElementById("paginabraco");
    cambioDeEstilo.style.cssText = 'transform: translateX(130vw) translateY(-150vh);background-color:rgb(8, 218, 255);border-radius: 50%;transition-duration: 3s';
    setTimeout(formaB,1000);
    function formaB(){
        let formaBB = document.getElementById("forma");
        formaBB.style.cssText = " width:0px; height:0px; transform: translate(0px, 400px);"
        setTimeout(fondoimagenA,1000)
        function fondoimagenA(){
            let fondoimagenAB = document.getElementById("imagenfondo");
            fondoimagenAB.style.cssText = "transform: scale(.4);margin-top: 8vw; transition-duration:3s"
        }
    }
    
}
