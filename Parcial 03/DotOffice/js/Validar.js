function valid(){
    let feedback_nomb = document.getElementById('feedback-nomb');
    let feedback_apell = document.getElementById('feedback-apell');
    let feedback_mail = document.getElementById('feedback-mail');
    let feedback_contra = document.getElementById('feedback-contra');   
    
let nom = document.getElementById('nomb').value;
if(nom==""){
Swal.fire('No ha ingresado su nombre')
feedback_nomb.innerHTML = 'Ingrese su nombre';
document.getElementById('nomb').focus();
return false;
}

let apell = document.getElementById('apellid').value;
if(apell==""){
swal.fire('No ha ingresado su apellido')
feedback_apell.innerHTML = 'Ingrese su apellido';
ocument.getElementById('apellid').focus();
return false;
}

let correo = document.getElementById('email').value;
if(correo=""){
swal.fire('No ha ingresado su e-mail')
feedback_mail.innerHTML = 'Ingrese su e-mial';
document.getElementById('email').focus();
return false;
}

let contra = document.getElementById('contras').value;
if(contra==""){
swal.fire('No ha ingresado una contraseña')
feedback_contra.innerHTML = 'Ingrese una contraseña';
document.getElementById('contras').focus();
return false;
}

}

function newregist(){
    let feedback_name = document.getElementById('feedback-nombr');
    let feedback_email = document.getElementById('feedback-corre');

    let nombre = document.getElementById('nomb').value;
if(nombre==""){
swal. fire('No ha ingresado su nombre')
feedback_name.innerHTML = 'Ingrese su nombre';
document.getElementById('nomb').focus();
return false;
}

let correo = document.getElementById('email').value;
if(correo=""){
swal.fire('No ha ingresado su e-mail')
feedback_email.innerHTML = 'Ingrese su e-mial';
document.getElementById('email').focus();
return false;
}

}

function cheque(){
let bot = document.querySelector('input[name="radio2"]:cheked');
if(bot ==""){
    alert('este campo es obligatorio');
    return false;
}
}

function guardar(){

var nombre = document.getElementById('nomb').value;
var apellido = document.getElementById('apellid').value;
var direccion = document.getElementById('email').value;

const registro_visita = {
    Nombre:nombre,
    Apellido:apellido,
    Direccion:direccion,
};



if(
    window.localStorage.getItem('r-' + direccion) !== undefined &&
    window.localStorage.getItem('r-' + direccion)
) {
    Swal.fire({
        icon: 'success',
        title: 'Datos guardados',
        showConfirmButton: false,
        timer: 1500
      });
    return false;
}


else {
    localStorage.setItem('r-' + direccion, JSON.stringify(registro_visita));
nombre = document.getElementById('nomb').value = "";
apellido = document.getElementById('apellid').value = "";
}
}

function carga(){
 
    document.getElementById('carga2').innerHTML = "";

 for( x =0, len = localStorage.length; x < len; x++){
    llave = localStorage.key(x);
    if (llave.startsWith('r-')){
        value = localStorage[llave];
        var dato = JSON.parse(value);

        
    var elemnt = document.getElementById('carga2');
    var tr = document.createElement('tr');
    elemnt.appendChild(tr);
    
    var td = document.createElement('td');
    tr.appendChild(td);
    var text = document.createTextNode(dato.nombre);
    td.appendChild(text);

    var td = document.createElement('td');
    tr.appendChild(td);
    var text = document.createTextNode(dato.apellido);
    td.appendChild(text);

    var td = document.createElement('td');
    tr,appendChild(td);
    var text = document.createTextNode(dato.direccion);
    td.appendChild(text);

    var td  = document.createElement('td');
    tr.appendChild(td);
    var e = document.createElement('e');
    td.appendChild(e);
    var enlacetexto = document.createTextNode('🗑');
    e.appendChild(enlacetexto);
    e.title = "eliminar";
    e.href = "javascript:eliminar ("+"'"+"'"+");";
    e.id = "eliminar";


}

}

}

function deletdatos(eliminar){

    Swal.fire({
        title: '¿Esta seguro de eleminar los datos?',
        text: "Los datos se eliminaran de manera permanente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado',
            'Los archivos han sido eliminados con exito',
            'success'
          )
        }
      })

}
    


function newregist(){
    let feedback_name = document.getElementById('feedback-nombr');
    let feedback_email = document.getElementById('feedback-corre');

    let nombre = document.getElementById('nomb').value;
if(nombre==""){
swal. fire('No ha ingresado su nombre')
feedback_name.innerHTML = 'Ingrese su nombre';
document.getElementById('nomb').focus();
return false;
}

let correo = document.getElementById('email').value;
if(correo=""){
swal.fire('No ha ingresado su e-mail')
feedback_email.innerHTML = 'Ingrese su e-mial';
document.getElementById('email').focus();
return false;
}

}


function guardar2(){

    var nombre2 = document.getElementById('nomb').value;
    var direccion2 = document.getElementById('email').value;
    
    const registro_visita = {
        Nombre2:nombre2,
        Direccion2:direccion2,
    };
    
    
    
    if(
        window.localStorage.getItem('r-' + direccion2) !== undefined &&
        window.localStorage.getItem('r-' + direccion2)
    ) {
        Swal.fire({
            icon: 'success',
            title: 'Datos guardados',
            showConfirmButton: false,
            timer: 1500
          });
       return false;
    }
    
    
    else {
        localStorage.setItem('r-' + direccion, JSON.stringify(registro_visita));
    nombre2 = document.getElementById('nomb').value = "";
}
    }
     
    function carga2(){
     
        document.getElementById('carga2').innerHTML = "";
    
     for( x =0, len = localStorage.length; x < len; x++){
        llave2 = localStorage.key(x);
        if (llave.startsWith('r-')){
            value = localStorage[llave2];
            var dato2 = JSON.parse(value);
    
            
        var elemnt = document.getElementById('carga2');
        var tr = document.createElement('tr');
        elemnt.appendChild(tr);
        
        var td = document.createElement('td');
        tr.appendChild(td);
        var text = document.createTextNode(dato2.nombre2);
        td.appendChild(text);
    
        var td = document.createElement('td');
        tr,appendChild(td);
        var text = document.createTextNode(dato2.direccion2);
        td.appendChild(text);
    
        var td  = document.createElement('td');
        tr.appendChild(td);
        var e = document.createElement('e');
        td.appendChild(e);
        var enlacetexto = document.createTextNode('🗑');
        e.appendChild(enlacetexto);
        e.title = "eliminar";
        e.href = "javascript:eliminar ("+"'"+"'"+");";
        e.id = "eliminar";
    
    
    }
    
    }
    
    }