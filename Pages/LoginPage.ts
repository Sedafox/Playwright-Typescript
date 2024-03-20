import { baseURL } from "./Base";
import { Page, Locator } from "@playwright/test";

export class LoginPage {

    //# Locators #//
    private usernameInput: Locator;
    private passwordInput: Locator;

    //# Other #//
    private page: Page;
    private loginPageURL = baseURL

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator("#user-name")
        this.passwordInput = page.locator("#password")
    }

    //# Functions #//

    async goToLogin(){
        await this.page.goto(this.loginPageURL);
    }

    enterUsername(username: string){
        this.usernameInput.fill(username);
    }

    enterPassword(password: string){
        this.passwordInput.fill(password);
    }

}