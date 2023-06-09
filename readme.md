# Event Management App

Welcome to the Event Management App! This application allows users to manage and find events. The app consists of a front-end built with React and a back-end built with Node.js and MongoDB.

## How to Use the App

1. Clone the repository to your local machine using the following command:

git clone https://github.com/Limerque/manageEvents.git

2. Install the dependencies for the back-end by navigating to the project's root directory and running the following command:

npm install

3. Install the dependencies for the front-end by navigating to the `client` directory and running the following command:

npm install

4. Modify the MongoDB URI and any other necessary API keys in the configuration files:

- Back-end: Update the MongoDB URI in the `index.js` file.

5. Start the back-end server by running the following command in the project's root directory:

npm start

6. Start the front-end development server by navigating to the `client` directory and running the following command:

npm start

7. Open your web browser and access the application at `http://localhost:3000`.

## Security Measures

To ensure the security of this app, the following measures have been taken:

- The application uses authentication and authorization mechanisms to control access to specific routes and features.
- Passwords are hashed before storing them in the database to protect user credentials.

## Third-Party APIs

The Event Management App utilizes the following third-party APIs:

- MongoDB Atlas: A cloud-based database service used for storing event data.
- React Router: A library for handling client-side routing in the front-end application.

## Deployment

The application has been deployed as a full-stack application. The back-end and the front-end is deployed on a cloud hosting platform Heroku. The reason why is: Heroku provides a streamlined deployment process, allowing you to easily deploy your entire application stack with minimal configuration and setup. This can save time and effort compared to setting up individual servers or infrastructure.

- [Link to Deployed App](Did not deployed as discussed with mentor because of changes in task.)
