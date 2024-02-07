Micro Frontends Application Documentation
=========================================

This document provides an overview of the Micro Frontends application, its architecture and how to run and develop it.

Overview
--------

The Micro Frontends application is a web application written in Angular 13 that uses micro frontends to create a modular architecture. It consists of three micro frontends:

-   Home Page Micro Frontend: Serves as the main application and the entry point for the user. It facilitates navigation to the other micro frontends.
-   ChainsawStore Page Micro Frontend: Presents information about Chainsaw Stores.
-   Orders Page Micro Frontend: Enables users to place orders and view their order history.

Each micro frontend operates as an independent module, developed and deployed separately.

Architecture
------------

The Micro Frontends application architecture follows the Micro Frontends pattern. Each micro frontend is developed and deployed independently, and communicates with the other micro frontends through the Home Page Micro Frontend.

The Home Page Micro Frontend is the main application and is responsible for rendering the navigation menu and loading the other micro frontends as required. When a user clicks on a link in the navigation menu, the Home Page Micro Frontend uses the Angular Router to load the appropriate micro frontend.

Each micro frontend is a standalone Angular application that is loaded into the Home Page Micro Frontend using Angular's lazy-loading feature. This means that the Home Page Micro Frontend only loads the required micro frontend when the user navigates to it, improving performance and reducing initial load time.

Development
-----------

### Prerequisites

-   Node.js (version 14 or later)
-   Angular CLI (version 13 or later)

### Getting Started

To run the Micro Frontends application locally, follow these steps:

1. Clone the repository to your local machine.
2. Proceed to the project's root directory.
3. Execute npm install to install dependencies.
4. Compile the utils by executing `ng build utils`.
5. Initiate the Home Page Micro Frontend with `npm run start:app1`.
6. Launch the ChainsawStore Page Micro Frontend with `npm run start:app2`.
7. Activate the Orders Page Micro Frontend with `npm run start:app3`.
8. Access http://localhost:4205 through your browser.

You are now prepared to navigate the Micro Frontends application locally.

## Running unit tests

Run `ng test utils` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Firebase

### S3 Bucket for Photo Storage

- **Photos Storage:** The Micro Frontends application utilizes an S3 bucket to store photos used within the app. The S3 bucket provides a scalable and reliable solution for storing and serving these assets.

### Firebase Cloud Function for Order Sum Calculation

- **Order Sum Calculation:** To handle order-related operations efficiently, such as calculating the sum of orders, the application leverages Firebase Cloud Functions. fetch order data from the S3 bucket, process it, and calculate the total order sum. This function is integrated seamlessly into the application's backend, providing real-time insights into order statistics.


