package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import runner.TestRunner;

public class CommonPage {
    @FindBy(linkText = "Management")
    WebElement clickManagement;

    @FindBy(xpath = "//*[@id=\"side-menu\"]/li[14]/a/span[1]")
    WebElement manageTab;

    @FindBy(xpath = "//*[@id=\"page-wrapper\"]/div[1]/nav/div/a")
    WebElement topButton;

    public void scrollDown() throws InterruptedException {
        Thread.sleep(2500);
        ((JavascriptExecutor) TestRunner.driver).executeScript("arguments[0].scrollIntoView(true);", manageTab);
    }
    public void setClickManagement() throws InterruptedException {
        Thread.sleep(2500);
        clickManagement.click();
    }

    public void scrollUp() throws InterruptedException {
        Thread.sleep(2500);
        ((JavascriptExecutor) TestRunner.driver).executeScript("arguments[0].scrollIntoView(true);", topButton);
    }

}
