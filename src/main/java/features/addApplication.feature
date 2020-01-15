# new feature
# Tags: optional

Feature: Add Application

  Background:
    Given Open website http://localhost:8080/demo/

  Scenario Outline: Add Application successfully
    When I login successfully with username as <username> and password as <password>
    And I click management menu select
    And  I click application on menu select
    And  I click add application button
    And  I input app name as <name> and session expiration as <session> and user base as <user>
    And  I click create button
    Then Verify if a user will be able to add with a new application <applicationName>

    Examples:
      | username | password | name | session | user            |applicationName|
      | admin    | admin    | demo | 20      | User By Session |     demo      |


  Scenario Outline: Add Application unsuccessfully
    And I click management menu select
    And  I click application on menu select
    And  I click add application button
    And  I input app name as <name> and session expiration as <session> and user base as <user>
    And  I click create button
    Then Verify if a user will be able to add with a new application <applicationName>

    Examples:



      | name | session | user            |applicationName|
      | demo1 | null    | User By Session |     demo1      |

  Scenario Outline: Add Application unsuccessfully with duplication
    And I click management menu select
    And  I click application on menu select
    And  I click add application button
    And  I input app name as <name> and session expiration as <session> and user base as <user>
    And  I click create button
    Then Verify if a user will be able to add with a new application <applicationName>

    Examples:



      | name | session | user            |applicationName|
      | demo | 20     | User By Session |     demo      |


