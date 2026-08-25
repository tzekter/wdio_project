import BaseComponent from '../core/BaseComponent.js';

export default class NavComponent extends BaseComponent {
    constructor() {
        super('nav');
    }

    get profileMenu() { 
        return this.rootEl.$('[data-test="nav-menu"]'); 
    }
}