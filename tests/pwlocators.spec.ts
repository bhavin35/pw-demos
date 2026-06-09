  import {test,expect,Locator} from "@playwright/test"

  test("verify playwright locators",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
   
    //getByAlttext() - used to locate images
    const logo:Locator =  page.getByAltText("logo image");
    await expect(logo).toBeVisible();

    //getByText() - used to locate text/text block/non-interactive elements
    const text:Locator = page.getByText("Click the button above");
    await expect(text).toBeVisible();


    //getByRole()-  used to locate accessible elements(buttons, links, lists, tables, checkboxes)
    await page.getByRole("button",{name:'Primary Action'}).click();

    //getByLabel() - locate element by label's text
    await page.getByLabel('Email Address:').fill('test@gmail.com');
  })