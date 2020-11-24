module.exports = {
  preset: 'react-native',
  coverageReporters: ['text', 'cobertura', 'lcov', 'json'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native-community/.*|react-navigation|@react-navigation/.*))',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: [
    './__mocks__/react-navigation.js',
    './__mocks__/react-navigation-stack.js',
    './__mocks__/react-redux.js',
    './__mocks__/redux.js',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    '__tests__',
    '__mocks__',
    'coverage',
  ],
  testPathIgnorePatterns: ['__tests__/testhelpers.js'],
};
