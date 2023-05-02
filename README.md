# The Bot Battler

## Introduction

The Bot Battler is a web application built using React that allows users to create and manage their own bot army. Users can browse a collection of bots, add them to their army, remove them from their army, and sort them by various attributes such as health, damage, and armor.

## Getting Started

To get started with The Bot Battler, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the necessary dependencies by running `npm install`.
4. Start the development server by running `npm start`.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

The Bot Battler has the following features:

- Browse a collection of bots.
- Add bots to your army.
- Remove bots from your army.
- Sort bots in the collection by health, damage, or armor.
- View your current bot army.

## Technologies Used

The Bot Battler was built using the following technologies:

- React
- JavaScript
- HTML
- CSS

## Code Overview

The `App` component is the main component of the application. It maintains the state of the bots collection, the user's bot army, and which component to render (either `BotCollection` or `YourBotArmy`). It also contains functions to sort the bots and add, remove, and discharge bots from the army.

The `BotCollection` component displays the collection of bots and allows the user to add bots to their army.

The `YourBotArmy` component displays the user's current bot army and allows the user to remove bots from their army or discharge them (which removes them from the army and also deletes them from the backend).

The `SortBar` component displays buttons to sort the bots by health, damage, or armor.

## Author

Github -(Vkerubo)
