//Helpers

const salariosCol = colombia.map(
    function (personita) {
        return personita.income;
    }
);

const salariosColSorted = salariosCol.sort(
    function(a, b) {
        return a-b;
    }
);

function esPar(numerito){
    return (numerito % 2=== 0);
}

//Calculadora de Media

function calcularMedia(lista) {
    let sumaLista = 0;
    for (let i = 0; i <lista.length; i++){
        sumaLista = sumaLista + lista[i];    
    }
    return promedioLista = sumaLista/lista.length;
}

//Calculadora de Mediana

function medianaSalarios(lista) {
     const mitad = parseInt(lista.length/2);

     if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMedia([personitaMitad1, personitaMitad2]);
        return mediana;
     } else{
         const personitaMitad = lista[mitad];
         return personitaMitad;
     }

}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%


const spliceStart = (salariosColSorted.length*90/100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart, 
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

