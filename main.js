addEventListener("DOMContentLoaded", (e)=>{

let aprobar = document.querySelector('#Respuesta')
let form = document.querySelector('#formulario')
let ac = 0
form.addEventListener('submint', (e) => {
e.preventDefault();
let datos = Object.fromEntries(new FormData(e.target))
let numer = datos.numero
for (let i = 0; i <= numer/2; i++) {
    if (numero % i == 0) {
        ac += i
    }
    if (ac==numer) {
        let si = "numero perfecto"
        aprobar.innerHTML = si
    }
    else{
        let no = "no es un numero perfecto"
        aprobar.innerHTML = no
    }
}
})
// no usar.............................................


//     // let resultado = document.querySelector('#Resultado')
//     // let acum = 0
//     // let numer = parseInt(document.getElementById('enviar').value)
//     // for (let i = 0; numer ; index++) {
//     //     if (numero % i == 0) {
//     //         acum += i
            
//     //     }    
//     //     if (acum == 28) {
//     //         let es = "es perfecto"
//     //         resultado.innerHTML = es;
//     //     }
        
//     //     else {
//     //         resultado.innerHTML =
//     //         "no es perfecto"
//     //     }
//     // }
//     // console.log(numer)
    










// function cambio() {
//     let acum = 0
//     // let numer = parseFloat(document.getElementById('enviar').value)
//     for (let i = 0; 28 ; index++) {
//         if (28 % i == 0) {
//             acum += i
            
//         }    
//         if (acum == 28) {
//             let es = "es perfecto"
//             // resultado.innerHTML = es;
//         }
        
//         else {
//             let noes = "no es perfecto"
//             // resultado.innerHTML =
//             // "no es perfecto"
//         }
//     }
//     document.getElementById('Resultado').innerHTML = es;
// }

// document.getElementById('enviar').onclick = 
// function ()
// {
// cambio();
// }
// console.log(document.getElementById('enviar').value)
















// punto2    
    // function cambio() {
    //     let horas = parseFloat(document.getElementById('numero').value);
    //     let resultado = 5.208 *horas
    //     document.getElementById('prueba').innerHTML= "Su salario es de : " + resultado + " pesos :) tenga buendia.";
        
    // }

    // document.getElementById('enviar').onclick = function() {
    // cambio();
    // }
    

    


})