// var Patricia = {
//     Nombre: "Patricia Ardila", 
//     Edad: 38,
//     Peso: 53
//    };

//    var DiasdelAño = 365;
//    var IncrementoPeso = 0.2;

//    const AumentarPeso = persona => persona.Peso += IncrementoPeso;
//    const Bajarpeso = persona => persona.Peso -= IncrementoPeso;
   
//    function cambioPeso(persona){
//    for (var i = 1; i <= DiasdelAño; i++) {
//        var random = Math.random();
//    if (random <= 0.25){
//         AumentarPeso(persona)
//     }   else if (random <= 0.50) {
//         Bajarpeso(persona)
//     }
//     }                                        
//     }
//    console.log(`Al inicia el año ${Patricia.Nombre} pesaba ${Patricia.Peso} kilos`)
//    cambioPeso(Patricia)
//    console.log(Patricia)
//    console.log(`Al final del año ${Patricia.Nombre} pesaba ${Patricia.Peso} kilos`)

   var Patricia = {
    Nombre: "Patricia Ardila", 
    Edad: 38,
    Peso: 53
   }
   var DiasdelAno = 365;
   var IncrementoPeso = 0.200;
   const AumentarPeso = persona => persona.Peso += IncrementoPeso
   const Bajarpeso = persona => persona.Peso -= IncrementoPeso
   
   function cambioPeso(persona){
       var persona;
   for (var i = 1; i <= DiasdelAno; i++) {
       var random = Math.random();
   if (random <= 0.25){
        AumentarPeso(persona)
    }   else if (random <= 0.50) {
        Bajarpeso(persona)
    }
    }                                        
    }
   console.log(`Al inicia el año ${Patricia.Nombre} pesaba ${Patricia.Peso} kilos`)
   cambioPeso(Patricia)
   console.log(cambioPeso(Patricia))
   console.log(`Al final del año ${Patricia.Nombre} pesaba ${Patricia.Peso} kilos`)