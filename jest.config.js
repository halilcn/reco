module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/src/**/*.test.*'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
