$(document).ready(function(){
    var cont = 0;
    var total = 0;


    function actualizarContador() {
        $("#cartCount").text(cont);
    }

  
    function actualizarTotal() {
        $("#total").text(total.toFixed(2));
    }

    // Función para eliminar un producto del carrito
    function eliminarProducto(idFila, precio) {
        $("#" + idFila).remove();
        cont--;
        total -= precio;
        actualizarContador();
        actualizarTotal();
    }

    // Función para agregar productos al carrito
    function agregar(nombre, precio){
        precio = parseFloat(precio);
        cont++;
        total += precio;
        actualizarContador();
        actualizarTotal();

        var fila = `<tr id="fila${cont}">
                        <td>${nombre}</td>
                        <td>${precio.toFixed(2)}</td>
                        <td><button class="btn btn-sm btn-danger eliminar" data-id="fila${cont}" data-price="${precio}"><i class="bi bi-trash"></i></button></td>
                    </tr>`;
        $("#cart-body").append(fila);
    }

    // Función para manejar la adición de productos al carrito
    function manejarAgregar() {
        var nom = $(this).data("product");
        var pre = $(this).data("price");
        agregar(nom, pre);
    }

    // Asignar eventos a los botones de agregar al carrito
    $("#btn1, #btn2, #btn3").click(manejarAgregar);

    // Asignar evento al botón de eliminar individualmente usando delegación de eventos
    $("#cart-body").on("click", ".eliminar", function(){
        var idFila = $(this).data("id");
        var precio = parseFloat($(this).data("price"));
        eliminarProducto(idFila, precio);
    });

    // Asignar evento al botón de vaciar carrito
    $("#clearCart").click(function () {
        $("#cart-body").empty();
        cont = 0;
        total = 0;
        actualizarContador();
        actualizarTotal();
    });
});
