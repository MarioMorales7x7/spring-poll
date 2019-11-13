# Spring-Poll
An interactive polling application using a Java backend and a React frontend

# ![GIF OF DEMO](https://i.imgur.com/)

<p align="center">
  <img width="800" height="500" src="">
</p>

## Introduction

This project's intent was to produce a MVP where a OAuth and Spring Security was utilized.

## About

*Spring-Poll* is intended for users that want to create time sensitive polls
 in a secure setting. <br />

Polls can be limited by days and hours and users can then add an unspecified amount of choices per unique poll section. <br />

*Spring-Poll* utilizes a SQL database that aggregates time-stamped resources from profile and role managed entities.

## Tech Stack

*Spring-Poll* was built primarily with ReactJS on the front end and Java/Spring Boot on the backend. Other key technologies used are listed below: 

## Technologies
<table style="width:60%">
  <tr>

  </tr>
  <tr>
    <td class="subheading">Frontend</td>
    <td><img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="65"/></td> 
    <td><img src="https://material-ui.com/static/images/material-ui-logo.svg" width="58"/></td>
    <td><img src="https://lh5.googleusercontent.com/pqPRWyCMu39CU4GAERH3XI0fri2uJzMteIV5t-4qAG566IJWdXRABxLjV1jwdVvID-NvFw3USgyM8FXC5w_yAimYz4FY1gVEm96Yd2JQZh-pYl33lHpbOI7-3-uTixqgX1XHRker" width="75"/></td>
    <td></td>
    <td class="tech">React/Material-ui/ReactRouter</td>
  </tr>
  <tr rowspan="2">
    <td class="subheading">Backend</td>
    <td><img src="https://spring.io/img/homepage/icon-spring-boot.svg" width="55"/></td> 
    <td><img src="https://img.stackshare.io/service/6656/com.castsoftware.springsecurity.png" width="65"/></td>
    <td><img src="https://hibernate.org/images/hibernate-logo.svg" width="85"/></td>
    <td><img src="https://logos-download.com/wp-content/uploads/2016/05/MySQL_logo_logotype-700x413.png" width="75"/></td>
    <td class="tech">Spring Boot/Hibernate/MySQL</td>
  </tr>
  
  <tr>
      <td>Dev Tools</td>
      <td><img src='https://cityscoutssss.s3.us-east-2.amazonaws.com/kisspng-webpack-computer-icons-scalable-vector-graphics-re-webpack-svg-icon-transparent-amp-png-clipart-fre-5cb7987106ca27.6083469215555359850278.png' width="60"></td>
      <td><img src='https://i2.wp.com/endlessillusoft.com/wp-content/uploads/2017/01/babel.png?w=1280' width="80"><img></td>
      <td><img src='http://maven.apache.org/images/maven-logo-black-on-white.png' width="70"/></td>
      <td></td>
      <td>Webpack/Babel/Maven</td>
    </tr>
      <tr rowspan="3">
  </tr>
</table>

## Technical Challenges and research that you anticipated

    * Why, what was the plan to overcome those challenges?
    * What did you learn?
  
## Challenges that were unexpected

    * Why was it a challenge
    * What did you learn?
  
## Video Demo / Screen shot walkthrough of the app 

    * What were the user stories /  what was MVP (mention Minimal Viable Product)
  
## How does the app work?

    * What happens behind the scenes when the user interacts with it? 
    * OR What are all the place the data travels?  What happens to that data?
    * Optionally include a diagram
    * How does the tech stack come together?

## What research was required?

## Workflow and Key lessons from your team - specifically those related to: Agile, CI/CD, testing, working with external stakeholders, ticketing, and user stories.

    * Your git workflow, style guides, commit guides, etc
    * What did you learn from the process
    * What were key takeaways from stand ups, code reviews, etc
    * Writing tests
    * Link to your trello board, discuss completed tickets

## Any non-MVP tickets (optional)

 - Code refactorings
 - Performance Optimizations
 - Additional features
 - etc

## Notes from your Sprint Retro



## What additional features do you plan to add, how do you plan to implement those features?

    * Future refactoring?
    * Additional dev ops considerations?
    * UI/UX additions?



### Technical Challenges/Research
Some unexpected challenges encountered while building this app:
- Compilation conflicts with linting when using libraries such as moment.js
- Compartmentalizing various feature builds across many developers with minimal conflict
- Implementation of OAuth brought about interesting and unforseen challenges

As a team, we gained experience with large-scale SQL manipulation, with utilizing cron jobs, with cross-component Material-UI, and with building efficient data compatibility layers.


# Client Deliverables
Our team developed the following user stories to track deliverables and meet the expectations of our client:

#### User Stories
* As a user I should see suggestions for activities to do during my free time
* As a user I would like to see suggestions for what to do during the next three days
* As a user I do not want to be overwhelmed by choices on the initial visit to the page
* As a user I want an application that integrates with my Google Calendar
* As a user I do not want to see events that occur during times I am busy
* As a user I should be able to click a button to add an event directly to my calendar
* As a user I should be able to indicate my preference for what types of events I do and do not want to see
* As a user I should be able to indicate times I am unavailable that are not already on my Google Calendar
* As a user I should be able to reject a suggested event and be presented with a different event for that day
* As a user I should be able to browse all events on a given day
* As a user I should be able to browse all events available on all days

## Minimum Viable Product (MVP)

The MVP of the app retrieves events from multiple APIs, and displays events which fit users' free time availability and category selection preferences. Users can choose to add an event to their calendar, to reject an event from the list, and to modify their categories in settings.

### How the App Works:
![GIF OF DEMO](https://media.giphy.com/media/Yq8XBJUsoPTHaFkc7p/giphy.gif)

![IMG OF SCHEMA](https://raw.githubusercontent.com/hratx-blue-ocean/blue512/development/db/Schema.png)
