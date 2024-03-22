import { baseURL } from "./Base";
import { Page, Locator } from "@playwright/test";

export class LoginPage {
  //# Locators #//
  private usernameInput: Locator;
  private passwordInput: Locator;

  //# Other #//
  private page: Page;
  private loginPageURL = baseURL;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("input#user-name");
    this.passwordInput = page.locator("input#password");
  }

  //# Functions #//

  async goToLogin() {
    await this.page.goto(this.loginPageURL);
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }
}
