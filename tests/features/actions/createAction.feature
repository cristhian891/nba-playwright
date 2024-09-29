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
        When I look for an Action "AG-ActionsCrud"
        And I select "Business Rules" tab
        And I add Snippet with Select Feature "acqAddonRules"
        And I add Rule with Schema "accountHoldings"
        And I save the action changes
        Then I expect toast element contains the text "Successfully saved new version"

    Scenario: User can delete all eligibility rules
        When I look for an Action "AG-ActionsCrud"
        And I select "Business Rules" tab
        When I delete all business rules
        And I save the action changes
        Then I expect toast element contains the text "Successfully saved new version"
        And No business rules are displayed
   
    Scenario: User can edit model configuration
        When I look for an Action "AG-ActionsCrud"
        And I select "Model Configuration" tab
        And I set "5" to the inputfield BAU ranking
        And I save the action changes
        Then I expect toast element contains the text "Successfully saved new version"
    
    Scenario: User can add groups for the approval process
        When I look for an Action "AG-ActionsCrud"
        And I add "NAYAN" group for aproval
        And I save the group for aproval
        Then I expect that alert dialog contains the text "Successfully added approver group"
        And I delete "NAYAN" group for aproval
        And I save the group for aproval
        Then I expect that alert dialog contains the text "Successfully added approver group"