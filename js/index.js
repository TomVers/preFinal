import '../scss/style.scss'

import Swiper from '../../node_modules/swiper/swiper-bundle';

const menu = document.querySelector('.button-menu--icon-bar');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.top-menu__button--close');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', function () {
      sidebar.classList.add('sidebar--open');
      overlay.classList.add('overlay--active');
  });
sidebarClose.addEventListener('click', function () {
      sidebar.classList.remove('sidebar--open');
      overlay.classList.remove('overlay--active');
  });

overlay.addEventListener('click', function () {
      overlay.classList.remove('overlay--active');
      sidebar.classList.remove('sidebar--open');
      modalCall.classList.remove('modal-call--active');
      modalFeedback.classList.remove('modal-feedback--active');
  });


  const call = document.querySelectorAll('.button-menu--icon-call');
  const modalCall = document.querySelector('.modal-call');
  const modalCallClose = document.querySelector('.modal-call__button-close');

  for (let i = 0; i < call.length; i++) {
    call[i].addEventListener('click', function () {
      overlay.classList.add('overlay--active');
      modalCall.classList.add('modal-call--active');
      sidebar.classList.remove('sidebar--open');
  });
  }

  modalCallClose.addEventListener('click', function () {
      overlay.classList.remove('overlay--active');
      modalCall.classList.remove('modal-call--active');
  });


  const feedback = document.querySelectorAll('.button-menu--icon-chat');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalFeedbackClose = document.querySelector('.modal-feedback__button-close');

for (let i = 0; i < feedback.length; i++) {
  feedback[i].addEventListener('click', function () {
    overlay.classList.add('overlay--active');
    modalFeedback.classList.add('modal-feedback--active');
    sidebar.classList.remove('sidebar--open');
  });
}
modalFeedbackClose.addEventListener('click', function () {
    overlay.classList.remove('overlay--active');
    modalFeedback.classList.remove('modal-feedback--active');
  });

const slider = document.querySelector('.swiper-container');

var swiper;

function mobileSlider() {
if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
swiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 16,
	pagination: {
	el: '.brands-pagination',
	type: 'bullets',
	clickable: true,
	},
});

slider.dataset.mobile = 'true';
document.querySelector('.brands-pagination').classList.remove('hidden');
}

if (window.innerWidth >= 768) {
slider.dataset.mobile = 'false';

if (slider.classList.contains('swiper-initialized')) {
	swiper.destroy();
	document.querySelector('.brands-pagination').classList.add('hidden');
}
}
}

mobileSlider();

window.addEventListener('resize', () => {
mobileSlider();
});

const allBrands = document.querySelector('.brands__all');
const brands = document.querySelector('.brands__container');
const brandsIcon = document.querySelector('.brands__all--icon');

allBrands.addEventListener('click', () => {
  if (allBrands.classList.contains('brands__all--icon-open')) {
	brands.classList.remove('brands__container_open');
	allBrands.classList.remove('brands__all--icon-open');
	brandsIcon.style.transform = 'rotate(0deg)';
  } else {
	brands.classList.add('brands__container_open');
	allBrands.classList.add('brands__all--icon-open');
	brandsIcon.style.transform = 'rotate(180deg)';
  }
})




// Секция гаджеты


const sliderTwo = document.querySelector('.swiper-container-two');

var swiperTwo;

function mobileSliderTwo() {
  if (window.innerWidth < 768 && sliderTwo.dataset.mobile == 'false') {
    swiperTwo = new Swiper(sliderTwo, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
       el: '.gadgets-pagination',
       type: 'bullets',
	     clickable: true,
     },
   });

   sliderTwo.dataset.mobile = 'true';
   document.querySelector('.gadgets-pagination').classList.remove('hidden');
  }

  if (window.innerWidth >= 768) {
    sliderTwo.dataset.mobile = 'false';

    if (sliderTwo.classList.contains('swiper-initialized')) {
      swiperTwo.destroy();
      document.querySelector('.gadgets-pagination').classList.add('hidden');
    }
  }
}

mobileSliderTwo();

window.addEventListener('resize', () => {
  mobileSliderTwo();
});



const allGadgets = document.querySelector('.gadgets__all');
const gadgets = document.querySelector('.gadgets__container');
const gadgetsIcon = document.querySelector('.gadgets__all_icon');

allGadgets.addEventListener('click', () => {
  if (allGadgets.classList.contains('gadgets__all_icon-open')) {
	gadgets.classList.remove('gadgets__container_open');
    allGadgets.classList.remove('gadgets__all_icon-open');
    gadgetsIcon.style.transform = 'rotate(0deg)';
  } else {
	gadgets.classList.add('gadgets__container_open');
    allGadgets.classList.add('gadgets__all_icon-open');
    gadgetsIcon.style.transform = 'rotate(180deg)';
  }
})


// Секция цены

const sliderThree = document.querySelector('.swiper-container-three');

var swiperThree;

function mobileSliderThree() {
  if (window.innerWidth < 768 && sliderThree.dataset.mobile == 'false') {
    swiperThree = new Swiper(sliderThree, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
       el: '.prices-pagination',
       type: 'bullets',
       clickable: true,
     },
   });

   sliderThree.dataset.mobile = 'true';
   document.querySelector('.price .swiper-pagination').classList.remove('hidden');
  }

  if (window.innerWidth >= 768) {
    sliderThree.dataset.mobile = 'false';

    if (sliderThree.classList.contains('swiper-initialized')) {
      swiperThree.destroy();
      document.querySelector('.price .swiper-pagination').classList.add('hidden');
    }
  }
}

mobileSliderThree();

window.addEventListener('resize', () => {
  mobileSliderThree();
});


// кнопка "Читать далее"

const postButton = document.querySelector('.post__button');
const post = document.querySelector('.post__text');
const postIcon = document.querySelector('.post__button--icon');

postButton.addEventListener('click', () => {
  if (postButton.classList.contains('post__button--icon-open')) {
  post.classList.remove('post__text--open');
	postButton.classList.remove('post__button--icon-open');
	postIcon.style.transform = 'rotate(0deg)';
  } else {
  post.classList.add('post__text--open');
	postButton.classList.add('post__button--icon-open');
	postIcon.style.transform = 'rotate(180deg)';
  }
})