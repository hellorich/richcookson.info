export const observer = new IntersectionObserver((entries) => {
  const button = document.querySelector('.button-top')
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      button.classList.remove('display')
    } else {
      button.classList.add('display')
    }
  })
})
