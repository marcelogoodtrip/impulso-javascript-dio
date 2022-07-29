//  IF / ELSE

//MÉTODO  1
function numeroPositivo(num) {
    let resultado;

    if(num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

numeroPositivo(2);  //true
numeroPositivo(-9) //false

//MÉTODO 2
function numeroPositivo(num) {
    let resultado;
    const ehNegativo = num < 0;

    if(ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

//MÉTODO 3
function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    }

    return true;
}


//  SWITCH CASE

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}
getAnimal(1); //cão
getAnimal(4); //peixe
getAnimal("l"); //peixe