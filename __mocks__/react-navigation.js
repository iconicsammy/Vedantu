const React = require('react');
const { View } = require('react-native');

jest.mock('react-navigation', () => ({
  createAppContainer: jest.fn(() => React.forwardRef(() => <View />)),
  createSwitchNavigator: jest.fn(),
  NavigationActions: {
    navigate: jest.fn().mockImplementation((x) => x)
  }
}));
