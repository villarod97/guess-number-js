console.log('¡Hola me llamo Renzo Villanueva!');

let nombrePropio = "Renzo";
console.log(typeof nombrePropio)

let edad = "28";
console.log(typeof edad);

let apellido = 'Villanueva';
console.log(typeof apellido);

const curso = 'Code 101';
console.log(curso);

let nombreUsuario = prompt('¿Cómo te llamas?');
console.log('Nombre:', nombreUsuario);

let edadUsuario = prompt('¿Cuántos años tienes?');
console.log('Edad:', edadUsuario);

let ciudadUsuario = prompt('¿En qué ciudad vives?');
console.log('Ciudad:', ciudadUsuario);

let profesionUsuario = prompt('¿Cuál es tu profesión?');
console.log('Profesión:', profesionUsuario);




edad = Number(edad);

if (edad >= 18) {
  alert("Puedes votar 🗳️");
} else {
  alert("Aún no puedes votar 🧒");
}

let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (temperatura < 15) {
  alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}

if (edad < 13) {
  alert("Eres un niño 🧒");
} else if (edad <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 👨‍🦱");
}

if (edad > 18 && temperatura < 15) {
  alert("Adulto con frío: lleva abrigo extra 🧣");
}