$(document).ready(function() {
  var gallery = $('.gallery__prev');
  
  // gallery
  gallery.owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    navContainer: '.gallery__navs',
    dotsContainer: '.gallery__dots',
    autoplayTimeout: 4000,
    responsiveClass:true,
    center: true,
    autoWidth: true,
    loop:true,
    items: 1,
    nav: false,
    dots: true,
    responsive:{
        0:{
      margin: 150
        },
        992:{
      margin: 20
        }
    }
  });

  // form
  $( '.form__wrap button' ).addClass( 'form__button' );
  $( '.form__wrap .order-form' ).addClass( 'form__order' );
  $( '.form__wrap input' ).addClass( 'form__data' );
  $( '.form__wrap input[name=name_first]' ).attr("placeholder","Имя");
  $( '.form__wrap input[name=name_last]' ).attr("placeholder","Телефон");

  // checkbox in top form
  $( '.form__wrap input[name=name_first]' ).closest( '.form-group' ).before(
    '<div class="form-group form-group__options"><option class="options-item" value="36">36</option><option class="options-item" value="37">37</option><option class="options-item active" value="38">38</option><option class="options-item" value="39">39</option><option class="options-item" value="40">40</option></div>'
  );


})

