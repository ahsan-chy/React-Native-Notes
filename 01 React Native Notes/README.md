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

#### 4. **Project Structure Overview**

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
