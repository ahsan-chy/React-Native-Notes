## React Native Interview Questions & Answers

## Table of Questions

0. Current React Native Version
1. What is React Native, and how is it different from React?
2. What are the core components of React Native?
3. Explain the concept of JSX in React Native.
4. What is the significance of the 'render' method in React Native components?
5. How does the React Native bridge work?
6. What is the difference between `View`, `ScrollView`, and `FlatList`?
7. What is the use of `StyleSheet.create()`?
8. How do you handle platform-specific code?
9. Difference between `useState`, `useEffect`, and `useRef`?
10. How to share state across multiple screens?
11. What is Context API?
12. Handling async data loading in components?
13. How does `React Navigation` work?
14. Difference between stack, tab, and drawer navigation?
15. Passing and retrieving params?
16. Guarded/authenticated route?
17. What is Redux?
18. Actions, reducers, and store?
19. Using Redux Toolkit?
20. Middleware in Redux?
21. Consuming REST APIs?
22. Storing tokens securely?
23. Login/logout?
24. AsyncStorage usage?
25. Optimizing FlatList?
26. Memoization techniques?
27. Common performance issues?
28. Debugging tools?
29. What is an SDK?
30. How to expose component as npm package?
31. Version and publish library?
32. Bridging native module?
33. Used Native Modules?
34. What is bridge?
35. Integrate native code?
36. Steps for native module?
37. Handle async events?
38. Why use TypeScript?
39. Typing props and state?
40. Interface vs type?
41. Debugging RN apps?
42. What is Flipper?
43. Writing unit tests?
44. Testing tools?
45. Controlled vs uncontrolled components?
46. Deep linking?
47. What is CodePush?
48. Push notifications?
49. App permissions?
50. Difference b/w Native & Hybrid App
51.

### 🔹 **Basic React Native Questions**

0. **Current React Native Version**

- React Native 0.80.1
- React 19.1.0
- Node 22.16.0
- NPM 11.4.2

1. **What is React Native, and how is it different from React?**

   - **Answer**: React Native is a framework for building mobile applications using JavaScript and React. React Native is a JavaScript framework for building cross-platform apps. Unlike React (for web), React Native uses native components (e.g., `<View>` instead of `<div>`).

   - **Example**: A `LoginScreen` component in React Native uses `<TextInput>` instead of `<input>` for text fields.

2. **What are the core components of React Native?**

