# new feature
# Tags: optional

Feature: Login Account

  Background:
    Given Open website http://localhost:8080/demo/

  Scenario Outline:  Login Account successfully
    When I input username as <username> and password as <password>
    And  I click submit
    Then Verify if a user will be able to login with a valid username and valid password
    And I click logout
    Examples:
      |username | password  |
      |admin    | admin     |

  Scenario Outline:  Login Account unsuccessfully
    When I input username as <username> and password as <password>
    And  I click submit
    Then Verify user can not login with invalid username and invalid password

    Examples:
      |username | password  |
      |admin    | admin1     |

