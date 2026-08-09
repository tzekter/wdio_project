const {expect, assert} = require('chai');
require('chai').should();

describe('Practice software testing - Module 2 Scenarios Automation',()=>{
    let uniqueEmail;
    it('New user creates an account with valid credentials', async()=>{
        await browser.url('https://practicesoftwaretesting.com/')

        const signInLink = await $('[data-test="nav-sign-in"]');
        await signInLink.click();

        const registerLink = await $('[data-test="register-link"]');
        await registerLink.waitForDisplayed({timeout:5000});
        await registerLink.should.be.an('object');
        await registerLink.click();

        await $('#first_name').setValue('Test');
        await $('#last_name').setValue('User');
        await $('#dob').setValue('2002-03-04');
        await $('#country').selectByVisibleText('Ukraine');
        await $('#postal_code').setValue('01001');
        await $('#house_number').setValue('10');
        await $('#street').setValue('Zelena');
        await $('#city').setValue('Lviv');
        await $('#state').setValue('Lviv');
        await $('#phone').setValue('380501234567');

        uniqueEmail = `testuser_${Date.now()}@gmail.com`;
        await $('#email').setValue(uniqueEmail);
        await $('#password').setValue('Kv7$maRuN2!');

        const submitBtn = await $('[data-test="register-submit"]');
        await submitBtn.click();

        await browser.waitUntil(
            async ()=>(await browser.getUrl()).includes('/auth/login'),
            { timeout: 5000, timeoutMsg: 'The transition to the login page did not occur'}
        );
        const loginHeading = await $('h3');
        await loginHeading.waitForDisplayed({timeout:5000});
        const headingText = await loginHeading.getText();
        assert.include(headingText, 'Login', 'User should be redirected to login page');
    })
    it('Registered user can log in with valid credentials', async () => {
        await $('#email').setValue(uniqueEmail);
        await $('#password').setValue('Kv7$maRuN2!');

        const loginBtn = await $('[data-test="login-submit"]');
        await loginBtn.click();

        const profileMenu = await $('[data-test="nav-menu"]');
        await profileMenu.waitForDisplayed({ timeout: 5000 });
        const isDisplayed = await profileMenu.isDisplayed();

        expect(isDisplayed).to.be.true;
    })
})
