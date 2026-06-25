import {test} from '@playwright/test';
import { general } from '../lib/General';

test('TC01_Login_Logout', async ({ page }) => {
    const gen = new general(page);
    await gen.openApplication();
    console.log("Application is opened successfully")
    await gen.login();
    console.log("Login is successful")
    await gen.waitTime(3000);
    await gen.logout();
    console.log("Logout is successful") 
    await gen.waitForSomeTime(4000); 
    //this is last statement of the page

    
});