function Calcular(){
    var z = document.getElementById("FirstBand").value+ +document.getElementById("SecondBand").value
    var x = parseInt(z);
    var y = parseInt(document.getElementById("ThirdBand").value);
    var text = " ohmios"
    var resultado = (x * y);
    console.log(resultado);
    document.getElementById("respuesta").value = resultado.toString() +text;

}