 import {test,expect} from "@playwright/test";

 test("titleOfTest",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice")
    let title:string=await page.title();
    console.log(title);



 })