/* funciones nativas:

-isNaN() es una funcion que recibe un dato y te devuelve un boolean que indica sin es un NaN

-alert() es una funcion que recibe un string y lo muestra en un pop up en la pagina

si una funcion no retorna nada, por defecto retorna undefined

-typeof() nos dice que tipo de dato es

-prompt() es suna funcion que recibe un mensaje t devuelve el valor ingresado por el usuario (tipo string)si es un numero lo transforma a string o null en caso que el usuario de al boton cancelar

parceInt() dado un dato lo transforma a valor numerico(si es flotante trunca o corta el decimal ) y si no se puede transformar devuelve NaN

parceFloat() dado un dato lo transforma a valor numerico(si es flotante tambien ) y si no se puede transformar devuelve NaN
*/ 
/*  PARA PROBAR EL CODIGO, QUITAR EL COMENTARIO


alert('hola desde una alerta');

let variable= alert('pepe')//esto devuelve undefined
alert('el valor de retorno de alert es : '+ variable)   

alert(typeof(3))

*/

/* CONDICIONAL IF 
    
    contiene la sentencia if (si es verdadera la condicion sigue el algoritmo que se encuentra dentro de la sentencia if )

    y la sentencia else (de ser falsa la condicion toma el algoritmo dentro de la sentencia else)


*/

/*  
let edad= prompt('ingrese su edad')

if (edad>=18){

    alert('podes ingresar')
}
    else{
    alert('no podes pasar')
    }
    */


    /* el dato no debe ser null o '' */

    /*  
    let dato=prompt('dime algo');
    alert(dato);
    if (dato ===null || dato ===''  )
        {
            alert('error dato no valido')
        }

        else{
            ('dato correcto')
        }
*/
/*  IMPORTANTE: El funcionamiento del if sobre la condicion es saber si es trully o falsy, en caso de ser trully va por el if y en caso de ser faslsy va por el else

entonces segun este codigo podemos decir que si el dato ingresado por el usuario es un valor falsy

undefined, null, NaN, 0 o '' false

en este caso no queremos que el dato sea null ni comillas (un valor falsy) 

al negar el dato nos da valores booleanos, y si decimos que el valor dato es un fallsy(comilla o nnull) me va a dar verdadero y se va a ejecutar en el if
 
*/
/*  
let dato=prompt('dime algo');
    alert(!dato);

    if (!dato){
        alert('ERROR, DATO NO VALIDO')
    }
    else{
        alert('todo esta bien')
    }
*/

/* SI EL PUNTAJE DA ENTRE 0 Y 1000 DIREMOS 'PRINCIPIANTE'

    SI EL PUNTAJE DA ENTRE 1000 Y 3000 DIREMOS 'AVANZADO'

    SI EL PUNTAJE DA MAYOR A 3000 DIREMOS 'EXPERIMENTADO'



let puntos= prompt('ingresa tus puntos')

if (puntos>= 0 && puntos <= 1000){
    alert('principiante')
}
    else if(puntos>1000 && puntos<=3000){
        alert('avanzado')
    }
    else if(puntos>3000){
        alert('experimentado')
    }
*/

/* EJERCICIO #1.
 crea una variable llamada "tiene  hijos" y asignale true si tienes hijos o false si no los tienes. a continuacion, escribe una linea de codigo para mostrar el valor de la variable en una alerta

 */
/*

  let tieneHijos =true;
  alert(tieneHijos);
/*
 /* crea una variable llamada salario y solicita un salario actual como valor. a continuacion escribe una linea de codigo que calcule el salario anual multiplicando el salario mensual por 12 y muestre el resultado en una alerta */
/*
    let salario= prompt('sueldo mensual');
     salario= salario*12;
    alert(salario);
*/

 /* escribe un condicioonal que verifique si una variable llamada edad es mayor o igual a 18. si es mayor a 18  imprime "eres mayor de edad" en la consola. si no es mayor de edad, imprime eres menor de edad en una alerta  */
 /*
 let edad =prompt('ingresa tu edad');

 if(edad>=18){
    console.log('eres mayor de edad');
 }
  else{
    alert('eres menor de edad');
  }
*/

  /* de un empleado se sabe su sueldo y los años de antiguedad. el sector de contabilidad pide hacer un programa que lea los datos y nos muestre:
  
  1- si el sueldo es inferior a 500 y su antiguedad es superior a 10 años otorgarle un aumento del 20%, mostrar el sueldo a pagar

  2.- su el sueldo es inferior a 500 pero su antiguedad es menor a 10 años , otorgarle un aumento de 5%

  3- si el sueldo es mayor o igual a 500 motrar el sueldo en la paginasin cambios

  */

  let sueldo=prompt('ingresa tu sueldo mensual')
  sueldo= Number(sueldo);
  let antiguedad=prompt ('ingresa los años de antiguedad')
  let sueldoAum;
  if (sueldo>=500){
    alert('Su sueldo no obtuvo cambios'+sueldo)
  }
  else if( sueldo<500 && antiguedad>=10){
     sueldoAum= sueldo+((20/100)*sueldo);
    alert(sueldoAum);
  }
  else if (sueldo<500 && antiguedad<10){
    sueldoAum= sueldo+((5/100)*sueldo);
    alert(sueldoAum);

  }

  /* minuto 1,41 de la clase

    bucle while

    solicitar un nombre al usuario, si el nombre es pepe, seguir solicitando el nombre, cunado sea distinto de pepe, decir "ese nombre no lo conozco"


    DRY: don't repeat yourself= no te REPITAS
   */

/* mientras tal condicion se repita, vuelve a iterar */
/*
    let nombre = prompt('ingrese su nombre')
    
while(nombre === 'pepe'){

     nombre=prompt('ingrese su nombre')
    
}

alert('ese nombre no lo conozco');
*/

/* VALIDACION EJEMPLO
*/
let nombre=prompt('ingrese su nombre');
while(!nombre){
    alert('ERROR:DATO NO VALIDO');
    nombre = prompt('ingresa nuevamente el valor');
    
}

alert ('dato correcto');