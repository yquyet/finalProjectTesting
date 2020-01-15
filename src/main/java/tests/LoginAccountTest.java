package tests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginAccountTest extends PageProvider{


    @When("^I input username as (.*) and password as (.*)$")
    public void loginInWebsite(String username, String password) throws InterruptedException {
        Thread.sleep(2500);
        getLoginAccountPage().login(username,password);
        Thread.sleep(2500);
    }

    @And("^I click submit$")
    public void clickChoseNameInWebsite() throws InterruptedException {
        Thread.sleep(2500);
        getLoginAccountPage().submitLogin();
        Thread.sleep(2500);
    }

    @Then("^Verify if a user will be able to login with a valid username and valid password$")
    public void verifyUserOpenSuccessfully() throws InterruptedException {
        Thread.sleep(2500);
        getLoginAccountPage().checkText("Log out");
        Thread.sleep(2500);
    }

    @Then("^Verify user can not login with invalid username and invalid password$")
    public void verifyUserOpenUnsuccessfully() throws InterruptedException {
        Thread.sleep(2500);
        getLoginAccountPage().checkTextFail("Username or password is incorrect");
        Thread.sleep(2500);
    }

    @And("^I click logout$")
    public void clickLogoutInWebsite() throws InterruptedException {
        Thread.sleep(2500);
        getLoginAccountPage().submitLogout();
        Thread.sleep(2500);
    }

}
