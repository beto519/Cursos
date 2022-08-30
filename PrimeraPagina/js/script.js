//Formas de seleccionar contenido

//Queryselector
const heading = document.querySelector('#heading');
heading.textContent = 'Nuevo contenido';
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = "cambiar";
enlaces[0].href = "http://google.com";



//getElementById
const heading2 = document.getElementById("heading");