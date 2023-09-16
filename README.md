A push notification is a message or alert that is sent from a server or backend system to a user's device They provide a way to deliver timely and relevant information to users, even when the app is not actively running or in the foreground. Users can receive push notifications even if they are not currently using the app or have the app closed.

First of all, we need to set up a Push Notification Service

Push Notification Service: Choose a push notification service provider such as Firebase Cloud Messaging (FCM) or OneSignal.

Step1:- Create an account in Firebase

Step2:- Register your Android/iOS app

Step3:- Download and then add config file // save the google-services.json  android/app

Step4:- Add firebase Sdk

Step5:- Synch your project by using Android studio

Step6:- Install Libraries for handling the notification

Step7:- Generate the token

Step8:- Create a server key by using Firebase cloud messaging

Step9:- Test push notification by using https://testfcm.com/ URL

Way to implement all steps in detail

1*.* Create an account on Firebase: - if you have already an account in firebase then you can ignore it otherwise you need to create an account in Firebase

2. Create a project in the Firebase dashboard:- it is used to create a space (environment).

3. Need to configure your project with the Firebase project:-

4. Need to register your app with Firebase project

… Algorithm for registering your app in Firebase:-

Click on plus icon with the text name is  (Add app) in the Firebase project

Select the Android app

You need the Android package name to fill out the form (*android/app/src/main/java/MY/APP/NEW_ID/*MainActivity.java) in Android Studio/vs

You need Debug signing certificate SHA-1  for the full file you form:

you need to open your project in Android studio

Note:- Always open only Android files in the android studio its auto sync  or link your project with android studio

How to generate Debug signing certificate SHA-1 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25

You can run the following command:- 1.  cd android

./gradlew signingReport

After filling in the columns you can click on the register button.

Error:- An unexpected error has occurred. [Reason: Oauth client already exists in a different project for package

name com.notificationapp and certificate hash 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25

The error occurring with miss matches the gradle version.

8. After registering your app successfully you need some configuration in the gradle file according to the Firebase form.

6. After registering your project successfully you need to install some libraries for Firebase

npm install --save @react-native-firebase/app

npm install @react-native-firebase/messaging

Use this URL for install libraries:- https://rnfirebase.io/

7. We need a device  token to communicate with Firebase for push notification

You can you this URL:- https://rnfirebase.io/messaging/notifications

8. Need to create a function to generate a device token for notification

import message from '@react-native-firebase/messaging'

useEffect(() => {

getDeviceToken()

}, [])

const getDeviceToken = async () => {

const token = await message().getToken()

console.log("token", token) //successfully generated the token

}

9. You can test it by a fake notification website with generated token URL:-   https://testfcm.com/

10. You need filed the  following points:-

Server key, 2.Device Token, 3.Title, 4 body, 5

QUESTION:- How to get the Server key

You should go on the Firebase dashboard and click on project setting and select the cloud messaging we need to enable cloud messing, then it will provide the server key

11. After putting your server key and device token then you should able to send a notification

There are three types of notifications:-

1.   Foreground Notification

Background Notification

Kill mode Notification

1. Foreground Notification:-  When an app is in the foreground, it means that the app is currently visible and actively being used by the user. The user interface is visible on the screen, and the app has priority in terms of system resources. The app can receive user input, update its interface in real-time, and interact with the device's hardware and services.

2. Background Notification: - When an app is in the background, it means that the app is not currently visible to the user but is still running in the device's memory. The user may have switched to a different app or the home screen, but the app can continue to perform certain tasks in the background. In the background state, an app can perform limited operations, such as playing audio, receiving location updates, or updating data in response to push notifications

3. Kill Mode Notification: - "Kill mode" is not a commonly used term in the context of mobile apps. However, it might refer to a state in which the app's process has been terminated or forcefully closed by the system or the user. When an app is in this state, it cannot execute any code or perform any tasks. It needs to be relaunched by the user or triggered by an external event.

You should write this code in notification handler

useEffect(() => {

const subscription = messaging().onMessage(async remoteMessage => {

Alert.alert(JSON.stringify(remoteMessage))

})

return subscription

}, [])

When an app is in the foreground,background and kill mode. This code will auto listen to the notification and generate.

Note:- You can use the  https://testfcm.com/ website URL for generate the fake notification

Here is the some photo for better understanding

React Native push notification for Android

Step 1 - Go to Firebase Console and select you project (eg :- Auto-I)

Step 2 - Click on plus icon and select Android option

Step 3 - Follow the instruction to register App

Note   1- please find your package name in Android/App/src/main.AndroidManifest.xml

2 - you can generate the SHA-1 key by using below command

cd android

./gradlew signingReport\

3 - Click on Register button and after clicking on register button from download and config file you will get google-services.json , download that file and paste the file  in Android/App

Step 4 - On Add Firebase SDK please read and follow the instruction in the below Screenshot

Step 5:- Synch your project by using android studio

Step 6:- Install Libraries for handling the notification

npm install --save @react-native-firebase/app

npm install @react-native-firebase/messaging

Step 7:- Generate the token

code :  app.js file

useEffect(() => {

getDeviceToken()

console.log("token generating")

}, [])

const getDeviceToken = async () => {

console.log("token function")

let token = await messaging().getToken()

console.log("token", token) //successfully generated the token

}

useEffect(() => {

const subscription = messaging().onMessage(async remoteMessage => {

alert(JSON.stringify(remoteMessage)) //display notification

})

return subscription

}, [])

Step8:- Create a server key by using firebase cloud messaging

Step9:- Test push notification by using

https://testfcm.com/ URL

Step 10 - Fill generated server key and generated device token which you will get from console
