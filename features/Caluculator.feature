Feature: Mobile App Feature
    Scenario: Verify user can perform addition operation on calculator
        When User taps on four
        And User taps on +
        And User taps on four
        And User taps on equals
        Then User verifies total is 8