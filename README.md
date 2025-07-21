# Simple-weather-prediction
🌦️ Weather Prediction App
The Weather Prediction App is a lightweight and user-friendly web application built using AngularJS that allows users to search for real-time weather information by entering a city name. The app integrates with the OpenWeatherMap API to fetch and display current weather data, including temperature (in Celsius), weather conditions (such as clear sky, rain, snow), humidity, and more.

This application is designed to be simple and responsive, providing a clean user interface for quick and easy access to weather information. It's ideal for beginners looking to learn AngularJS and API integration, or anyone who wants a basic weather-checking tool.

🔧 Features
Get real-time weather updates for any city

Shows temperature in Celsius

Displays general weather condition and humidity

Uses AngularJS for dynamic data binding

Handles API errors with proper alerts

🧑‍💻 Technologies Used
AngularJS

HTML5

CSS3

JavaScript

OpenWeatherMap API

🚀 How It Works
The user enters a city name into the input field.

Upon clicking the “Get Weather” button, the AngularJS controller constructs a request URL using the city name and your OpenWeatherMap API key.

A GET request is sent using AngularJS's $http service.

If the response is successful, the weather data is bound to the view using $scope.

If there's an error (like an invalid city name), an alert is shown.

🔐 Setup Instructions
Clone this repository to your local machine.

Open the project folder and navigate to the app.js file.

Replace the API key placeholder with your OpenWeatherMap API key:

javascript
Copy
Edit
var apiKey = 'YOUR_API_KEY_HERE';
Open the index.html file in a browser and start using the app.

📌 Note
Ensure you have an active internet connection for the app to fetch API data. You can host this on GitHub Pages, Netlify, or any static hosting platform.
