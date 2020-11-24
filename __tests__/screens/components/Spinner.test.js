/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from 'react-native-testing-library';
import Spinner from 'screens/components/Spinner';

describe('component: Spinner', () => {
  it('renders correctly', () => {
    const snapShotTree = render(<Spinner />).toJSON();
    expect(snapShotTree).toMatchInlineSnapshot(`
      <View
        style={
          Array [
            Object {
              "flex": 1,
              "justifyContent": "center",
            },
            Object {
              "flexDirection": "row",
              "justifyContent": "space-around",
              "padding": 10,
            },
          ]
        }
      >
        <ActivityIndicator
          animating={true}
          color="#148774"
          hidesWhenStopped={true}
          size="large"
          style={
            Object {
              "alignItems": "center",
              "flex": 1,
              "height": 280,
              "justifyContent": "center",
            }
          }
        />
      </View>
    `);
  });
});
