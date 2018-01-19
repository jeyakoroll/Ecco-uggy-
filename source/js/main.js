$(document).ready(function() {
  var gallery = $('.gallery__prev'),
      reviews = $('.reviews__prev');
  
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

  // reviews
  reviews.owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    navContainer: '.reviews__nav',
    autoplayTimeout: 5000,
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
      margin: 50
        }
    }
  });

  // popup politics
  $('.politics').on('click', function(event){
    event.preventDefault();
    $('.cd-politics').addClass('is-visible');
  });
  
  // close popup
  $('.cd-politics').on('click', function(event){
    if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-politics') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  // close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
    if(event.which=='27'){
      $('.cd-politics').removeClass('is-visible');
    }
  });

  // form
  $( '.form__wrap button' ).addClass( 'form__button' );
  $( '.form__wrap .order-form' ).addClass( 'form__order' );
  $( '.form__wrap input' ).addClass( 'form__data' );
  $( '.form__wrap input[name=name_first]' ).attr("placeholder","Имя");
  $( '.form__wrap input[name=name_last]' ).attr("placeholder","Телефон");

  // option in form
  $( '.form__wrap input[name=name_first]' ).closest( '.form-group' ).before(
    '<div class="form-group form-group__options"><option class="options-item" value="36">36</option><option class="options-item" value="37">37</option><option class="options-item" value="38">38</option><option class="options-item" value="39">39</option><option class="options-item" value="40">40</option></div>'
  );

  // choose your size
  $('.options-item').on('click', function() {
    var me = $(this), options = $('.options-item');
      options.removeClass('choose');
      me.addClass('choose');
  });

  // timer
  (function() {
    $(document).ready(function() {
      var now = new Date(),
        secPassed = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
      var t = (60 * 60 * 24) - secPassed;
      $('.timer').countdown({
        until: (t),
        labels: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        labels1: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        format: 'HMS',
        layout: '<li><div><span>0</span></div><div><span>0</span></div></li><li><div><span>{h10}</span></div><div><span>{h1}</span></div></li><li><div><span>{m10}</span></div><div><span>{m1}</span></div></li><li><div><span>{s10}</span></div><div><span>{s1}</span></div></li>'
      });
    });
  })();

  // show form
  $('.header__button').on('click', showForm);
  $('.header__button-mob').on('click', showForm);
  $('.footer__button-mob').on('click', showForm);
  $('.descr__button').on('click', showForm);

  function showForm (e) {
      e.preventDefault();
      toForm($(this).data('form'), true);
  }

  function toForm(section, isAnimate) {
      var 
          reqSection = $('.form').filter('[data-section="' + section +'"]'),
          reqSectionPos = reqSection.offset().top;

      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 350);
      }
  }

})

