//código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado*4;
}

function areaCuadrado(lado) {
    return lado**2;
}

console.groupEnd();

//código del triángulo


console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base){
    return (lado1+lado2+base);
}

function areaTriangulo(base,altura) {
    return (base*altura)/2;
}

console.groupEnd();
 

//circulos:
console.group("Círculos");

const PI = Math.PI;

function perimetroCirculo(radio){
    diametro = radio*2;
    return diametro*PI;
}

function areaCirculo(radio){
    return (radio**2)*PI;
}

function alturaTriangulo(base, lado1, lado2){
    return Math.sqrt((lado1**2)-((base**2)/4))
}


//Misma función de circunferencia en Arrow Functions
const arrowCircunferencia = (radio) => (radio*2)*PI;

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularAreaTriangulo(){
    const input1 = document.getElementById("baseT");
    const input2 = document.getElementById("altura");
    const base = input1.value;
    const altura = input2.value;

    const areaT = areaTriangulo(base, altura);
    alert(areaT);
}

function CPT(){
    const input = document.getElementById("baseP");
    const base = input.value;
    
    const input1 = document.getElementById("l_1");
    const lado1 = input1.value;

    const input2 = document.getElementById("l_2");
    const lado2 = input2.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}



function calcularCircunferencia(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const circunferencia = perimetroCirculo(value);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const circuloArea = areaCirculo(value);
    alert(circuloArea);
}

function calcularAltura(){
    const input1 = document.getElementById("baseA");
    const input2 = document.getElementById("L1");
    const input3 = document.getElementById("L2");
    const base = input1.value;
    const l1 = input2.value;
    const l2 = input3.value;
    if(l1 != l2){
        alert("No es un triángulo isóceles")
    }
    else{
        const areaT = alturaTriangulo(base, l1, l2);
        alert(areaT);
    }
}