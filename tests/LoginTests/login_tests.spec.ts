//# Dependencies #//
import { test, expect } from "@playwright/test";

//# Pages #//
import { LoginPage } from "../../Pages/LoginPage";
import { InventoryPage } from "../../Pages/InventoryPage";

//# Local Dependencies #//
import { getUsername, getPassword, USER_ROLES } from "../../users";

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
  //# Instantiate Pages #//
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);

  //# Go to the Login Page #//
  await loginPage.goToLogin();
});

test("standard_user Username and Password Successfully Logs In", async ({
  page,
}) => {
  //# Enter the standard_user username and password #//
  await loginPage.enterUsername(getUsername(USER_ROLES.standard_user));
  await loginPage.enterPassword(getPassword(USER_ROLES.standard_user));

  //# Press the Login Button #//
  await loginPage.clickLogin();

  //# Expect the Product Span from the Inventory Page to be Visible #//
  await expect(inventoryPage.productsSpan).toBeVisible();
});

test("locked_out_user Username and Password is Unable to Login and Sees Error Message", async ({
  page,
}) => {
  //# Enter the locked_out_user username and password #//
  await loginPage.enterUsername(getUsername(USER_ROLES.locked_out_user));
  await loginPage.enterPassword(getPassword(USER_ROLES.locked_out_user));

  //# Press the Login Button #//
  await loginPage.clickLogin();

  //# Expect the Epic sadface message to appear #//
  await expect(loginPage.lockedOutErrorMessage).toBeVisible();

  //# Expect the url to still be the login page #//
  await expect(page.url()).toEqual(loginPage.loginPageURL);
});
