# Cat Voter Application

This project is a web application that integrates with **The Cat API**. Users can view random cat images and submit "votes" to the API to mark their favorites.

## how to run
- npm install
- node index.js

## Features
- **Fetch Data:** Retrieves 6 random cat images using a `GET` request. https://api.thecatapi.com/v1/images/search
- **Submit Data:** Sends a `POST` request to the API to record a vote for a specific image. https://api.thecatapi.com/v1/votes
- **Error Handling:** Gracefully handles API failures and displays user-friendly messages.

## Prerequisites
- [Node.js](https://nodejs.org/) installed.
- An API Key from [The Cat API](https://thecatapi.com/).

## Launch Instructions
1. Clone this repository:
   ```bash
   https://github.com/23-75125-pixel/api-integ.git