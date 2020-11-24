/* eslint-disable no-unused-vars */
/* eslint-disable no-null/no-null */
jest.mock('react-navigation-stack', () => ({
  createStackNavigator: jest
    .fn()
    .mockReturnValue(function NavigationContainer(props) {
      return null;
    }),

  NavigationActions: {
    navigate: jest.fn().mockImplementation((x) => x)
  }
}));
