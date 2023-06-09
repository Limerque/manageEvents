# Event Management App

Welcome to the Event Management App! This application allows users to manage and find events. The app consists of a front-end built with React and a back-end built with Node.js and MongoDB.

## Installation instructions

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

## How to use the application

1. When you open the app you will find the home page.

2. If you are a new user go to sign up. There you will have to provide a email address and password as well as a choice
   between an admin account and a regular user. (An admin account allows you to create and manage events while an regular user will only be able to view events.)

3. Once you have signed up you will be redirected to the home page. There you will click either on the user login or admin login.

4. When you go to the user login you can enter your details and click on the login button. You will be redirected to the find page where you can view events.

5. When you go to the admin login you can enter your details and click on the login button. You will be redirected to the manage page where you can manage events.

6. On the manage page you will find the add event button. When you click it you can add an event by importing an image and adding the event details. Click on the add event button.

7. On the manange page you will find all the events. Underneath each event there is an edit and cancel button. Click on the edit event button.

8. You will be redirected to the edit event page. There you can change the image and event details. Click on the save changes button.

9. When you want to remove an event click on the cancel button. This will delete the event.

10. When you are done viewing or managing the events you can log out.

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
