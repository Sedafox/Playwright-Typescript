import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  // #region Text Locators
  productsSpan: Locator;
  // #endregion

  // #region Other Variables
  private page: Page;
  // #endregion

  constructor(page: Page) {
    this.page = page;
    this.productsSpan = page.locator("span.title");
  }
}
