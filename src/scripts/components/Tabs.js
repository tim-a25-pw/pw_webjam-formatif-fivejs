export default class Tabs {
  constructor(element) {
    this.element = element;
    this.buttons = this.element.querySelectorAll('.js-tab');
    this.contents = this.element.querySelectorAll('[data-tab-content-id]');

    this.init();
  }

  init() {
    this.element
      .querySelector('[data-tab-content-id]')
      .classList.add('is-active');
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      const tabId = button.dataset.tabId;
      button.addEventListener('click', this.selectTab.bind(this));

      button.classList.remove('is-active');
    }

    this.element.querySelector('.js-tab').classList.add('is-active');
    const defaultTab = this.element.dataset.defaultTab;
    if (defaultTab) {
      for (let i = 0; i < this.contents.length; i++) {
        const content = this.contents[i];
        const tabContentId = content.dataset.tabContentId;

        if (defaultTab == tabContentId) {
          content.classList.add('is-active');
        } else {
          content.classList.remove('is-active');
        }
      }

      for (let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        const tabId = button.dataset.tabId;

        if (defaultTab == tabId) {
          button.classList.add('is-active');
        } else {
          button.classList.remove('is-active');
        }
      }
    }
  }

  selectTab(event) {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];

      button.classList.remove('is-active');
    }
    event.currentTarget.classList.add('is-active');

    const currentTabId = event.currentTarget.dataset.tabId;
    for (let i = 0; i < this.contents.length; i++) {
      const content = this.contents[i];
      const tabContentId = content.dataset.tabContentId;

      if (currentTabId == tabContentId) {
        content.classList.add('is-active');
      } else {
        content.classList.remove('is-active');
      }
    }
  }
}
