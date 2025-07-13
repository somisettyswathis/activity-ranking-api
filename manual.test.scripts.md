## ------Overview----------##
As a user, I want to enter a city or town name and receive a ranked list of activities 
(Skiing, Surfing, Outdoor Sightseeing,Indoor Sightseeing) for the next 7 days, based on weather conditions.
As I type in the search box, I should also see autocomplete suggestions for matching cities or towns to help me complete
my query faster.

## --------PreConditions---------------##
1.Application for API Ranking is developed and deployed and to be accessible to Staging or test environment.
2.Auto Complete functionality based on the city or town name should be implemented and Connected to the Valid data source(predefined list of cities)
3.The backend api should be integrated with the Open-Meteo API.
4.Internet and VPN (if applicable) Connection is stable

## Test Case1 : Verify the Suggestions for a given Input
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any text  ( ex: "Col")
4.Observe the Suggestions appearing for the word 'Col'
**Expected Result** User should be able to see the valid city Suggestions throughout the world that matches with given input dynamically.

## Test Case2 : Verify the activity rankings to a Valid City Input
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any known and Valid City ( ex: "Colchester")
4.Observe the suggestions appeared for the above city
5.Now,Select the city 'Colchester' from the dropdown.
6.Observe the activity rankings displayed for the selected City.
**Expected Result** 1.User should be able to see the valid city Suggestions throughout the world that matches with given input dynamically.
(ex: for 'Col' they should see all the valid cities throughout the world)
2.Verify that the API call is triggered on selecting the suggestion
3.Rankings should be displayed for the next 7 days with the below details
  --Date
  --Activity name (eg:Skiing)
  --Rank (1-10)
  --Reasoning (e.g., "High snowfall expected", "Clear skies and 22°C")

## Test Case3 : Check the Suggestions for handling invalid input type
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any text including with numbers,Special Characters (ex:21!@)
4.**Expected Result** 1.User shouldn't be able to allow to enter the input included with special characters, numbers.
2.User should be able to enter only String values as input.
(or)
3.User should see a message 'Invalid city, Please enter a valid city '

## Test Case4 : Check the Suggestions for handling invalid input 
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any random text(ex:zzzzzc)
4.Observe the suggestions appeared for the above input
**Expected Result** 1.User should see a message saying 'No Cities Found'

## Test Case5 : Verify that how the suggestions are working the API is failure/Timeout
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any valid city (ex: London')
4.Observe the suggestions appeared for the above input
**Expected Result** 1.User should see a valid message 'Unable to fetch the data. Please try again'

## Test Case6 : Verify that how the suggestions are working the API is responding slowly
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any valid city (ex: London')
4.Observe the suggestions appeared for the above input
**Expected Result** 1.User should see a 'Loading please wait' indicator
2.Once, the api loads the data they should see the matching suggestion for the given input

## Test Case7 : Verify that Suggestions start when user types second character 
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any character
4.Observe that for single character entry there is no suggestions given
5.Start typing second character
4.Observe the suggestions appeared for the above input
**Expected Result** 1.User should see the list of matching cities for the given input dynamically

## Test Case8 : Verify that how the case sensitivity of input data works
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any valid city in lower cases/ only Upper Cases (ex: london/ LONDON')
4.Observe the suggestions appeared for the above input
**Expected Result** 1.User should see the list of matching cities for the given input regardless of its case sensitivity

## Test Case9 : Verify that how the Suggestions works on Repeated Inputs
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any known and Valid City ( ex: "Colchester")
4.Observe the suggestions appeared for the above city
5.Now,Select the city 'Colchester' from the dropdown.
6.Clear the search and repeat the steps from 3 to 5
7.Observe the suggestions appeared for the above input.
**Expected Result** 1.User should be able to see the valid city Suggestions throughout the world that matches with given input dynamically.
2.Verify that the API call is triggered only once 

## Test Case10 : Verify that how the ranking is updated based on the suggestion selection
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any known and Valid City (ex: "Colchester")
4.Select the suggestions appeared for the above city
5.Observe the activity rankings displayed for the selected City.
6.Clear the city input box
7.Now, again repeat the steps from step 3 to 5
**Expected Result** 1.User should be able to see the valid city Suggestions throughout the world that matches with given input dynamically.
2.Verify that the API call is triggered on selecting the suggestion
3.No duplicate api calls should happen when we search for same city
4.Rankings should be displayed for the next 7 days with the below details
--Date
--Activity name (eg:Skiing)
--Rank (1-10)
--Reasoning (e.g., "High snowfall expected", "Clear skies and 22°C")

## Test Case11 : Verify the activity rankings accuracy
**Test Steps**
1.Navigate to the Application.
2.Click on the City Search Input box.
3.Start typing any known and Valid City ( ex: "Colchester") by knowing the temperature as Sunny for today or tomorrow
4.Observe the suggestions appeared for the above city
5.Now,Select the city 'Colchester' from the dropdown.
6.Observe the activity rankings displayed for the selected City.
**Expected Result** 1.User should be able to see the valid city Suggestions throughout the world that matches with given input dynamically.
(ex: for 'Col' they should see all the valid cities throughout the world)
2.Verify that the API call is triggered on selecting the suggestion
3.Rankings should be displayed for the next 7 days with the below details
--Date
--Activity name (--should include the 'Outdoor sightseeing for the sunny day' )
--Rank (1-10)
--Reasoning (e.g.,"Clear skies and 22°C")