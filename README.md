# React-Foodie-App

## Overview

This project demonstrates a web application integrating Swiggy's publicly accessible API data for educational purposes. It showcases a React/Redux-based cart functionality, where users can add or remove items fetched from Swiggy's API.



> [!CAUTION]
> ### 📝 Disclaimer
> 1. This project is for educational purposes only and does not serve any commercial intent.  
> 2. The Swiggy API data used here is publicly accessible and is utilized purely to showcase API integration.  
> 3. Respecting Swiggy's intellectual property, no commercial gain is derived from this project.  
> 
> Swiggy is a registered trademark of Bundl Technologies Pvt. Ltd. This project is not endorsed by or affiliated with Swiggy.
> 
> *For any concerns regarding the use of data, please contact us.*


## 🌐 API Used

This application integrates with the following APIs to fetch real-time data:

### Swiggy API
- **Restaurants List**: Fetches a list of restaurants with details such as name, cuisine types, ratings, and delivery times.
  - Endpoint: `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

### GitHub API
- **User Information**: Fetches GitHub user information.
  - Endpoint: `https://api.github.com/users/VikeshKumar64`
- **User Repositories**: Fetches repositories of a GitHub user.
  - Endpoint: `https://api.github.com/users/VikeshKumar64/repos`

### Note
Please ensure you respect Swiggy's and GitHub's terms of service and intellectual property. The data fetched from these APIs should not be used for commercial purposes.



## Installation and Usage

1. Clone the repository.
   ```bash
   git clone https://github.com/VikeshKumar64/React-Foodie-App.git

2. Install dependencies using `npm install`.

3. Run the application using `npm start`.

## Pre-Requisites

Before getting started, make sure you have a modern Web browser like Google Chrome or Microsoft Edge installed on your PC.



## ✨ Features

### 1) Restaurant Browsing
  Explore detailed information about restaurants including names, cuisines, ratings, and estimated delivery times.

### 2) Menu Exploration
  View categorized menu items and add them to the cart.

### 3) Dynamic Cart Management
  Add, remove, and adjust the quantity of items in your cart in real-time.

### 4) Offline Detection
  Alerts users when they are offline to prevent data fetching errors.

### 5) Shimmer UI
  Provides a smooth loading experience with skeleton screens.

### 6) GitHub Integration
  Displays GitHub user information and repositories with direct links.

## 💻 Technologies Used

- **React**: JavaScript library for building user interfaces.
 
- **React Router DOM**: Declarative routing for React applications.
 
- **Redux Toolkit**: Efficient state management.
 
- **Fetch API**: To make HTTP requests and retrieve data.
 
- **Google Maps Embed**: Integrated maps for enhanced user experience.

## 🛠️ How It Works

### 1) Restaurant Browsing
  Users can explore a list of restaurants with details including name, cuisine types, average ratings, and delivery times.

### 2) Menu Exploration
  Clicking on a restaurant allows users to view its categorized menu items. Users can add items to the cart from the menu.

### 3) Cart Management
  Users can view, add, or remove items from their cart. The cart dynamically updates to show the current items and their quantities.

### 4) Offline Detection
  The app detects if the user is offline and displays a warning, ensuring no erroneous data fetch attempts.

### 5) Shimmer UI
  While data is being fetched, shimmer loading screens provide a visually appealing indication of loading.

### 6) GitHub Integration
  Shows GitHub user information and repositories, providing an interactive view of user data.


## 🧪 Test Cases

### 1) Valid Restaurant Data
**- Description**: Ensure that valid restaurant data is displayed correctly.
 
  <i>Screenshot:</i> ![image](https://github.com/VikeshKumar64/React-Foodie-App/assets/118073983/8468b552-4c4c-42b2-8f05-da9aa036e48f)


### 2) Menu Item Addition
<i>- **Description**: Verify that items can be added to the cart from the menu.</i>
  
  <i>Screenshot:</i> ![image](https://github.com/VikeshKumar64/React-Foodie-App/assets/118073983/fe3fde7d-cee0-47c8-a82c-17f7e1301a7f)

### 3) Cart Management
<i>- **Description**: Ensure items can be added, removed, and quantities updated in the cart.</i>
  
  <i>Screenshot:</i> ![image](https://github.com/VikeshKumar64/React-Foodie-App/assets/118073983/2cb989e2-9fc3-4ded-907f-a9fe241693b5)

### 4) Offline Handling
<i>- **Description**: Check that the offline warning is displayed when the user loses internet connection.</i>

  <i>Screenshot:</i> ![image](https://github.com/VikeshKumar64/React-Foodie-App/assets/118073983/d051920d-a0d2-4425-8b60-0b1a85539ea0)

### 5) Shimmer Loading
<i>- **Description**: Verify that the shimmer UI is displayed during data loading.</i>
  
  <i>Screenshot:</i> ![image](https://github.com/VikeshKumar64/React-Foodie-App/assets/118073983/00dc0df1-bd07-46b8-985c-032a480e6e77)

### 6) About us page.
<i>- **Description**: Verify that the About us Page is displayed.</i>
  
  <i>Screenshot:</i> ![image](https://github.com/VikeshKumar64/React-Foodie-App/assets/118073983/990804fb-755b-4722-8c2c-2d59ad4864d6)

### 7) Contact us Page.
<i>- **Description**: Verify that the Contact us Page is displayed.</i>
  
  <i>Screenshot:</i> ![image](https://github.com/VikeshKumar64/React-Foodie-App/assets/118073983/fa42c232-14ba-47a4-9185-02098f7a1eeb)


