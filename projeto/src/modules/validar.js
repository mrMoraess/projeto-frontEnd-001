(function valida() {
    function returnDados () {
        let email = document.querySelector('#email')
        let senha = document.querySelector('#pass')
        return [ email, senha ]
    }
    const validateEmail = () => {
        const re = /\S+@\S+\.\S+/;
        return re.test(returnDados()[0]);
    };
    function alertaVermelho() {
        let erro = document.querySelector('.msg')
        erro.classList.add('style-msg-vermelho')
        erro.style.display = 'block'
        setTimeout(() => {
            erro.style.display = 'none'
        }, 3000);
    }
    function alertaVerde() {
        let erro = document.querySelector('.msg2')
        let box = document.querySelector('.logar')
        erro.classList.add('style-msg-verde')
        erro.style.display = 'block'
        setTimeout(() => {
            erro.style.display = 'none'
        }, 3000);
        setTimeout(() => {
            box.style.display = 'none'
        }, 800)
    }
    function event () {
        let form = document.querySelector('.form')
        form.addEventListener('submit', e => {
            handleClick(e)
        })
    }
    function handleClick(event) {
        event.preventDefault()
        const checkEmail = validateEmail()
        const checkSenha = validateSenha()
        if (checkEmail === false && checkSenha === true) {
            console.log('oi')
            alertaVerde()
        } else {
            alertaVermelho()
        }
    }
    event()
    console.log(returnDados()[1].value)
    function validateSenha () {
        let val = false
        console.log(returnDados()[1].value)
        if (returnDados()[1].value.length >= 6 && returnDados()[1].value.length < 50) {
            val = true
        } else {
            val = false
        }
        return val
    }
})()