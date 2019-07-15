//import { observer } from './modules/top'

//const element = document.querySelector('.section-skills')

//observer.observe(element)

//const html = document.querySelector('html')
const button = document.querySelector('.button-top')
const controller = document.querySelector('.top')

//html.classList.add('js')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      button.classList.remove('display')
    } else {
      button.classList.add('display')
    }
  })
})

observer.observe(controller);
