import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };

    this.setOptions()

    if (element) {
      const swiper = new Swiper(element, this.options);
    }

    this.element = element;
    this.init();
  }

  setOptions(){
    if('split' in this.element.dataset){
      this.options.breakpoints = {768: {
        slidesPerView: 2.5
        }
      }
    }

    if('autoplay' in this.element.dataset){
      this.options.autoplay = {delay: 3000, pauseOnMouseEnter: false, disableOnInteraction: false};
    }

    if('loop' in this.element.dataset){
      this.options.loop = true;
    }

    if('slides' in this.element.dataset){
      this.options.slidesPerView = parseFloat(this.element.dataset.slides, 10) || 1;
    }
  }

  init() {
    console.log('Initialisation de ma composante Carousel');
  }

  
}
