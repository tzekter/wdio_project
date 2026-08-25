import BasePage from '../core/BasePage.js';
import NavComponent from '../components/NavComponent.js';

class ProfilePage extends BasePage{
    constructor(){
        super();
        this.nav = new NavComponent();
    }

    async verifyUserIsLogged(){
        await this.nav.profileMenu.waitForDisplayed({ timeout: 5000 });
        const isDisplayed = await this.nav.profileMenu.isDisplayed();
        isDisplayed.should.be.true;
    }
}
export default new ProfilePage();