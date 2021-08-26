
const massP = 5000;

const massS = 10000;

const massProp = 100000;

const impulseS = 450;

function initialMass(massPayload, massStructure, massPropellant){
    const masaI = massPayload+massStructure+massPropellant;
    return masaI;
}

function masaConstante(massStructure, massPayload){
    const massStructFinal = massStructure+massPayload;
    return massStructFinal
}

function calculardV(masaI, impulsoEspecifico, masaConstF){
    const dv =  9.81*impulsoEspecifico*(Math.log(masaI/masaConstF))
    return dv
}

function deltaV(){
    const input1 = document.getElementById("masaProp");
    const input2 = document.getElementById("masaPL");
    const input3 = document.getElementById("masaS");
    const input4 = document.getElementById("Isp");

    const massp = input1.value;
    const masspl = input2.value;
    const masast = input3.value;
    const specificImpulse = input4.value;


    const masaInicial = initialMass(massp, masspl, masast);
    const masaFinal = masaConstante(masspl, masast);

    const rocketDV = calculardV(masaInicial, specificImpulse, masaFinal);
    printDV.innerText = "El cambio de velocidad de tu cohete es: "+rocketDV + " m/s";
}
