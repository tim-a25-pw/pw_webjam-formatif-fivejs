export default class Scrolly {
  constructor(element) {
    this.element = element;
    this.options = {
      rootMargin: '0px 0px 0px 0px',
      repeat: true,
    };

    this.init();
  }

  init() {
    this.setOptions();

    const observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    );

    const items = this.element.querySelectorAll('[data-scrolly]');

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      observer.observe(item);
    }
    console.log(items);
  }

  setOptions() {
    console.log(this.element.dataset);

    if ('noRepeat' in this.element.dataset) {
      this.options.repeat = false;
    }
  }

  watch(entries, observer) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-active');
        document.body.style.backgroundColor = 'red';

        if (!this.options.repeat) {
          observer.unobserve(target);
        }
      } else {
        target.classList.remove('is-active');
        document.body.style.backgroundColor = '';
      }
    }
  }
}
// const noRepeat = noRepeats[i];

// observer.unobserve(noRepeat);
/*          for (let i = 0; i < noRepeats.length; i++) {
        
        } */
