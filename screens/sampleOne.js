import React, { useState } from 'react';
import { View, Text, PanResponder, StyleSheet, Animated } from 'react-native';

const sampleOne = () => {
  // State to store the position of the box
  const [position, setPosition] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  // Create PanResponder instance
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Activate pan responder
      onMoveShouldSetPanResponder: () => true,  // Allow movement
      onPanResponderMove: (event, gestureState) => {
        // Update the box position as the user drags
        setPosition({
          x: gestureState.dx,
          y: gestureState.dy
        });
      },
      onPanResponderRelease: (event, gestureState) => {
        // Optionally reset the position or do something when the drag ends
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drag and Drop Box</Text>

      {/* Animated View for the draggable box */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.box, {
          transform: [
            { translateX: position.x },
            { translateY: position.y }
          ]
        }]}
      >
        <Text style={styles.boxText}>Drag Me!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
  },
  boxText: {
    color: 'white',
    fontSize: 16,
  },
});

export default sampleOne;
