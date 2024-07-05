Feature: End to End Ecommerce validataion

    application Regression

    Scenario: Ecommerse products delivery
        Given I open Ecommerce Page
        When I add items to Cart
        And Validate the total prices
        Then select the country submit and verify Thankyou

    Scenario: Filling the form to shop
        Given: I open Ecommerce Page
        When I fill the form details
            | name | gender |
            | bob  | male   |
        Then validate the forms behavior
        And select the shop Page