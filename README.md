# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Austin Heraughty
## Overview.

Social Web app for making posts publically. Users can sign up to make or delete posts.

- Sign up
- Login/Signout
- Create and delete posts made to a public feed

Some bugs identifies during development. THe highlighted view should be shown in the navbar with black text instead of white. However as the home page url was / The home view is additionally seen as selected regardless of the view you are on. 

The delete function deletes all, rather than the selected post. This appears to be an open issue so I was unable to find a solution. 
https://github.com/typicode/json-server/issues/578

## Setup.

 - npm install
 - npm run server
 - npm start

## Data Model Design
~~~
          
          {FirebaseContextWrapper[App]}
                |
            [Navigation]
   _______________|________________________________________
   |           |           |           |                   |
[Feed]      [CreateForm]  [Login]   [REgistrationForm]  [SignOut]
   |
[Post]

~~~
Context API wraps app to keep track of user being logged in

## UI Design.

<img src="./public/landingpagenonauth.png">

>> Welcomes the user and encourages them to sign up. Nonauthorised Navbar seen at top of screen.

<img src="./public/landingpageauth.png">

>> As before, but returned to following login. NAvbar options have changed.

<img src="./public/feed.png">

>>Created posts listed here

<img src="./public/createForm.png">

>> This form used to take user input to post to feed

<img src="./public/loginForm.png">

>> This form used to register a user as a member of the website through firebase

<img src="./public/registrationForm.png">

>> This form takes user data and registers them as site users




## Routing.

- / (public)- Welcome page - Public - Suggests login/registration, (Private) - Welcomes the user back
- /feed (private)- View all public posts made 
- /create (private) - submit a new post 
- /login (public) - page used to login to website
- /register (public) - page used for new users to join the site


## Storybook.


<img src="./public/expandedStorytree.png">
This is the expanded story tree. Many stories ceased to function after adding context wrappers giving a bizarre error with very little information.
 
 ~~~
 You may not use a outside of a 
 ~~~

Because of this, I ceased using storybook to aid in developing the app though I did find it both intuitive and useful in the early stages of the app. 

## Backend 
Json serverstores posts made by users. Axios used to generate get, post and delete requests.

## Authentication

Firebase implemented for user registration. Signin/Signout handled by firebase, though no user personalisation implmented

