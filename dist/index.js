"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operacion = exports.esPar = void 0;
/**
 * Función para comprobar si un número es par
 * @param numero Se validará si es par o no
 * @returns
 */
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    return false;
}
exports.esPar = esPar;
/**
 *
 * @param tipo Tipo de operación, puede ser '+', '-', '*', '/'
 * @param numero1
 * @param numero2
 * @returns
 */
function operacion(tipo, numero1, numero2) {
    const matematica = require('proyecto-1a-matematicas-jag');
    switch (tipo) {
        case '+':
            return matematica.suma(numero1, numero2);
        case '-':
            return matematica.resta(numero1, numero2);
        case '*':
            return matematica.multiplicacion(numero1, numero2);
        case '/':
            return matematica.division(numero1, numero2);
        default:
            console.warn('Tipo incorrecto');
            break;
    }
}
exports.operacion = operacion;
