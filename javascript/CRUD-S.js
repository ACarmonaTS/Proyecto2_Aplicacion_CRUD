/*=====================================================================*/
/*=====================================================================*/
/*                             CREATE                                  */
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
        lista = JSON.parse(localStorage.getItem('value'));
        if(lista===null){ lista = []; }
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
/*=====================================================================*/
/*=====================================================================*/
/*                              READ                                   */
/*=====================================================================*/
/*=====================================================================*/
/*Muestreo en tabla de datos principales para la seccióin de LEER*/
function read(){
    list = JSON.parse(localStorage.getItem('value')); 
    let compList = "<thead><tr><th>ID</th><th>Nombre</th><th>Stock</th><th>Precio<br>Venta</th><th>Precio<br>Compra</th><th>Ganancia</th></tr></thead><tbody>";
    let fila = "";
    for( let dato=0; dato<list.length; dato++ ){
        fila += "<tr><td>";
        fila += list[dato][3];
        fila += "</td>";

        fila += "<td>";
        fila += list[dato][0];
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
/*=====================================================================*/
/*=====================================================================*/
/*                             UPDATE                                  */
/*=====================================================================*/
/*=====================================================================*/
/*Función para editar datos*/
function edit(){
    let busca = read();
    busca = document.getElementById('identEdit').value;
    let bandera = aux = 0;
    let listSearch = JSON.parse(localStorage.getItem('value')); 
    let newList = [];
    for( let dato=0; dato<listSearch.length; dato++ ){
        if( busca === listSearch[dato][3] ){
            bandera = 1; aux = dato;
        }
    }
    if(bandera === 1){
        for( let dato=0; dato<listSearch.length; dato++ ){
            if(dato === aux ){
                nombre = document.getElementById('nameEdit').value;
                clave = document.getElementById('claveProdEdit').value;
                compra = document.getElementById('compraEdit').value;
                venta = document.getElementById('ventaEdit').value;
                ganancia = parseFloat(venta) - parseFloat(compra);
                categoria = document.getElementById('catEdit').value;
                stock = document.getElementById('stockEdit').value;
                desc = document.getElementById('descEdit').value;
                id = nombre.charAt(0) + clave.charAt(0) + cont;
                cont++;
                newAdd = [ nombre, categoria, clave, id, stock, compra, venta, ganancia, desc ];
                newList.push(newAdd);
            }else{ newList.push(listSearch[dato]); }
        }
        localStorage.clear();
        localStorage.setItem('value', JSON.stringify(newList));
        alert("El Id ha sido modificado con éxito");
    }
    else{
        alert("El Id no existe");
    }
}
/*Limpiar inputs*/
function limpiar4(){
    document.getElementById('nameEdit').value = "";
    document.getElementById('catEdit').value = "";
    document.getElementById('claveProdEdit').value = "";
    document.getElementById('identEdit').value = "";
    document.getElementById('stockEdit').value = 0;
    document.getElementById('compraEdit').value = 0;
    document.getElementById('ventaEdit').value = 0;
    document.getElementById('gananciaEdit').value = 0;
    document.getElementById('descEdit').value = "";
}
/*Crear el nuevo ID del dato a editar*/
function makeIdEdit(){
    nombre = document.getElementById('nameAdd').value;
    clave = document.getElementById('claveProdAdd').value;
    id = nombre.charAt(0) + clave.charAt(0) + cont;
    document.getElementById("identAdd").value = id;
}
/*Nueva ganancia del dato a editar*/
function makeGanEdit(){
    compra = document.getElementById('compraEdit').value;
    venta = document.getElementById('ventaEdit').value;
    ganancia = parseFloat(venta) - parseFloat(compra);
    document.getElementById("gananciaEdit").value = parseFloat(ganancia);
}
/*Buscar un dato en la sección de editar*/
function searchEdit(){
    let busca = read();
    busca = document.getElementById('identEdit').value;
    console.log(busca);
    let bandera = 0;
    let listSearch = JSON.parse(localStorage.getItem('value')); 
    for( let dato=0; dato<listSearch.length; dato++ ){
        if( busca === listSearch[dato][3] )
        {
            document.getElementById('nameEdit').value = listSearch[dato][0];
            document.getElementById('catEdit').value = listSearch[dato][1];
            document.getElementById('claveProdEdit').value = listSearch[dato][2];
            document.getElementById('stockEdit').value = listSearch[dato][4];
            document.getElementById('compraEdit').value = listSearch[dato][5];
            document.getElementById('ventaEdit').value = listSearch[dato][6];
            document.getElementById('gananciaEdit').value = listSearch[dato][7];
            document.getElementById('descEdit').value = listSearch[dato][8];
            bandera = 1;
        }
    }
    if( bandera === 0){
        alert("El Id no existe");
    }
}
/*=====================================================================*/
/*=====================================================================*/
/*                             DELETE                                  */
/*=====================================================================*/
/*=====================================================================*/
/*Buscar de la sección eliminar*/
function searchDelete(){
    let busca = read();
    busca = document.getElementById('identDelete').value;
    let bandera = 0;
    let listSearch = JSON.parse(localStorage.getItem('value')); 
    for( let dato=0; dato<listSearch.length; dato++ ){
        if( busca === listSearch[dato][3] )
        {
            document.getElementById('nameDelete').value = listSearch[dato][0];
            document.getElementById('catDelete').value = listSearch[dato][1];
            document.getElementById('claveProdDelete').value = listSearch[dato][2];
            document.getElementById('stockDelete').value = listSearch[dato][4];
            document.getElementById('compraDelete').value = listSearch[dato][5];
            document.getElementById('ventaDelete').value = listSearch[dato][6];
            document.getElementById('gananciaDelete').value = listSearch[dato][7];
            document.getElementById('descDelete').value = listSearch[dato][8];
            bandera = 1;
        }
    }
    if( bandera === 0){
        alert("El Id no existe");
    }
}
/*Eliminar datos*/
function deleteCrud(){
    let busca = read();
    busca = document.getElementById('identDelete').value;
    let bandera = 0;
    let listSearch = JSON.parse(localStorage.getItem('value')); 
    let newList = [];
    for( let dato=0; dato<listSearch.length; dato++ ){
        if( busca === listSearch[dato][3] ){ dato++; bandera = 1 }
        if(dato===listSearch.length){ break; }
        else{ newList.push(listSearch[dato]); }
    }
    if( bandera = 1 ){
        localStorage.clear();
        localStorage.setItem('value', JSON.stringify(newList));
        alert("El Id ha sido eliminado con éxito");
        limpiar3();
    }    
}
/*Limpiar inputs*/
function limpiar3(){
    document.getElementById('nameDelete').value = "";
    document.getElementById('catDelete').value = "";
    document.getElementById('claveProdDelete').value = "";
    document.getElementById('identDelete').value = "";
    document.getElementById('stockDelete').value = 0;
    document.getElementById('compraDelete').value = 0;
    document.getElementById('ventaDelete').value = 0;
    document.getElementById('gananciaDelete').value = 0;
    document.getElementById('descDelete').value = "";
}
/*=====================================================================*/
/*=====================================================================*/
/*                             SEARCH                                  */
/*=====================================================================*/
/*=====================================================================*/
/*Limpiar inputs de la sección de buscar*/
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
/*Buscar un elemento en especifico basandose en su ID*/
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