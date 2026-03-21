# 🛡️ CleanLabel: Comprehensive Product Overview

**CleanLabel** is a high-precision, AI-powered iOS application designed to be the ultimate food transparency assistant. It allows users to uncover hidden toxins, deceptive additives, and dietary violations in seconds. Unlike traditional barcode scanners that rely on outdated databases or missing product codes, CleanLabel uses **Advanced AI Analysis** to analyze physical ingredient printed labels with medical-grade accuracy.

---

## 🚀 The Onboarding Experience
CleanLabel features a highly polished, interactive onboarding flow designed to educate the user and seamlessly convert them to Premium.

1. **Animated Feature Carousel**: Smooth, haptic-driven screens introducing the core value propositions: scanning ingredients, detecting toxins, and getting personalized AI insights.
2. **Interactive Dietary Setup**: Users are prompted to select their initial dietary preferences (Vegan, Keto, Gluten-Free, Seed Oil Free, etc.) right from the start. This data is saved to their profile immediately to customize their first scan.
3. **Optimized Paywall Integration**: The onboarding flow terminates at a highly converting, beautiful Paywall screen, presenting the **CleanLabel Pro** benefits clearly before they even reach the home screen.

---

## 🔥 Core Feature Breakdown

### 1. The Smart Scanner (Camera Tab)
The heart of CleanLabel is a native-grade "Point-and-Shoot" experience.
* **Live Camera Feed**: Built with `expo-camera` for an instant, full-screen viewfinder experience mimicking native iOS apps.
* **Gallery Uploads**: Users can select photos of labels they saved previously or screenshots of groceries from apps like Instacart.
* **Flash & Layout Controls**: Seamless controls built with translucent glassmorphism for a premium aesthetic.

### 2. AI Analysis & Results Modal
When an image is captured, it is processed through our specialized AI pipeline.
* **Visual Status Badges**: If an ingredient violates their diet or is generally toxic, the UI immediately flags it in **Red**. Safe products are highlighted in **Emerald Green**.
* **Flagged Ingredients Breakdown**: Extracts the *exact* scientific names from the label that caused the flags, with plain-english explanations of why they are harmful.
* **Contextual AI Insights**: Every scan generates a "💡 AI Insight" (e.g., explaining that 'Maltodextrin' implies hidden sugar spikes).

### 3. Scan History (SQLite Backed)
Users never lose a scan.
* **Local Database**: Built on `expo-sqlite`, every scan is securely logged on the user's device.
* **Historical Review**: Users can scroll through past scans, re-open the beautiful Result Modal, and delete specific entries—or clear the entire history from settings.

### 4. Advanced Personalization (Settings Tab)
The AI is driven by what the user cares about.
* **Global Dietary Toggles**: Easily switch diets on and off (e.g., adding 'Low Sodium' or 'No Artificial Dyes').
* **Custom Filters**: A revolutionary feature allowing users to type specific allergies (e.g., "No Peanuts" or "No Palm Oil") which the AI strictly enforces.
* **Theme Controls**: Full support for both **Dark Mode** and **Light Mode** styling across the entire app.

---

## 💳 Monetization & Subscriptions (CleanLabel Pro)
The app operates on a powerful freemium model governed by **RevenueCat**.

* **Freemium Limits**: Free users receive a limited bucket of 5 high-precision scans per month (enforced via local state management).
* **CleanLabel Pro**: Subscribers unlock unlimited scans for **$6.99/mo** or **$19.99/yr** and bypass all paywalls.
* **Subscription Management UX**: Integrated directly into the Settings tab. Free users see a strong "Upgrade" call-to-action, while Premium users see a "PRO" badge and a link directly to Apple's native Customer Center to manage their subscription.

---

## 🏗️ Technology Stack
CleanLabel is built on a premium, modern mobile framework prioritizing native feel and speed:

* **Framework**: React Native via **Expo** (SDK 52+).
* **Styling**: **NativeWind 4.0** (Tailwind CSS) paired with Lucide React Native icons for a sleek, cohesive design system.
* **AI Engine**: **Advanced AI Analysis** (Large Language Vision Model) accessed via OpenRouter. It leverages strict JSON mode to ensure the UI always receives predictable, parsable responses.
* **State Management**: **Zustand** for hyper-fast, boilerplate-free global state, persisting data directly to `AsyncStorage`.
* **In-App Purchases**: **RevenueCat** (`react-native-purchases`) handling all receipt validation and entitlement unlocking.
* **Feedback System**: Deep integration with **Expo Haptics** to make every button press, scan completion, and toggle feel distinctly physical and premium.

---

## 🧠 AI Prompt Strategy
The AI is meticulously instructed to act as a strict, health-conscious nutritionist:
1. **Personalization Overwrite**: The AI dynamically ingests the user's selected standard diets AND custom text filters before analyzing the image.
2. **Deceptive Naming Recognition**: It is programmed to identify when companies hide MSG under "Yeast Extract" or Sugar under "Evaporated Cane Juice".
3. **Structured Output**: The AI is forced to return a strict JSON schema containing `isClean` (boolean), `flaggedIngredients` (array of reasons), and a `generalInsight` string.
