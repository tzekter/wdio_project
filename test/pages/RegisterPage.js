import BasePage from '../core/BasePage.js';
import 'chai/register-should.js';

class RegisterPage extends BasePage{
    get firstNameInput(){ return $('#first_name')}
    get lastNameInput(){ return $('#last_name')}
    get dobInput(){ return $('#dob')}
    get countrySelect(){ return $('#country')}
    get postalCodeInput(){ return $('#postal_code')}
    get houseNumberInput(){ return $('#house_number')}
    get streetInput(){ return $('#street')}
    get cityInput(){ return $('#city')}
    get stateInput(){ return $('#state')}
    get phoneInput(){ return $('#phone')}
    get emailInput(){ return $('#email')}
    get passwordInput(){ return $('#password')}
    get regSubmitBtn(){ return $('[data-test="register-submit"]')}
    
    async open(){
        await super.open('/auth/register');
    }
    async registerUser(userData, email){
        await this.firstNameInput.waitForDisplayed();
        (await this.firstNameInput.isDisplayed()).should.be.true;

        await this.firstNameInput.setValue(userData.firstName);
        await this.lastNameInput.setValue(userData.lastName);
        await this.dobInput.setValue(userData.dob);

        (await this.dobInput.getValue()).should.equal(userData.dob);

        await this.countrySelect.selectByVisibleText(userData.country);
        await this.postalCodeInput.setValue(userData.postalCode);
        await this.houseNumberInput.setValue(userData.houseNumber);
        await this.streetInput.setValue(userData.street);
        await this.cityInput.setValue(userData.city);
        await this.stateInput.setValue(userData.state);
        await this.phoneInput.setValue(userData.phone);

        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(userData.password);

        await this.regSubmitBtn.click();

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/auth/login'),
            { timeout: 5000, timeoutMsg: 'Failed to redirect to login page after registration' })
    }
}
export default new RegisterPage();