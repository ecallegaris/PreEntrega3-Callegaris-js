// Variables
const baseDeDatos = [
    {
        id: 1,
        sku: '315BFV',
        marca: 'LONGVIE',
        detalle: 'CALEFON 14 LITROS BLANCO C/SENSOR GN',
        precio: 75899,
        imagen: './images/Calefon_Volvan_14lts_Gas_natural.jpg'
    },
    {
        id: 2,
        sku: 'F5022UK6',
        marca: 'SAMSUNG',
        detalle: 'Smart Tv 50" 4K UHD Netflix Youtube Amazon Feelnology',
        precio: 99999,
        imagen: './images/Smart_Tv_50_4K_UHD.jpg'
    },
    {
        id: 3,
        sku: 'FM18B29AM211',
        marca: 'MTB',
        detalle: 'Bicicleta MTB Rodado 29 Aluminio Full Shimano Altus Frenos a Disco Battle',
        precio: 128299,
        imagen: './images/Bicicleta_MTB_Rodado_29_Aluminio.jpg'
    },
    {
        id: 4,
        sku: 'BCAT21VW',
        marca: 'ATMA',
        detalle: 'BALANZA DE COCINA DIGITAL VIDRIO TEMPLADO 3KG',
        precio: 3999,
        imagen: './images/Balanza_de_Cocina_Digital_Atma_Vidrio_Templado.jpg'
    },
    {
        id: 5,
        sku: 'CA8133N',
        marca: 'LILIANA',
        detalle: 'CAFETERA BLANCA 1,5LTS FILTRO DESMONTABLE',
        precio: 11499,
        imagen: './images/Cafetera_Blanca_1.5lts_Filtro_desmontable.jpg'
    },

];

let carrito = [];
const moneda = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonBuscar = document.querySelector('#boton-buscar');
const DOMcajaBuscar = document.querySelector('#caja-buscar');

let baseDeDatosFiltrada = [];

/**
 * Dibuja todos los productos a partir de la base de datos.
 */

function renderizarProductos() {
    if (DOMcajaBuscar.value === "") {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4', 'h-70', 'shadow-sm');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoLabel = document.createElement('div');
            miNodoLabel.classList.add('label-top', 'shadow-sm');
            miNodoLabel.textContent = info.marca;

            const miNodoMarca = document.createElement('div');
            miNodoMarca.classList.add('clearfix', 'mb-3');

            const miNodoSpan = document.createElement("span");
            miNodoSpan.classList.add('float-start', 'badge', 'rounded-pill', 'bg-success');
            miNodoSpan.textContent = `${info.precio}${moneda}`;
            // Titulo
            const miNodoTitle = document.createElement('h2');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.detalle;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('card-img-top');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${moneda}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-warning');
            miNodoBoton.textContent = 'Agregar al carrito';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoMarca);
            miNodoCardBody.appendChild(miNodoLabel);
            miNodoCardBody.appendChild(miNodoSpan);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    } else {
        
        document.querySelector("#items").innerHTML = "";
        baseDeDatosFiltrada.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4', 'h-70', 'shadow-sm');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoLabel = document.createElement('div');
            miNodoLabel.classList.add('label-top', 'shadow-sm');
            miNodoLabel.textContent = info.marca;

            const miNodoMarca = document.createElement('div');
            miNodoMarca.classList.add('clearfix', 'mb-3');

            const miNodoSpan = document.createElement("span");
            miNodoSpan.classList.add('float-start', 'badge', 'rounded-pill', 'bg-success');
            miNodoSpan.textContent = `${info.precio}${moneda}`;
            // Titulo
            const miNodoTitle = document.createElement('h2');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.detalle;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('card-img-top');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${moneda}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-warning');
            miNodoBoton.textContent = 'Agregar al carrito';
            miNodoBoton.setAttribute('marcador', info.id);
            //miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoMarca);
            miNodoCardBody.appendChild(miNodoLabel);
            miNodoCardBody.appendChild(miNodoSpan);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

}


/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].detalle} - ${miItem[0].precio}${moneda}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para buscar un elemento del carrito
 */
function buscarProducto() {
    baseDeDatosFiltrada = baseDeDatos.filter(element => element.marca === DOMcajaBuscar.value);
    console.log(baseDeDatosFiltrada)
    // volvemos a renderizar
    renderizarProductos();
    
}


/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    addLocalStorage();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        addLocalStorage()
        return total + miItem[0].precio;
        
    }, 0).toFixed(2);
    
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    // Borra LocalStorage
    localStorage.clear();
}

function addLocalStorage() {
    localStorage.setItem('carrito',JSON.stringify(carrito))
}

window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
        carrito = storage;
        
        renderizarCarrito()
    } 
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
DOMcajaBuscar.addEventListener('change', buscarProducto);

// Inicio
renderizarProductos();
