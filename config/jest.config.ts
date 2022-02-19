import type { InitialOptionsTsJest } from 'ts-jest'

const config: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {
      // ts-jest configuration goes here
      tsconfig: "./config/tsconfig.test.json"
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: "../tests",
  transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
export default config