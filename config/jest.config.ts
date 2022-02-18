import type { InitialOptionsTsJest } from 'ts-jest'

const config: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {
      // ts-jest configuration goes here
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: "../tests"
}
export default config