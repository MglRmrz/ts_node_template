/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @description Coloca un console log de información
 * @param {...any} arg Argumentos que iran en el log
 */
export function logInfo(...arg: any[]): void {
    console.log(
        `[${new Date(Date.now() - new Date().getTimezoneOffset()).toLocaleString('en-GB', {
            timeZone: 'America/Asuncion',
        })}]`,
        ...arg
    );
}
