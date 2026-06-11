// To provide Test Data and Objects / Elements locators related to whole application

import { Page } from "@playwright/test";

export class global {

constructor(public page1: Page) {

    this.page1 = page1;

}
//Test Data

public url: string = "https://ctcorphyd.com/SureshIT/login.php";
public username : string = "sureshit";
public password : string = "sureshit";

//Add employee details
public empfirstname : string = "Chennappa";
public emplastname : string = "Sathwik";

//Search employee details
public empid : string = "5991";
public reset_empid : string = "5992";
public deleteEmpid : string = "5993";

//Expected text after deleting employee details
public Expected_delete_text : string = "Successfully Deleted";

public Edited_empfirstname : string = "Chennappa";
public Edited_emplastname : string = "Sathwik";

//Bug Report details
/* public Category : string = "Functional";
public Module : string = "PIM";
public Priority : string = "High"; */
//public link_Bug_text = "Bug Tracker";
public summery : string = "This is a bug report for testing"
public Bug_description : string = "This is a bug report description for testing";

//Objects / Elements locators

public textbox_loginname = "//input[@name = 'txtUserName']";
public textbox_password = "//input[@name = 'txtPassword']";
public button_login = "//input[@type = 'Submit']";
//public link_logout = "text=Logout";
public link_logout = "//a[text()='Logout']";

public iframe_addemp = "//iframe[@id='rightMenu']";
public link_addemp = "//input[@value='Add']";
public textbox_empfirstname = "//input[@name='txtEmpFirstName']";
public textbox_emplastname = "//input[@name='txtEmpLastName']"
public button_save = "//input[@id='btnEdit']";

//Search employee and delete details
public iframe_Empdetails_page = "//iframe[@id='rightMenu']";
public search_empid_dropdown = "//select[@id='loc_code']";
public search_empid_textbox = "//input[@id='loc_name']";
public button_search = "//input[@value='Search']";
public select_checkbox = "//input[@id='allCheck']";
public delete_verification_text = "//span[@class='failure']";

//Edit employee details

public link_Empdetails = "//a[@target='_self']";
public button_Edit_empdetails = "//input[@id='btnEditPers']";
public firstname_textbox = "//input[@id='txtEmpFirstName']";
public lastname_textbox = "//input[@id='txtEmpLastName']";
public button_save_empdetails = "//input[@id='btnEditPers']";

//Reset employee details
public button_reset_empdetails = "//input[@value='Reset']";
public PIM_module_text = "PIM";
public Add_employee_text = "Add Employee";
public Employee_list_text = "Employee List";

//Bug Reports elements locators
public link_Bugreport = "//span[text()='Bug Tracker']";
public Category_dropdown = "//select[@id='category_id']";
public module_dropdown = "//select[@id='cmbModule']";
public priority_dropdown = "//select[@id='priority']";
public summery_Textbox = "//input[@id='summary']";
public description_textbox = "//textarea[@id='txtDescription']";
//public button_submit = "//input[@id='btnEdit']";
public Bug_save_Button = "//input[@id='saveBtn']";

/* 
end of the element for the applications
*/
}