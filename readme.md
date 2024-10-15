# Fully Configured Express App Template to Build APIs

## Summary

Express Template for building APIs based on Node.js with TypeScript.

## Features

-   Express
-   TypeScript
-   Helmet
-   Cors
-   DotEnv
-   ESLint
-   Prettier
-   Morgan & Winston

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   **Node.js**: Ensure you have Node.js installed (version 14 or higher recommended). You can download it from [nodejs.org](https://nodejs.org/).
-   **npm**: Node Package Manager comes with Node.js installation. Ensure npm is updated to the latest version.
-   **TypeScript**: Although it's included in the project, having TypeScript installed globally can be helpful for development. Install it globally using:

```cli
 npm install -g typescript
```

## Template Folders Structure

```
your-folder/
│
├── src/                     # Source files
│   ├── config/              # write you configuration & maintain your configs
│   ├── controllers/         # Controller logic
│   ├── db/                  # setup and manage database
│   ├── middleware/          # Custom middleware
│   ├── models/              # Data models
│   ├── routes/              # API routes
│   ├── services/            # Business logic services
│   ├── utils/               # Utilities like handlers 'etc
│   └── index.ts             # Entry point of the application
│
├── tests/                   # Test files
│
├── .env                     # Manage environment variables
├── .eslintrc.js             # ESLint configuration
├── .prettierignore          # Prettier ignore
├── .prettierrc              # Prettier configuration
├── package.json             # Project metadata and dependencies
└── tsconfig.json            # TypeScript configuration

```
