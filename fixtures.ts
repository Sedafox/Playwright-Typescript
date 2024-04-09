import { InventoryPage } from "./Pages/InventoryPage";
import { LoginPage } from "./Pages/LoginPage";
import { test as base, Page } from "@playwright/test";
import { USER_ROLES, getUsername, getPassword } from "./users";

export const test = base.extend<{
  pages: { loginPage: LoginPage; inventoryPage: InventoryPage };
  userType: USER_ROLES;
  signInAsUser: void;
}>({
  pages: async ({ page }: { page: Page }, use) => {
    const pages = {
      loginPage: new LoginPage(page),
      inventoryPage: new InventoryPage(page),
    };
    await use(pages);
  },

  userType: async ({}, use) => {
    // Set the user type for each test (Default is standard_user, can be changed with the const below)
    const userType = USER_ROLES.standard_user;
    await use(userType);
  },

  signInAsUser: async ({ pages, userType }, use) => {
    await pages.loginPage.login(getUsername(userType), getPassword(userType));
    await use();
  },
});
