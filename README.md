# Playwright-Typescript
This repository provides an example of using Playwright with TypeScript for end-to-end testing.

## Getting Started
1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Run the tests by executing `npx playwright test`.

## Creating Your Own Test
Tests should be created in the `tests` folder and the file should end with `.spec.ts`.

### Logging in as a Different User
By default, if the `signInAsUser` fixture is used, the `standard_user` will be used to login. You can change this behavior by using `test.use({ userType: USER_ROLES.your_desired_user_here });` before the test.

For example, to log in as a `locked_out_user`, you can use the following code:

```typescript
test.use({ userType: USER_ROLES.locked_out_user });
test("locked_out_user Username and Password is Unable to Login and Sees Error Message", async ({
  pages,
  signInAsUser,
}) => {
  //# Go to the Login Page #//
  signInAsUser;

  //# Expect the Epic sadface locked-out message to appear #//
  await expect(pages.loginPage.lockedOutErrorMessage).toBeVisible();

  //# Expect the url to still be the login page #//
  await expect(pages.page.url()).toEqual(pages.loginPage.loginPageURL);
});
```

## Reporting
Test results are stored in the test-results folder and a detailed report can be viewed in the playwright-report/index.html file.



