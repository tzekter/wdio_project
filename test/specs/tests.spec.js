import { validUser } from "../data/userData.js";
import { registerPage, loginPage, profilePage } from "../pages/index.js";

describe('Practice software testing - Module 2 Scenarios Automation',()=>{
    let uniqueEmail;
    it('New user creates an account with valid credentials', async()=>{
        uniqueEmail = validUser.getUniqueEmail();

        await registerPage.open();
        await registerPage.registerUser(validUser, uniqueEmail);

        await registerPage.assertUrlContains('/auth/login');
        await loginPage.assertLoginPageLoaded();
    })
    it('Registered user can log in with valid credentials', async () => {
        await loginPage.open();
        await loginPage.login(uniqueEmail, validUser.password);
        await profilePage.verifyUserIsLogged();
    })
    
})