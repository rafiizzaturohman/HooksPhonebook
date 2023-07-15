# Phonebook

## Introduction

This is a simple full-stack React application that allows you to store the names and phone numbers of your friends, family or other people you know. An application based on [Sequelize](https://sequelize.org/), [PostgresQL](https://www.postgresql.org/), [ExpressJS](https://expressjs.com/), [ReactJS](https://react.dev/), [TailwindCSS](https://tailwindcss.com/), and [NodeJS](https://nodejs.org/en).

Client side code is written in React and the server API is written in ExpressJS.

## Before You Begin

Before you begin I recommend you to read about the basic building blocks that assamble this application:
* PostgresQL - Go through [PostgresQL Official Website](https://www.postgresql.org/) and proceed to their [Official Manual or Documentation](https://www.postgresql.org/docs/), which should help you understand SQL and PostgresQL better.
* ExpressJS - The best way to understand ExpressJS is through it's (Official Manuar or Documentation)[https://expressjs.com/], which has a (Getting Started)[https://expressjs.com/en/starter/installing.html] guide, as well an (ExpressJS)[https://expressjs.com/en/guide/routing.html] guide for general express topics.
* ReactJS - React's (Official Website)[https://react.dev/] is a great starting point.
* NodeJS - Start by going through (Node.JS Official Website)[https://nodejs.org/en] which should get you going with the Node.JS platform.

## Prerequsites

Make sure you have installed all of the following prerequisites on your development machine:
* Git - (Download & Install Git)[https://git-scm.com/downloads]. OSX and Linux machines typically have this already installed.
* Node.JS - (Download & Install Node.JS)[https://nodejs.org/en/download/current], and the npm package manager.
* PostgresQL - (Download & Install PostgresQL)[https://www.postgresql.org/download/], and make sure it's running on the default port  (27017).

## Technologies

Made with technology that is quite busy being used now in large or small companies, including:

Front End:
* ReactJS (ES6)
* React-Dom
* Redux
* Redux-Thunk
* Hooks
* Axios
* TailwindCSS
* FontAwesome
* ReactJS
  
_source files in ```client/``` folder_

Back End: 
* ExpressJS
* Sequelize
* cors
  
_source files in ```server/``` folder_

DataBase Management System(DBMS):
* PostgresQL

## Entity

### Contact

Components needed to add contact:
* Name
* Phone Number

## Features

* Responsive Design

<img title="Responsive" src="/images/Responsive.gif" />

* Scroll Pagination

<img title="Pagination" src="/images/Pagination.gif" />

* Add Contact

<img title="Add Contact" src="/images/AddContact.gif" />

* Update/Edit Contact

<img title="Edit Contact" src="/images/UpdateContact.gif" />

* Delete Contact

<img title="Delete Contact" src="/images/DeleteContact.gif" />

* Search Contact (Search for a contact by name or phone number or by name and phone number)

    * Search by name
<img title="By Name" src="/images/ByName.gif" />

## Quick Start

```bash
# Clone the repository
git clone https://github.com/rafiizzaturohman/HooksPhonebook

# Go inside the directory
cd HooksPhonebook

# Install dependencies for server
cd server && npm install

# Start Server
npm start
```

Open new terminal to run the client

```bash
# Go inside the directiory
cd HooksPhonebook

# Install dependencies for client
cd client && npm install
// Note: the process of installing dependencies for client dependencies can take some time.

# Start client
npm start
```

This application should run on port 3000, you can access it through browser, just go to http://localhost:3000/ for Client App and http://localhost:3010/ for RESTful API's.
