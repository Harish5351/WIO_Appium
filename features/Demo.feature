Feature: Demo APP

    # Scenario: Verify user can login with credentials
    #     When User is on home page
    #     And User click on login button
    #     And User enters username and password
    #     And User clicks on Login button
    #     Then User verifies dashboard displayed
    #     When User clicks on price menu
    #     And User clicks on ascending button
    #     # Then User verifies list displayed in ascending order
    #     Then User verifies first item price

    # Scenario Outline: Verify user can not login with invalid credentials
    #     When User is on home page
    #     And User click on login button
    #     And User enters "<username>" and "<password>"
    #     And User clicks on Login button
    #     Then User verifies "<message>" displayed on screen
    #     Examples:
    #         | username          | password | message                               |
    #         | bob@example.com   |          | Password is required                  |
    #         |                   | 10203040 | Username is required                  |
    #         | alice@example.com | 10203040 | Sorry, this user has been locked out. |

    Scenario: Verify user can add items into cart
    When User click on login button
    And User enters "bob@example.com" and "10203040"
    And User clicks on Login button
    And User clicks on price menu
    And User clicks on ascending button
    And User click on first item
    And User click on add to cart button
    And User again click on kart menu
    Then User verifies added item present