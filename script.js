var miPrimerVariable;
var campoTexto = document.getElementById('mitexto1');


function limpiarTexto() {
    campoTexto.value="";
}

function mostrarAlerta() {
    miPrimerVariable = campoTexto.value; 
    alert(miPrimerVariable);

}