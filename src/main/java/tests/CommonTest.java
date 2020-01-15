package tests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import runner.TestRunner;

public class CommonTest extends PageProvider {

    @Given("^Open website (.*)$")
    public void user_already_on_home_page(String website) throws InterruptedException {
        Thread.sleep(2000);
        TestRunner.driver.get(website);
        Thread.sleep(2500);
        TestRunner.driver.manage().window().maximize();
    }

    @When("^I login successfully with username as (.*) and password as (.*)$")
    public void loginSuccessfully(String username, String password) throws InterruptedException {
        Thread.sleep(2500);
        getLoginAccountPage().loginSuccessfully(username,password);
        Thread.sleep(2500);
    }

    @And("^I click management menu select$")
    public void clickManagement() throws InterruptedException {
        Thread.sleep(2500);
        getCommonPage().scrollDown();
        Thread.sleep(2500);
        getCommonPage().setClickManagement();
        Thread.sleep(2500);
        getCommonPage().scrollUp();
    }

    @And("^I click application on menu select$")
    public void clickApplication () throws InterruptedException {
        Thread.sleep(2500);
        getAddApplicationPage().setClickApplication();
    }

}
