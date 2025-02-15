# Reaction Tests
# By Sean McMillan, Liliana Foucault, Jin Ryoul Kim, and Jacob Van Steyn

Site Link (Heroku): https://reactiontests.herokuapp.com/

Overview video: (link): https://youtu.be/gmtfIiOumqo

# Introduction
Our website has a collection of 4 different timed tests for a user to take. One example is the Accuracy Test, where 5 buttons are shown in random places on the game screen. The user is timed by how long it takes to click all 5 buttons with no mis-click time penalty. There is leaderboard page that displays the top scores for each minigame on the website which only include logged-in user names. If the user is logged in, then underneath the leaderboard they can view all of their past scores. A user can login using a GitHub account, or play without being logged in. Users not logged in can still play and view the leaderboard.

# Technologies
We used ejs for the pages and components, and Boostrap for styling. Additional styling is defined in "style.css". The database of scores is stored using MongoDB. The website can be run locally and is also hosted on Heroku.

# Team Responsibilities
The majority of work was divided into client-server communication/set up, minigames, leaderboard, and login authentication. Sean worked on the leaderboard, personal scores, and client-server communication. Liliana worked on the frontend minigames, styling, and website accessibility. JR worked on the minigames, score graphs, backend... Jacob worked on the backend, login authentication, overall site styling (bootstrap & css), accuracy game, mongodb/mongoose, & Express.

# Challenges
There were two major challenges for this project. The first was having the UI look nice while also being accessible. We had to make some tough decisions when it came to the lighthouse test because while the test disliked some of our styling choices, we thought they looked nice. The other challenge was with chart.js. This was a new package to all of us and connecting it with the database became very challenging.

# Achievements 
As with previous assignments, we ensure Lighthouse scores of 100 in 3 categories with accessibility scoring a 97. We added a screenshot of the test called Lighthouse_test.png. Pages are easy to access given both header and footer links and descriptions. Our website has multiple fun minigames to test a user's abilities but also compare to an average score. We also added graphics using ChartJS to make the leaderboard and average scores per game more visually interesting.
