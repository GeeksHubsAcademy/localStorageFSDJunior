
// let compra = ["agua","pan","leche","huevos","pasta"];

// localStorage.setItem("lista", compra);

// let resultado = localStorage.getItem("lista");

// console.log(resultado);

let clase = {
    alejandro : {
        edad : 31,
        hobbies : ["motos","deporte","coding"]
    },
    carlos :{
        edad: 28,
        hobbies : ["correr","motos","sunday coding"]
    },
    joseLuis : {
        edad : 36,
        hobbies : ["archery","football","diapers"]
    } 
};

localStorage.setItem("infoClase", JSON.stringify(clase));

let clase2 = JSON.parse(localStorage.getItem("infoClase"));

console.log(clase2);

localStorage.removeItem("lista");
localStorage.clear();