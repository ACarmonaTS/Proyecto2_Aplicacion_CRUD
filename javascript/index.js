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
    if( opcion == "readV"){ document.getElementById('tRead').innerHTML = mostrarLista(lista); }
}
/*=====================================================================*/
/*=====================================================================*/
/*                        FUNCIONES CRUD                               */
/*=====================================================================*/
/*=====================================================================*/
/* Variables para la creación de la lista */
let lista = [];
let cont = 0;
/* Variables auxiliares */
let nombre = categoria = clave = id = desc = "";
let stock = venta = compra = ganancia = 0;
let newAdd = [ nombre, categoria, clave, id, stock, compra, venta, ganancia, desc ];

/* Función para agregar */
function agregar(){
    categoria = document.getElementById('catAdd').value;
    stock = document.getElementById('stockAdd').value;
    desc = document.getElementById('descAdd').value;
    if( venta+compra+ganancia===0 || nombre+categoria+clave==="" || desc==="" ){ alert("Completa todos los campos!!!!"); }
    else{
        newAdd = [ nombre, categoria, clave, id, stock, compra, venta, ganancia, desc ];
        lista.push(newAdd);
        cont++;
        limpiar();
    }
    // document.getElementById("codigo").innerHTML = JSON.stringify(agenda, null, 3);
}
/*Esta función crea el Id y lo muestra*/
function makeId(){
    nombre = document.getElementById('nameAdd').value;
    clave = document.getElementById('claveProdAdd').value;
    id = nombre.charAt(0) + clave.charAt(0) + cont;
    document.getElementById("identAdd").value = id;
}
/*Esta función calcula la ganancia y la muestra*/
function makeGan(){
    compra = document.getElementById('compraAdd').value;
    venta = document.getElementById('ventaAdd').value;
    ganancia = parseFloat(venta) - parseFloat(compra);
    document.getElementById("gananciaAdd").value = parseFloat(ganancia);
}
/*Función para limpiar los campos del formulario*/
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
/*Muestreo en tabla de datos principales*/
function mostrarLista(list){
    let compList = "<thead><tr><th>ID</th><th>Nombre</th><th>Stock</th><th>Precio<br>Venta</th><th>Precio<br>Compra</th><th>Ganancia</th></tr></thead><tbody>";
    let fila = "";
    for( let dato=0; dato<list.length; dato++ ){
        fila += "<tr><td>";
        fila += list[dato][0];
        fila += "</td>";

        fila += "<td>";
        fila += list[dato][1];
        fila += "</td>";

        fila += "<td>";
        fila += list[dato][4];
        fila += "</td>";

        fila += "<td>";
        fila += list[dato][6];
        fila += "</td>";

        fila += "<td>";
        fila += list[dato][5];
        fila += "</td>";

        fila += "<td>";
        fila += list[dato][7];
        fila += "</td>";

        fila += "</tr>";
    }
    fila += "</tbody>";
    compList += fila;
    return compList;
}