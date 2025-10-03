export default class Header {
  constructor(element) {
    this.element = element;
    this.options = {
      threshold: 0, //paramétrer avec attribut Data???
    };
    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;

    this.init();
    this.initNavMobile();
  }

  init() {
    this.setOptions();

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  setOptions() {
    // Verifier les differents attributs data sur this.element/la composante
  }

  onScroll() {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    this.setHeaderState();
    this.setDirections();
  }

  setHeaderState() {
    if (
      this.scrollPosition >=
      document.scrollingElement.scrollHeight * this.options.threshold
    ) {
      this.html.classList.add('header-is-hidden');
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }

  setDirections() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      // scroll vers le bas
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      // scroll vers le haut
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }

  initNavMobile() {
    const toggle = this.element.querySelectorAll('.js-toggle');
    for (let i = 0; i < toggle.length; i++) {
      const tog = toggle[i];

      tog.addEventListener('click', this.onToggleNav.bind(this));
    }
  }

  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}
