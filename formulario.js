/*Codigo Creado por José Fabián Cortés Fedullo*/
function validacion(){

    if(!dt_personales()){
        return false;
    }
    if(!dt_familiares()){
        return false;
    } 
    if(!dt_estudio()){
        return false;
    } 
    if(!dt_experiencia()){
        return false;
    } 
    if(!dt_referencias()){
        return false;
    }    
    return true;
}

function dt_personales(){
    for(i = 0; i < form.elements.length; i++){
        if(form.elements[i].name == 'slc_tipo_indentificacion'){
            tpidentifificacion = form.elements[i].value;
            if(tpidentifificacion == ''){
                alert('Debe seleccionar una opcion');
                return false;
            }
        }

        if(form.elements[i].name == 'txt_identificacion'){
            identificacion = form.elements[i].value;
            if(identificacion == ''){
                alert('Este campo no debe estar vacio1');
                return false;
            }

            if(isNaN(identificacion)){
                alert('Debe ser un numero y no contener letras');
                return false;
            }

            if(tpidentifificacion == "NA"){
                if(identificacion.length != 9){
                    alert('la identificacion para nacionales debe ser de 9 caracteres')
                }
            }

            if(tpidentifificacion == "EX"){
                if(identificacion < 6 || identificacion > 12){
                    alert('debe ajustarese al formato de personas extranjeras')
                }
            }
        }

        if(form.elements[i].name == 'txt_nombre_personales'){
            nombre = form.elements[i].value;
            if(nombre == ''){
                alert('Este campo no debe estar vacio2');
                return false;
            }

            if(nombre.length < 3){
                alert('Debe ser mayor a 3 caracteres2')
                return false;
            }
        }

        if(form.elements[i].name == 'txt_apellido_personales'){
            apellido = form.elements[i].value;
            if(apellido == ''){
                alert('Este campo no debe estar vacio3');
                return false;
            }

            if(apellido.length < 6){
                alert('Debe ser mayor a 6 caracteres')
                return false;
            }
        }

        if(form.elements[i].name == 'rd_sexo'){
            if(!document.getElementById('rd_femenino').checked && !document.getElementById('rd_masculino').checked){
                alert('Debe seleccionar uno de los dos perfiles');
                return false;
            }
        }

        if(form.elements[i].name == 'txt_fecha'){
            fechanacimiento = form.elements[i].value;
            if(fechanacimiento == ''){
                alert('Este campo no debe estar vacio4');
                return false;
            }

            var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
            if(date_regex.test(fechanacimiento)){
                alert('el formato de fecha no es correcto4');
                return false;
            }
        }

        if(form.elements[i].name == 'txt_lugarnacimiento'){
            lugarnacimiento = form.elements[i].value;
            if(lugarnacimiento == ''){
                alert('Este campo no debe estar vacio5');
                return false;
            }

            if(lugarnacimiento.length < 3){
                alert('Debe ser mayor a 3 caracteres');
                return false;
            }
        }

        if(form.elements[i].name == 'txt_nacionalidad'){
            nacionalidad = form.elements[i].value;
            if(nacionalidad == ''){
                alert('Este campo no debe estar vacio6');
                return false;
            }

            if(nacionalidad.length < 3){
                alert('Debe ser mayor a 3 caracteres');
                return false;
            }
        }

        if(form.elements[i].name == 'slc_estadocivil'){
            estadocivil = form.elements[i].value;
            if(estadocivil == ''){
                alert('Este campo no debe estar vacio debe seleccionar una opccion7');
                return false;
            }
        }

        if(form.elements[i].name == 'txt_telefono_personales'){
            telefono = form.elements[i].value;
            if(telefono = ''){
                alert('Este campo no debe estar vacio8');
                return false;
            }

            if(isNaN(telefono)){
                alert('Debe ser un numero y no contener letras9');
                return false;
            }
        }

        if(form.elements[i].name == 'txt_correo'){
            correo = form.elements[i].value;
            if(correo == ''){
                alert('el correo no debe estar vacio10');
                return false;
            }

            if (!valida_correo(correo)) {
                alert("el formato de correo es incorrecto")
                return false;
            }
        }

        if(form.elements[i].name == 'txt_domicilio'){
            domicilio = form.elements[i].value;
            if(domicilio == ''){
                alert('Este campo no debe estar vacio11');
                return false;
            }

            if(domicilio.length < 3){
                alert('Debe ser mayor a 3 caracteres');
                return false;
            }
        }

        if(form.elements[i].name == 'slc_provincia'){
            provincia = form.elements[i].value;
            if(provincia == ''){
                alert('Debe marcar una opcion');
                return false;
            }
        }
    }return true
}

