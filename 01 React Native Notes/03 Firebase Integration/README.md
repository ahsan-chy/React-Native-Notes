# Documentation: Firebase Integration in React Native (Expo)

This document provides a comprehensive guide to integrating Firebase with a React Native application using Expo. It covers the setup process, installation of required dependencies, configuration, and usage of Firebase services such as Authentication, Firestore, and Storage.

## Firebase Setup and Installation

1. **Install Firebase and Expo dependencies:**

   ```sh
   expo install firebase
   ```

2. **Configure Firebase in your project:**

   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project if you haven't already.
   - In the project settings, add a new web app and copy the Firebase config object.
   - Create a `firebase.js` file in your project and initialize Firebase with the config:

     ```js
     // firebase.js
     import { initializeApp } from "firebase/app";

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
     };

     const app = initializeApp(firebaseConfig);

     export default app;
     ```

# Firebase integration in react native
