import 'chai/register-should.js';
import BasePage from '../core/BasePage.js';

class LoginPage extends BasePage{
    get emailInput(){ return $('#email')}
    get passwordInput(){ return $('#password')}
    get loginSubmitBtn(){ return $('[data-test="login-submit"]')}
    get loginHeading(){ return $('h3')}

    async open(){
        await super.open('/auth/login');
    }
    async login(email, password){
        await this.emailInput.waitForDisplayed();
        (await this.emailInput.isDisplayed()).should.be.true;
        await this.emailInput.setValue(email);

        const enteredEmail = await this.emailInput.getValue();
        enteredEmail.should.equal(email);

        await this.passwordInput.setValue(password);
        await this.loginSubmitBtn.click();
    }
    async assertLoginPageLoaded(){
        await this.loginHeading.waitForDisplayed({timeout: 5000});
        const headingText = await this.loginHeading.getText();
        headingText.should.include('Login');
    }
}
export default new LoginPage();