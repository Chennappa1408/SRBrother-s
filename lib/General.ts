// To provide re-usable methods/ functions and utilities related to whole application.

import { global } from './Global';
import { expect } from '@playwright/test';

export class general extends global {
    //User-define funtions/ methods
    //Open Application
    public async openApplication() {

        await this.page1.goto(this.url);
        console.log('Application is opened');

    }

    //Login to application.
    public async login() {
        await this.page1.locator(this.textbox_loginname).fill(this.username);
        //await this.page1.fill(this.textbox_loginname, this.username)
        await this.page1.locator(this.textbox_password).fill(this.password);
        await this.page1.locator(this.button_login).click();
        //await this.page1.click(this.button_login);
        console.log('Login successful');

    }

    //logout from application.
    public async logout() {
        await this.page1.locator(this.link_logout).click();
         await this.page1.waitForTimeout(3000);
        console.log('Logout successful');
    }

    //Add employee details
    public async addNewEmployee() {
        let frame = this.page1.frameLocator(this.iframe_addemp);
        await frame.locator(this.link_addemp).click();
        await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
        await frame.locator(this.textbox_emplastname).fill(this.emplastname);
        await frame.locator(this.button_save).click();
        await this.page1.waitForTimeout(3000);
        console.log("Employee details added successfully")
    }

    //for waiting for some time
    public async waitForSomeTime(time: number) {
        await this.page1.waitForTimeout(time);
        console.log(`Waited for ${time} milliseconds`);
    }
    public async waitTime(time: number) {
        await this.page1.waitForTimeout(time);
        console.log(`waited for ${time} misseconds`);
    }

    public async searchAndDeleteEmployee() {
        let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
        await iframe.locator(this.search_empid_dropdown).selectOption({ value: "0" });
        await iframe.locator(this.search_empid_textbox).fill(this.deleteEmpid);
        await iframe.locator(this.button_search).click();
        await this.page1.waitForTimeout(3000);
        await iframe.locator(this.select_checkbox).check();
        await iframe.locator("//input[@value='Delete']").click();
        await this.page1.waitForTimeout(3000);
        console.log("Deleted employee details successfully");
    }

    public async validateDeleteEmployee() {
        let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
        //await iframe.locator(this.delete_verification_text).tohaveText("Successfully Deleted")

        let text = await iframe.locator(this.delete_verification_text).textContent();
        console.log("Validate text: ", text);
        //await expect(text).toHaveText(this.Expected_delete_text).

        console.log("Employee details deleted successfully");
    }
    public async searchAndEditEmployee() {
        let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
        await iframe.locator(this.search_empid_dropdown).selectOption({ value: "0" });
        await iframe.locator(this.search_empid_textbox).fill(this.empid);
        await iframe.locator(this.button_search).click();
        await this.page1.waitForTimeout(3000);
        await iframe.locator(this.select_checkbox).check();
        await iframe.locator(this.link_Empdetails).click();
        await iframe.locator(this.button_Edit_empdetails).click();
        await iframe.locator(this.firstname_textbox).clear();
        await iframe.locator(this.firstname_textbox).fill(this.Edited_empfirstname);
        await iframe.locator(this.lastname_textbox).clear();
        await iframe.locator(this.lastname_textbox).fill(this.Edited_emplastname);
        await iframe.locator(this.button_save_empdetails).click();
        await this.page1.waitForTimeout(3000);
        console.log("Edited employee details successfully");
    }

    public async resetEmployeeDetails() {
        let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
        await iframe.locator(this.search_empid_dropdown).selectOption({ value: "0" });
        await iframe.locator(this.search_empid_textbox).fill(this.reset_empid);
        await iframe.locator(this.button_search).click();
        await this.page1.waitForTimeout(3000);
        await iframe.locator(this.select_checkbox).check();
        await iframe.locator(this.button_reset_empdetails).click();
        await this.page1.waitForTimeout(3000);
        console.log("Reset employee details successfully");
    }
    public async listofTheEmployees() {
        await this.page1.getByText(this.PIM_module_text).hover();
        await this.page1.waitForTimeout(3000);
        console.log("Mouseover PIM module has been completed")
        //Click on Add emplyee sub menu tab
        await this.page1.getByText(this.Add_employee_text).click();
        console.log("Clicking on Add employee option on PIM Module")
        await this.page1.waitForTimeout(3000);
        await this.page1.getByText(this.PIM_module_text).hover();
        await this.page1.waitForTimeout(3000);
        await this.page1.getByText(this.Employee_list_text).click();
        console.log("Clicking on Employee list option on PIM Module")
        await this.page1.waitForTimeout(3000);
    }
public async addBug (){
console.log("Clicking on Add employee option on Bug Reporter Module")
        await this.page1.locator(this.link_Bugreport).click();
        let ifrmae = this.page1.frameLocator(this.iframe_addemp);
        await ifrmae.locator(this.Category_dropdown).selectOption( {value: "813016"});
        await ifrmae.locator(this.module_dropdown).selectOption({value:"PIM"});
        await ifrmae.locator(this.priority_dropdown).selectOption({index: 1});
        await ifrmae.locator(this.summery_Textbox).fill(this.summery);
        await ifrmae.locator(this.description_textbox).fill(this.Bug_description);

        await ifrmae.locator(this.Bug_save_Button).click();
        await this.page1.waitForTimeout(3000);
        console.log("Reported Bug")
        await this.page1.waitForTimeout(3000);


}


//This is the last method of the applciation
}