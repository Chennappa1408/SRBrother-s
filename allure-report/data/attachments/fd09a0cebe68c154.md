# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listpage_Testsuite.spec.ts >> List of Test Suite for 69Batch >> TC03_EditEmp
- Location: tests\Listpage_Testsuite.spec.ts:31:9

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://ctcorphyd.com/SureshIT/login.php
Call log:
  - navigating to "https://ctcorphyd.com/SureshIT/login.php", waiting until "load"

```

# Test source

```ts
  1   | // To provide re-usable methods/ functions and utilities related to whole application.
  2   | 
  3   | import { global } from './Global';
  4   | import { expect } from '@playwright/test';
  5   | 
  6   | export class general extends global {
  7   |     //User-define funtions/ methods
  8   |     //Open Application
  9   |     public async openApplication() {
  10  | 
> 11  |         await this.page1.goto(this.url);
      |                          ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://ctcorphyd.com/SureshIT/login.php
  12  |         console.log('Application is opened');
  13  | 
  14  |     }
  15  | 
  16  |     //Login to application.
  17  |     public async login() {
  18  |         await this.page1.locator(this.textbox_loginname).fill(this.username);
  19  |         await this.page1.locator(this.textbox_password).fill(this.password);
  20  |         await this.page1.locator(this.button_login).click();
  21  |         //await this.page1.click(this.button_login);
  22  |         console.log('Login successful');
  23  | 
  24  |     }
  25  | 
  26  |     //logout from application.
  27  |     public async logout() {
  28  |         await this.page1.locator(this.link_logout).click();
  29  |          await this.page1.waitForTimeout(3000);
  30  |         console.log('Logout successful');
  31  |     }
  32  | 
  33  |     //Add employee details
  34  |     public async addNewEmployee() {
  35  |         let frame = this.page1.frameLocator(this.iframe_addemp);
  36  |         await frame.locator(this.link_addemp).click();
  37  |         await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
  38  |         await frame.locator(this.textbox_emplastname).fill(this.emplastname);
  39  |         await frame.locator(this.button_save).click();
  40  |         await this.page1.waitForTimeout(3000);
  41  |         console.log("Employee details added successfully")
  42  |     }
  43  | 
  44  |     //for waiting for some time
  45  |     public async waitForSomeTime(time: number) {
  46  |         await this.page1.waitForTimeout(time);
  47  |         console.log(`Waited for ${time} milliseconds`);
  48  |     }
  49  |     public async waitTime(time: number) {
  50  |         await this.page1.waitForTimeout(time);
  51  |         console.log(`waited for ${time} misseconds`);
  52  |     }
  53  | 
  54  |     public async searchAndDeleteEmployee() {
  55  |         let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
  56  |         await iframe.locator(this.search_empid_dropdown).selectOption({ value: "0" });
  57  |         await iframe.locator(this.search_empid_textbox).fill(this.deleteEmpid);
  58  |         await iframe.locator(this.button_search).click();
  59  |         await this.page1.waitForTimeout(3000);
  60  |         await iframe.locator(this.select_checkbox).check();
  61  |         await iframe.locator("//input[@value='Delete']").click();
  62  |         await this.page1.waitForTimeout(3000);
  63  |         console.log("Deleted employee details successfully");
  64  |     }
  65  | 
  66  |     public async validateDeleteEmployee() {
  67  |         let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
  68  |         //await iframe.locator(this.delete_verification_text).tohaveText("Successfully Deleted")
  69  | 
  70  |         let text = await iframe.locator(this.delete_verification_text).textContent();
  71  |         console.log("Validate text: ", text);
  72  |         //await expect(text).toHaveText(this.Expected_delete_text).
  73  | 
  74  |         console.log("Employee details deleted successfully");
  75  |     }
  76  |     public async searchAndEditEmployee() {
  77  |         let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
  78  |         await iframe.locator(this.search_empid_dropdown).selectOption({ value: "0" });
  79  |         await iframe.locator(this.search_empid_textbox).fill(this.empid);
  80  |         await iframe.locator(this.button_search).click();
  81  |         await this.page1.waitForTimeout(3000);
  82  |         await iframe.locator(this.select_checkbox).check();
  83  |         await iframe.locator(this.link_Empdetails).click();
  84  |         await iframe.locator(this.button_Edit_empdetails).click();
  85  |         await iframe.locator(this.firstname_textbox).clear();
  86  |         await iframe.locator(this.firstname_textbox).fill(this.Edited_empfirstname);
  87  |         await iframe.locator(this.lastname_textbox).clear();
  88  |         await iframe.locator(this.lastname_textbox).fill(this.Edited_emplastname);
  89  |         await iframe.locator(this.button_save_empdetails).click();
  90  |         await this.page1.waitForTimeout(3000);
  91  |         console.log("Edited employee details successfully");
  92  |     }
  93  | 
  94  |     public async resetEmployeeDetails() {
  95  |         let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
  96  |         await iframe.locator(this.search_empid_dropdown).selectOption({ value: "0" });
  97  |         await iframe.locator(this.search_empid_textbox).fill(this.reset_empid);
  98  |         await iframe.locator(this.button_search).click();
  99  |         await this.page1.waitForTimeout(3000);
  100 |         await iframe.locator(this.select_checkbox).check();
  101 |         await iframe.locator(this.button_reset_empdetails).click();
  102 |         await this.page1.waitForTimeout(3000);
  103 |         console.log("Reset employee details successfully");
  104 |     }
  105 |     public async listofTheEmployees() {
  106 |         await this.page1.getByText(this.PIM_module_text).hover();
  107 |         await this.page1.waitForTimeout(3000);
  108 |         console.log("Mouseover PIM module has been completed")
  109 |         //Click on Add emplyee sub menu tab
  110 |         await this.page1.getByText(this.Add_employee_text).click();
  111 |         console.log("Clicking on Add employee option on PIM Module")
```