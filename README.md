# PersonalProfile_Expo-Router

 AD340 Assignment

## Expo Project
### Start the development server
To start the development server, run the following command:

`npx expo start`

When you run the above command, the Expo CLI starts Metro Bundler. This bundler is an HTTP server that compiles the JavaScript code of your app using Babel and serves it to the Expo app. See how Expo Development Server works for more information about this process.

### Open the app on your device
To open the app on your device that has Expo Go already installed:

On your Android device, press Scan QR Code on the Home tab of the Expo Go app and scan the QR code you see in the terminal.
On your iPhone or iPad, open the default Apple Camera app and scan the QR code you see in the terminal.
You can open the project on multiple devices simultaneously. Go ahead and try it on both phones at the same time if you have them handy.3

## Assignment
### Object
Create a React Native app using Expo Router to understand different navigation techniques including link creation, dynamic routing, push and replace navigation, and programmatic navigation.

### Task Overview:
#### Implement Navigation Links

In HomePage.js, add <Link> components that navigate to AboutPage and UserProfilePage.
#### Dynamic Routing in UserProfilePage.js

Handle dynamic ID from the URL.
Display the user ID on the page.
Implement Push and Replace Navigation

#### Navigate back to HomePage
In AboutPage.js, add options to navigate back to the HomePage using both push and replace methods.

## Report of Design Choice
Having trouble direct route to AboutPage in the first place. Then add pathname parameter to link and it fixed it. For the dynamic ID from URL, use "Username Placeholder" for display.

## Video demonstration
https://github.com/JoyZhang2023/PersonalProfile_Expo-Router/assets/137982978/c240bdaf-a75f-46a3-b780-27863cf7c747

