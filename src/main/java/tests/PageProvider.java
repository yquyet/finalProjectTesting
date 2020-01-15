package tests;

import org.openqa.selenium.support.PageFactory;
import pages.*;
import runner.TestRunner;

public class PageProvider {


    private static LoginAccountPage getLoginAccountPage;
    private static AddApplicationPage getAddApplicationPage;
    private static CommonPage commonPage;
    private static EditApplicationPage editApplicationPage;
    private static DeletePage deletePage;

    public static LoginAccountPage getLoginAccountPage() {
       // if (getLoginAccountPage == null) {
            getLoginAccountPage = PageFactory.initElements(TestRunner.driver, LoginAccountPage.class);
     // }
        return getLoginAccountPage;
    }

    public static AddApplicationPage getAddApplicationPage() {
       // if (getAddApplicationPage == null) {
            getAddApplicationPage = PageFactory.initElements(TestRunner.driver, AddApplicationPage.class);
        //}
        return getAddApplicationPage;
    }

    public static CommonPage getCommonPage() {
        //if (commonPage == null) {
            commonPage = PageFactory.initElements(TestRunner.driver, CommonPage.class);
       // }
        return commonPage;
    }

    public static EditApplicationPage getEditApplicationPage () {
       // if (editApplicationPage == null) {
            editApplicationPage = PageFactory.initElements(TestRunner.driver, EditApplicationPage.class);
       // }
        return editApplicationPage;
    }

    public static DeletePage getDeletePage () {
       // if (deletePage == null) {
            deletePage = PageFactory.initElements(TestRunner.driver, DeletePage.class);
      //  }
        return deletePage;
    }
}