function dt_familiares(){
    var bandera = 4;
    var txt_apellidos_nombres0 = document.getElementById("txt_apellidos_nombres0").value;
    var slc_sexo0 =  document.getElementById('slc_sexo0').value;                                                
    var txt_edad0 = document.getElementById('txt_edad0').value;
    var txt_parentesco0 = document.getElementById('txt_parentesco0').value;
    var txt_ocupacion0 = document.getElementById('txt_ocupacion0').value;
    var txt_apellidos_nombres1 = document.getElementById("txt_apellidos_nombres1").value;
    var slc_sexo1 =  document.getElementById('slc_sexo1').value;                                                
    var txt_edad1 = document.getElementById('txt_edad1').value;
    var txt_parentesco1 = document.getElementById('txt_parentesco1').value;
    var txt_ocupacion1 = document.getElementById('txt_ocupacion1').value;
    var txt_apellidos_nombres2 = document.getElementById("txt_apellidos_nombres2").value;
    var slc_sexo2 =  document.getElementById('slc_sexo2').value;                                                
    var txt_edad2 = document.getElementById('txt_edad2').value;
    var txt_parentesco2 = document.getElementById('txt_parentesco2').value;
    var txt_ocupacion2 = document.getElementById('txt_ocupacion2').value;
    var txt_apellidos_nombres3 = document.getElementById("txt_apellidos_nombres3").value;
    var slc_sexo3 =  document.getElementById('slc_sexo3').value;                                                
    var txt_edad3 = document.getElementById('txt_edad3').value;
    var txt_parentesco3 = document.getElementById('txt_parentesco3').value;
    var txt_ocupacion3 = document.getElementById('txt_ocupacion3').value;
    var txt_apellidos_nombres4 = document.getElementById("txt_apellidos_nombres4").value;
    var slc_sexo4 =  document.getElementById('slc_sexo4').value;                                                
    var txt_edad4 = document.getElementById('txt_edad4').value;
    var txt_parentesco4 = document.getElementById('txt_parentesco4').value;
    var txt_ocupacion4 = document.getElementById('txt_ocupacion4').value;
    alert('Puede o no completar estas lineas');
    for (x = 0; bandera == 4;) {
        if(x == 0){
            if(txt_apellidos_nombres0 != '' || slc_sexo0 != '' || txt_edad0 != '' || txt_parentesco0 != '' || txt_ocupacion0 != ''){
                if(isNaN(txt_edad0)){
                    alert('la edad debe ser un numero');
                    return false;
                }
                if(txt_apellidos_nombres0.length == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if (slc_sexo0 == '') {
                    alert('debe seleccionar un opcion')
                    return false;
                }
                if(txt_parentesco0 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if(txt_ocupacion0 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
            }else if(txt_apellidos_nombres0 == '' || slc_sexo0 == '' || txt_edad0 == '' || txt_parentesco0 == '' || txt_ocupacion0 == ''){
                alert('primera linea vacia')
            } 
        }
        x = x + 1;
        if(x == 1){
            if(txt_apellidos_nombres1 != '' || slc_sexo1 != '' || txt_edad1 != '' || txt_parentesco1 != '' || txt_ocupacion1 != ''){
                if(isNaN(txt_edad1)){
                    alert('la edad debe ser un numero');
                    return false;
                }
                if(txt_apellidos_nombres1.length == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if (slc_sexo1 == '') {
                    alert('debe seleccionar un opcion')
                    return false;
                }
                if(txt_parentesco1 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if(txt_ocupacion1 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
            }else if(txt_apellidos_nombres1 == '' || slc_sexo1 == '' || txt_edad1 == '' || txt_parentesco1 == '' || txt_ocupacion1 == ''){
                alert('segunda linea vacia')
            } 
        }
        x = x + 1;
        if(x == 2){
            if(txt_apellidos_nombres2 != '' || slc_sexo2 != '' || txt_edad2 != '' || txt_parentesco2 != '' || txt_ocupacion2 != ''){
                if(isNaN(txt_edad2)){
                    alert('la edad debe ser un numero');
                    return false;
                }
                if(txt_apellidos_nombres2.length == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if (slc_sexo2 == '') {
                    alert('debe seleccionar un opcion')
                    return false;
                }
                if(txt_parentesco2 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if(txt_ocupacion2 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
            }else if(txt_apellidos_nombres2 == '' || slc_sexo2 == '' || txt_edad2 == '' || txt_parentesco2 == '' || txt_ocupacion2 == ''){
                alert('tercera linea vacia')
            } 
        }
        x = x + 1;
        if(x == 3){
            if(txt_apellidos_nombres3 != '' || slc_sexo3 != '' || txt_edad3 != '' || txt_parentesco3 != '' || txt_ocupacion3 != ''){
                if(isNaN(txt_edad3)){
                    alert('la edad debe ser un numero');
                    return false;
                }
                if(txt_apellidos_nombres3.length == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if (slc_sexo3 == '') {
                    alert('debe seleccionar un opcion')
                    return false;
                }
                if(txt_parentesco3 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if(txt_ocupacion3 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
            }else if(txt_apellidos_nombres3 == '' || slc_sexo3 == '' || txt_edad3 == '' || txt_parentesco3 == '' || txt_ocupacion3 == ''){
                alert('cuarta linea vacia')
            } 
        }
        x = x + 1;
        if(x == 4){
            if(txt_apellidos_nombres4 != '' || slc_sexo4 != '' || txt_edad4 != '' || txt_parentesco4 != '' || txt_ocupacion4 != ''){
                if(isNaN(txt_edad4)){
                    alert('la edad debe ser un numero');
                    return false;
                }
                if(txt_apellidos_nombres4.length == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if (slc_sexo4 == '') {
                    alert('debe seleccionar un opcion')
                    return false;
                }
                if(txt_parentesco4 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
                if(txt_ocupacion4 == ''){
                    alert('este campo no debe estar vacio');
                    return false;
                }
            }else if(txt_apellidos_nombres4 == '' || slc_sexo4 == '' || txt_edad4 == '' || txt_parentesco4 == '' || txt_ocupacion4 == ''){
                alert('quinta linea vacia')
            } 
        }
        return true;
    }
    return false;
}

function dt_estudio(){
    alert('Puede seleccionar si estudia o no')
    var bandera1 = 9;
    var txt_queestudia = document.getElementById('txt_queestudia').value;
    var txt_dondeestudia = document.getElementById('txt_dondeestudia').value;
    var txt_fecha_estudio0 = document.getElementById('txt_fecha_estudio0').value;
    var txt_fecha_estudio1 = document.getElementById('txt_fecha_estudio1').value;
    var txt_titulo0 = document.getElementById('txt_titulo0').value;
    var txt_institucion0 = document.getElementById('txt_institucion0').value;
    var txt_fecha_estudio2 = document.getElementById('txt_fecha_estudio2').value;
    var txt_fecha_estudio3 = document.getElementById('txt_fecha_estudio3').value;
    var txt_titulo1 = document.getElementById('txt_titulo1').value;
    var txt_institucion1 = document.getElementById('txt_institucion1').value;
    var txt_fecha_estudio4 = document.getElementById('txt_fecha_estudio4').value;
    var txt_fecha_estudio5 = document.getElementById('txt_fecha_estudio5').value;
    var txt_titulo2 = document.getElementById('txt_titulo2').value;
    var txt_institucion2 = document.getElementById('txt_institucion2').value;
    var txt_fecha_estudio6 = document.getElementById('txt_fecha_estudio6').value;
    var txt_fecha_estudio7 = document.getElementById('txt_fecha_estudio7').value;
    var txt_titulo3 = document.getElementById('txt_titulo3').value;
    var txt_institucion3 = document.getElementById('txt_institucion3').value;
    var txt_fecha_estudio8 = document.getElementById('txt_fecha_estudio8').value;
    var txt_fecha_estudio9 = document.getElementById('txt_fecha_estudio9').value;
    var txt_titulo4 = document.getElementById('txt_titulo4').value;
    var txt_institucion4 = document.getElementById('txt_institucion4').value;
    var txt_fecha_estudio10 = document.getElementById('txt_fecha_estudio10').value;
    var txt_fecha_estudio11 = document.getElementById('txt_fecha_estudio11').value;
    var txt_titulo5 = document.getElementById('txt_titulo5').value;
    var txt_institucion5 = document.getElementById('txt_institucion5').value;
    var txt_fecha_estudio12 = document.getElementById('txt_fecha_estudio12').value;
    var txt_fecha_estudio13 = document.getElementById('txt_fecha_estudio13').value;
    var txt_titulo6 = document.getElementById('txt_titulo6').value;
    var txt_institucion6 = document.getElementById('txt_institucion6').value;
    var txt_fecha_estudio14 = document.getElementById('txt_fecha_estudio14').value;
    var txt_fecha_estudio15 = document.getElementById('txt_fecha_estudio15').value;
    var txt_titulo7 = document.getElementById('txt_titulo7').value;
    var txt_institucion7 = document.getElementById('txt_institucion7').value;
    var txt_fecha_estudio16 = document.getElementById('txt_fecha_estudio16').value;
    var txt_fecha_estudio17 = document.getElementById('txt_fecha_estudio17').value;
    var txt_titulo8 = document.getElementById('txt_titulo8').value;
    var txt_institucion8 = document.getElementById('txt_institucion8').value;
    if(document.getElementById('rd_est_si').checked){
        if(txt_queestudia == ''){
            alert('digite que estudia');
            return false;
        }

        if(document.getElementById('txt_queestudia').length < 3){
            alert('debe ser mayor a 3 caracteres');
            return false;
        } 

        if(txt_dondeestudia == ''){
            alert('digite donde estudia');
            return false;
        }

        if(txt_dondeestudia < 3){
            alert('debe ser mayor a 3 caracteres');
            return false;
        }
    }
    for (x = 0; bandera1 == 9;) {
        if(x == 0){
            if(txt_fecha_estudio0 != '' || txt_fecha_estudio1 != '' || txt_titulo0 != '' || txt_institucion0 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio0)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio1)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio0 == ''){
                    alert('lafecha no debe estar vacia')
                    return false
                }
                if(txt_fecha_estudio1 == ''){
                    alert('lafecha no debe estar vacia')
                    return false
                }
                if(txt_titulo0 == ''){
                    alert('debe completar el titulo')
                    return false
                }
                if(txt_institucion0 == ''){
                    alert('debe completar la institucion')
                    return false
                }
            }else if(txt_fecha_estudio0 == '' || txt_fecha_estudio1 == '' || txt_titulo0 == '' || txt_institucion0 == ''){
            alert('debe rellenar la fila de primaria completa')
            return false;
            }
        }
        x = x + 1;
        if(x == 1){
            if(txt_fecha_estudio2 != '' || txt_fecha_estudio3 != '' || txt_titulo1 != '' || txt_institucion1 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio2)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio3)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio2 == ''){
                    alert('lafecha no debe estar vacia')
                    return false
                }
                if(txt_fecha_estudio3 == ''){
                    alert('lafecha no debe estar vacia')
                    return false
                }
                if(txt_titulo1 == ''){
                    alert('debe completar el titulo')
                    return false
                }
                if(txt_institucion1 == ''){
                    alert('debe completar la institucion')
                    return false
                }
            }else if(txt_fecha_estudio2 == '' || txt_fecha_estudio3 == '' || txt_titulo1 == '' || txt_institucion1 == ''){
            alert('debe rellenar la fila de Secundaria completa')
            return false;
            }
        }
        x = x + 1;
        if(x == 2){
            if(txt_fecha_estudio4 != '' || txt_fecha_estudio5 != '' || txt_titulo2 != '' || txt_institucion2 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio4)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio5)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio4 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_fecha_estudio5 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_titulo2 == ''){
                    alert('debe completar el titulo');
                    return false;
                }
                if(txt_institucion2 == ''){
                    alert('debe completar la institucion');
                    return false;
                }
            }else if(txt_fecha_estudio4 == '' || txt_fecha_estudio5 == '' || txt_titulo2 == '' || txt_institucion2 == ''){
            alert('debe rellenar la fila de comercial completa');
            return false;
            }
        }
        x = x + 1;
        if(x == 3){
            if(txt_fecha_estudio6 != '' || txt_fecha_estudio7 != '' || txt_titulo3 != '' || txt_institucion3 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio6)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio7)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio6 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_fecha_estudio7 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_titulo3 == ''){
                    alert('debe completar el titulo')
                    return false;
                }
                if(txt_institucion3 == ''){
                    alert('debe completar la institucion');
                    return false;
                }
            }else if(txt_fecha_estudio6 == '' || txt_fecha_estudio7 == '' || txt_titulo3 == '' || txt_institucion3 == ''){
                alert('debe rellenar la fila de tecnico completa');
                return false;
            }
        }
        x = x + 1;
        if(x == 4){
            if(txt_fecha_estudio8 != '' || txt_fecha_estudio9 != '' || txt_titulo4 != '' || txt_institucion4 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio8)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio9)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio8 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_fecha_estudio9 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_titulo4 == ''){
                    alert('debe completar el titulo')
                    return false;
                }
                if(txt_institucion4 == ''){
                    alert('debe completar la institucion');
                    return false;
                }
            }else if(txt_fecha_estudio8 == '' || txt_fecha_estudio9 == '' || txt_titulo4 == '' || txt_institucion4 == ''){
                alert('debe rellenar la fila de universitario completa');
                return false;
            }
        }
        x = x + 1;
        if(x == 5){
            if(txt_fecha_estudio10 != '' || txt_fecha_estudio11 != '' || txt_titulo5 != '' || txt_institucion5 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio10)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio11)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio10 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_fecha_estudio11 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_titulo5 == ''){
                    alert('debe completar el titulo')
                    return false;
                }
                if(txt_institucion5 == ''){
                    alert('debe completar la institucion');
                    return false;
                }
            }else if(txt_fecha_estudio10 == '' || txt_fecha_estudio11 == '' || txt_titulo5 == '' || txt_institucion5 == ''){
                alert('debe rellenar la fila de especialidad completa');
                return false;
            }
        }
        x = x + 1;
        if(x == 6){
            if(txt_fecha_estudio12 != '' || txt_fecha_estudio13 != '' || txt_titulo6 != '' || txt_institucion6 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio12)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio13)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio12 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_fecha_estudio13 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_titulo6 == ''){
                    alert('debe completar el titulo')
                    return false;
                }
                if(txt_institucion6 == ''){
                    alert('debe completar la institucion');
                    return false;
                }
            }else if(txt_fecha_estudio12 == '' || txt_fecha_estudio13 == '' || txt_titulo6 == '' || txt_institucion6 == ''){
                alert('debe rellenar la fila de maestria completa');
                return false;
            }
        }
        x = x + 1;
        if(x == 7){
            if(txt_fecha_estudio14 != '' || txt_fecha_estudio15 != '' || txt_titulo7 != '' || txt_institucion7 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio14)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio15)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio14 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_fecha_estudio15 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_titulo7 == ''){
                    alert('debe completar el titulo')
                    return false;
                }
                if(txt_institucion7 == ''){
                    alert('debe completar la institucion');
                    return false;
                }
            }else if(txt_fecha_estudio14 == '' || txt_fecha_estudio15 == '' || txt_titulo7 == '' || txt_institucion7 == ''){
                alert('debe rellenar la fila de otros estudios completa');
                return false;
            }
        }
        x = x + 1;
        if(x == 8){
            if(txt_fecha_estudio14 != '' || txt_fecha_estudio15 != '' || txt_titulo7 != '' || txt_institucion7 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio14)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio15)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio14 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_fecha_estudio15 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_titulo7 == ''){
                    alert('debe completar el titulo')
                    return false;
                }
                if(txt_institucion7 == ''){
                    alert('debe completar la institucion');
                    return false;
                }
            }else if(txt_fecha_estudio14 == '' || txt_fecha_estudio15 == '' || txt_titulo7 == '' || txt_institucion7 == ''){
                alert('debe rellenar la fila de otros estudios completa');
                return false;
            }
        }
        x = x + 1;
        if(x == 9){
            if(txt_fecha_estudio16 != '' || txt_fecha_estudio17 != '' || txt_titulo8 != '' || txt_institucion8 != ''){
                var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
                if(date_regex.test(txt_fecha_estudio16)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(date_regex.test(txt_fecha_estudio17)){
                    alert('el formato de fecha no es correcto');
                    return false;
                }
                if(txt_fecha_estudio16 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_fecha_estudio17 == ''){
                    alert('lafecha no debe estar vacia');
                    return false;
                }
                if(txt_titulo8 == ''){
                    alert('debe completar el titulo')
                    return false;
                }
                if(txt_institucion8 == ''){
                    alert('debe completar la institucion');
                    return false;
                }
            }else if(txt_fecha_estudio16 == '' || txt_fecha_estudio17 == '' || txt_titulo8 == '' || txt_institucion8 == ''){
                alert('debe rellenar la fila de idiomas completa');
                return false;
            }
        }
        x = x + 1;
        return true;
    }
    return true;
}