**[Core Components and APIs ⚠️](https://reactnative.dev/docs/components-and-apis)**

- Button
- View
- Text
- ScrollView
- SafeAreaView - `reactnative-safe-area-context`
- Image
- TouchableOpacity
- TextInput
- TouchableHighlight
- TouchableWithoutFeedback
- ActivityIndicator (spinner)
- FlatList (Map long list)
- ImageBackground
- react-native-svg
- Modal
- Alert
- Switch
- StatusBar
- KeyboardAvoidingView
- Keyboard - `keyboard.dismiss()`

  ```jsx
  <View>
    <Text>Hello World</Text>
  </View>
  ```

3. **What is `StyleSheet.create()`?**

- `StyleSheet.create()` is a method in React Native that helps define styles in a structured and optimized way. It creates a stylesheet object whose values are immutable and cached, improving performance.

**Example:**

```jsx
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  text: {
    color: "#333",
    fontSize: 18,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styled with StyleSheet.create()</Text>
    </View>
  );
}
```

.

4. **Explain the concept of JSX in React Native.**

- JSX is a **syntax extension** in React Native that allows embedding HTML-like elements within JavaScript code.

5. **What is the significance of the 'render' method in React Native components?**

- The 'render' method in a React Native component is responsible for returning the JSX representation of the component's UI. It defines what the component should render on the screen based on its current state and props. React Native automatically updates the UI when the state or props change, re-invoking the 'render' method to reflect those changes visually.

6. **How would you style a React Native component?**

- React Native components can be styled using the `StyleSheet`, which allows you to define styles in a JavaScript object, similar to CSS but with camelCase property names.

**Example:**

```jsx
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: "#222",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styled with StyleSheet</Text>
    </View>
  );
}
```

7. **What is the use of `StyleSheet.create()`?**

   - **Answer**: It optimizes performance by creating a stylesheet object with immutable styles.
   - **Example**:

     ```jsx
     const styles = StyleSheet.create({
       container: { padding: 10 },
     });
     ```

8. **What is the difference between `View`, `ScrollView`, and `FlatList`?**

   - **Answer**:

     - `View`: Basic container.
     - `ScrollView`: Scrollable container (good for small lists).
     - `FlatList`: Optimized for rendering large lists.

   - **Example**: Use `FlatList` for chat messages to handle performance.

9. **How does the React Native bridge work?**

   - **Answer**: React Native uses a bridge to communicate between JS and native code (Java/Kotlin or Swift/Obj-C). Messages are serialized and sent over the bridge asynchronously.
   - **Example**: Calling a native camera module from JavaScript.

- The React Native framework provides a set of JavaScript bindings to native iOS and Android APIs. Using these bindings, we're able to control the user interface and access device hardware, like the camera.

  **Example: Calling a native camera module from JavaScript**

  ```js
  import { NativeModules } from "react-native";

  const { CameraModule } = NativeModules;

  // Call a native method to open the camera
  CameraModule.openCamera((result) => {
    console.log("Camera result:", result);
  });
  ```

10. **How do you handle platform-specific code?**

- **Answer**: Use `Platform.OS`, file extensions (`.ios.js`, `.android.js`), or conditional logic.
- **Example**:

  ```jsx
  Platform.OS === "ios" ? doIOSFunction() : doAndroidFunction();
  ```

11. **Define Prop?**

    - 'Props' (short for properties) are a way to pass data from a parent component to a child component in React Native. They allow components to be dynamic and reusable by providing different data and behavior based on where they are used. Props are read-only and help maintain a unidirectional data flow.

    ```js
    - Prop Types
    - Children Props
    - Default Props
    ```

12. **What is State?**

    - State is a built-in React object that is used to contain data or information about the component.

13. **Use State is synchronous or asynchronous**

    - Asynchronous

    ```js
    const [count, setCount] = useState(0);

    setCount(count + 20);
    setCount((count) => count + 20);

    console.log(count);
    ```

14. **useState setState types**

```js
const [count, setCount] = useState(0);
```

- Two types
  - constant
  - function

15. **Difference between `useState`, `useEffect`, and `useRef`?**

- `useState`: Stores local component state.
- `useEffect`: Runs side effects.
- `useRef`: Holds mutable values.
- **Example**:

  ```jsx
  const [count, setCount] = useState(0);
  useEffect(() => console.log(count), [count]);
  const inputRef = useRef(null);
  ```

16. **Muteable & ImMuteable**

- **Muteable:** Mutable objects are those whose state can be changed after creation.

- **ImMuteable:** Immutable objects are those whose state cannot be changed after creation.

17. **Hooks? (One liner Answer)**

- Hooks are functions that allow you to use React state and lifecycle features in functional components. They enable you to reuse stateful logic without changing your component hierarchy.

- They provide a more concise and flexible way to manage complexity compared to traditional lifecycle methods in class components.

18. **Pure Components**

- Pure components are also stateless components. Where when you pass same props it will return same output/results. React have **`React.PureComponent`**.
- This actually increase performance of app.

19. **Higher Order Component(HOC)**

- Higher order components are actually function. Where we pass a component as input and it return another componet as output.

20. **Controlled & Uncontrolled Components**

[Detail Video]()

- **Controlled components** are form elements whose values are controlled by React using state. Like input fields.

- **Uncontrolled component** is like traditional HTML
  form inputs that you will not be able to handle the
  value by yourself but the DOM will take care of
  handling the value of the input and save it then you
  can get this value using **`React Ref`** and for
  example, print it inside alert when submitting or
  play with this value as you want.

```javascript
import React, { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  const handleSubmitButton = () => {
    alert(inputRef.current.value);
  };
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <input type="submit" value="submit" onClick={handleSubmitButton} />
    </div>
  );
}
```

21. **Statefull components and Stateless components**

- **Statefull Component**: A component that is managing state and have capacity to rerender.

- **Stateless Component**: Stateless components, by contrast, have no state. They are handle by props.

- [Detail Video](https://www.youtube.com/shorts/AWmm1gHBJic?feature=share)

22. **Prop Drilling & Prop Uplifting**

23. **What is 'state' in React Native and how is it different from 'props'?**

    | Aspect         | Props                                                               | State                                                             |
    | -------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- |
    | Definition     | Data passed from parent to child component                          | Data managed internally within the component                      |
    | Mutability     | Immutable (read-only)                                               | Mutable (can be changed using `setState`)                         |
    | Usage          | Used to configure or customize child components                     | Used for dynamic data that changes over time within the component |
    | Update Trigger | Changing props does **not** trigger re-render in the child directly | Updating state triggers a re-render of the component              |
    | Control        | Controlled by parent component                                      | Controlled by the component itself                                |

24. **How do you handle user input using React Native?**

    - User input in React Native is managed using event handlers such as `onChangeText` for text fields and `onPress` for buttons. State is typically used to store and update the input value.

    **Example:**

    ```jsx
    import React, { useState } from "react";
    import { View, TextInput, Button, Text, Alert } from "react-native";

    export default function InputExample() {
      const [name, setName] = useState("");

      const handlePress = () => {
        Alert.alert("Hello", `Hello, ${name}!`);
      };

      return (
        <View style={{ padding: 16 }}>
          <Text>Enter your name:</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Type here"
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 8,
              marginVertical: 8,
            }}
          />
          <Button title="Say Hello" onPress={handlePress} />
        </View>
      );
    }
    ```

25. **Lifecycle Method**

- Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

**Mounting** – Birth of your component
**Update** – Growth of your component
**Unmount** – Death of your component

26. **How do you handle navigation between screens in React Native?**

Navigation between screens in React Native is typically handled using libraries such as React Navigation. You set up a navigator (e.g., Stack, Tab, or Drawer Navigator) and register your screens as components. To move between screens, you use navigation methods like `navigate`, `push`, and `goBack` provided by the navigation prop.

**Example:**

```jsx
// Navigating to a screen named "Profile"
navigation.navigate("Profile");

// Going back to the previous screen
navigation.goBack();
```

27. **Explain the concept of 'flexbox' and its role in React Native layout.**

- **Flexbox** is a layout model that helps arrange and align components within a container, making it easier to create responsive layouts. In React Native, flexbox is the default layout system, allowing you to control the direction, alignment, and distribution of space among items in a container.

**Example:**

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FlexboxExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Box 1</Text>
      <Text style={styles.box}>Box 2</Text>
      <Text style={styles.box}>Box 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Arrange children in a row
    justifyContent: "space-between", // Distribute space between children
    alignItems: "center", // Align children vertically in the center
    padding: 16,
  },
  box: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: 16,
    borderRadius: 4,
  },
});
```

- In this example, the three boxes are arranged in a row, spaced evenly, and centered vertically using flexbox properties.

28. **What are 'keys' in React Native and why are they important in lists?**

- 'Keys' are special attributes used by React Native to **`uniquely identify elements`** in a list. They help React Native optimize re-rendering when the list changes, improving performance and **`preventing rendering glitches`**.

29. **How can you make a network request in React Native?**

- In React Native, you can make network requests using the built-in **`fetch`** API or libraries like **`Axios`**. These requests are asynchronous and can be handled with promises or **`async/await`**.

30. **Describe the purpose of 'AsyncStorage' in React Native.**

- 'AsyncStorage' is an API in React Native for **asynchronous, unencrypted, and persistent storage** of small amounts of data. It's often used to store settings, preferences, or authentication tokens locally on the user's device.

30.

---

### 🔹 **Hooks & State Management**

8. **How to share state across multiple screens?**

   - **Answer**: Use Context API or Redux.
   - **Example**: Store user authentication status in Context.

9. **What is Context API?**

   - **Answer**: Allows passing data globally without props.
   - **Example**: Theme context for dark/light mode.

10. **Handling async data loading in components?**

    - **Answer**: Use `useEffect` with async function inside.
    - **Example**:

      ```jsx
      useEffect(() => {
        (async () => {
          const data = await fetchData();
          setData(data);
        })();
      }, []);
      ```

---

### 🔹 **Navigation**

11. **How does `React Navigation` work?**

    - **Answer**: It manages screen transitions and navigation stack.

12. **Difference between stack, tab, and drawer navigation?**

    - Stack: Push/pop screens (e.g., `Login > Home > Details`).
    - Tab: Bottom tabs (e.g., Instagram-style tabs).
    - Drawer: Side menu (e.g., Gmail).

13. **Passing and retrieving params?**

    - **Answer**:

      ```jsx
      navigation.navigate("Profile", { userId: 123 });
      const { userId } = route.params;
      ```

14. **Guarded/authenticated route?**

    - **Answer**: Use conditional rendering based on auth state.

---

### 🔹 **Redux / State Management**

15. **What is Redux?**

    - **Answer**: A global state management library.

16. **Actions, reducers, and store?**

    - Actions describe what happened.
    - Reducers define how state changes.
    - Store holds the global state.

17. **Using Redux Toolkit?**

    - **Answer**: Simplifies Redux setup.
    - **Example**:

      ```js
      const counterSlice = createSlice({
        name: "counter",
        initialState: 0,
        reducers: { increment: (state) => state + 1 },
      });
      ```

18. **Middleware in Redux?**

    - **Answer**: Handles side effects like API calls (e.g., Redux Thunk).

---

### 🔹 **APIs & Authentication**

19. **Consuming REST APIs?**

    - **Example**:

      ```js
      const response = await axios.get("/users");
      ```

20. **Storing tokens securely?**

    - Use `@react-native-async-storage/async-storage` or `react-native-keychain`.

21. **Login/logout?**

    - On login: store token.
    - On logout: remove token and redirect.

22. **AsyncStorage usage?**

    ```js
    await AsyncStorage.setItem("token", "abc123");
    ```

---

### 🔹 **Performance Optimization**

23. **Optimizing FlatList?**

    - Use `initialNumToRender`, `getItemLayout`, `keyExtractor`.

24. **Memoization techniques?**

    - `React.memo`, `useCallback`, `useMemo`.

25. **Common performance issues?**

    - Unnecessary re-renders, large images, deep nested views.

26. **Debugging tools?**

    - Flipper, React DevTools, Chrome Debugger.

---

### 🔹 **SDKs & Reusable Components**

27. **What is an SDK?**

    - A software kit to integrate functionality in other apps.

28. **How to expose component as npm package?**

    - Bundle and publish it using `npm publish`.

29. **Version and publish library?**

    - Update `package.json` version and push to npm.

30. **Bridging native module?**

    - Android: Java class implements `ReactContextBaseJavaModule`.
    - iOS: Use `@objc` bridge and `RCTBridgeModule`.

31. **Used Native Modules?**

    - Example: Custom module to check battery level or open camera.

---

### 🔹 **Native Modules & Bridging**

32. **What is bridge?**

    - A communication channel between JS and native code.

33. **Integrate native code?**

    - Create Java/Swift module and expose methods.

34. **Steps for native module?**

    - Define native function > expose to RN > link module > call from JS.

35. **Handle async events?**

    - Use Promises or callbacks in native code.

---

### 🔹 **TypeScript in React Native**

36. **Why use TypeScript?**

    - Adds type safety and better code documentation.

37. **Typing props and state?**

    ```ts
    interface Props {
      title: string;
    }
    const MyComponent: React.FC<Props> = ({ title }) => <Text>{title}</Text>;
    ```

38. **Interface vs type?**

    - `interface` is better for objects; `type` for unions.

---

### 🔹 **Testing & Debugging**

39. **Debugging RN apps?**

    - Use `console.log`, Flipper, Chrome debugger.

40. **What is Flipper?**

    - A dev tool to inspect layout, network, and logs.

41. **Writing unit tests?**

    - Use `Jest` and `React Native Testing Library`.

42. **Testing tools?**

    - Jest, Detox, Enzyme, Testing Library.

---

### 🔹 **Miscellaneous**

43. **Controlled vs uncontrolled components?**

    - Controlled: State managed by React.
    - Uncontrolled: Uses ref.

44. **Deep linking?**

    - Enables app to be opened with a URL scheme.

45. **What is CodePush?**

    - OTA updates for RN apps without app store deploys.

46. **Push notifications?**

    - Use services like Firebase Cloud Messaging (FCM).

47. **App permissions?**

    - Use `PermissionsAndroid` or `react-native-permissions`.

---

Let me know if you want these exported as a PDF, flashcards, or want a mock interview session based on them.
