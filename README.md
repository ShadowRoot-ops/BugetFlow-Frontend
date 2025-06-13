📱 Mobile Expense Tracker App (MERN Stack)
A cross-platform mobile application built using the MERN stack and React Native with Expo for tracking income and expenses efficiently.

🚀 Features
Cross-Platform Compatibility: Developed using React Native and Expo for both Android and iOS platforms.

Authentication with Clerk: Secure sign-up and login using Clerk's robust authentication system.

Email Verification: 6-digit code email verification flow before accessing the app.

Five Core Screens:

Signup

Login

Email Verification

Home (Dashboard)

Create Transaction

Expense Tracker: Add income or expense entries and track your financial records.

Real-time Balance Updates: Live calculation of the current balance based on transaction history.

Delete Transactions: Quickly remove outdated or incorrect entries.

Pull-to-Refresh: Custom-implemented refresh gesture for real-time updates.

Logout Functionality: Easily sign out or switch accounts.

🛠️ Backend Details
Express.js REST API: Built with Express to handle all backend operations.

Database: PostgreSQL hosted on Neon, integrated with raw SQL queries for optimal control and performance.

Rate Limiting:

Implemented using Upstash Redis as middleware.

Prevents abuse and ensures server stability by limiting API requests.

☁️ Cloud Hosting
The backend server is deployed online to ensure seamless mobile access.
