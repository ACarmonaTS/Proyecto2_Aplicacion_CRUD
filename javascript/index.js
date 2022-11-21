/*Si presiona el botón de "opciones", entonces se hace invisible, mientras que el 
botón de "cancelar" se hace visible, así como el menú de opciones */
function cancelar(){
    document.getElementById('opc').style.display = "none";
    document.getElementById('cancel').style.display = "block";
    document.getElementById('listaHeader').style.visibility = "visible";
}
/*Si presiona el botón de "cancelar", entonces se hace invisible, mientras que el 
botón de "opciones" se hace visible, el menú de opciones se vuelve invisible*/
function opciones(){
    document.getElementById('opc').style.display = "block";
    document.getElementById('cancel').style.display = "none";
    document.getElementById('listaHeader').style.visibility = "hidden";
}
/*Esta función detecta el cambio de tamaño de anchura del navegador, de esta forma establecemos 
la visibilidad del menú de opciones, el botón de "cancelar" y el de "opciones"*/
window.onresize = function() {
    if(window.innerWidth>=1200){ document.getElementById('listaHeader').style.visibility = "visible"; }
    else{ opciones(); }
};
/*Función para la visibilidad de las secciones CRUD*/
function seccionCrud( opcion ){
    document.getElementById('addV').style.display = "none";
    document.getElementById('searchV').style.display = "none";
    document.getElementById('deleteV').style.display = "none";
    document.getElementById('editV').style.display = "none";
    document.getElementById('readV').style.display = "none";
    document.getElementById(opcion).style.display = "block";
    if(window.innerWidth<=1199){ opciones(); }
    if( opcion == "readV"){ mostrar(); }
}
/*=====================================================================*/
/*=====================================================================*/
/*                        FUNCIONES CRUD                               */
/*=====================================================================*/
/*=====================================================================*/
/* Variables */
let lista = [];
let cont = 0;

/* Función para agregar */
function agregar(){
    const nombre = document.getElementById('nameAdd').value;
    const categoria = document.getElementById('catAdd').value;
    const clave = document.getElementById('claveProdAdd').value;
    const stock = document.getElementById('stockAdd').value;
    const compra = document.getElementById('compraAdd').value;
    const venta = document.getElementById('ventaAdd').value;
    const desc = document.getElementById('descAdd').value;
    const id = nombre.charAt(0) + clave.charAt(0) + cont;
    const ganancia = parseFloat(venta) - parseFloat(compra);
    const newAdd = { nombre, categoria, clave, stock, compra, venta, desc, id, ganancia, };
    lista.push(newAdd);
    cont++;  
    console.log(lista);
    document.getElementById("identAdd").value = id;
    document.getElementById("gananciaAdd").value = parseFloat(ganancia);
    // document.getElementById("codigo").innerHTML = JSON.stringify(agenda, null, 3);
}

function limpiar(){
    document.getElementById('nameAdd').value = "";
    document.getElementById('catAdd').value = "";
    document.getElementById('claveProdAdd').value = "";
    document.getElementById('identAdd').value = "";
    document.getElementById('stockAdd').value = 0;
    document.getElementById('compraAdd').value = 0;
    document.getElementById('ventaAdd').value = 0;
    document.getElementById('gananciaAdd').value = 0;
    document.getElementById('descAdd').value = "";
}