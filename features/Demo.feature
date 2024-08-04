Feature: Demo APP

    Scenario: Verify user can login with credentials
        When User is on home page
        And User click on login button
        And User enters username and password
        Then User verifies dashboard displayed