# 📱 iOS App Deployment Guide

This guide explains how to deploy an iOS app to **TestFlight** and the **App Store** using Xcode and App Store Connect.

---

## 🔧 Prerequisites

* Apple Developer Account (active membership)
* App Store Connect access with **Admin / App Manager / Developer** role
* Xcode (latest stable release) installed on macOS
* App project with a valid **Bundle Identifier**

---

## 🚀 Step 1: Project Setup in Xcode

1. Open your project in **Xcode**.
2. In the **Project Navigator**, select the blue project icon.
3. Under **TARGETS → \[Your App] → General**:

   * **Display Name** → Shown under the app icon
   * **Bundle Identifier** → Must match the App Store Connect app record
   * **Version** → Marketing version (e.g., `1.0.1`)
   * **Build** → Increment each upload (`1 → 2 → 3`)
   * **Deployment Info** → Set target iOS version
   * **Devices** → iPhone only (or include iPad if you plan to support it)
4. In **Signing & Capabilities**:

   * Enable **Automatically Manage Signing**
   * Select your **Team**
   * Ensure a valid **Apple Distribution certificate** is assigned

---

## 📝 Step 2: Info.plist Updates

1. Ensure the following entry is present if you **only use Apple’s standard encryption (HTTPS, Keychain, etc.)**:

   ```xml
   <key>ITSAppUsesNonExemptEncryption</key>
   <false/>
   ```

   This prevents repeated encryption compliance prompts.

2. If your app is **iPhone-only**, remove iPad-specific keys:

   ```xml
   <key>UISupportedInterfaceOrientations~ipad</key>
   ```

   and add:

   ```xml
   <key>UIDeviceFamily</key>
   <array>
     <integer>1</integer> <!-- iPhone only -->
   </array>
   ```

---

## 📦 Step 3: Archive and Upload

1. In Xcode, select **Any iOS Device (arm64)** from the device list.

   * ⚠️ Do not select a Simulator.
2. Go to **Product → Archive**.
3. When the **Organizer** window opens:

   * Click **Distribute App**
   * Select **App Store Connect → Upload**
   * Confirm app details, signing, and export compliance
   * Upload

---

## 🕒 Step 4: Processing in App Store Connect

* Go to [App Store Connect → Activity → All Builds](https://appstoreconnect.apple.com).
* Wait for the uploaded build to finish **Processing** (can take 10–30 minutes).
* Once done, the build appears under **TestFlight**.

---

## 🔐 Step 5: Export Compliance

* Each new build requires answering encryption questions.
* For most apps using only HTTPS / Apple APIs:

  * Choose **“Standard encryption algorithms …”** and mark it **exempt**
  * Or simply add the Info.plist key shown earlier

---

## 🧪 Step 6: TestFlight Testing

### Internal Testing

* Internal testers = users on your **App Store Connect team**

1. Go to **TestFlight → Internal Testing**
2. Create a group (e.g., “QA Testers”)
3. Add team members as testers
4. Assign the build — available instantly in TestFlight app

### External Testing

* For testers **outside your team**

1. Go to **TestFlight → External Testing**
2. Create a tester group
3. Add tester emails
4. Submit the build for **Beta App Review**
5. Once approved, testers receive an invite link

⚠️ Builds expire after **90 days**. Always bump the build number for new uploads.

---

## 🛒 Step 7: App Store Submission

1. In App Store Connect → **App Information**:

   * App Name, Subtitle, Description
   * Keywords, Category, Support URL
   * Screenshots for all required device sizes (6.7"/6.9" + 5.5"; add iPad if supported)
2. Go to **App Store → Prepare for Submission**:

   * Choose the processed build
   * Fill **App Review Information**
   * Provide **App Privacy Policy**
   * Answer all export compliance, content rights, and advertising identifiers questions
3. Click **Submit for Review**.

---

## ✅ Status Flow

* **Ready to Submit** → Build uploaded, metadata required
* **Waiting for Review** → Apple’s review queue
* **In Review** → Apple is testing your app
* **Ready for Sale** → Approved and live on App Store

---

## 🔑 Tips

* Always **increment Build number** for each upload
* Use **TestFlight** first to validate before App Store release
* Keep **screenshots language** consistent with your app’s primary localization
* For iPhone-only apps, disable iPad in Deployment Info to avoid extra screenshot requirements


[Chatgpt Link](https://chatgpt.com/share/e/68d55de0-0070-8010-b707-ecf05815c66a)