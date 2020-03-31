
var utilidad =parseInt(document.getElementById("ganancia").value);
var vcompra = parseInt(document.getElementById("vcompra").value);
var iva = parseInt(document.getElementById("iva").value);
var ganancia = 0;
var impuesto = 0;

var vventa = 0;



const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
     

function resultado(){
    calculoWin();
    calculoIva();
    calculoUtl(vcompra,impuesto,ganancia)
    console.log(vventa);
    document.getElementById("rsvventa").value = formatterPeso.format(vventa);
    document.getElementById("rsganancia").value = formatterPeso.format(ganancia);


}


function calculoUtl(vcompra,impuesto,ganancia){
    vventa = vcompra + ganancia + impuesto;
    return vventa;
    }

function calculoIva(){
   vcompra = parseInt(document.getElementById("vcompra").value);
   iva = parseInt(document.getElementById("iva").value);
   impuesto = vcompra * (iva/100);
   
    return impuesto;
}
function calculoWin(){

    utilidad =parseInt(document.getElementById("ganancia").value);
    vcompra = parseInt(document.getElementById("vcompra").value);
     ganancia = vcompra * (utilidad/100);
    
     return ganancia;
}



