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
let lista = []; nombre = document.querySelector("[name='nameAdd']").value;
let cont = 0;

/* Función para agregar */
function agregar(){
    const nombre = document.querySelector("[name='nameAdd']").value;
    const categoria = document.querySelector("[name='catAdd']").value;
    const clave = document.querySelector("[name='nameAdd']").value;
    const stock = document.querySelector("[name='nameAdd']").value;
    const venta = document.querySelector("[name='nameAdd']").value;
    const compra = document.querySelector("[name='nameAdd']").value;
    const nombreId = nombre.charAt(0);
    const idMaterial = nombreId + apellido + cont;
    const contactos = {
        id: idMaterial,
        nombre,
        apellido,
        telefono,
    };
    agenda.push(contactos);
    cont++;
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("telefonos").value = "";
    document.getElementById("codigo").innerHTML = JSON.stringify(agenda, null, 3);
}