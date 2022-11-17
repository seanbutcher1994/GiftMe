
# GiftMe

## Table of Contents
* [Project description](#description)
* [User Story](#user-story)
* [How to install the app](#installation)
* [How to use the app](#usage)
* [Credits](#credits)
* [License](#license)

# Project description
This project is to build the front end and back end for a gift list site

# User Story
As a user, I want a web application which I can create and store a list of gifts that I wish to receive or purchase, and it is visible to other users.

WHEN I visit the site for the first time
THEN I am presented with the homepage, which has a statement describing this web app, and the button for sign-up.

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
Then I will be redirected to the link we clicked before signed in.

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with feeds that include the details (item, costs, and date created) of addition from other users.

WHEN I click on any feed
THEN I am redirected to the users profile and can read all the details (item, costs, link and date created) of their wish list.
which shows the feed displaying the most recent additions to other users wishlist.

WHEN I click on my profile icon
THEN I am presented with my own wish list, and options to add/remove items. (edit being future development)

WHEN I am in my own profile, and click the add item button,
THEN I am presented with the new item creator page with inputs required (item, costs, and a link)

WHEN I press save button, 
THEN it will show that the addition is successful and I am redirected to my wish list after 3 seconds.

WHEN I am in my own profile, and click the remove item button next to the item I want to remove,
THEN I am met with a confirmation message.


# How to install the app

* Run "npm install"
* Login to mysql by enter "mysql -u root -p" in the cmd environment
* Then source the schema.sql
* Quit mysql and get back to the file folder
* Run "npm run seed"
* Run "npm start"

# How to use the app
Users can view, add, edit or delete data via Insomnia, by using the command like "GET, POST, PULL and DELETE.



# Credits

# License
MIT