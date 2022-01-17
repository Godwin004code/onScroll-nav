


window.addEventListener('scroll', () => {
    if(scrollY >= 80) {
        document.body.classList.add('show-nav')
    } else {
        document.body.classList.remove('show-nav')
    }
})

const icon = document.querySelector('.icon')
const header = document.querySelector('header')


icon.addEventListener('click', () => {
    header.classList.toggle('show-item')
})