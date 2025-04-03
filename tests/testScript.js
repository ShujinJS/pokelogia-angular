const { Builder, By, Key, until } = require("selenium-webdriver");

async function testUserLogin() {
  // Launch browser using Selenium WebDriver
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:4200/auth");

    await driver.findElement(By.id("usernameInput")).sendKeys("testuser");
    await driver.findElement(By.id("passwordInput")).sendKeys("112233");
    await driver.findElement(By.id("confirmPasswordInput")).sendKeys("112233");

    await driver.findElement(By.id("submitBtn")).click();

    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === "http://localhost:4200";
    }, 5000);

    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl === "http://localhost:4200") {
      console.log("Login successful: User has been signed-in successfuly.");
    } else {
      console.log("Login failed: User has not been signed-in successfully.");
    }

    console.log("Test Passed: Login successful!");
  } catch (error) {
    console.error("Test Failed:", error);
  } finally {
    await driver.quit();
  }
}

testUserLogin();
