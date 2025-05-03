# ⚛️ REACT NATIVE Notes

---

### 📑 Table of Contents

#### 1. **What is React Native?**

- Overview of React Native
- Differences from traditional native development (iOS/Android)
- Advantages: cross-platform, fast refresh, native performance with JavaScript

---

#### 2. **Why React Native?**

- React Native vs Flutter
- React Native LTS (Long-Term Support) version benefits
  - Stability
  - Enterprise readiness
  - Expo SDK alignment

---

#### 3. **Setting Up the Environment**

- Install prerequisites:
  - Node.js, npm or yarn
- Install Expo CLI:
  ```bash
  npm install -g expo-cli
  ```
- Initialize a new Expo project:
  ```bash
  npx create-expo-app@latest
  cd MyApp
  npm start
  ```
- Use Expo Go app for live testing

---

#### 4. **Project File and Folder Structure**

- Default folder structure
- Recommended folders:
  - `components/`
  - `screens/`
  - `assets/`
  - `constants/`
  - `app/` (for Expo Router)
- Entry point: `App.js` or `app/index.js`

---

#### 5. **React Native Fundamentals / Core Components**

- UI Components:
  - `View`, `Text`, `Image`, `ScrollView`, `FlatList`, `TextInput`, `TouchableOpacity`
- Styling:
  - `StyleSheet.create()`
  - Inline styles vs external styles
- Layout with Flexbox:
  - `flexDirection`, `justifyContent`, `alignItems`
- Platform-specific styles using `Platform` API

---

#### 6. **Navigation**

- Using **Expo Router**:
  - File-based routing
  - Nested routes
  - Dynamic routes (e.g., `[id].js`)
- OR using **React Navigation**:
  - Stack, tab, and drawer navigators
  - Navigation container setup

---

#### 7. **State and Props**

- `useState` hook for managing state
- `useEffect` for side effects (e.g., API calls)
- Passing data via props
- Lifting state up between components

---

#### 8. **Fetching and Displaying Data**

- Using `fetch()` or Axios
- Showing lists with `FlatList` or `SectionList`
- Conditional rendering

---

#### 9. **Form Handling & User Inputs**

- Controlled components (`TextInput` with state)
- Form validation basics
- Handling button press events (`onPress`)

---

#### 10. **Assets and Media**

- Using images from the `assets/` folder
- Custom fonts with `expo-font`
- Audio/Video with `expo-av`

---

#### 11. **Debugging & Tools**

- Console logging
- Debugging with Chrome or React Native Debugger
- Using Flipper (native debugging)
- React DevTools

---

#### 12. **Building & Deployment**

- Preview with `npx expo start --preview`
- Development builds using [Expo Dev Builds](https://docs.expo.dev/develop/development-builds/introduction/)
- EAS Build for iOS and Android
- APK/IPA generation for testing

---

#### 13. **Next Steps & Going Beyond**

- Using TypeScript with React Native
- Integrating native modules (bare workflow)
- Performance optimization basics
- Writing reusable components
- Testing (Jest, React Native Testing Library)

---

Would you like this exported as a downloadable PDF or markdown file for easy reference?

## **Why React Native?**

- New **JSI** (Javascript Interface)
- TurboModules
- Fabric
- HotReloading

![why-react-native](./assets/why-react-native.png)

### 🔗 **JSI (JavaScript Interface)**

JSI is the bridge-less communication layer between JavaScript and native code. It's super fast and unlocks next-gen features like TurboModules and Fabric.

---

### ⚡ **TurboModules**

These are the upgraded version of native modules. They load on demand, which makes your app start faster and use memory more efficiently.

---

### 🧵 **Fabric**

Fabric is the new rendering engine. It's faster, more flexible, and supports better UI threading — so your app feels smoother and more responsive.

---

### 🔁 **HotReloading**

This is your dev-time BFF. It reloads only the changed files while preserving the app's state — which means faster debugging and less frustration.

---

## **React Native Fundamentals / Core Components**

[Core Components and APIs ⚠️](https://reactnative.dev/docs/components-and-apis)

- Button
- View
- Text
- TouchableOpacity
- TouchableHighlight
- TouchableWithoutFeedback
- ActivityIndicator (spinner)
- FlatList (Map long list)
- ScrollView
- SafeAreaView - reactnative-safe-area-context
- Image
- ImageBackground
- react-native-svg
- Modal
- Alert
- Switch
- StatusBar
- TextInput
-
-
-

Styling

- Stylesheet
- NativeWind

Navigation

- Stack Navigation
- Tab Navigation

### `View`

- View is like div tag in react app
- View is flexbox layout by default
-

### `FlatList`

Question is

##### When should you use FlatList?

- For larger list and smooth scrolling

##### When should you use map?

- For small lists

## Project setup

- Create Project
- Get a fresh project - Reset Project
- Tailwind - Config Settings
-

### [Create Project](https://docs.expo.dev/get-started/create-a-project/)

```javascript
npx create-expo-app@latest
```

- Start the app

```javascript
npx expo start
```

- If you get this error⚠️ then run code like this `something went wrong sorry about that. you can go back to expo home or try to reload the project`
- [Having problems](https://docs.expo.dev/get-started/start-developing/#having-problems)

```javascript
npx expo start --tunnel
```

- Use the `--clear` flag to clear the Metro bundler cache and resolve potential build or runtime issues:

```javascript
npx expo start --clear
```

### Get a fresh project - Reset Project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### 1. Install packages

- `nativewind` - `tailwindcss` - `react-native-reanimated` - `react-native-safe-area-context`

- [Documentation Link](https://www.nativewind.dev/getting-started/installation)

- ⚠️ Always check the documentation for compatible versions

```javascript
npm install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context
```

### 2. Setup Tailwind CSS

- Run **`npx tailwindcss init`** to create a **`tailwind.config.js`** file

- Add the paths to all of your component files in your tailwind.config.js file.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Create a **`global.css`** file and in app folder and then add the Tailwind directives.

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Add the Babel preset

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel"],
  };
};
```

### 4. Modify your metro.config.js

- Generate metro file with following commond

```javascript
npx expo customize metro.config.js
```

- Replace file with this code

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

### 5. Import your CSS file in **`index.js`** / root file in app

```javascript
import "./global.css";
```

### 6. Modify your app.json

- Switch the bundler to use the Metro bundler

```javascript
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

### 7. `nativewind-env.d.ts`

- If no `nativewind-env.d.ts` file then create it in root file and add the below code

```javascript
/// <reference types="nativewind/types" />

// NOTE: This file should not be edited and should be committed with your source code. It is generated by NativeWind.
```
