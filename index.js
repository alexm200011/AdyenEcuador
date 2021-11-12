$(document).ready(function(){
   
    
    
    var saldo=10000.00;
    var fecha = new Date();
    
    
    
    
      Date.prototype.yyyymmdd = function() {
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
            var dd  = this.getDate().toString();
            return yyyy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]); // padding
      };
    
    
    $('#saldo').html(""+saldo+"$");
    
    //BOTONES DE ACCION PANTALLA 1
    
    $('#botonTransferencia').click(function(){
        
        $('#Pantalla1').fadeOut();
        $('#Pantalla2').fadeIn();
        $('#numerocuenta').val('');
        $('#beneficiario').val('');
        $('#monto').val('');
        $('#mensaje1').fadeOut();
        $('#mensaje2').fadeOut();
        $('#mensaje3').fadeOut();
        $('#mensajefondos').fadeOut();
            
    });
    
     
    
    //BOTONES DE ACCION DE PANTALLA 2
    
    
    
    $('#monto').blur(function(){
       var num = parseFloat($(this).val());
       var cleanNum = num.toFixed(2);
       $(this).val(cleanNum);
       });
    
    
    $('#totalfinal').blur(function(){
       var num = parseFloat($(this).val());
       var cleanNum = num.toFixed(2);
       $(this).val(cleanNum);
       });
    
     $('#comision').blur(function(){
       var num = parseFloat($(this).val());
       var cleanNum = num.toFixed(2);
       $(this).val(cleanNum);
       });
    
     $('#saldo').blur(function(){
       var num = parseFloat($(this).val());
       var cleanNum = num.toFixed(2);
       $(this).val(cleanNum);
       });
    
    
    $('#confirmartransaccion').click(function(){
        
        $('#Aviso').fadeOut();
        $('#popup').fadeOut();
        var numerocuenta = $('#numerocuenta').val();
        var banco = $('#bancos').val();
        var beneficiario = $('#beneficiario').val();
        var monto = $('#monto').val();
        var number = Number(monto.replace(/[^0-9.-]+/g,""));
        var banco = $('#bancos').val();
        var comision = (number*0.025).toFixed(2);
        var number2 = Number(comision.replace(/[^0-9.-]+/g,""));
        var total;
        total= number+number2;
        
        saldo = saldo - number - comision;
        $('#Pantalla2').fadeOut();
        $('#Pantalla3').fadeIn();
        $('#saldotransferido').html(""+monto+"");
        $('#BeneficiarioFinal').html(""+beneficiario+"");
        $('#NumerodeCuentaFinal').html(""+numerocuenta+"");
        $('#Fecha').html(""+fecha.yyyymmdd()+"");
        $('#BancoFinal').html(""+banco+"");
        $('#comision').html(""+comision+"");
        $('#totalfinal').html(""+total+"");
        
    });
    
    $('#cancelartransaccion').click(function(){
        $('#Aviso').fadeOut();
        $('#popup').fadeOut();
        $('#mensaje1').fadeOut();
        $('#mensaje2').fadeOut();
        $('#mensaje3').fadeOut();
        $('#mensajefondos').fadeOut();
    });
    
    
    
    $('#botontransferir').click(function(){
        
        
        var numerocuenta = $('#numerocuenta').val();
        var banco = $('#bancos').val();
        var beneficiario = $('#beneficiario').val();
        var monto = $('#monto').val();
        var number = Number(monto.replace(/[^0-9.-]+/g,""));
        
        
        
        
        if(numerocuenta==""||numerocuenta.length<10){
            $('#mensaje1').fadeIn();
            $('#mensaje2').fadeOut();
            $('#mensaje3').fadeOut();
            return false;   
        }
        else if(beneficiario==""){
            $('#mensaje2').fadeIn();
            $('#mensaje1').fadeOut();
            $('#mensaje3').fadeOut();
            return false;    
        }
        else if(monto==""){
            $('#mensaje3').fadeIn();
            $('#mensaje2').fadeOut();
            $('#mensaje1').fadeOut();
            return false;
        }
        else{
            if(saldo==0||saldo<number){
                $('#mensajefondos').fadeIn();
            }
            else{
                $('#mensajefondos').fadeOut();
                $('#Aviso').fadeIn();
                $('#popup').fadeIn();
                
            }
        }
        
    });
    
    
    $('#cancelar').click(function(){
        $('#Pantalla2').fadeOut();
        $('#Pantalla1').fadeIn();
         
    });
    
    
    //BOTONES DE ACCION PANTALLA 3
    
    $('#botonAceptar').click(function(){
       $('#Pantalla3').fadeOut();
        $('#Pantalla1').fadeIn();
         $('#saldo').html(""+saldo+"$");
    });
});