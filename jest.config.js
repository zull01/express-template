/** @type {import('jest').Config} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"], // Adjust test match patterns if needed
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json", // Path to your tsconfig file
        },
    },
};
