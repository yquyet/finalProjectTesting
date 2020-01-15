# new feature
# Tags: optional

Feature: Edit Application

  Background:
    Given Open website http://localhost:8080/demo/

  Scenario Outline: Edit Application successfully
    When I login successfully with username as <username> and password as <password>
    And I click management menu select
    And  I click application on menu select
    And  I click edit button with name as <nameEdit>
    And  I input name as <name>, session expiration as <session>, user base as <user>
    And  I click update button
    Then Verify if a user will be able to add with a new application <name> and session expiration as <session> and user base <user>

    Examples:
      | username | password |nameEdit |name  | session | user                     |
      | admin    | admin    |  Fusion | demo2 | 22      | User By Location Sharing|

Scenario Outline: Edit Application unsuccessfully
    And I click management menu select
    And  I click application on menu select
    And  I click edit button with name as <nameEdit>
    And  I input name as <name>, session expiration as <session>, user base as <user>
    And  I click update button
    Then Verify user can not edit with a new application <name> and session expiration as <session> and user base <user>

    Examples:
    |nameEdit |name  | session | user                     |
    |  Fusion | null | 22      | User By Location Sharing|

