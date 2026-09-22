# React Native Assignment Task

A cross-platform **React Native application built with Expo Router and TypeScript**, focused on health and wellness tracking. The application provides weight tracking, BMI monitoring, progress visualization, educational content, journaling, and profile management.

## 🚀 Tech Stack

* **React Native**
* **Expo SDK / Expo Router**
* **TypeScript**
* **React Native Unistyles v3**
* **Expo Router** – File-based navigation
* **Custom Design System**
* **Custom Fonts** – Inter & Open Sans
* **Responsive Scaling**
* **Light / Dark Theme Support**
* **RTL / LTR Localization Utilities**

---

## 📋 Prerequisites

Before running the project, make sure you have the following installed:

* **Node.js**
* **Yarn**
* **Xcode** – Required for iOS development
* **Android Studio** – Required for Android development
* iOS Simulator or a physical iOS device
* Android Emulator or a physical Android device

---

## 📦 Installation

Clone the repository and navigate to the project directory:

```bash
cd ReactNativeAssignmentTask
```

Install the project dependencies:

```bash
yarn install
```

---

## ▶️ Running the Application

### 🍎 iOS

To build and run the application on iOS:

```bash
npx expo run:ios
```

This command will build the native iOS project and launch the application in the iOS Simulator or on a connected device.

### 🤖 Android

To build and run the application on Android:

```bash
npx expo run:android
```

This command will build the native Android project and launch the application in the Android Emulator or on a connected device.

---

## 🔧 Development Server

To start the Expo development server:

```bash
npx expo start
```

For native development, the recommended commands are:

```bash
npx expo run:ios
```

```bash
npx expo run:android
```

---

# 📁 Project Structure

```text
ReactNativeAssignmentTask/
│
├── android/                         # Native Android project
├── ios/                             # Native iOS project
│
├── assets/                          # Root static assets
│   └── fonts/                       # Local font files
│
├── patches/                         # patch-package fixes
│
├── scripts/                         # Project maintenance scripts
│
├── src/
│   │
│   ├── app/                         # Expo Router screens
│   │   ├── _layout.tsx              # Root layout & providers
│   │   │
│   │   ├── index/
│   │   │   └── index.tsx            # Home screen
│   │   │
│   │   ├── progress/
│   │   │   ├── progress.tsx         # Progress dashboard
│   │   │   ├── measurement.tsx      # Weight measurement
│   │   │   ├── weight-card.tsx      # Current weight summary
│   │   │   ├── goal-section.tsx     # Goal & pace information
│   │   │   ├── weight-chart.tsx     # Weight trend chart
│   │   │   ├── bmi-card.tsx         # BMI indicator
│   │   │   ├── recent-logs.tsx      # Measurement history
│   │   │   └── walkthrough-section.tsx
│   │   │
│   │   ├── learn/
│   │   │   └── learn.tsx             # Educational content
│   │   │
│   │   ├── journal/
│   │   │   └── journal.tsx           # Health journal
│   │   │
│   │   ├── profile/
│   │   │   └── profile.tsx           # Profile & settings
│   │   │
│   │   └── explore/
│   │       └── explore.tsx           # Explore screen
│   │
│   ├── assets/                      # Application assets
│   │   ├── ic_progress/             # Progress & navigation icons
│   │   ├── fonts/                   # Inter & Open Sans fonts
│   │   ├── declarations.d.ts        # Asset TypeScript declarations
│   │   └── index.ts                 # Asset exports
│   │
│   ├── components/                  # Reusable components
│   │   ├── app-tabs.tsx             # Native floating tab navigation
│   │   ├── app-tabs.web.tsx         # Web tab navigation
│   │   ├── tab-bar-icon.tsx         # Tab icons
│   │   ├── tab-bar-label.tsx        # Tab labels
│   │   ├── animated-icon.tsx         # Splash animation
│   │   ├── themed-text.tsx           # Theme-aware text
│   │   ├── themed-view.tsx           # Theme-aware view
│   │   │
│   │   └── ui/                      # Design system components
│   │       ├── button.tsx
│   │       ├── header.tsx
│   │       ├── screen-wrapper.tsx
│   │       ├── collapsible.tsx
│   │       └── full-screen-loader.tsx
│   │
│   ├── constants/                   # Application constants
│   │   ├── strings.ts               # User-facing strings
│   │   ├── navigation.ts            # Navigation constants
│   │   ├── theme.ts                 # Theme tokens
│   │   └── index.ts
│   │
│   ├── hooks/                       # Custom hooks
│   │   ├── use-color-scheme.ts
│   │   ├── use-color-scheme.web.ts
│   │   └── use-theme.ts
│   │
│   ├── styles/                      # Unistyles configuration
│   │   ├── unistyles.ts
│   │   ├── themes.ts
│   │   └── breakpoints.ts
│   │
│   ├── theme/                       # Typography configuration
│   │   ├── fonts.ts
│   │   ├── TextStyles.ts
│   │   └── index.ts
│   │
│   ├── localization/                # Localization utilities
│   │   └── utils.ts
│   │
│   └── utils/                       # Shared utilities
│       ├── scale.ts                 # Responsive scaling
│       └── index.ts
│
├── .gitignore
├── AGENTS.md
├── app.json
├── package.json
├── tsconfig.json
└── yarn.lock
```




# 🛠️ Common Commands

### Install dependencies

```bash
yarn install
```

### Start Expo

```bash
npx expo start
```

### Run iOS

```bash
npx expo run:ios
```

### Run Android

```bash
npx expo run:android
```

### Run lint

```bash
npx expo lint
```

---

# 📌 Quick Start

For a new developer joining the project:

```bash
# 1. Install dependencies
yarn install

# 2. Start the application on iOS
npx expo run:ios
```

Or:

```bash
# 1. Install dependencies
yarn install

# 2. Start the application on Android
npx expo run:android
```

---

## 📄 Project Information

**Project:** ReactNativeAssignmentTask
**Framework:** React Native + Expo
**Language:** TypeScript
**Navigation:** Expo Router
**Styling:** React Native Unistyles v3
**Platforms:** iOS & Android
