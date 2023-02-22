/**@type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/main/**",
    "!<rootDir>/src/**/index.ts"
  ],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  moduleNameMapper: {
    "@/tests/(.+)": "<rootDir>/tests/$1",
    "@/(.+)": "<rootDir>/src/$1"
  },
  testMatch: ["**/*.spec.ts", "**/*.int.spec.ts"],
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  transform: {
    "\\.ts$": "ts-jest"
  },
  clearMocks: true
};
