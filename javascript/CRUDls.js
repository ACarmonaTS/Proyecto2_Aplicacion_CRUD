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
let list;

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

function limpiar2(){
    document.getElementById('nameSearch').value = "";
    document.getElementById('catSearch').value = "";
    document.getElementById('claveProdSearch').value = "";
    document.getElementById('identSearch').value = "";
    document.getElementById('stockSearch').value = 0;
    document.getElementById('compraSearch').value = 0;
    document.getElementById('ventaSearch').value = 0;
    document.getElementById('gananciaSearch').value = 0;
    document.getElementById('descSearch').value = "";
}
function search(){
    let busca = read();
    busca = document.getElementById('identSearch').value;
    console.log(busca);
    let bandera = 0;
    let listSearch = JSON.parse(localStorage.getItem('value')); 
    for( let dato=0; dato<listSearch.length; dato++ ){
        if( busca === listSearch[dato][3] )
        {
            document.getElementById('nameSearch').value = listSearch[dato][0];
            document.getElementById('catSearch').value = listSearch[dato][1];
            document.getElementById('claveProdSearch').value = listSearch[dato][2];
            document.getElementById('stockSearch').value = listSearch[dato][4];
            document.getElementById('compraSearch').value = listSearch[dato][5];
            document.getElementById('ventaSearch').value = listSearch[dato][6];
            document.getElementById('gananciaSearch').value = listSearch[dato][7];
            document.getElementById('descSearch').value = listSearch[dato][8];
            bandera = 1;
        }
    }
    if( bandera === 0){
        alert("El Id no existe");
    }
}

/*Muestreo en tabla de datos principales*/
function read(){
    list = JSON.parse(localStorage.getItem('value')); 
    let compList = "<thead><tr><th>ID</th><th>Nombre</th><th>Stock</th><th>Precio<br>Venta</th><th>Precio<br>Compra</th><th>Ganancia</th></tr></thead><tbody>";
    let fila = "";
    for( let dato=0; dato<list.length; dato++ ){
        fila += "<tr><td>";
        fila += list[dato][3];
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