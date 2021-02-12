// Add your JS here
console.log("Please, develop the form and make it work properly");

function enviaFormulario(){

    
    
    var nome = $("#idNome").val();
    var email = $("#idEmail").val();
    var mensagem = $("#idMensagem").val();

    var enviarInformacao = {
        Name: nome,
        Email: email,
        Mensagem: mensagem
    };


    $.ajax({
        async: true,
        crossDomain: true,
        url: "http://mockbin.com/request?foo=bar&foo=baz",
        type: "POST",
        headers: {
            "cookie": "foo=bar; bar=baz",
            "x-pretty-print": "2"
        },
        data: JSON.stringify(enviarInformacao),// now data come in this function
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        
        success: function (enviarInformacao, status, jqXHR) {

            alert("Enviado com sucesso")
        },

        error: function (jqXHR, status) {
            // error handler
            console.log(jqXHR);
            alert('Falha ao enviar' + status.code);
        }
        });
        
    
}