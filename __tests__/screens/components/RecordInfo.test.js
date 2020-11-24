/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {Text, TouchableOpacity} from 'react-native';
import * as mockData from '../../mockData.json';
import RecordInfo from 'screens/components/RecordInfo';

describe('component: RecordInfo', () => {
  const record = mockData.dataList[0];
  let spyConsole;
  function onPress() {
    console.log('pressed');
  }

  beforeEach(() => {
    spyConsole = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    spyConsole.mockReset();
  });
  it('renders correctly', () => {
    const snapShotTree = render(
      <RecordInfo recordDetail={record} onPress={onPress} />,
    ).toJSON();
    expect(snapShotTree).toMatchInlineSnapshot(`
      <View
        accessible={true}
        focusable={true}
        onClick={[Function]}
        onResponderGrant={[Function]}
        onResponderMove={[Function]}
        onResponderRelease={[Function]}
        onResponderTerminate={[Function]}
        onResponderTerminationRequest={[Function]}
        onStartShouldSetResponder={[Function]}
        style={
          Object {
            "opacity": 1,
          }
        }
      >
        <View
          style={
            Object {
              "alignItems": "flex-start",
              "borderColor": "#0E0E0E",
              "borderWidth": 1,
              "flex": 1,
              "flexDirection": "row",
              "flexWrap": "wrap",
              "padding": 3,
            }
          }
        >
          <View
            style={
              Object {
                "marginRight": 8,
                "marginTop": 3,
                "width": 30,
              }
            }
          >
            <Text
              style={
                Object {
                  "backgroundColor": "red",
                  "borderRadius": 15,
                  "color": "#ffffff",
                  "height": 30,
                  "textAlign": "center",
                  "textAlignVertical": "center",
                  "width": 30,
                }
              }
            >
              S
            </Text>
          </View>
          <View
            style={
              Object {
                "flexGrow": 1,
              }
            }
          >
            <Text
              style={
                Object {
                  "fontSize": 24,
                  "fontWeight": "300",
                }
              }
            >
              Sagar
            </Text>
            <Text>
              Class 12 Tuition
            </Text>
            <Text>
              BTM Layout 2nd Stage, Bangalore
            </Text>
            <Text>
              INDIVIDUAL
            </Text>
          </View>
          <View
            style={
              Object {
                "marginRight": 10,
                "marginTop": 5,
                "width": 100,
              }
            }
          >
            <Text
              style={
                Object {
                  "alignSelf": "flex-end",
                }
              }
            >
              16 hours ago
            </Text>
            <Text
              allowFontScaling={false}
              onPress={[Function]}
              style={
                Array [
                  Object {
                    "color": "#900",
                    "fontSize": 30,
                  },
                  Object {
                    "marginLeft": 50,
                    "marginTop": 10,
                  },
                  Object {
                    "fontFamily": "Ionicons",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                  },
                  Object {},
                ]
              }
            >
              
            </Text>
          </View>
        </View>
      </View>
    `);
  });

  it('rednders correct information and can be pressed', () => {
    const wrapper = render(
      <RecordInfo recordDetail={record} onPress={onPress} />,
    );
    const texts = wrapper.UNSAFE_getAllByType(Text);
    expect(texts[0]).toHaveTextContent(record.name.charAt(0));
    expect(texts[1]).toHaveTextContent(record.name);
    expect(texts[2]).toHaveTextContent(record.categoryName);
    expect(texts[3]).toHaveTextContent(record.location);
    expect(texts[4]).toHaveTextContent(record.providerType);
    const touch = wrapper.UNSAFE_getByType(TouchableOpacity);
    fireEvent.press(touch);
    expect(spyConsole).toHaveBeenCalled();
  });
});
