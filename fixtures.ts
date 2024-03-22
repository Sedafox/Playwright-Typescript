import { InventoryPage } from "./Pages/InventoryPage";
import { LoginPage } from "./Pages/LoginPage";
import { test as base, Page } from "@playwright/test";
import { USER_ROLES, getUsername, getPassword } from "./users";

export const test = base.extend<{
  pages: { loginPage: LoginPage; inventoryPage: InventoryPage };
  signInAsUser: (user: USER_ROLES) => Promise<void>;
}>({
  pages: async ({ page }: { page: Page }, use) => {
    const pages = {
      loginPage: new LoginPage(page),
      inventoryPage: new InventoryPage(page),
    };
    await use(pages);
  },

  signInAsUser: async ({ pages }, use) => {
    const signInAsUser = async (user: USER_ROLES) => {
      await pages.loginPage.login(getUsername(user), getPassword(user));
    };
    await use(signInAsUser);
  },
});
