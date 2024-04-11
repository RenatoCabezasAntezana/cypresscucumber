Feature: Orange Main Page

    I want to open a search engine

    @focus
    Scenario: Opening a search Orange page
        Given I open Orange Page
        When I write "Admin" and "admin123"
        Then I click in the button
        And Select files