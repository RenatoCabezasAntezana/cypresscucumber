Feature: Testing to the bookings service

    Scenario: successful access
        Given the user has an account
        When validate user credentials
            | username | password    |
            | admin    | password123 |
        Then validate response code booking "200"


    Scenario: List all ids bookings
        Given list ids
        When show the list of ids
        Then validate response code booking "200"


  Scenario: Show reservations
    Given there is list reservation
    When show booking information
    Then validate response code booking "200"



#   Scenario: Create new reservation
#     Given the user has not created a reservation
#     When register reservation data
#       | firstname | lastname | totalprice | depositpaid | checkin    | checkout   | additionalneeds |
#       | Renato    | Cubas    | 111        | true        | 2018-01-01 | 2019-01-01 | Breakfast       |
#     Then validate response code booking "200"