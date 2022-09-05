
window.sr = ScrollReveal();

  sr.reveal('.categorys', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'

  })
  sr.reveal('.brands', {
    duration: 4000,
    origin: 'bottom',
    distance: '-100px'

  })

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carrousel__brands'), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    dots: '.carrousel__indicate',
    arrows: {
      prev: '.carrousel__anterior',
      next: '.carrousel__siguiente'
    }
  });
})

    