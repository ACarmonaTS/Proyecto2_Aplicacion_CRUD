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
function create(){
    categoria = document.getElementById('catAdd').value;
    stock = document.getElementById('stockAdd').value;
    desc = document.getElementById('descAdd').value;
    if( venta+compra+ganancia===0 || nombre+categoria+clave==="" || desc==="" ){ alert("Completa todos los campos!!!!"); }
    else{
        newAdd = [ nombre, categoria, clave, id, stock, compra, venta, ganancia, desc ];
        lista.push(newAdd);
        localStorage.setItem('value', JSON.stringify(lista));
        cont++;
        limpiar();
    }
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
function read(){
    let list = JSON.parse(localStorage.getItem('value')); 
    console.log(list);
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