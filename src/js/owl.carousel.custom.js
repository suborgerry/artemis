$('.owl_carousel').owlCarousel({
    loop:true,
    margin:26,
    nav:false,
    // items:3,
    navText:["<img src='./static/images/arrow.png'>", "<img src='./static/images/arrow.png'>"],
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2,
        nav: true
      },
      1080: {
        items: 3
      }
    }
  })