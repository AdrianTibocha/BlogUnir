function esPalindromo() {
    try {
        //expresion regular que coincide con espacios
        var regex = /[\s+]/g;
        //se obtiene la cadena escrita, se le eliminan los espacios, se quitan acentos y se parsean las letras a minusculas
        var cadenaOriginal = document.getElementById("palindromo").value;
        var cadena = removerAcentos(cadenaOriginal.toLowerCase().replace(regex, ''));
        //se invierten el orden de las letras de la cadena escrita
        var cadenaInvertida = cadena.split('').reverse('').join('');
        var resultado;
        if (cadena === cadenaInvertida) {
            resultado = "la cadena '" + cadenaOriginal + "' es un palindromo";
        } else {
            resultado = "la cadena '" + cadenaOriginal + "' no es un palindromo";
        }
        alert(resultado);
    } catch (error) {
        alert('Error en la validacion, verifique las cadenas de entrada');
    }
}

function obtenerNumeroMayor() {
    try {
        //se obtienen los numeros escritos
        var numero1 = parseFloat(document.getElementById('numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value);
        var resultado;
        if (numero1 === numero2) {
            resultado = "los numeros son iguales";
        } else if (numero1 > numero2) {
            resultado = "numero " + numero1 + " es mayor";
        } else {
            resultado = "numero " + numero2 + " es mayor";;
        }
        alert(resultado);
    } catch (error) {
        alert('Error en la validacion, verifique las cadenas de entrada');
    }
}

function validarDiferentesVocales() {
    try {
        //expresion regular que coincide con vocales
        var regex = /[^a,e,i,o,u]/g;
        //se obtiene la cadena escrita sin acentos y en minuscula
        var cadena = removerAcentos(document.getElementById('diferentesVocales').value.toLowerCase());
        //se reemplazan todo en la cadena, a excepcion de las vocales
        var vocalesEncontradas = cadena.replace(regex, '');
        alert("las vocales encontradas en la cadena ingresada son " + vocalesEncontradas);
    } catch (error) {
        alert('Error en la validacion, verifique las cadenas de entrada');
    }
}

function contadorVocales() {
    try {
        //se obtiene la cadena escrita sin acentos y en minuscula
        var cadena = removerAcentos(document.getElementById('cantidadVocales').value.toLowerCase());
        //se obtiene el total de coincidencias por vocal en la cadena ingresada
        var a = (cadena.match(/[a]/g)||[]).length;
        var e = (cadena.match(/[e]/g)||[]).length;
        var i = (cadena.match(/[i]/g)||[]).length;
        var o = (cadena.match(/[o]/g)||[]).length;
        var u = (cadena.match(/[u]/g)||[]).length;
        var resultado = "Total de coincidencias por vocal: a-" + a +
            ", e-" + e +
            ", i-" + i +
            ", o-" + o +
            ", u-" + u;
        alert(resultado);
    } catch (error) {
        alert('Error en la validacion, verifique las cadenas de entrada');
    }
}

function removerAcentos(cadena) {
    return cadena.normalize("NFD").replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1").normalize();;
}

function obtenerDatos(){
    try{
    var url = document.getElementById('urlInput').value;
    document.getElementById('estado').innerHTML = "Estado: cargando";
    fetch(url)
    .then(res => 
        {
            document.getElementById('estado').innerHTML = "Estado: completada";
            var any = res;
            console.log(any);
        }
    )
    .catch(error => alert('Error en la solitud a la url ' + url))

    }catch(error){
        alert('Error al obtener datos, verifique la url de entrada');
    }
}

function loadData(){
    document.getElementById('urlName').innerHTML = document.URL;
}