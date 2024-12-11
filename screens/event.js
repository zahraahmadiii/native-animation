import { StyleSheet, Text, View, Animated, Pressable, ScrollView } from 'react-native';
import React, { useRef,useState } from 'react';

const event = ({ navigation }) => {
  // Create a ref for the animated value
  const anim1 = useRef(new Animated.Value(100)).current;
  const anim2 = useRef(new Animated.Value(100)).current;
  const scrollx = useRef(new Animated.Value(0)).current;
  const eventHandler=(event)=>{
    console.log(event)
  }


  return (
    <View style={styles.container}>
      {/* Animated view that changes height */}

      <ScrollView
      horizontal
      pagingEnabled
      onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollx}}}],{listener:event=>
        {
          eventHandler(event)
        },useNativeDriver:false})}
      >
       <View style={{width:100,height:100,backgroundColor:'grey',margin:25}}></View>
       <View style={{width:100,height:100,backgroundColor:'grey',margin:25}}></View>
       <View style={{width:100,height:100,backgroundColor:'grey',margin:25}}></View>
       <View style={{width:100,height:100,backgroundColor:'grey',margin:25}}></View>
      </ScrollView>
      <Animated.View
        style={[styles.animatedBox, {  width: anim1,height:anim2,transform:[{rotate:'120deg'}]}]}>
        <Text>event</Text>
      </Animated.View>

      {/* Start Button */}
      {/* <Pressable
        // onPress={fade}
        style={styles.button}>
        <Text>Start</Text>
      </Pressable> */}
      {/* Default Button */}
      {/* <Pressable
        // onPress={fadeOut}
        style={styles.button}>
        <Text>Default</Text>
      </Pressable> */}

      {/* next button */}
      <Pressable
         onPress={() => navigation.navigate('panResponder')} 
        style={styles.button}>
        <Text>next</Text>
      </Pressable>
    </View>
  );
};

export default event;

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
                      