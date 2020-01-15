$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/deleteApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Delete Application",
  "description": "",
  "id": "delete-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Delete Application successfully",
  "description": "",
  "id": "delete-application;delete-application-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with username as \u003cusername\u003e and password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click management menu select",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click application on menu select",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click delete button with name as \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click alert delete button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify user able delete successfully with name as \u003cname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "delete-application;delete-application-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name"
      ],
      "line": 19,
      "id": "delete-application;delete-application-successfully;;1"
    },
    {
      "cells": [
        "quyet",
        "quyet",
        "Fusion"
      ],
      "line": 20,
      "id": "delete-application;delete-application-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open website http://localhost:8080/demo/#!/",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/#!/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 11514096800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Delete Application successfully",
  "description": "",
  "id": "delete-application;delete-application-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with username as quyet and password as quyet",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click management menu select",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click application on menu select",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click delete button with name as Fusion",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click alert delete button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify user able delete successfully with name as Fusion",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "quyet",
      "offset": 38
    },
    {
      "val": "quyet",
      "offset": 60
    }
  ],
  "location": "CommonTest.loginSuccessfully(String,String)"
});
formatter.result({
  "duration": 5444343300,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickManagement()"
});
formatter.result({
  "duration": 5087444300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"side-menu\"]/li[14]/a/span[1]\"}\n  (Session info: chrome\u003d79.0.3945.117)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ASVNPNPC122\u0027, ip: \u002710.211.1.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.117, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\QUYETY~1.PN\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:53754}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bf0610a6b2163dfe94248290cc005021\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"side-menu\"]/li[14]/a/span[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:708)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:499)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat pages.CommonPage.scrollDown(CommonPage.java:20)\r\n\tat tests.CommonTest.clickManagement(CommonTest.java:28)\r\n\tat ✽.And I click management menu select(src/main/java/features/deleteApplication.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonTest.clickApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fusion",
      "offset": 35
    }
  ],
  "location": "DeleteApplicationTest.clickDeleteButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteApplicationTest.clickVerifyDelete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fusion",
      "offset": 50
    }
  ],
  "location": "DeleteApplicationTest.verify_user_able_delete_successfully_with_name_as_Fusion(String)"
});
formatter.result({
  "status": "skipped"
});
});