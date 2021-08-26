
const Lista1 = [
    10,
    20,
    30,
    4000,
    40,
    100
];

let masLista = [];

function crearLista(){
    const input = document.getElementById("InputArray");
    const arrayVal = input.value;
    if(arrayVal!= ''){
        agregarLista(arrayVal);
    } else {
    }

    
}

function agregarLista(input){
    var nuevaLista = masLista.push(parseInt(input));
    masLista.sort(function(a,b){
        return a-b;
    });
    const mitadLista = parseInt(masLista.length/2);
    calcularMediana(masLista, mitadLista);
    calcularModa(masLista);
    calcularMedia(masLista);
}

let mediana;

function esPar(numerito){
    if (numerito %2 === 0 ){
        return true;
    } else {
        return false;
    }

}

function calcularMediana(valor, mitad){
    if (esPar(valor.length)){
        const elemento1 = valor[mitad];
        const elemento2 = valor[mitad - 1];

        mediana = (elemento1+elemento2)/2;

        ArrayShow.innerText = "La lista es: " + masLista;

        resultadoMediana.innerText = "La mediana es: "+mediana;
    } else {
        mediana = valor[mitad];
        ArrayShow.innerText = "La lista es: " + masLista;
        resultadoMediana.innerText = "La mediana es: "+mediana;
    }
}

function clearLista(){
    masLista.length = 0;
    ArrayShow.innerText = "La lista es: " + masLista;
    mediana = null;
    moda = null;
    resultadoMediana.innerText = "La mediana es: ";
    resultadoModa.innerText = "La moda es: ";
    resultadoMedia.innerText = "La media aritmetica es";
}


const lista1Count = {};


function calcularModa(array){
    array.map(
        function (elemento) {
            if (lista1Count[elemento]){
                lista1Count[elemento]+=1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    
    const lista1Array = Object.entries(lista1Count).sort(
        function(a, b){
            return a[1]-b[1];
        }
    );

    const moda = lista1Array[lista1Array.length -1];

    resultadoModa.innerText = "La moda es: "+moda[0];
}

function calcularMedia(lista) {
    let sumaLista = 0;
    for (let i = 0; i <lista.length; i++){
        sumaLista = sumaLista + lista[i];    
    }
    const promedioLista = sumaLista/lista.length;

    resultadoMedia.innerText = "La media aritmetica es: "+promedioLista;
}


