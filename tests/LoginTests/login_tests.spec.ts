import { test, expect } from "@playwright/test";
import { LoginPage } from "../../Pages/LoginPage";
import { getUsername, getPassword, USER_ROLES } from "../../users";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  //# Go to the Login Page #//
  loginPage = new LoginPage(page);
  await loginPage.goToLogin();
});

test("Correct Username and Password Successfully Logs In", async ({ page }) => {
  //# Enter the standard_user username and password #//
  await loginPage.enterUsername(getUsername(USER_ROLES.standard_user));
  await loginPage.enterPassword(getPassword(USER_ROLES.standard_user));

  //# TODO make assertion #//
});
