# MVC Tech Blog

## User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in X

WHEN I click on the homepage option
THEN I am taken to the homepage X

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in X

WHEN I choose to sign up
THEN I am prompted to create a username and password X

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site X

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password X

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out X

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created (currently contains more information than this)

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

This Challenge is graded based on the following criteria:

## Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Application’s folder structure follows the Model-View-Controller paradigm.

Uses the express-handlebarsLinks to an external site. package to use Handlebars.js for your Views.

Application must be deployed to Heroku.

## Deployment: 32%
Application deployed at live URL.

Application loads with no errors.

Application GitHub URL submitted.

GitHub repository contains application code.

## Application Quality: 15%
User experience is intuitive and easy to navigate.

User interface style is clean and polished.

Application resembles the mock-up functionality provided in the Challenge instructions.

## Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a quality README file with description, screenshot, and link to deployed application.