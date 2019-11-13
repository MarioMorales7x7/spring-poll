# Spring-Poll
An interactive polling application using a Java backend and a React frontend

# ![LOGO](https://i.imgur.com/)

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
    <td><img src="https://material-ui.com/static/images/material-ui-logo.svg" width="65"/></td>
    <td><img src="https://lh5.googleusercontent.com/pqPRWyCMu39CU4GAERH3XI0fri2uJzMteIV5t-4qAG566IJWdXRABxLjV1jwdVvID-NvFw3USgyM8FXC5w_yAimYz4FY1gVEm96Yd2JQZh-pYl33lHpbOI7-3-uTixqgX1XHRker" width="75"/></td>
    <td></td>
    <td class="tech">React/Material-ui/ReactRouter</td>
  </tr>
  <tr rowspan="2">
    <td class="subheading">Backend</td>
    <td><img src="https://spring.io/img/homepage/icon-spring-boot.svg" width="55"/></td> 
    <td><img src="https://img.stackshare.io/service/6656/com.castsoftware.springsecurity.png" width="75"/></td>
    <td><img src="https://hibernate.org/images/hibernate-logo.svg" width="85"/></td>
    <td><img src="https://logos-download.com/wp-content/uploads/2016/05/MySQL_logo_logotype-700x413.png" width="75"/></td>
    <td class="tech">Spring Boot/Spring Security/Hibernate/MySQL</td>
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

## Technical Challenges/Research
Some unexpected challenges encountered while building this app:
- Implementation of OAuth and Spring Security brought about interesting and unforseen challenges
- Compile errors across different files when data was transformed in unintended ways
- Password length requirements when converting into a hash to be stored in the database

# Deliverables
I developed the following user stories to track deliverables and set expectations for future features:

## User Stories
* As a user I should see different questions I can answer when I load the page
* As a user I want to be able to create an account
* As a user I do not want to be overwhelmed by the amount of polls presented to me
* As a user I want my password to be securely stored
* As a user I do not want someone else to use my profile without my credentials
* As a user I should be able to leave the page and come back within a short amount of time and not have to log in again
* As a user I should be able to logout
* As a user I do not want stay logged into the application when I leave the site after a specified amount of time
* As a user I want to able to create a poll
* As a user I should be able to vote on polls
* As a user I should be able to see all my past polls
* As a user I should be able to the results of my polls

## Research Requirements

The biggest research requirement was how to utilize spring boot. I have an understanding of Java but 
I never attempted production level code with Java until this application. My experience revolved around Java applets which are mostly absolete in the current market.

## Key Lessons

My biggest take away is that Java is very robust and the Spring Boot simplified the overall process by cutting down on the upfront configuration time. Another lesson is that in order for Java to be effective on the back end a developer has to actively apply the principle of seperation of concerns. Java is too robust to not seperate it into different (easily navigatable) file structures. Lastly,the Object Oriented Programming aspect was very helpful because it cut down on time cost when I could just extend a super class I created and then modified the child to be what I needed for the project.

## Minimum Viable Product (MVP)

The MVP of the app scaffolds the api endpoints for login/signup and sets up the backend to handle request from users of different rolls. The main focus of the MVP is to set up OAuth (JWT) and Spring Security. Functionality of the application will be added as time permits.

MVP was achieved in 48 hours:
![IMG OF SIGNUP](https://github.com/MarioMorales7x7/spring-poll/blob/master/pictures/Post_Request_User_Signup.PNG)

![IMG OF LOGIN](https://github.com/MarioMorales7x7/spring-poll/blob/master/pictures/Post_Request_User_Login_Fail.PNG)

![IMG OF LOGIN](https://github.com/MarioMorales7x7/spring-poll/blob/master/pictures/Post_Request_User_Login_Pass.PNG)

![IMG OF QUERY](https://github.com/MarioMorales7x7/spring-poll/blob/master/pictures/MySQL_Query.PNG)

### How the App Works:
![GIF OF DEMO]()

![IMG OF SCHEMA](https://github.com/MarioMorales7x7/spring-poll/blob/master/pictures/Schema_UML_diagram.png)

## Future Releases
The application will updated approximately once a week to integrate user centric features and build on the front end
