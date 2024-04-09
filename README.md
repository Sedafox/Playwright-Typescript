# Playwright-Typescript
An example Playwright, Typescript repository.

----
## Creating your own test

### File Structure
All tests must be created in the tests folder. File should end in .spec.ts

### Logging in as a different user
By default if the fixture `signInAsUser` is used, then the standard_user will be used. You can change this behavior by using `test.use({ userType: USER_ROLES.your_desired_user_here });` before the test. 

Example:
```
//# This test demonstrates how to use the test fixture to login as a locked_out_user #//
test.use({ userType: USER_ROLES.locked_out_user });
test("locked_out_user Username and Password is Unable to Login and Sees Error Message", async ({
  pages,
  page,
  signInAsUser,
}) => {
  //# Go to the Login Page #//
  signInAsUser;

  //# Expect the Epic sadface locked-out message to appear #//
  await expect(pages.loginPage.lockedOutErrorMessage).toBeVisible();

  //# Expect the url to still be the login page #//
  await expect(page.url()).toEqual(pages.loginPage.loginPageURL);
});
```



