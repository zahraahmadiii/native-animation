import { StyleSheet, Text, View, Animated, Pressable } from 'react-native';
import React, { useRef,useState } from 'react';

const interpolate = ({ navigation }) => {
  // Create a ref for the animated value
  const anim1 = useRef(new Animated.Value(100)).current;
  const anim2 = useRef(new Animated.Value(100)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const [rx,setRx]=useState('0deg')
  // Function to fade in (increase height)
  const fade = () => {
    const ROTATE=rotate.interpolate({
      inputRange:[0,0.5,1],
      outputRange:['0deg','180deg','360deg']
    })
     Animated.timing(rotate,{
       toValue:1,
       duration:3000,
       delay:1000,
       useNativeDriver:false
     }).start()

  };

  // Function to fade out (decrease height)
  const fadeOut = () => {
    Animated.sequence([
      Animated.timing(anim1,{
        toValue:100,
        duration:1000,
        useNativeDriver:false
      }),

      Animated.timing(anim2,{
        toValue:100,
        duration:1000,
        useNativeDriver:false
      })
    ]).start()
  };

  return (
    <View style={styles.container}>
      {/* Animated view that changes height */}
      <Animated.View
        style={[styles.animatedBox, {  width: anim1,height:anim2,transform:[{rotate:'120deg'}]}]}>
        <Text>interpolate</Text>
      </Animated.View>

      {/* Start Button */}
      <Pressable
        onPress={fade}
        style={styles.button}>
        <Text>Start</Text>
      </Pressable>
s
      {/* Default Button */}
      <Pressable
        onPress={fadeOut}
        style={styles.button}>
        <Text>Default</Text>
      </Pressable>

      {/* next button */}
      <Pressable
         onPress={() => navigation.navigate('event')} 
        style={styles.button}>
        <Text>next</Text>
      </Pressable>
    </View>
  );
};

export default interpolate;

// Styles for layout and UI components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedBox: {
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
                      