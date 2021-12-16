class MenuResponsivo {
    constructor () {
        this.menu = document.querySelector('.menu-mobile')
        this.listLinks = document.querySelector('.list-links')
        this.links = document.querySelectorAll('.list-links ul li')
        this.active = 'active'
        this.click = this.click.bind(this)
    }

    click () {
        this.menu.classList.toggle(this.active)
        this.listLinks.classList.toggle(this.active)
    }

    event () {
        this.menu.addEventListener('click', this.click)
    }

    init () {
        if (this.menu) {
            this.event()
        }
        return this
    }
}

const start = new MenuResponsivo()
module.exports = start.init()