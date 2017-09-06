# Requirements Analysis Document

This is the Requirements Analysis Document (RAD) for creating the clone of Hacker News Website. We have made the following structure of the document, making it easy to explore the content, and to quickly navigate to specific parts of the RAD.

1. [**Introduction**](#introduction)
	1. [Purpose of the system](#purpose-of-the-system)
	1. [Scope of the system](#scope-of-the-system)
	1. [Objectives and success criteria of the project](#objectives-and-success-criteria-of-the-project)
	1. [Definitions, acronyms, and abbreviations](#definitions-acronyms-and-abbreviations)
	1. [References](#references)
2. [**Current system**](#current-system)
3. [**Proposed system**](#proposed-system)
	1. [Functional requirements](#functional-requirements)
	1. [Nonfunctional requirements](#nonfunctional-requirements)
		1. [*Usability*](#usability)
		1. [*Reliability*](#reliability)
		1. [*Performance*](#performance)
		1. [*Supportability*](#supportability)
		1. [*Implementation*](#implementation)
		1. [*Legal*](#legal)
	1. [Systemmodels](#systemmodels)
		1. [*Scenarios*](#scenarios)
		1. [*Use case model*](#use-case-model)
		1. ~~*Object model*~~
		1. ~~*Dynamic model*~~
		1. ~~*User interface - navigational paths and screen mock-ups*~~
4. [**Glossary**](#glossary)

---

## Introduction
Some background on project:
### Purpose of the system
The purpose of the system is to create a working clone of the Hackernews website, with as much of the functionality that is possible. The reason we are making this project is as an assignment for the module in Large System Development, as part of the Bachelor in Software Development course at CPHBusiness in Lyngby.
### Scope of the system
We are going to make a clone of Hackernews. Hackernews is a website where registered users can post stories. As well as this, Hackernews enables discussions to take place by allowing users to write comments on stories, and on other’s comments.

Users can also vote-up and down-vote content, providing they have earned enough karma points(500), which are earned by users receiving up-votes on their content, minus the number of down-votes.
### Objectives and success criteria of the project
Our objectives and success criteria have been outlined as part of the project. We must:
1. Build a web application that can ingest new stories.
2. Present an overview of the stories.
3. Let users up-vote and down-vote published stories and comments.
4. Award karma points to users for their positive voting.
5. Store the content and user information in a database.
6. Make a REST API so that external programs can access the information, and query the state of our system.
7. Make sure that our program is up and running 95% of the time, even if we are running maintenance or upgrades.
### Definitions, acronyms, and abbreviations
Important terms are as follows:

Term | Definition 
----------------|----------------------
User		|	A user of Hackernews.
Story		|	A story that has a link added to Hackernews, by a user.
Up-vote		|	Giving a story a positive vote.
Karma		|	The points earned by a user, the total number of up-votes received.
HNC		|	Hacker News Clone (the proposed system)
### References
https://news.ycombinator.com/
## Current system
We have not developed our version of the system yet. The system that exists is the Hackernews website at https://news.ycombinator.com/news. Our project task is to create a clone of this website with as much of the functionality as possible.

We will use this website for research into how we should develop the features and try to achieve our objectives.
## Proposed system
What is needed for the new system:
### Functional requirements
* Unregistered users should be able to read stories posted on the website
* Users should be able to register so that they can log in to use the extended features.
* Users should be able to change their password if they have forgotten it.
* Logged in users should be able to post stories to the website.
* Logged in users should be able to comment on other stories, and comments.
* Logged in users should be able to up-vote published stories and comments.
* Users should be able to earn karma points, as the number of up-votes given to their content, minus the number of down-votes.
* Logged in users should be able to flag content as spam.
* The website must be able to ingest new stories.
* The stories must be presented in an overview like the Hackernews page.
* All data must be stored in a database. 
* A REST API must be made that allows a simulator program to publish stories and comments to the system.
* The REST API must also allow an external program to query the state of our system, i.e., up-and running, upgrade, etc.
* The system must be deployed on a publicly visible server.
* The system must have a 95% uptime from 2/11 until 14/12, even if we are undertaking maintenance etc.
* Buffers must be in place to keep the system up to date during down times.
### Nonfunctional requirements
Here are the different non-functional requirements:
#### Usability
* HNC needs to be accessible at least 95% of the time.
* HNC has to look like the current system.
* HNC must perform some kind of buffering for incoming stories and comments, so in case of maintenance or alike, the data will not be lost.
* HNC must react whenever a story or comment is "flagged".
* HNC needs to assist the user if that user has forgotten his / hers password.
#### Reliability
* All functions and components of the project code is to be tested during development to ensure functionality for the end-user once it hits production.
* Automating the tests will give provide the project with code coverage statistics, where the system will keep at a minimum of 80 % code covered.
#### Performance
* Stories must be available to the other users upon creation of the author.
* All stories, however, must be processed and cross checked for forbidden words. This will take little to no time for the system to complete.
#### Supportability
* The HNC will be not be browser dependent. It should be able to run on any browser with an active internet connection.
#### Implementation
* The HNC will be implemented in a mix of Java and Javascript.
* All mockups for the frontend will be made with paper prototype, seeing that it is easy to change things there.
#### Legal
* HNC will have requirements to its users, e.g., minimum age, rules of conduct on the website, spam rules, etc.
* HNC does not support any kind of Instances of Copyright Infringement and any story or comment or alike will be deleted immidiately and user IP will be banned.
### Systemmodels

#### Scenarios:
##### Signing In
**==================================================**

---
**Scenario name**		Not a registered user

---
**Participating actor**		Bob, a new user instance			

---
Flow of events
1. Bob, who has not used Hackernews before, decides he wants to use some of the features that require him to log in. At the log in page he fills in a username and password to create a new account.
2. If the username is already taken, he will be given the option to try again. 
3. If everything is ok, Bob will be logged into Hackernews, and be able to use the other features.

**==================================================**

---
**Scenario name**		A registered user

---
**Participating actor**		Harry, a previous user instance

---
Flow of events
1. Harry, a user who has previously registered on the website, wants to use the features that require him to be logged in.
2. He enters his username and password, and is then logged into the site.
3. He can now use the extra features.

**==================================================**

---
**Scenario name**		Forgotten password

---
**Participating actor**		Harry, a previous user instance

---
Flow of events
1. Harry has forgotten his password so he clicks on the Forgot your password link on the log in page.
2. Harry enters his username and presses the Send reset email button. 
3. The system will send a link to his registered email address where he can type in a new password.
4. He is then returned to Hackernews, where he can log in with the new password.

**==================================================**
##### Interact With a Post
**==================================================**

---
**Scenario name**               Create a post

---
**Participating actor**        	User instance            

---
Flow of events
1.  A user who decided to submit a new post, logs in into the system.
2.  He clicks submit, fulfill all the necessary fields and click submit. 
3.  If everything is ok, user’s post will appear in a feed

**==================================================**

---
**Scenario name**               Comment on a post

---
**Participating actor**         User instance

---
Flow of events
1.  Logged user wants to comment specific post.
2.  He clicks on comments underneath the post which points him to new view where he is able to view other comments as well as submit his own.
3.  He writes comment and submit it.

**==================================================**

---
**Scenario name**               Hide a post

---
**Participating actor**         User instance

---
Flow of events
1.  User does not like a post so he decides to hide it.
2.  He clicks on hide button under the post.
3.  The newsfeed will refresh without the hidden post.

**==================================================**

---
**Scenario name**               Favorite a post

---
**Participating actor**         User instance

---
Flow of events
1.  User likes a post so he decides to bookmark it as favorite.
2.  User clicks timestamp and he is redirected to “comment” view. 
3.  He clicks favorite and he is redirected to favorites section.

**==================================================**

---
**Scenario name**               Upvote a post

---
**Participating actor**         User instance

---
Flow of events
1.  User likes a post so he decides to upvote it.
2.  He clicks on arrow button next to the post button.
3.  The post is now upvoted with new option to unvote it underneath.

**==================================================**

---
**Scenario name**               Search for a post

---
**Participating actor**         Visitor, User instance

---
Flow of events
1.  User/Visitor decides to search for s specific post, so he clicks in a search bar.
2.  User/Visitor enters keywords and hits enter. 
3.  User/Visitor is shown search results in a new window.

**==================================================**
##### Monitor Activity on Website
**==================================================**

---
**Scenario name**		Leaders (users with most karma)

---
**Participating actor**		John (a user), App (the website) 			

---
Flow of events
1. John, a user of the Hacker News Website, reads a post which doesn't seem very credible / trustworthy. He knows that App has various lists of its users, one of them being a list of users with the most karma (received by up-voted posts).
2. John clicks the link to navigate to the lists.
3. App now shows all its lists, Leaders (most karma points) being among them.
4. John chooses Leaders, and App provides a fresh view of its top users (those with most karma points).
5. John sees the name of the same user on this list as the one who had written the post he only just read.
6. John is relaxed, the post was authentic.

**==================================================**

---
**Scenario name**		Front

---
**Participating actor**		John (a user), App (the website)			

---
Flow of events
1. John feels for a Throwback Thursday. He wants to see old posts from the front page submissions, and clicks on the "list" button which App has put on the page.
2. John finds the Front list and clicks it. App now gives clear instructions on how to use the list, and John is satisfied.
3. John enters the date, in specified format, and retrieves the front page submissions from that day.
4. John is pleased, he has a throwback Thursday.

**==================================================**

---
**Scenario name**		Best

---
**Participating actor**		John (a user), App (the website)			

---
Flow of events
1. John is bored, and can't really come up with anything new, so he decides to check out what other people are discussing at the moment. But he doesn't want to see any post, he wants to see only those that are top rated right now.
2. John clicks on the List button, and find his list "Best" and clicks it.
3. John is now shown, by App, the top rated links on it.
4. John is glad, he has found an interesting discussion to partake in.

**==================================================**

---
**Scenario name**		Active

---
**Participating actor**		John (a user), App (the website)			

---
Flow of events
1. TODO

**==================================================**

---
**Scenario name**		Best comments

---
**Participating actor**		John (a user), App (the website)			

---
Flow of events
1. TODO

**==================================================**

---
**Scenario name**		New User creating Stories

---
**Participating actor**		New User instance

---
Flow of events
1.1  Logged user wants to submit a new story.
1.2  The user clicks on the "submit" menu item from the menu list, a new view opens with a form allowing the user to submit a story.
1.3  The user creates the story and submit it.

2.1 A non logged in user wants to submit a new story.
2.2 The user clicks on the "submit" menu item from the menu list, a new view opens to enable the user log-in before procceding.
2.3 Upon log-in a new view opens with a form allowing the user to create and submit a new story.
2.4  The user creates the story and submit it.

**==================================================**

---
**Scenario name**		New User Comments

---
**Participating actor**		New User instance

---
Flow of events
1.  Logged user wants to comment a story or another comment under a story.
2. He clicks on comments underneath the post which points him to new view where he is able to view other comments as well as submit his own or comment on other comments.
3.  He writes comment and submit it.

**==================================================**
##### Handle Inappropriate Behaviour
**==================================================**

---
**Scenario name**		User ban

---
**Participating actor**		Admin instance

---
Flow of events

1. An admin can see all flagged posts
2. An admin can unflag post if it was flagged or ban 
3. An admin can ban the user that generated a story with political content or other story that initialized a dispute

**==================================================**
 * Flag a comment TODO

**==================================================**

---
**Scenario name**		Report a Post

---
**Participating actor**		User instance

---
Flow of events

1. A user want to report a story that might be offencive or disturbing 
2. A user flag a story by clickung the flag icon.
3. The user is prompt to verify that the action was taken intentionally to avoid mistakes 
4. The user confirms the intention of his action by clicking ok 
5. The story is reported as spam/offencive/disturbing

**==================================================**
 * Reporting Instances of Copyright Infringement TODO

**==================================================**
##### Update User
**==================================================**

---
**Scenario name**               Write an “about” section

---
**Participating actor**         User instance            

---
Flow of events
1.  A logged user who decided to change his about section, logs in into the system.
2.  He clicks on his username, fulfill “about” section and clicks update. 

**==================================================**

---
**Scenario name**               Add email

---
**Participating actor**         User instance

---
Flow of events
1.  A logged user who decided to add his email, logs in into the system.
2.  He clicks on his username, fulfill “email” input and clicks update. 

**==================================================**

 * Change password **TODO**

**==================================================**

---
**Scenario name**               Limit no. of profile visits

---
**Participating actor**         User instance

---
Flow of events
1.  A logged user who decided to restrict visitors on his profile logs in into the system.
2.  He clicks on his username, and chooses desired limit on visitors.

**==================================================**

---
**Scenario name**               Stop procrast

---
**Participating actor**         User instance

---
Flow of events
1.  User decides to restrict his own access to the website.
2.  User clicks on his username and in his profile he activates/deactivates noprocrast mode.

**==================================================**

#### Use case model

---
**Use case name**		Signing In

---
**Participating actors**	Initiated by User				

---
Flow of events	
1. A user decides he/she wants to use the features that require being logged into Hackernews.
2. The user creates a new username and password, or logs in with the username and password that they already have created.
3. The user has the option to change their password if they have forgotten it.
		
---
**Entry Conditions**		The user is not logged into Hackernews.

---
**Exit conditions**		The user is now registered and logged in to Hackernews.

---
**Quality requirements**
* The users username is unique.
* The users password is stored safely.

**==================================================**

**Use case name**		Interact With a Post

---	
**Participating actors**	Registerd User, Visitor

---
Flow of events 
1.  Either a user or a visitor decides to somehow interact with a post.
2.  Depending on action he is either permitted or not to do an action.
3.  If interaction was legal (User or Visitor had the right permission) the interaction is logged into system.
        
---
**Entry Conditions**		The user is logged into Hackernews.

---
**Exit conditions**		The user’s interaction is registered and logged in to Hackernews.

---
**Quality requirements**

**==================================================**

**Use case name**		Monitor Activity on Website

---
**Participating actors**	Registered User, The system               

---
Flow of events 
1. User decides to inspect the website "statistics" so he clicks on the List button.
2. User clicks on the desired list and is taken to that list.
3. User does whatever the user wants to do with the retrieved data.
        
---
**Entry Conditions**		The user is logged in to Hackernews. The system is up and running (cannot be in maintenance mode).

---
**Exit conditions**		The system has provided a newly calculated list for the user.

---
**Quality requirements**	None.

**==================================================**

4. Handle Inappropriate Behaviour

**==================================================**

**Use case name**		Update User

---
**Participating actors**	Registered User               

---
Flow of events 
1.  User decides to change his info so he clicks on his profile.
2.  User clicks on his username and is displayed his profile overview.
3.  He fulfills all tha inputs he wants to change and after click on update button everything is logged into system.
        
---
**Entry Conditions**		The user is logged into Hackernews.

---
**Exit conditions**		The user’s profile changes are sucessfully integrated into his profile.

---
**Quality requirements**

---
#### ~~Object model~~
#### ~~Dynamic model~~
#### ~~User interface—navigational paths and screen mock-ups~~
## Glossary
TODO
