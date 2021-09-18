import React from "react";
import {NativeBaseProvider, extendTheme} from 'native-base';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./src/features/auth/screens/login";


const theme = extendTheme({
    fontConfig: {
        Roboto: {
            100: {
                normal: 'Roboto-Light',
                italic: 'Roboto-LightItalic',
            },
            200: {
                normal: 'Roboto-Light',
                italic: 'Roboto-LightItalic',
            },
            300: {
                normal: 'Roboto-Light',
                italic: 'Roboto-LightItalic',
            },
            400: {
                normal: 'Roboto-Regular',
                italic: 'Roboto-Italic',
            },
            500: {
                normal: 'Roboto-Medium',
            },
            600: {
                normal: 'Roboto-Medium',
                italic: 'Roboto-MediumItalic',
            },
            // Add more variants
            //   700: {
            //     normal: 'Roboto-Bold',
            //   },
            //   800: {
            //     normal: 'Roboto-Bold',
            //     italic: 'Roboto-BoldItalic',
            //   },
            //   900: {
            //     normal: 'Roboto-Bold',
            //     italic: 'Roboto-BoldItalic',
            //   },
        },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    // fonts: {
    //     heading: 'Roboto',
    //     body: 'Roboto',
    //     mono: 'Roboto',
    // },
    components: {
        Input: {
            baseStyle: {
                borderColor: 'blue.500',
                _focus: {
                    borderColor: 'red.800'
                }
            },


        }
    }
});

const Stack = createStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'Login'} component={LoginScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}


