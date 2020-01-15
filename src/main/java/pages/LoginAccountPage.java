package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class LoginAccountPage {


    @FindBy(id = "username")
    WebElement inputUserName;

    @FindBy(id = "password")
    WebElement inputPassword;

    @FindBy(xpath = "/html/body/div/div/div/div/fieldset/form/div[3]/button")
    WebElement btnLogin;

    @FindBy(xpath = "/html/body/div/div/div/div[1]/nav/ul/li[2]/a")
    WebElement Stext;

    @FindBy(xpath = "/html/body/div/div/div/div/div[2]")
    WebElement Ftext;

    @FindBy(xpath = "/html/body/div/div/div/div[1]/nav/ul/li[2]/a")
    WebElement logout;


    public void login(String username, String password) throws InterruptedException {
        this.inputUserName.clear();
        if (!username.equals("null")) {
            this.inputUserName.sendKeys(username);
        }
        this.inputPassword.clear();
        if (!password.equals("null")) {
            this.inputPassword.sendKeys(password);
        }
    }

    public void submitLogin(){
        btnLogin.click();
    }

    public void checkText(String text){
        String tx = Stext.getText();
        Assert.assertEquals(text, tx);
    }

    public void checkTextFail(String text){
        String tx = Ftext.getText();
        Assert.assertEquals(text, tx);
    }

    public void submitLogout(){
        this.logout.click(); ;
    }

    public  void loginSuccessfully(String username, String password) throws InterruptedException {
        login(username,password);
        submitLogin();
    }




}
