import { InventoryPage } from "./Pages/InventoryPage";
import { LoginPage } from "./Pages/LoginPage";
import { test as base, Page } from "@playwright/test";

export const test = base.extend<{
  pages: { loginPage: LoginPage; inventoryPage: InventoryPage };
}>({
  pages: async ({ page }: { page: Page }, use) => {
    const pages = {
      loginPage: new LoginPage(page),
      inventoryPage: new InventoryPage(page),
    };
    await use(pages);
  },
});
