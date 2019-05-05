# Gousto coding test

Hi there! We prepared a technical task so we can get to know you better. Below you will find scenarios and further details on what this task is about.

If anything is unclear or you have any questions, feel free to get back to us. We want to make our technical task a pleasant experience so feel free to give us any feedback on this exercise.

## How to use:


### Prerequisites:

* `node js` >= 8.12
* `yarn` (you can install it globally by running `npm install -g yarn`)

### Commands:

* `yarn install` - installing dependencies
* `yarn start` - starting the app in dev mode
* `yarn start-windows` - starting the app in dev mode on windows
* `yarn build` - build the production artifacts
* `yarn test` - running the tests

## Application structure

Current functionality is divided into features. Since we only have one feature now, it's called products. There you can find a Container, which contains no logic and components inside, which has everything else.

Styling was moved to assets folder to not pollute the folders.

Search was moved to components as there's a great chance there will be more places where this can be reused. The component itself is very little and very easy to re-use.

## A list of missing functional requirements

None. I picked 2,5 hours time limit and I did it all. I missed some of the non-functional requirements, though.

## Possible improvements/ functionality
Added tests for store. It would be very great to add testing there, which would take some time to prepare mocked data, but it would confirm it's working there.

Added some prop-types, but didn't have time anymore to add some initial types when some of them doesn't exist.

App could be more responsive.

Reducer could be improved even further, as different dispatch calls now feels a bit cluttered there.

A better handling of API calls, when it fails especially.

## How to deliver your assessment

* Please fork/clone this repository to your own version control platform (GitHub, GitLab, BitBucket, etc.) and send us the link to it
* We will pay attention to the commits to see how the work was structured

## Functional requirements

### Task 1: As a user I want to see all available product categories
  
  * Given that I am a user
  * When I land on the main page
  * Then I can see the categories of products

### Task 2: As a user I want to see a list of products titles
 
  * Given that I am a user
  * When I land on the main page
  * Then I can see a list of products titles

### Task 3: As a user I want to see the products for the selected category
 
  * Given that I am a user
  * When I land on the main page view
  * And I click on 'Drinks Cabinet' category
  * Then I can see a list of products belonging to that category
  * And the selected category is bold

### Task 4: As a user I want to be able to search in the product title and description
  
  * Given that I am a user and I land on the 'Drinks Cabinet'
  * When I type ' serv' in the input search
  * Then the products matching the search input in title and/or description are shown below

### Task 5: As a user I want to be able to see the product description when I click on the product name
  
  * Given that I am a user and I land on main page
  * When I click on 'Borsao Macabeo'
  * Then I can see the description appearing below and the title is bold
  * When I click again on the 'Borsao Macabeo'
  * Then I can see that the description is hidden
  * When I click on multiple products
  * Then all the clicked products descriptions are visible

### Task 6: As a user I want to be able to navigate with the browser's native back and forward buttons
  
  * Given that I am a user
  * When I am on the 'Drinks Cabinet' category
  * And I click on 'Large Alcohol' category
  * Then I can click on the back button from the browser
  * And I can see the 'Drinks Cabinet' category selected
  * Then I click forward button
  * And I can see the 'Large Alcohol' category selected

#### API endpoints:

* To get the categories: https://api.gousto.co.uk/products/v2.0/categories
* To get the products: https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&image_sizes[]=365
* For cross origin accessibility you can use [cross-fetch](https://www.npmjs.com/package/cross-fetch) that is already installed in package.json.

## Non-Functional Requirements 

* UI should be built with React, but you are allowed to use additional other libraries if needed
* Use your preferred library for state management (Redux dependencies are already set up, but you can use what you want)
* Use your preferred CSS solution/library. Use your imagination, but do not spend to much time for css
* The application should be responsive (the application can be used on mobile)
* The code should be production ready (i.e. include tests)

## Help us to understand your solution

* In order to understand better you solution we would like to see the following sections in a Readme:
    * `How to use`: details about how to use your solution(if anything different from what we added)
    * `Application structure`: explain the architecture - feel free to change the base structure from this test
    * `A list of missing functional requirements`: if any, and explain why you didn't complete them
    * `Possible improvements/ functionality`: anything that you wished you could've added if you had more time

## Visuals

![Image1](./public/first.png)
![Image2](./public/second.png)
![Image3](./public/third.png)