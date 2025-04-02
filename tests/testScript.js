const { Builder, By, Key, until } = require("selenium-webdriver");

async function testUserLogin() {
  // Launch browser using Selenium WebDriver
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Step 1: Navigate to Angular app (Replace with your app's URL)
    await driver.get("http://localhost:4200/auth"); // Update with your local Angular server

    // Step 2: Interact with elements
    await driver.findElement(By.id("usernameInput")).sendKeys("testuser"); // Enter username
    await driver.findElement(By.id("passwordInput")).sendKeys("112233"); // Enter password
    await driver.findElement(By.id("confirmPasswordInput")).sendKeys("112233"); // Enter confirmpassword

    await driver.findElement(By.id("submitBtn")).click(); // Click the Login button

    // Wait until the URL contains '/auth'
    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === "http://localhost:4200";
    }, 5000); // Timeout after 5 seconds

    // Get the current URL
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
    // Quit the browser
    await driver.quit();
  }
}

testUserLogin();
