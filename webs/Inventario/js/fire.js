var item= 0;
var cont=0;

const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

function eliminar(){
    var numero = item;
    var newid = "cod"+numero;
    var newclass = "vacio";
    var ingresar = "-"

    var codigo = document.getElementById("idc"+item).innerHTML = ingresar;
    var name = document.getElementById("name"+item).innerHTML = ingresar;
    var marca = document.getElementById("marca"+item).innerHTML = ingresar;
    var praice = document.getElementById("price"+item).innerHTML = ingresar;
    var cantidad = document.getElementById("num"+item).innerHTML = ingresar;
    
    
    document.getElementById("cod"+numero).id = newid;
    document.getElementById("cod"+numero).className = newclass;
    document.getElementById("cod"+numero).setAttribute( "onclick","saludar("+numero+")");
    
}
function saludar(num){
    
    item = num; 
    color(item);
    var ui = document.getElementById("cod"+item).className; 
    if(ui=="vacio"){
        
        document.getElementById("del").disabled=true;
        document.getElementById("act").disabled=true;
    }else{
        
        document.getElementById("del").disabled=false;
        document.getElementById("act").disabled=false;
    }
    
    
    console.log(item);
    return item;
    
    
} 
function color(x){
    for (let index = 1; index <= 6; index++) {
        document.getElementById("cod"+index).style.backgroundColor = "#0E1A42";   
    }
    document.getElementById("cod"+x).style.backgroundColor = "#3054CE"; 
}
function ingr(){
    var imagen="img/nuevi.png"
    document.getElementById("new").style.boxShadow="0 0 6px 0 #FF4700";
    document.getElementById("act").style.boxShadow="0 0 0px 0 #FF4700";
    document.getElementById("nuevo").style.display='block';
    document.getElementById("imag").src= imagen;
    document.getElementById("imag").setAttribute("onclick","nuevo()");
}
function act(){
    
    document.getElementById("codigo").value="";
    document.getElementById("marca").value="";
    document.getElementById("nombre").value="";
    document.getElementById("precio").value="";
    document.getElementById("cantidad").value="";

    document.getElementById("act").style.boxShadow="0 0 6px 0 #FF4700";
    document.getElementById("new").style.boxShadow="0 0 0px 0 #FF4700";
    var imagen="img/actualizar.png"
    document.getElementById("nuevo").style.display='block';
    document.getElementById("imag").src= imagen;
    document.getElementById("imag").setAttribute("onclick","actualizar()");
}
function nuevo(){
    
    for (let index = 1; index <= 6; index++) {
        
        var ui = document.getElementById("cod"+index).className; 
        var inpCodigo  = document.getElementById("codigo").value;
        var inpmarca  = document.getElementById("marca").value;
        var inpnombre  = document.getElementById("nombre").value;
        var inpprecio = document.getElementById("precio").value;
        var inpcantidad = document.getElementById("cantidad").value;
        console.log(inpnombre)
        if(ui=="vacio"){
            document.getElementById("idc"+index).innerHTML = inpCodigo;
            document.getElementById("name"+index).innerHTML =inpnombre; 
            document.getElementById("marca"+index).innerHTML = inpmarca;
            document.getElementById("price"+index).innerHTML =formatterPeso.format(inpprecio) ;
            document.getElementById("num"+index).innerHTML =inpcantidad;
            document.getElementById("cod"+index).className = "lleno";

            break;
        }else{
            cont++
            
        }
        
    }
}
function actualizar(){
    var index=item;
    var inpCodigo  = document.getElementById("codigo").value;
    var inpmarca  = document.getElementById("marca").value;
    var inpnombre  = document.getElementById("nombre").value;
    var inpprecio = document.getElementById("precio").value;
    var inpcantidad = document.getElementById("cantidad").value;
    if(inpCodigo != ""){
        document.getElementById("idc"+index).innerHTML = inpCodigo;
    } 
    if(inpmarca != ""){
        document.getElementById("marca"+index).innerHTML = inpmarca;
    }  
    if(inpnombre != ""){
        document.getElementById("name"+index).innerHTML =inpnombre; 
    }
    if(inpprecio != ""){
        document.getElementById("price"+index).innerHTML =formatterPeso.format(inpprecio);
    }
    if(inpcantidad != ""){
        document.getElementById("num"+index).innerHTML =inpcantidad;
    }
         
}
function buscar(){
    
    
    for (let index = 1; index <= 6; index++) {
        var busqueda = document.getElementById("Buscarcod").value;
        if(document.getElementById("idc"+index) != null){
            var cod = document.getElementById("idc"+index).innerHTML;
            var cd = document.getElementById("idc"+index);
        }
        
        if(cod==busqueda){
            console.log("chao")
            num = cd.id.substr(3);
            for (let index = 1; index <= 6; index++) {
                document.getElementById("cod"+index).style.backgroundColor = "#0E1A42";   
            }
            document.getElementById("cod"+num).style.backgroundColor = "#3054CE";
            
            document.getElementById("pp").innerHTML="";

            break;

        }else{
            document.getElementById("pp").innerHTML="No exite el producto";
        }
        
        
    }
}
        
        
        
            
