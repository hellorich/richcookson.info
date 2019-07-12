
export const intersectionObserver = new IntersectionObserver( entries => {
  console.log(entries)
  // if (entries[0].intersectionRatio <= 0) return
  //
  // entries.forEach(entry => {
  //   this.element.classList.toggle('is-intersecting', entry.isIntersecting)
  // })
})
