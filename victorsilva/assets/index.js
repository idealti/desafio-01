/**
 * Função para enviar formulario
 */
let form = document.getElementById('myForm')
        form.onsubmit = function (e){
            e.preventDefault()
            let name = document.getElementById('nome')
            let email = document.getElementById('email')
            let mensagem = document.getElementById('mensagem')

            const url = "http://mockbin.org/bin/1a3433ce-35cc-4eaf-81d4-36bcc37801bf"
            const body = {
                nome: name.value,
                email: email.value,
                mensagem: mensagem.value
            }
                
            fetch(url, {
                method: 'POST', 
                body: JSON.stringify(body)
            }).then((response) => {
                alert('Mensagem enviada, em breve entraremos em contato, obrigado!')
            }).catch(error => {
                alert('Erro, verifique os dados e tente novamente.')
            })
        }
/**
 * Função botão mobile
 */
        const button = document.getElementById('check')
        button.onclick = function () {
            let lista = document.getElementById('lista-menu')
            lista.classList.toggle('active')
        }