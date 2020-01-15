# new feature
# Tags: optional

Feature: Delete Application

  Background:
    Given Open website http://localhost:8080/demo/#!/

  Scenario Outline: Delete Application successfully
    When I login successfully with username as <username> and password as <password>
    And I click management menu select
    And  I click application on menu select
    And  I click delete button with name as <name>
    And  I click alert delete button
    Then Verify user able delete successfully with name as <name>


    Examples:
      | username | password |name      |
      | admin    | admin    | Fusion   |