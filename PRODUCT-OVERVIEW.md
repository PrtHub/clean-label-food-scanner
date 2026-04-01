# 🛡️ CleanLabel: The Purity Engine (Product Overview)

**CleanLabel** is not just an ingredient scanner; it is a clinical-grade "Purity Engine" designed for the biohacking community and the health-conscious. It solves the "Maltodextrin Loophole"—the industry practice of hiding toxic fillers under organic-sounding names.

---

## 👁️ The Vision ("The Purity Manifesto")
Most food trackers (like Yuka) are "Generalist" apps. They track calories and give broad scores. **CleanLabel is a "Specialist" app.** 
- **Vision**: To expose industrial fillers that traditional apps miss.
- **Tone**: Professional, technical, and "Strict".
- **Unique Selling Proposition (USP)**: Real-time AI analysis that detects "sneaky" names like *Soluble Corn Fiber* or *Yeast Extract* as metabolic toxins.

---

## 🎯 The High-Conversion Funnel (Psychology-Based)

CleanLabel uses a **6-step commitment funnel** designed to trigger the "Magic Moment" and hard-close the subscription:

1.  **Step 1: Goal Commitment**: Users select their stakes (e.g., "Auto-Immune Safety"). Sets the "Pain Point".
2.  **Step 2: Toxin Selection**: Users "train" their engine by selecting what to avoid (Seed Oils, Dyes, etc.). Builds "Ownership".
3.  **Step 3: The Educational Shock**: A screen showing how 85% of "Organic" foods use loopholes to stay toxic. Creates "Urgency".
4.  **Step 4: Engine Calibration**: A fake "Loading" screen that builds anticipation for the AI power. Creates "Value Perception".
5.  **Step 5: The Magic Moment**: The user is asked to find their "healthiest" snack and scan it. It works instantly and identifies a toxin they didn't know was there. This is the "Aha!" moment.
6.  **Step 6: The "Soft-Hard" Paywall**: Immediately after the first successful scan result is closed, the paywall drops. The user has seen the value—now they pay for unlimited access. Navigation swipe-back is disabled to prevent bypassing.

---

## 🏗️ Technical Architecture

### 1. The AI Detection Engine (`utils/ai.ts`)
Instead of a lookup database (which is often out of date), CleanLabel uses **Gemini 3.1 Flash Vision** (via OpenRouter). 
- **The Prompt**: Acts as a "Zero-Tolerance Biohacker". It ignores marketing claims and scans the raw text.
- **Processing**: Optimized base64 image transmission for sub-3-second results.

### 2. Local-First Persistence (`store/userStore.ts` & `SQLite`)
- **Privacy Core**: No user images are ever stored on a server.
- **Offline History**: Scans are persisted locally using **SQLite** (`expo-sqlite`) for instant retrieval.
- **State Management**: **Zustand** with persistent storage using `MMKV`.

### 3. Native UI/UX
- **Framework**: Expo (SDK 54+).
- **Styling**: **Native StyleSheet** (for crash-free stability over NativeWind string interpolations on core screens).
- **Interactions**: Animated scanner lines, haptic feedback on every "Toxic" flag, and premium inline modals.

---

## 💰 Monetization Strategy (RevenueCat)

- **Hard Paywall**: The Magic Moment scan hooks the user, then the hard paywall drops.
- **Annual Plan**: **$19.99/yr** with a **3-Day Free Trial** (Primary conversion tool).
- **Weekly Plan**: **$3.99/wk** (High-margin secondary option capturing impulsive users; no monthly option enforces annual preference).
- **Global Guarding**: `useUserStore` handles pro-status (`isPremium`) checks globally.

---

## 📈 Marketing & Growth Strategy

### 1. Reddit "Technical Showcase" (`docs/REDDIT-MARKETING.md`)
- **Strategy**: Posting "First Sale" and "Milestone" updates to r/reactnative and r/IndieDev to gain organic peer-review and early users.
- **Tone**: Humble indie-hacker vibe ("Built this to solve my own problem").

### 2. POV Content
- **Shock Discovery Reels**: Short clips exposing a specific "Healthy" brand's hidden maltodextrin.
- **"The Kitchen Audit"**: A video scanning an entire pantry in 60 seconds to find the "hidden killers".

---

**CleanLabel: Exposing the label. Saving your gut.** 🛡️🍃🥗
