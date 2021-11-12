$(document).ready(function(){
   
    var usuario = "galloexpresa";
    var contrasena = "0123456789";
    
    
    $('#botonIngresar').click(function(){
        var user = $('#User').val();
        var Password = $('#Password').val();
        
        if(user==usuario&&Password==contrasena){
        }
        else{
            $('#mensaje1').fadeIn();
            return false;
        }
            
    });
        
});