import { StyleSheet, Text, View, Animated, Pressable } from 'react-native';
import React, { useRef } from 'react';

const spring = ({ navigation }) => {
  // Create a ref for the animated value
  const anim = useRef(new Animated.Value(100)).current;

  // Function to fade in (increase height)
  const fade = () => {
    Animated.spring(anim, {
      toValue: 300,
    //  tension:60,
    //  friction:1,
    //  bounciness:30,
    //  speed:20,
     stiffness:50,
     damping:10,
     mass:1,
     delay:1000,
      useNativeDriver: false, // Set to false as you're animating the height property
    }).start();
  };

  // Function to fade out (decrease height)
  const fadeOut = () => {
    Animated.timing(anim, {
      toValue: 100,
      duration: 200,
      delay:1000,
      useNativeDriver: false, // Same here
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Animated view that changes height */}
      <Animated.View
        style={[styles.animatedBox, { height: anim }]}>
        <Text>spring</Text>
      </Animated.View>

      {/* Start Button */}
      <Pressable
        onPress={fade}
        style={styles.button}>
        <Text>Start</Text>
      </Pressable>

      {/* Default Button */}
      <Pressable
        onPress={fadeOut}
        style={styles.button}>
        <Text>Default</Text>
      </Pressable>

      {/* next button */}
      <Pressable
         onPress={() => navigation.navigate('sequence')} 
        style={styles.button}>
        <Text>next</Text>
      </Pressable>
    </View>
  );
};

export default spring;

// Styles for layout and UI components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedBox: {
    width: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 25,
    width: 100,
  },
});
                      