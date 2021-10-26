// 4.Haz un programa de nombre main.js y otro llamado index.html incluir el archivo JavaScript en el <head></ head>, que has de grabar en una carpeta llamada todo_Sobre_Variables_FechaActual, y declarar variable y asignar a cada una de ellas un valor de tipo String,Number,Booleano y mostrar los valores por medio de la consola o de la ventana emergente, Nota la variable de tipo constante const el tipo de valor es opcional.

let nombre = `Miguel Angel Castro Escamilla`;
console.group("Nombre: ");
    console.log(nombre);
console.groupEnd();

let edad = 23;
console.group("Edad: ");
    console.log(edad);
console.groupEnd();

let soyProfesor = true;
console.group("Soy el profesor: ");
    console.log(soyProfesor);
console.groupEnd();

const nacionalidad = "Colombiano"; 
console.group("Nacionalidad: ");
    console.log(nacionalidad);
console.groupEnd();
