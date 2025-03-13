[10:56, 13/3/2025] ADOLFO ROCHA: // Arreglo donde se almacenarán los nombres ingresados
let nombres = [];

// Esperar que el DOM cargue completamente antes de asignar eventos
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-agregar").addEventListener("click", agregarNombre);
    document.getElementById("btn-sortear").addEventListener("click", sortearAmigo);
    document.getElementById("btn-reiniciar").addEventListener("click", reiniciarJuego);
});

function agregarNombre() {
    let input = document.getElementById("nombre");
    let mensajeError = document.getElementById("mensaje-error");
    let nombreIngresado = input.value.trim();

    // Validar que el usuario no ingrese un nombre vacío
    if (nombreIngresado === "") {
        alert("⚠️ Debes…
[11:13, 13/3/2025] ADOLFO ROCHA: let nombres = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-agregar").addEventListener("click", agregarNombre);
    document.getElementById("btn-sortear").addEventListener("click", sortearAmigo);
    document.getElementById("btn-reiniciar").addEventListener("click", reiniciarJuego);
});

function agregarNombre() {
    let input = document.getElementById("nombre");
    let mensajeError = document.getElementById("mensaje-error");
    let nombreIngresado = input.value.trim();

    if (nombreIngresado === "") {
        alert("⚠️ Debes ingresar un nombre válido.");
        return;
    }

    nombres.push(nombreIngresado);
    actualizarLista();

    input.value = "";
    mensajeError.textContent = "";
}

function actualizarLista() {
    let lista = document.getElementById("lista-nombres");
    lista.innerHTML = "";

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (nombres.length === 0) {
        resultado.textContent = "⚠️ No hay nombres en la lista.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];

    resultado.textContent = 🎉 El amigo secreto es: ${amigoSecreto};
}

function reiniciarJuego() {
    nombres = [];
    document.getElementById("lista-nombres").innerHTML = "";
    document.getElementById("resultado").textContent = "";
}