function copiarTexto() {
    var textoCopiado = document.getElementById("link");
    textoCopiado.select();
    document.execCommand("Copy");
    mostraDialogo("Link Copiado!!", "preto",3600);
  }
// var copyTextareaBtn = document.getElementById('copiar_btn');

// copyTextareaBtn.addEventListener('click', function(event) {
//   var copyTextarea = document.getElementById('link');
//   copyTextarea.select();

//   try {
//     var successful = document.execCommand('copy');
//     var msg = successful ? 'sim!' : 'não!';
//     alert('Texto copiado? ' + msg);
//   } catch (err) {
//     alert('Opa, Não conseguimos copiar o texto, é possivel que o seu navegador não tenha suporte, tente usar Crtl+C.');
//   }
// });



  function mostraDialogo(mensagem, tipo, tempo){
    
    // se houver outro alert desse sendo exibido, cancela essa requisição
    if($("#message").is(":visible")){
        return false;
    }

    // se não setar o tempo, o padrão é 3 segundos
    if(!tempo){
        var tempo = 3000;
    }

    // se não setar o tipo, o padrão é alert-info
    if(!tipo){
        var tipo = "info";
    }

    // monta o css da mensagem para que fique flutuando na frente de todos elementos da página
    var cssMessage = "display: block; position: fixed; bottom: 15px; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999";
    var cssInner = "margin: 0 auto; box-shadow: 1px 1px 5px black;";

    // monta o html da mensagem com Bootstrap
    var dialogo = "";
    dialogo += '<center><div id="message" style="'+cssMessage+'">';
    dialogo += '    <div class="alert alert-'+tipo+' alert-dismissable" style="'+cssInner+'">';
    dialogo += '    <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>';
    dialogo +=          mensagem;
    dialogo += '    </div>';
    dialogo += '</div></center>';

    // adiciona ao body a mensagem com o efeito de fade
    $("body").append(dialogo);
   
    $("#message").hide();
    $("#message").fadeIn(300);
    

    // contador de tempo para a mensagem sumir
    setTimeout(function() {
        $('#message').fadeOut(300, function(){
            $(this).remove();
        });
    }, tempo); // milliseconds

}



function apenasNumeros(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}


var gerarLink = document.getElementById('botao');
gerarLink.addEventListener('click', function(event) {
var numberString = document.getElementById('numero').value;
var mensage = document.getElementById('mensagem').value;

if(numberString==""){
    document.getElementById('link').value = "";
}else{
    var numberString = document.getElementById('numero').value;
    var number = apenasNumeros(numberString);
    var mensage = document.getElementById('mensagem').value;
    var link = "https://wa.me/55"+number+"?text="+mensage;
    document.getElementById('link').value = link;
    document.getElementById('open_btn').href = link+"";
}


  
});

var Limpar = document.getElementById('novo');

Limpar.addEventListener('click', function(event) {
    document.getElementById('numero').value="";
    document.getElementById('mensagem').value ="";
    document.getElementById('link').value = "";
});


