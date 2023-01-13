                
    
    
    
    var vocales=["e","i","a","o","u"];
    var llave=["enter","imes","ai","ober","ufat"];
    

    function errorMayusculaAcento(texto){
    
        patron =/[áéíóúàèìòù]/;
        var textolisto=false;
        var textominusculas=texto.toLowerCase();
        for(var i=0;i<texto.length;i++){      
            if(texto!=textominusculas||patron.test(texto)){
                textolisto=false;
                break;
            }else{
                textolisto=true;
                break;
            }
        }
        return textolisto;
    }

    function error(){
        var error1="Solo minúsculas y sin acentos";
        var error2="Campo de texto vacío";
        var textocapturado=document.getElementById("cajaTextoEscribir").value;
        
        if(textocapturado==""){
            document.getElementById("txtError").innerHTML=error2;
            
        }else if(errorMayusculaAcento(textocapturado)==false){
            document.getElementById("txtError").innerHTML=error1;
            
        }
        
        
    }

    function encriptar(){
       
        
        var textocapturado=document.getElementById("cajaTextoEscribir").value;
        

        if(errorMayusculaAcento(textocapturado)==true ){
            
            for(var i=0;i<vocales.length;i++){      
                textocapturado=textocapturado.replaceAll(vocales[i],llave[i])
            }  
            mostrarCifrado();
            ocultarError();
            document.getElementById("cajaTextoMostrar").innerHTML=textocapturado;
            error();
           limpiar();  
        }else{
            ajustarelementos2();
            ocultarCifrado();
            error();
            mostrarError();
            limpiar();
        }
    }

    function desencriptar(){
        
        
    var textocapturado=document.getElementById("cajaTextoEscribir").value;    
       
        if(errorMayusculaAcento(textocapturado)==true){
            for(var i=0;i<vocales.length;i++){
                textocapturado=textocapturado.replaceAll(llave[i],vocales[i])
            }
            mostrarCifrado();
           ocultarError();document.getElementById("cajaTextoMostrar").innerHTML=textocapturado;
            error();
           limpiar();
  
        }else{
            ajustarelementos2();
            ocultarCifrado();
            mostrarError();
            error();
            limpiar();
        }
               

    }

    function limpiar(){
        document.getElementById("cajaTextoEscribir").value="";
    }

    function mostrarCifrado(){
        document.getElementById("sinAccion").style.display='none';
        document.getElementById("accionCifrar").style.display='block';
        ajustarelementos();
    }

    function ocultarCifrado(){
        document.getElementById("sinAccion").style.display='block';
        document.getElementById("accionCifrar").style.display='none';
        
    }

    function mostrarError(){
        document.getElementById("txtError").style.display='block'
        document.getElementById("icono").style.display='block';
    }

    function ocultarError(){
        document.getElementById("txtError").style.display='none'
        document.getElementById("icono").style.display='none';
    }

    function copiarTexto(){
        var textocapturado=document.getElementById("cajaTextoMostrar");
        textocapturado.select();
        document.execCommand('copy');
        ocultarCifrado();
        
       ajustarelementos2();
    }

//da nuevos estilos a realizar la funcion

    function ajustarelementos(){
        var cuerpow = document.getElementById("cuerpo").offsetWidth;
        var cuerpoh=document.getElementById("cuerpo").offsetHeight;
        
        
       
       if(cuerpow==768||cuerpoh==1174){
            var mostrar=document.getElementById("cajaMostrar");
            var copyr=document.getElementById("copyright");
            mostrar.style.height="200%";
            copyr.style.padding="150px 0 0 0";
        }
        if(cuerpow==375||cuerpoh==933){ 
            var mostrar=document.getElementById("cajaMostrar");
            var copyr=document.getElementById("copyright"); 
            mostrar.style.height="200%";
            copyr.style.padding="150px 0 0 0";
        }
        
        
    }

   function ajustarelementos2(){
        var cuerpow = document.getElementById("cuerpo").offsetWidth;
        var cuerpoh=document.getElementById("cuerpo").offsetHeight;
        

        if(cuerpow==768||cuerpoh==1174){
        
            var mos=document.getElementById("cajaMostrar");
            var cop=document.getElementById("copyright");
            mos.style.height="100%";
            cop.style.padding="25px 0 0 0";
        
        }
        if(cuerpow==375||cuerpoh==933){
            var mos=document.getElementById("cajaMostrar");
            var cop=document.getElementById("copyright");
            mos.style.height="100%";
            cop.style.padding="25px 0 0 0";
        }    
    
    }

    function ajustartxtescribir(){
        var tx = document.getElementsByName("Escribir");
        for (let i = 0; i < tx.length; i++) {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;");
            tx[i].addEventListener("input", OnInput, false);
        }
    }
     
    function OnInput() {
            this.style.height = 0;
            this.style.height = (this.scrollHeight) + "px";     
    }

    ajustartxtescribir();

    