addEventListener("DOMContentLoaded", (e)=>{

    
    function cambio() {
        let horas = parseFloat(document.getElementById('numero').value);
        let resultado = 5.208 *horas
        document.getElementById('prueba').innerHTML= "Su salario es de : " + resultado + " pesos :) tenga buendia.";
        
    }

    document.getElementById('enviar').onclick = function() {
    cambio();
    }
    

    


})