//# Dependencies #//
import { expect } from "@playwright/test";

//# Pages #//
import { LoginPage } from "../../Pages/LoginPage";
import { InventoryPage } from "../../Pages/InventoryPage";

//# Local Dependencies #//
import { getUsername, getPassword, USER_ROLES } from "../../users";
import { test } from "../../fixtures";

test("standard_user Username and Password Successfully Logs In", async ({
  pages,
}) => {
  //# Go to the Login Page #//
  await pages.loginPage.goToLogin();

  //# Enter the standard_user username and password #//
  await pages.loginPage.enterUsername(getUsername(USER_ROLES.standard_user));
  await pages.loginPage.enterPassword(getPassword(USER_ROLES.standard_user));

  //# Press the Login Button #//
  await pages.loginPage.clickLogin();

  //# Expect the Product Span from the Inventory Page to be Visible #//
  await expect(pages.inventoryPage.productsSpan).toBeVisible();
});

test("Entering the standard_user Username and an Incorrect Password Displays 'Username and password do not match' ", async ({
  pages,
  page,
}) => {
  //# Go to the Login Page #//
  await pages.loginPage.goToLogin();

  //# Enter the standard_user username and password #//
  await pages.loginPage.enterUsername(getUsername(USER_ROLES.standard_user));
  await pages.loginPage.enterPassword("This is the wrong password!");

  //# Press the Login Button #//
  await pages.loginPage.clickLogin();

  //# Expect the Epic sadface username and password do not match message to appear #//
  await expect(pages.loginPage.incorrectLoginInfoMessage).toBeVisible();

  //# Expect the url to still be the login page #//
  await expect(page.url()).toEqual(pages.loginPage.loginPageURL);
});


 //# This test demonstrates how to use the test fixture to login as a locked_out_user #//
test.use({ userType: USER_ROLES.locked_out_user });
test("locked_out_user Username and Password is Unable to Login and Sees Error Message", async ({
  pages,
  page,
  signInAsUser,
}) => {
  //# Go to the Login Page #//
  signInAsUser;

  //# Expect the Epic sadface locked-out message to appear #//
  await expect(pages.loginPage.lockedOutErrorMessage).toBeVisible();

  //# Expect the url to still be the login page #//
  await expect(page.url()).toEqual(pages.loginPage.loginPageURL);
});
