function sendForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var data = JSON.stringify({
        "nome": nome,
        "email": email,
        "mensagem": mensagem
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://mockbin.com/request");
    xhr.setRequestHeader("x-pretty-print", "2");

    xhr.send(data);
}
