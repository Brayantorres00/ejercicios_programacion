 // Este es el arvhivo de arreglos

 let nombres = ["Felipe", "Danilo", "Laura"];

 console.log(nombres);

 console.log(nombres[2]);

 // Agregar elementos al arreglo de nombres
 nombres.push("Brayan");

 console.log(nombres);

 let equipos = ["nacional", "millonarios", "america", "cali", "pasto"];

 console.log(equipos[1]);

 // averiguar el total de elementos

 let motos = ["yamaha", "kawasaki", "honda", "suzuki", "ducati"];

 // motos.length
 console.log(motos.length);

 // sumar losnumeros de un arreglo
 let numeros = [2, 7, 5, 3, 2];
 let suma = numeros.reduce( (acumulador, valoractual) => acumulador + valoractual, 0);
 console.log(suma);

 // encontrar el numero mayor de un arreglo
 let numeroMayor = Math.max(...numeros);
 console.log(numeroMayor);

 // invertir los textos de un arreglo
 let frutas = ["manzana", "pera", "guayaba", "lulo", "mango"];
 let frutasinvertidas = frutas.slice().reverse();
 console.log(frutasinvertidas);

 // agrupar arreglos en nuevo arreglo

let mujeres = ["laura", "sofia", "valentina", "daniela"];
let hombres = ["felipe", "danilo", "stywart", "brayan"];
let personas = [...mujeres, ...hombres];
console.log(personas);

// poner en mayusculas los nombres
let mayusculas = mujeres[2].toUpperCase();
console.log(mayusculas);