
# APK

- 
- 
- 
- 

With our Current project we are using Capacitor & using NFC package `@capawesome-team/capacitor-nfc`. So setup/ Install it first with [Capaciter Docs Link](https://capawesome.io/plugins/nfc/#installation)


- Installation

```javascript
npm config set @capawesome-team:registry https://npm.registry.capawesome.io
npm config set //npm.registry.capawesome.io/:_authToken <YOUR_LICENSE_KEY>
```

`POLAR-6DF99EC6-6282-4118-BA96-DEB933521C57`

`npm config set //npm.registry.capawesome.io/:_authToken POLAR-6DF99EC6-6282-4118-BA96-DEB933521C57`

- **Attention:** Replace <YOUR_LICENSE_KEY> with the license key you received from Polar. If you don't have a license key yet, you can get one by becoming a Capawesome Insider.

```javascript
npm install @capawesome-team/capacitor-nfc
npx cap sync
```


- Android:

Add the following element to your `AndroidManifest.xml` before or after the `application` tag:

```javascript
<uses-feature android:name="android.hardware.nfc" android:required="true" />
```
Set the android:required attribute to true if your app can't function, or isn't designed to function, when NFC is not available on the device. If your app can function without NFC, set the android:required attribute to false. This will allow your app to be installed on devices that do not support NFC.


- 

```javascript

```






📁 2. Set the Android SDK Path

Capacitor needs the Android SDK location. You must set it in the **`android/local.properties`** file.


```javascript
sdk.dir=C:\\Users\\hr\\AppData\\Local\\Android\\Sdk
```


| Replace the path above if your SDK is in a different location. You can confirm it in Android Studio → Settings → Appearance & Behavior → System Settings → Android SDK.



🧹 3. Clean and Reinstall Dependencies (optional but recommended)

```javascript
npm cache clean --force
npx rimraf node_modules
del package-lock.json
npm install
```



🏗 4. Build the APK Using Your Script


```javascript
"build:apk": "npm run build && npx cap sync android && cd android && gradlew.bat assembleDebug && cd .. && copy android\\app\\build\\outputs\\apk\\debug\\app-debug.apk switch-teachers-app.apk"
```


 Run it using:

```javascript
npm run build:apk
```



📦 5. Result

After running the script, your APK will be available at:

```javascript
./switch-teachers-app.apk
```



🚀 Optional: Run on Emulator or Device

You can also open the Android project in Android Studio and run it directly:



```javascript
npx cap open android
```



```javascript
npx cap run android -l --external
```


url to run the Emulator in window: [chrome://inspect/#devices](chrome://inspect/#devices)


```javascript
npm i -g @ionic/cli native-run
ionic cap run android -l --external
```

```javascript
npm install -g @ionic/cli
```





---

## ✅ Step-by-Step Fix: Set JAVA\_HOME on Windows


### 🔍 1. **Find Your Java Installation Path**

Assuming you installed **Java 21** (or 17), the path is likely something like:

```
C:\Program Files\Java\jdk-21
```

Or, for Java 17:

```
C:\Program Files\Java\jdk-17
```

Make sure that inside the folder you have files like:

* `bin\java.exe`
* `lib\`
* etc.

If you can't find it, search `jdk` in `C:\Program Files\Java\` or reinstall Java.

---

### ⚙️ 2. **Set JAVA\_HOME Environment Variable**

1. **Press** `Windows + S` → search **“Environment Variables”** → select:

   > "Edit the system environment variables"

2. In the System Properties window, click:

   > **Environment Variables**

3. Under **System Variables**, click **New**:

   * **Variable name:** `JAVA_HOME`
   * **Variable value:** `C:\Program Files\Java\jdk-21` (or your actual path)

4. Click **OK**.

---

### 🔁 3. **Add Java to the PATH**

In the **same** Environment Variables window:

1. Find the **System variable** named `Path`, select it and click **Edit**.

2. Click **New** and add:

   ```
   %JAVA_HOME%\bin
   ```

3. Click **OK** to close all dialogs.

---

### 🔁 4. **Restart Terminal**

Close and reopen any terminal/command prompt windows (they won’t see the new variables until restarted).

---

### ✅ 5. **Test It**

Open a new terminal and run:

```bash
java -version
```

You should see something like:

```
java version "21.0.x"  (or 17.x)
```

And also test:

```bash
echo %JAVA_HOME%
```

It should print the path to your JDK.

---

### 🧱 6. **Retry the Build**

Now that Java is configured, run:

```bash
npm run build:apk
```

It should now find Java and build the APK.

---

Let me know if you want help confirming your Java install path.
