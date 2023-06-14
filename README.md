TheItStudio
===========

TheItStudio is a simple, yet effective contact form built using React Native, Node.js and the SendGrid Mail service.


![Screenshot 2023-06-14 111150](https://github.com/beingrazaabbas/TheItStudio_task/assets/86911625/34370995-1b9c-49c1-97e4-b8bf12fd7bfe)
-------------------
Features



-   Contact form where users can enter their name, email, mobile number, and a message.
-   Sends form data to a specified email using SendGrid.

Installation & Usage
--------------------

### Prerequisites

-   Node.js
-   npm or yarn
-   Expo CLI
-   Android/iOS emulator or physical device

### Installation

1.  Clone the repository

    bashCopy code

    `git clone https://github.com/yourgithubusername/theitstudio.git`

2.  Install the dependencies

    bashCopy code

    `cd theitstudio
    npm install`

3.  Start the React Native application

    bashCopy code

    `npm start`

4.  Open another terminal and navigate to the server directory and install the dependencies:

    bashCopy code

    `cd server
    npm install`

5.  Start the server

    bashCopy code

    `node server.js`

Make sure to replace `<your-sendgrid-api-key>` in `server.js` with your actual SendGrid API key.

Scan the QR code printed by `npm start` with Expo Go (Android) or the Camera app (iOS). You can also use an Android emulator or iOS simulator to run the app.
