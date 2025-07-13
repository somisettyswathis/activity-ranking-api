# activity-ranking-api
This repository contains the QA deliverables for the Activity Ranking API feature, including manual test design, BDD scenarios, and automated test scripts using Cypress.

#feature Summary
Description:
As a user, I want to enter a city or town name and receive a ranked list of activities

Skiing, Surfing, Outdoor Sightseeing,

Indoor Sightseeing) for the next 7 days, based on weather conditions.
As I type in the search box, I should also see autocomplete suggestions for matching cities or towns to help me complete
my query faster.

Acceptance Criteria:
The API accepts a city or town name as input.
It fetches 7-day weather data using Open-Meteo APIs.
It ranks each day for each activity based on weather suitability.
The response includes:
Date
Activity name
Rank
1
10
Reasoning (e.g., "High snowfall expected", "Clear skies and 22°C")
The search box provides autocomplete suggestions as the user types.
Suggestions are based on a predefined or dynamic list of cities.
Selecting a suggestion triggers the activity ranking request.

#Deliverables 

 #Maunal.test.scripts.md
 --Overview
 --Preconditions
 --Test Cases included with detailed steps and Expected Results

 #bdd.test.scripts.feature
 --Gherkin-Stype BDD Criteria
 --Covers
  --Happy Path
  --Edge Cases
  --Api failure

#activitySearch.cy.ts
 --Cypress test cases for the above scenarios
 --Used Interceptors to cover API responses
 --Used data-cy-id for locators
 --All the input data is included in cypress.env.json file

 #Cypress.env.json
 --Input data is icluded
 
 #commands.js
 -- Reusuable code is added in Commands 
 #package.json
 --included with the dependencies

 #How Internet and AI Assisted
 -- With Google , I have searched for the open-meteo api to see how it is giving the auto complete suggestions
 -- Whilch helped me to write the error messages text and to cover few edge case scenarios
 -- Also, helped me to add the files to git Repository 

 



