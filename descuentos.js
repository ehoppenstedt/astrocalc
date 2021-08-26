
function Descuento(p, d){
    return ((p*(100-d))/100);
}


var cupones = ["eho", "ed", "a"]



function checkCoupon(CouponKey){
    if (cupones[0]==CouponKey){
        ValidCoupon.innerText = "Coupon valido"
        const input = document.getElementById("InputPrecio");
        const precio = input.value;
        const descuento = 15;
        const pfinal = Descuento(precio, descuento);
        ResultPrice.innerText = "El precio con descuento es: $" + pfinal;
    } else if (cupones[1]==CouponKey){
        ValidCoupon.innerText = "Coupon valido";
        const input = document.getElementById("InputPrecio");
        const precio = input.value;
        const descuento = 20;
        const pfinal = Descuento(precio, descuento);
        ResultPrice.innerText = "El precio con descuento es: $" + pfinal;

    }
    else if(cupones[2]==CouponKey){
        ValidCoupon.innerText = "Coupon valido"
        const input = document.getElementById("InputPrecio");
        const precio = input.value;
        const descuento = 25;
        const pfinal = Descuento(precio, descuento);
        ResultPrice.innerText = "El precio con descuento es: $" + pfinal;
    }
    else if(CouponKey == ""){
        ValidCoupon.innerText = "Sin coupon"
    }
    else{
        ValidCoupon.innerText = "El Coupon: '"+CouponKey+"' no es valido"
    }

}
function validateCoupon(){
    const inputC = document.getElementById("Coupon");
    const CouponKey = inputC.value;

    checkCoupon(CouponKey);
}

function calcularPrecioDescontado(){
    const input = document.getElementById("InputPrecio");
    const input2 = document.getElementById("InputDescuento");
    const precio = input.value;
    const descuento = input2.value;
    
    const pfinal = Descuento(precio, descuento);
    ResultPrice.innerText = "El precio con descuento es: $" + pfinal;
}

//https://platzi.com/clases/2327-javascript-practico/38738-reto-funciones-mas-inteligentes/ tiene mejores respuestas
