import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import timing from './screens/timing';
import easing from './screens/easing';
import spring from './screens/spring';
import sequence from './screens/sequence';
import parallel from './screens/parallel';
import delay from './screens/delay';
import stagger from './screens/stagger';
import interpolate from './screens/interpolate';
import event from './screens/event';
import panResponder from './screens/panResponder';
import sampleOne from './screens/sampleOne';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="timing">
        <Stack.Screen name="timing" component={timing} />
        <Stack.Screen name="easing" component={easing} />
        <Stack.Screen name="spring" component={spring} />
        <Stack.Screen name="sequence" component={sequence} />
        <Stack.Screen name="parallel" component={parallel} />
        <Stack.Screen name="delay" component={delay} />
        <Stack.Screen name="stagger" component={stagger} />
        <Stack.Screen name="interpolate" component={interpolate} />
        <Stack.Screen name="event" component={event} />
        <Stack.Screen name="panResponder" component={panResponder} />
        <Stack.Screen name="sampleOne" component={sampleOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

