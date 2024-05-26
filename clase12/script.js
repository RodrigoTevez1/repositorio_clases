/* OPERADORES LOGICOS */

/* !: NOT O negacion

Nos da el valor booleadno opuesto del valor que estoy negando

*/

console.log (!true)

/* || : or o "O logico"

seleccionar
si el primer valor es un valor falsy, va a seleccionar el segundo valor
si el primer valor es verdadero, va a seleccionar el primer valor
 Analiza de izquierda a derecha, si encuentra un verdadero se queda con el, si no encuentra un valor verdadero o truly, se  queda con el ultimo valor.
*/


/*  &&  : AND o " y logico"

Evalua si el primer valor es un true o un falsy
    si es false:
    devuelve el primer valor
    si es true devuelve el segundo valor

4 && false ||'pepe' : string "pepe"

8=='8' || 1=== '1'   boolean true



*/

/* 
VARIABLES
 debilmente tipado: en javascript no necesito especificar el tipo de dato
tipado dinamico: puede variar una variable en el tipo de dato


    var edad =50
    edad = 'pepe'

    console.log(edad)  (muestra x pantalla la variable edad)

   * declaracion: creacion de la variable
    ejemplo:
    var edad=> estoy declarando la variable con el identificador edad

   * Hoisting: es la capacidad de una variable de ser llamada antes de su declaracion

    *valor underfined: cuando no le doy un valor inicial a la variable

    SIEMPRE DEBEMOS DECLARAR EL TIPO DE VARIABLE QUE ES, VAR ,LET O CONST

    <TIPO DE VARIABLE> identificador = data


    VAR: (es5)   
    Tiene hoisting? si tiene
    se puede reasignar? se puede
    se puede redeclarar? se puede
    valor implicito en underfined?  si tiene
    el alcance de var es siempre global
    
    LET (es6+)
    Tiene hoisting?NO
    se puede reasignar?si
    se puede redeclarar? no sepuede redeclarar EN EL MISMO AMBITO
    valor implicito en underfined? SI


    CONST (es6+)
    Tiene hoisting?
    se puede reasignar?
    se puede redeclarar?
    valor implicito en underfined? 

  */