# Requirements Analysis Document

> This is the Requirements Analysis Document (RAD) for creating the clone of Hacker News Website. We have made the following structure of the document, making it easy to explore the content, and to quickly navigate to specific parts of the RAD.

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

### Scope of the system

### Objectives and success criteria of the project

### Definitions, acronyms, and abbreviations

### References

### Overview

## Current system

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
 1. Not a registered user
---
**Scenario name**		Not a registered user

---
**Participating actor**		Bob, a new user instance			

---
Flow of events
1. Bob, who has not used Hackernews before, decides he wants to use some of the features that require him to log in. At the log in page he fills in a username and password to create a new account.
2. If the username is already taken, he will be given the option to try again. 
3. If everything is ok, Bob will be logged into Hackernews, and be able to use the other features.
---
 2. A registered user
---
Scenario name			A registered user

---
Participating actor		Harry, a previous user instance

---
Flow of events
1. Harry, a user who has previously registered on the website, wants to use the features that require him to be logged in.
2. He enters his username and password, and is then logged into the site.
3. He can now use the extra features.
---
 3. Forgotten password
---
Scenario name				Forgotten password

---
Participating actor			Harry, a previous user instance

---
Flow of events
1. Harry has forgotten his password so he clicks on the Forgot your password link on the log in page.
2. Harry enters his username and presses the Send reset email button. 
3. The system will send a link to his registered email address where he can type in a new password.
4. He is then returned to Hackernews, where he can log in with the new password.
---
##### Interact With a Post
 1. Create a post
 2. Comment on a post
 3. Hide a post
 4. Favorite a post
 5. Upvote a post
 6. Google a post
##### Monitor Activity on Website
 1. Leaders (users with most karma)
 2. Front
 3. Best
 4. Active
 5. Best comments
 6. Noob stories
 7. Noob comments
##### Handle Inappropriate Behaviour
 1. Ban IP address
 2. Flag a comment
 3. Reporting Instances of Copyright Infringement
##### Update User
 1. Write an “about” section
 2. Add email
 3. Change password
 4. Limit no. of profile visits
 5. Stop procrast
#### Use case model
1. Signing In
2. Interact With a Post
3. Monitor Activity on Website
4. Handle Inappropriate Behaviour
5. Update User
#### Object model
TODO
#### Dynamic model
TODO
#### User interface—navigational paths and screen mock-ups
TODO
## Glossary
