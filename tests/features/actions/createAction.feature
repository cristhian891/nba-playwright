Feature: NBA Action creation
    As a User
      I want to be able to test if an Action
      can be created
      and can be edited
      and can be inactivated
      and can be released

  Background: 
    Given I am in Actions page
    
    Scenario Outline: User can create Action with basic details

        When I want to create an Action
        And I want to create an Action with "<Name>" "<TemplateID>" "<Description>"
        And I click on Create button
        Then I expect toast element contains the text "Successfully saved new version"

        Examples:
        | Name                |     TemplateID   | Description      | 
        | AG-ActionsCrud-TEST |   AG-ActionsCrud | Action automated | 

    
    Scenario Outline: User can edit Action basic details

        When I look for an Action "AG-ActionsCrud" 
        And I edit the fields "<Name>" and "<Description>"
        And I save the action changes
        Then I expect toast element contains the text "Successfully saved new version"

        Examples:
        | Name                        | Description             | 
        | AG-ActionsCrud-TEST-edited  | Action automated-edited | 

    Scenario: User can edit eligibility rules

    