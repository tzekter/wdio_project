export default class BaseComponent {
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    get rootEl() {
        return $(this.rootSelector);
    }

    async waitForDisplayed() {
        await this.rootEl.waitForDisplayed();
    }
}