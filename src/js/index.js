
var botonAB = document.getElementsByClassName("botonAll");
let g
let idd
let id;
let bcd;
let bc = document.getElementsByClassName("bc");

for (y=0;y<botonAB.length;y++){
    botonAB[y].addEventListener("mouseover", bcF,false);
botonAB[y].addEventListener("mouseout", bc2F);
}

function bcF (){
 
    function bcdd(){
        let colorP = [
            blue= "blue",
            pink= "pink",
            red= "red",
            green= "green",
            white= "white",
            verde= "#21C08B",
            azul= "#48cae4",
            verdee="#80ffdb",
            azull="#0466c8"
        ]
        let colorR = Math.floor(Math.random()*10);
        color = colorP[colorR]
        let max = 38;
        let min = -38;
       let bccAleatorio = Math.random() *(max - min) + min;
        g = Math.floor(Math.random() * 18) ;
        bc[g].style.cssText = `transform: translateY(${bccAleatorio}px);background-color: ${color}; `;
    }
    idd = setInterval(bcdd,50);
} 
function bc2F (){
    clearInterval(idd);
    let x
    for (x = 0; x < bc.length; x++){
        bc[x].style.cssText = "transform: translateY(0px);";
    };
    bcAleatorioW = false;  
}
