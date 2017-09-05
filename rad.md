# Requirements Analysis Document

This is the Requirements Analysis Document (RAD) for creating the clone of Hacker News Website. We have made the following structure of the document, making it easy to explore the content, and to quickly navigate to specific parts of the RAD.

1. [**Introduction**](#introduction)
	1. [Purpose of the system](#purpose-of-the-system)
	1. [Scope of the system](#scope-of-the-system)
	1. [Objectives and success criteria of the project](#objectives-and-success-criteria-of-the-project)
	1. [Definitions, acronyms, and abbreviations](#definitions-acronyms-and-abbreviations)
	1. [References](#references)
	1. [Overview](#overview)
2. [**Current system**](#current-system)
3. [**Proposed system**](#proposed-system)
	1. [Overview](#overview)
	1. [Functional requirements](#functional-requirements)
	1. [Nonfunctional requirements](#nonfunctional-requirements)
		1. [*Usability*](#usability)
		1. [*Reliability*](#reliability)
		1. [*Performance*](#performance)
		1. [*Supportability*](#supportability)
		1. [*Implementation*](#implementation)
		1. [*Interface*](#interface)
		1. [*Packaging*](#packaging)
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
### References
https://news.ycombinator.com/
### Overview

## Current system
We have not developed our version of the system yet. The system that exists is the Hackernews website at https://news.ycombinator.com/news. Our project task is to create a clone of this website with as much of the functionality as possible.

We will use this website for research into how we should develop the features and try to achieve our objectives.
## Proposed system

### Overview

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

#### Usability

#### Reliability

#### Performance

#### Supportability

#### Implementation

#### Interface

#### Packaging

#### Legal

### Systemmodels

#### Scenarios
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

=============================================

---
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

---
##### Monitor Activity on Website
 * Leaders (users with most karma)
 * Front
 * Best
 * Active
 * Best comments
 * Noob stories
 * Noob comments
##### Handle Inappropriate Behaviour
 * Ban IP address
 * Flag a comment
 * Reporting Instances of Copyright Infringement
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

3. Monitor Activity on Website

**==================================================**

4. Handle Inappropriate Behaviour

**==================================================**

**Use case name**		Update User

---
**Participating actors**	Registerd User               

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
#### Object model
TODO
#### Dynamic model
TODO
#### User interface—navigational paths and screen mock-ups
TODO
## Glossary