function dt_experiencia(){
    var txt_area1 = document.getElementById('txt_area1').value;
    var txt_area2 = document.getElementById('txt_area2').value;
    alert('puede o no digitar datos de experiencia')
    if(txt_area1 != '' ||txt_area2 != ''){
        alert('hola')
        if(txt_area1.length > 1500 || txt_area2.length > 1500){
            alert('no deben superar los 1500 caracteres')
            return false;
        }
    } else if(txt_area1 == '' ||txt_area2 == ''){
        alert('no  digito datos de experiencia')
        return true;
    }
    return true;
}

function dt_referencias(){
    alert('puede o no digitar referencias laborales');
    var bandera2 = 4;
    var inp_nombre1 = document.getElementById('inp_nombre1').value;
    var inp_texto1 = document.getElementById('inp_texto1').value;
    var inp_texto2 = document.getElementById('inp_texto2').value;
    var inp_numerotelefono1 = document.getElementById('inp_numerotelefono1').value;
    var inp_tiempo1 = document.getElementById('inp_tiempo1').value;
    var inp_nombre2 = document.getElementById('inp_nombre2').value;
    var inp_texto3 = document.getElementById('inp_texto3').value;
    var inp_texto4 = document.getElementById('inp_texto4').value;
    var inp_numerotelefono2 = document.getElementById('inp_numerotelefono2').value;
    var inp_tiempo2 = document.getElementById('inp_tiempo2').value;
    var inp_nombre3 = document.getElementById('inp_nombre3').value;
    var inp_texto5 = document.getElementById('inp_texto5').value;
    var inp_texto6 = document.getElementById('inp_texto6').value;
    var inp_numerotelefono3 = document.getElementById('inp_numerotelefono3').value;
    var inp_tiempo3 = document.getElementById('inp_tiempo3').value;
    var inp_nombre4 = document.getElementById('inp_nombre4').value;
    var inp_texto7 = document.getElementById('inp_texto7').value;
    var inp_texto8 = document.getElementById('inp_texto8').value;
    var inp_numerotelefono4 = document.getElementById('inp_numerotelefono4').value;
    var inp_tiempo4 = document.getElementById('inp_tiempo4').value;
    var inp_nombre5 = document.getElementById('inp_nombre5').value;
    var inp_texto9 = document.getElementById('inp_texto9').value;
    var inp_texto10 = document.getElementById('inp_texto10').value;
    var inp_numerotelefono5 = document.getElementById('inp_numerotelefono5').value;
    var inp_tiempo5 = document.getElementById('inp_tiempo5').value;
    for (x = 0; bandera2 == 4;) {
        if(x == 0){
            if(inp_nombre1 != '' ||inp_texto1 != '' ||inp_texto2 != '' ||inp_numerotelefono1 != '' ||inp_tiempo1 != ''){
                if(inp_nombre1 == ''){
                    alert('el nombre no debe estar vacio')
                    return false;
                }

                if(inp_texto1 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(inp_texto2 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(isNaN(inp_numerotelefono1)){
                    alert('la edad debe ser un numero');
                    return false;
                }

                if(inp_numerotelefono1 == ''){
                    alert('el telefono no debe estar vacio')
                    return false;
                }

                if(inp_tiempo1 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }
            }else if(inp_nombre1 == '' ||inp_texto1 == '' ||inp_texto2 == '' ||inp_numerotelefono1 == '' ||inp_tiempo1 == ''){
                alert('primera linea vacia')
            }
        }
        x = x + 1;
        if(x == 1){
            if(inp_nombre2 != '' ||inp_texto3 != '' ||inp_texto4 != '' ||inp_numerotelefono2 != '' ||inp_tiempo2 != ''){
                if(inp_nombre2 == ''){
                    alert('el nombre no debe estar vacio')
                    return false;
                }

                if(inp_texto3 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(inp_texto4 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(isNaN(inp_numerotelefono2)){
                    alert('la edad debe ser un numero');
                    return false;
                }

                if(inp_numerotelefono2 == ''){
                    alert('el telefono no debe estar vacio')
                    return false;
                }

                if(inp_tiempo2 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }
            }else if(inp_nombre2 == '' ||inp_texto3 == '' ||inp_texto4 == '' ||inp_numerotelefono2 == '' ||inp_tiempo2 == ''){
                alert('segunda linea linea vacia')
            }
        }
        x = x + 1;
        if(x == 2){
            if(inp_nombre3 != '' ||inp_texto5 != '' ||inp_texto6 != '' ||inp_numerotelefono3 != '' ||inp_tiempo3 != ''){
                if(inp_nombre3 == ''){
                    alert('el nombre no debe estar vacio')
                    return false;
                }

                if(inp_texto5 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(inp_texto6 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(isNaN(inp_numerotelefono3)){
                    alert('la edad debe ser un numero');
                    return false;
                }

                if(inp_numerotelefono3 == ''){
                    alert('el telefono no debe estar vacio')
                    return false;
                }

                if(inp_tiempo3 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }
            }else if(inp_nombre3 == '' ||inp_texto5 == '' ||inp_texto6 == '' ||inp_numerotelefono3 == '' ||inp_tiempo3 == ''){
                alert('tercera linea linea vacia')
            }
        }
        x = x + 1;
        if(x == 3){
            if(inp_nombre4 != '' ||inp_texto7 != '' ||inp_texto8 != '' ||inp_numerotelefono4 != '' ||inp_tiempo4 != ''){
                if(inp_nombre4 == ''){
                    alert('el nombre no debe estar vacio')
                    return false;
                }

                if(inp_texto7 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(inp_texto8 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(isNaN(inp_numerotelefono4)){
                    alert('la edad debe ser un numero');
                    return false;
                }

                if(inp_numerotelefono4 == ''){
                    alert('el telefono no debe estar vacio')
                    return false;
                }

                if(inp_tiempo4 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }
            }else if(inp_nombre4 == '' ||inp_texto7 == '' ||inp_texto8 == '' ||inp_numerotelefono4 == '' ||inp_tiempo4 == ''){
                alert('cuarta linea linea vacia')
            }
        }
        x = x + 1;
        if(x == 4){
            if(inp_nombre5 != '' ||inp_texto9 != '' ||inp_texto10 != '' ||inp_numerotelefono5 != '' ||inp_tiempo5 != ''){
                if(inp_nombre5 == ''){
                    alert('el nombre no debe estar vacio')
                    return false;
                }

                if(inp_texto9 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(inp_texto10 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }

                if(isNaN(inp_numerotelefono5)){
                    alert('la edad debe ser un numero');
                    return false;
                }

                if(inp_numerotelefono5 == ''){
                    alert('el telefono no debe estar vacio')
                    return false;
                }

                if(inp_tiempo5 == ''){
                    alert('este espacio no debe estar vacio')
                    return false;
                }
            }else if(inp_nombre5 == '' ||inp_texto3 == '' ||inp_texto4 == '' ||inp_numerotelefono5 == '' ||inp_tiempo5 == ''){
                alert('quinta linea linea vacia')
            }
        }
        return true;
    }
    return true;
}

/*funciones de validacion extra*/ 

function valida_correo(email){
    expresion = /^[a-z]([\w\.]*)@[a-z]([\w\.]*)\.[a-z]{2,3}$/;
    if(expresion.test(email)){
        return true;
    }else{
        return false;
    }
}

function habilitar_estudio(valor){
    if(valor == 's'){
        document.getElementById('txt_queestudia').disabled = false;
        document.getElementById('txt_dondeestudia').disabled = false;
    }else {
        document.getElementById('txt_queestudia').disabled = true;
        document.getElementById('txt_dondeestudia').disabled = true;
    }
}
