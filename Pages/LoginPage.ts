import { baseURL } from "./Base";
import { Page, Locator } from "@playwright/test";

export class LoginPage {
  // #region Button Locators
  private loginButton: Locator;
  // #endregion

  // #region Input Locators
  private usernameInput: Locator;
  private passwordInput: Locator;
  // #endregion

  // #region Text Locators
  lockedOutErrorMessage: Locator;
  // #endregion

  // #region Other Variables
  private page: Page;
  loginPageURL = `${baseURL}/`;
  // #endregion

  constructor(page: Page) {
    this.page = page;

    //# Buttons #//
    //This is a button that uses an input locator
    this.loginButton = page.locator("input#login-button");

    //# Inputs #//
    this.usernameInput = page.locator("input#user-name");
    this.passwordInput = page.locator("input#password");

    //# Text #//
    this.lockedOutErrorMessage = page.locator("h3[data-test='error']");
  }

  //# -- Functions -- #//

  // #region Navigation Functions

  //# Navigate to the Login Page #//
  async goToLogin() {
    await this.page.goto(this.loginPageURL);
  }
  // #endregion

  // #region Input Functions

  //# Enter a string object into the username field #//
  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  //# Enter a string object into the password field #//
  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }
  // #endregion

  // #region Click Functions

  //# Click the Login Button #//
  async clickLogin() {
    await this.loginButton.click();
  }
  // #endregion
}
