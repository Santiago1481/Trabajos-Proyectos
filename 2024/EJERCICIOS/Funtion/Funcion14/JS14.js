//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: Sueldo con condiciones y aportes
function salario(pdiast,ppagod){
    let diasT = pdiast;
    let padoD = ppagod;
    let sueldoF = diasT * padoD;
    return sueldoF;
}
function Subtrasnporte(pdiast,ppagod){
    let salarioMin = 1300000;
    let subTrans;
    let condicion = salario(pdiast,ppagod);
    if(condicion<salarioMin*2){
        subTrans = 114000;
    }
    else{
        subTrans = 0;
    }
    return subTrans;
}
function aportesSal(pdiast,ppagod){
    let suelddoA = salario(pdiast,ppagod) * 0.12;
    return suelddoA;
}
function aportesPen(pdiast,ppagod){
    let suelddoB = salario(pdiast,ppagod) * 0.16;
    return suelddoB;
}
function aportesArl(pdiast,ppagod){
    let suelddoC = salario(pdiast,ppagod) * 0.052;
    return suelddoC;
}
function retencionSal(pdiast,ppagod){
    let salarioMin = 1300000;
    let retencion;
    let condicion = salario(pdiast,ppagod);
    if(condicion>salarioMin*4){
        retencion = salario(pdiast,ppagod)*0.04;
    }
    else{
        retencion = 0;
    }
    return retencion;
}

function sueldoFin(pdiast,ppagod){
    let aportesT = salario(pdiast,ppagod) - ((aportesPen(pdiast,ppagod) + aportesArl(pdiast,ppagod) + retencionSal(pdiast,ppagod)) + Subtrasnporte(pdiast,ppagod) - retencionSal(pdiast,ppagod));
    return aportesT;
}