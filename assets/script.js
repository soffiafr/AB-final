//Carrito//
let carrito = {};

function agregarAlCarrito(producto, precio) {
    if (carrito[producto]) {
        carrito[producto].cantidad++;
    } else {
        carrito[producto] = { precio, cantidad: 1 };
    }
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = {};
    actualizarCarrito();
}

function quitarDelCarrito(producto) {
    if (carrito[producto] && carrito[producto].cantidad > 0) {
        carrito[producto].cantidad--;
        if (carrito[producto].cantidad === 0) {
            delete carrito[producto];
        }
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const itemsCarrito = document.getElementById('itemsCarrito');
    itemsCarrito.innerHTML = '';

    Object.keys(carrito).forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `${producto} - Cantidad: ${carrito[producto].cantidad} <button onclick="quitarDelCarrito('${producto}')">Quitar uno</button>`;
        itemsCarrito.appendChild(div);
    });
}
//Colores//
document.addEventListener('DOMContentLoaded', () => {
    const selectorTema = document.getElementById('themeSelector');
    selectorTema.addEventListener('change', (event) => {
        cambiarTema(event.target.value);
    });
});

function cambiarTema(tema) {
    document.body.className = '';
    switch(tema) {
        case 'dark':
            document.body.classList.add('tema-dark');
            break;
        case 'light':
            document.body.classList.add('tema-light');
            break;
        case 'old':
            document.body.classList.add('tema-old');
            break;
    }
}
//Registro--Inicio Sesión//
document.getElementById("registro").addEventListener("click", registro);
document.getElementById("iniciar_sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

var caja_delantera = document.querySelector(".caja_delantera");
var login = document.querySelector(".login");
var registrar = document.querySelector(".registrar");
var caja_iniciosesion = document.querySelector(".caja_iniciosesion");
var caja_registro = document.querySelector(".caja_registro");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_iniciosesion.style.display = "block";
        caja_registro.style.display = "block";
    }else{
        caja_registro.style.display = "block";
        caja_registro.style.opacity = "1";
        caja_iniciosesion.style.display = "none";
        login.style.display = "block";
        registrar.style.display = "none";
        caja_delantera.style.left = "0px";
    }
}
function iniciarSesion(){

    if(window.innerWidth > 850){
        registrar.style.display = "none";
        caja_delantera.style.left = "10px";
        login.style.display = "block";
        caja_registro.style.opacity = "1";
        caja_iniciosesion.style.opacity = "0";
    }else{
        registrar.style.display = "none";
        caja_delantera.style.left = "0px";
        login.style.display = "block";
        caja_registro.style.display = "block";
        caja_iniciosesion.style.display = "none";
    }
}
function registro(){

    if(window.innerWidth > 850){
        registrar.style.display = "block";
        caja_delantera.style.left = "410px";
        login.style.display = "none";
        caja_registro.style.opacity = "0";
        caja_iniciosesion.style.opacity = "1";
    }else{
        registrar.style.display = "block";
        caja_delantera.style.left = "0px";
        login.style.display = "none";
        caja_registro.style.display = "none";
        caja_iniciosesion.style.display = "block";
        caja_iniciosesion.style.opacity = "1";
    }
}