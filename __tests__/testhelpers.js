/*

just definining functinos that help us with testing
*/

export const mockNavigationProps = (props, params = {}) => ({
  navigation: {
    navigate: jest.fn((value) => {}),
  },

  ...props,
});
