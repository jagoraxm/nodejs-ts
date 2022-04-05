/**
 * Función para comprobar si un número es par
 * @param numero Se validará si es par o no 
 * @returns
 */
export function esPar(numero: number) : boolean {
    if(numero % 2 === 0) {
        return true;
    }
    
    return false;
}

/**
 * 
 * @param tipo Tipo de operación, puede ser '+', '-', '*', '/'
 * @param numero1 
 * @param numero2 
 * @returns 
 */
export function operacion(tipo: string, numero1: number, numero2: number) {
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