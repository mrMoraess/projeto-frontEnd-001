(function displayBlock() {
    function getElements() {
        let logar = document.querySelector('.logar')
        return logar
    }
    function clickEvent() {
        let btnRegistro = document.querySelector('.register-login')
        let btnLogin = document.querySelector('.login')
        let func = getElements()
        let click2 = false
        btnLogin.addEventListener('click', function() {
            if (click2) {
                func.style.display = 'none'
                click2 = false
            } else {
                func.style.display = 'block'
                click2 = true
            }
        })
    }
    clickEvent()
})()