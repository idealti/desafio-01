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
                const paragraph = document.createElement('p')
                paragraph.innerHTML = 'Mensagem enviada...'

                form.appendChild(paragraph)
            }).catch(error => {
                const paragraph = document.createElement('p')
                paragraph.innerHTML = 'Mensagem nao enviada...'

                form.appendChild(paragraph)
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