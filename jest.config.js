const path = require("path");

module.exports = {
    rootDir: path.resolve(__dirname),
    moduleFileExtensions: ["ts", "vue", "js", "json"],
    setupFiles: ["<rootDir>/jest.setup"],
    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
            "<rootDir>/node_modules/jest-transform-stub"
    },

    preset: "@vue/cli-plugin-unit-jest/presets/no-babel",

    testEnvironment: "jsdom",

    testMatch: ["<rootDir>/resources/**/*.spec.js"],

    testPathIgnorePatterns: ["/node_modules/", "/vendor/"],

    transformIgnorePatterns: []
};
