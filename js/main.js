$(document).ready(function(){
    const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
  });
  // Switch slides with arrows
  $(document).keydown(function(e){
  if (e.which == 37) {
      $('.hotel-slider__button--prev')[0].click();
      };  
  if (e.which == 39) { 
      $('.hotel-slider__button--next')[0].click();
      };      
  })
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });

  //Параллакс
  $('.newsletter').parallax({imageSrc: '../img/newsletter-bg.jpg'});

  //Мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on('click', function(){
    $(".navbar-bottom").toggleClass("navbar-bottom--visible")
  });

  //Отправка форм
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal(){
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event){
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  $(document).on('keydown', function(esk) {
    if (esk.which == 27){
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    };
  });

  //Обработка форм
  $(".form").each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please, specify your name",
        minlength: "Name must be at least 2 letters long",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Your phone is required",
        minlength: "There must be 10 numbers in the phone",
      },
    },
  });
  });
  //Маска телефона
  $('.phone').mask('+7 (000) 000-00-00');

  //Библиотека прокрутки
  AOS.init();
});


//Скрипты для этого проекта
$(document).ready(function(){
  //Параллакс
  $('.investigation').parallax({imageSrc: '../img/investigation-background.jpg'});

  //Смена цвета у флага
  var flag1 = $(".item-info__flag--1");
  flag1.on('click', function(){
    $(".item-info__flag--1").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--2");
  flag1.on('click', function(){
    $(".item-info__flag--2").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--3");
  flag1.on('click', function(){
    $(".item-info__flag--3").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--4");
  flag1.on('click', function(){
    $(".item-info__flag--4").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--5");
  flag1.on('click', function(){
    $(".item-info__flag--5").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--6");
  flag1.on('click', function(){
    $(".item-info__flag--6").toggleClass("item-info__flag--active")
  });

  //Слайдер с автоматический прокруткой на главной странице
  const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,        
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});
});