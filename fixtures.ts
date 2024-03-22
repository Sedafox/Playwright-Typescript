import { InventoryPage } from "./Pages/InventoryPage";
import { LoginPage } from "./Pages/LoginPage";
import { test as base } from "@playwright/test";

export const test = base.extend<{
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  goToLoginPage: void;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
});
