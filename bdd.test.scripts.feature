Feature: Activity Ranking and City Autocomplete
  As a user, I want to enter a city or town name and receive a ranked list of activities ( Skiing, Surfing, Outdoor Sightseeing,
  Indoor Sightseeing) for the next 7 days, based on weather conditions.
  As I type in the search box, I should also see autocomplete suggestions for matching cities or towns.

  Background:
    Given application is up and running
    And Search field is visible

    Scenario: Enter a valid city and sees activity rankings
      When I type "Col" in search
      Then I should see a list of suggestions
      When I serlect "Colchester" from the suggestions
      Then I should see a 7-day activity ranking
      And I see the list of activities with :
      |Date|
      |Activity|
      |Rank(1-10)|
      |Reasoning |

    Scenario: Enter a text with no matching suggestions
      When I type "zzzzzc" in search
      Then no suggestions should be displayed
      And I see a message "No Cities Found"

    Scenario: Enter an invalid characters as input
      When I type "21!@" into the search box
      Then the input should be rejected or not trigger a search
      And I see an error message "Please enter a valid city" is displayed

    Scenario: Enter a valid input but API is down
      Given API is unavailable
      When I type "Colchester" into the search box
      Then I see an error message "Unable to fetch the data. Please try again"




