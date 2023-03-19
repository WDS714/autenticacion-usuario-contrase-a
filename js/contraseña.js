var usuario = "Jsduran"
var clave = "6543210"
var saldo= 2357823;
var IngUsuario = prompt("ingrese su usuraio")
var IngVlave= prompt("Ingrese su clave")



if(usuario == IngUsuario)
{
    if (clave == IngVlave){
        alert("su saldo es " + saldo + " pesos") ;
    }else {
        alert("nombre o usuario incorrecto intente de nuevo n° 1");
        var IngUsuario = prompt("ingrese su usuario");
        var IngVlave = prompt("Ingrese su clave");

    }
  }else{
    alert("nombre o usuario incorrecto intente de nuevo 1 °");
    var IngUsuario = prompt("Ingrese su usuario");
    var IngVlave = prompt("ingrese su clave");
    if( usuario == IngUsuario)
    {
        if (clave == IngVlave){
        alert("su saldo es:" + saldo + " pesos");
    }else{
       alert("nombre o usuario incorrecto intente de nuevo n°1");
       var IngUsuario = prompt("ingresa su usuario");
       var IngVlave = prompt("ingrese su clave");
    }

}else{
    alert("nombre o usuario incorrecto intente de nuevo 2 °");
    var IngUsuario = prompt("Ingrese su usuario");
    var IngVlave = prompt("ingrese su clave");
    if( usuario == IngUsuario)
    {
        if (clave == IngVlave){
        alert("su saldo es:" + saldo + " pesos");
    }else{
       alert("clave incorrecta n°2");
       var IngUsuario = prompt("ingresa su usuario");
       var IngVlave = prompt("ingrese su clave");

    }

  }else{
    alert("nombre o usuario incorrecto intente de nuevo n° 3");
    if (usuario == IngUsuario)
    {
        if(clave == IngVlave){
            alert("su saldo es:" + saldo + " pesos");
        }else{
            alert("ultimo intento n° 3");
            var IngUsuario = prompt("ingrese su usuario");
            var IngVlave = prompt("ingrese su clave");
        }
 
    

        }else{
        alert("Bloqueando cuenta");
        alert("cuenta bloqueada");
         



          }

        }
    }
}
