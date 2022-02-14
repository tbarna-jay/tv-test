// // For a detailed explanation regarding each configuration property, visit:
// // https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs,ts,tsx}"],
  moduleDirectories: ["node_modules", "<rootDir>/node_modules", "."],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  testMatch: ["**/*.test.(j|t)s?(x)"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
