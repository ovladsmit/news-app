

import type {Config} from 'jest';
import path from 'node:path';
const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  coverageProvider: "v8",
  moduleDirectories: [
    "node_modules",
    "src",
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "mts",
    "cts",
    "tsx",
    "json",
    "node"
  ],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTest.ts'],  
  rootDir: "../../",
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.?([mc])[jt]s?(x)",
    "**/?(*.)+(spec|test).?([mc])[jt]s?(x)"
  ],
  moduleNameMapper: {
    '\\.svg$' : path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|less)$': 'identity-obj-proxy',
    
  },
};

export default config;
