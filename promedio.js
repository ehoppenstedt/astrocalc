/**const lista1 = [
    100,
    200,
    300,
    500,
];**/

//calcular la media aritmética

//declarar una variable que cambiará, en vez de tener una constante "let"
//let sumaLista1 = 0;

/**para sumar los elementos de la lista se usa el siguiente ciclo for, sirve usar let porque el valor será cambiante.
for (let i = 0; i <lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];    
}**/
//A continuación presento dos formas de hacerlo, una es la función normal: otra es la función encapsulada usando el método reduce:

/* Metodo 1: Usando un ciclo for para calcular media aritmetica*/

const lista = [100, 200, 300, 400, 500];

function calcularMAtradicional(lista) {
    let sumaLista = 0;
    for (let i = 0; i <lista.length; i++){
        sumaLista = sumaLista + lista[i];    
    }
    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}

function MostrarPromedio(){
    const rprom = calcularMAtradicional(lista);
    PromedioFinal.innerText = "El promedio de esos 5 números es: " + rprom;
}

/*Metodo 2: usando reduce para calcular Media aritmetica*/
/**function calcularMAreduce(lista) {
    const sumaLista = lista.reduce();
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}*/