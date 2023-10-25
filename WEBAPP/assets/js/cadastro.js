$('#formulario-cadastro').on('submit', criarUsuario);

function criarUsuario(evento) {
    evento.preventDefault();
console.log("Dentro da função")

    if ($('#senha').val() != $('#confirmar-senha').val()) {
        alert("Ops...", "As senhas não coincidem!", "error");
        return;
    }

    $.ajax({
        url: "/usuarios",
        method: "POST",
        data: {
           nome: $('#nome').val(), 
           email: $('#email').val(),
           nick: $('#nick').val(),
           senha: $('#senha').val()
        }
    }).done(function() { // status code 201 - 200 - 204
        alert("usuario criado com sucesso!")
    }).fail(function(){ // status code 400 - 404 - 403 - 500
        console.log(erro)
        alert("erro ao cadastrar usuario!")
    });
}