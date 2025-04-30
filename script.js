let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({producto, precio});
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    total = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio} COP`;
        lista.appendChild(li);
        total += item.precio;
    });
    document.getElementById('total').textContent = total;
}

function procesarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    let mensaje = "¡Hola! Estoy interesado en comprar:\n";
    carrito.forEach(item => {
        mensaje += `- ${item.producto}: $${item.precio} COP\n`;
    });
    mensaje += `Total: $${total} COP\n`;
    mensaje += "¿Podríamos coordinar el pago?";

    const numeroWhatsApp = "573001234567";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    carrito = [];
    actualizarCarrito();
}
