const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '.',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  roots: ['src/'],
  verbose: true,
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js, jsx}',
    '!src/pages/**',
    '!src/templates/**'
  ],
  coverageThreshold: {
    global: {
      lines: 70,
      statements: 80,
      branches: 80,
      functions: 80
    }
  },
}

module.exports = createJestConfig(customJestConfig)