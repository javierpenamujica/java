/*console.log("Inicio de Programa");
alert("HOLA JAVASCRIPT");
document.write ("<h1>hola javascript !!!</h1>");
alert("gracias por visitar");*/

/*console.log("Inicio de Programa");
var equipo = prompt("Cual es tu equipo favorito?");
document.write ("<h1>El equipo es !</h1>"+ equipo);
console.log("el equipo es:" + equipo);
console.log("Fin de Programa");*/

/*console.log("Inicio de Programa");
var clave  = prompt("hola usuario, ingrese su clave!");
document.write ("<h1>El equipo es !</h1>"+ clave.length);
console.log("la longitud de la clave es:" + clave.length);
console.log("Fin de Programa");*/

/*console.log("Inicio de Programa");
var clave1  = prompt("hola usuario, ingrese un sustantivo!");
var clave2  = prompt("hola usuario, ingrese un adjetivo!");
var clave3  = prompt("hola usuario, ingrese un verbo!");
document.write ("<h2>El "+ clave1 +" es un animal " + clave2 +" por comida" + clave3 + "</h2>");
document.write ("<h2>El "+ clave1 +" vive en el campo es " + clave2  +"  y todo el tiempo " + clave3 +"</h2>");
document.write ("<h2>El "+ clave1 +" es vertebrado " + clave3 + " simpre por comida y es " + clave2 + "</h2>");
console.log("Fin de Programa");*/


/*console.log("Inicio de Programa");
var preguntas = 3;
var preguntasFaltantes = "Quedan" + preguntas + " preguntas.";
alert("este es el juego del cuenta cuentos. Sigue las instrucciones.");
var clave1  = prompt("hola usuario, ingrese un sustantivo!" + preguntasFaltantes);
preguntas = preguntas -1;
preguntasFaltantes = "Quedan" + preguntas + " preguntas.";
var clave2  = prompt("hola usuario, ingrese un adjetivo!" + preguntasFaltantes);
preguntas -= 1;
preguntasFaltantes = "Quedan" + preguntas + " preguntas.";
var clave3  = prompt("hola usuario, ingrese un verbo!" + preguntasFaltantes);
var cuento = "El "  + clave1 + " " + clave2 + " queria " + clave3 + "es ";
/*document.write ("<h2>El "+ clave1 +" es un animal " + clave2 +" por comida" + clave3 + "</h2>");
document.write ("<h2>El "+ clave1 +" vive en el campo es " + clave2  +"  y todo el tiempo " + clave3 +"</h2>");
document.write ("<h2>El "+ clave1 +" es vertebrado " + clave3 + " simpre por comida y es " + clave2 + "</h2>");
document.write ("<h1>Cuento </h1><p>" + cuento + "</p>");
console.log("Fin de Programa");*/



console.log("Inicio de Programa");
var dado  = Math.floor(Math.random()*6)+1;
alert ("Dado dice: " + dado);
console.log("Fin de Programa");
