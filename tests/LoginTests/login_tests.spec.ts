//# Dependencies #//
import { expect } from "@playwright/test";
import { test as base } from "@playwright/test";

//# Pages #//
import { LoginPage } from "../../Pages/LoginPage";
import { InventoryPage } from "../../Pages/InventoryPage";

//# Local Dependencies #//
import { getUsername, getPassword, USER_ROLES } from "../../users";

const test = base.extend<{
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLogin();
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
});

test("standard_user Username and Password Successfully Logs In", async ({
  loginPage,
  inventoryPage,
}) => {
  //# Enter the standard_user username and password #//
  await loginPage.enterUsername(getUsername(USER_ROLES.standard_user));
  await loginPage.enterPassword(getPassword(USER_ROLES.standard_user));

  //# Press the Login Button #//
  await loginPage.clickLogin();

  //# Expect the Product Span from the Inventory Page to be Visible #//
  await expect(inventoryPage.productsSpan).toBeVisible();
});

test("Entering the standard_user Username and an Incorrect Password Displays 'Username and password do not match' ", async ({
  loginPage,
  page,
}) => {
  //# Enter the standard_user username and password #//
  await loginPage.enterUsername(getUsername(USER_ROLES.standard_user));
  await loginPage.enterPassword("This is the wrong password!");

  //# Press the Login Button #//
  await loginPage.clickLogin();

  //# Expect the Epic sadface username and password do not match message to appear #//
  await expect(loginPage.incorrectLoginInfoMessage).toBeVisible();

  //# Expect the url to still be the login page #//
  await expect(page.url()).toEqual(loginPage.loginPageURL);
});

test("locked_out_user Username and Password is Unable to Login and Sees Error Message", async ({
  loginPage,
  page,
}) => {
  //# Enter the locked_out_user username and password #//
  await loginPage.enterUsername(getUsername(USER_ROLES.locked_out_user));
  await loginPage.enterPassword(getPassword(USER_ROLES.locked_out_user));

  //# Press the Login Button #//
  await loginPage.clickLogin();

  //# Expect the Epic sadface locked-out message to appear #//
  await expect(loginPage.lockedOutErrorMessage).toBeVisible();

  //# Expect the url to still be the login page #//
  await expect(page.url()).toEqual(loginPage.loginPageURL);
});
