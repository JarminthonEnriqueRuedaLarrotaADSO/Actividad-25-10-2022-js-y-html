addEventListener("DOMContentLoaded", (e) =>{

    let button = document.getElementById('boton');
    let respuesta = document.getElementById('respuesta');
    let respuesta1 = document.getElementById('respuesta1');
    
    button.addEventListener('click', solucion())
    
    function solucion() 
    {
        let venta1 = parseInt(document.getElementById('venta1').value);
        let venta2 = parseInt(document.getElementById('venta2').value);
        let venta3 = parseInt(document.getElementById('venta3').value);
        let SueldoBase = parseInt(document.getElementById('sueldoBase').value);
        let calculo1 = (venta1+venta2+venta3)*0.10
        let calculo2 =  (calculo1 + SueldoBase)
    
        respuesta.innerHTML=`El resultado de las comisiones es de: ${calculo1}`
        respuesta1.innerHTML= `El resultado de el sueldo mas las comisiones es de: ${calculo2}`
    }
    
    
    
        // function cambio() {
        //     let venta1 = parseInt(document.getElementById('venta1').value);
        //     let venta2 = parseInt(document.getElementById('venta2').value);
        //     let venta3 = parseInt(document.getElementById('venta3').value);
        //     let SueldoBase = parseFloat(document.getElementById('sueldoBase').value);
        //     let calculo1 = (venta1+venta2+venta3)*0.10
        //     let calculo2 =  (calculo1 + SueldoBase)
        //     // document.getElementsByTagName('p').innerHTML=  "El dinero por sus comisiones es de: " + calculo1;
        //     document.getElementById('prueba1').innerHTML =  "El dinero por sus comisiones y sueldo base es de :" + calculo2;
        // }
    
        // document.getElementsByClassName('enviar').onclick = function() {
        // cambio();
        // }
        
    
    })