import { StyleSheet, Text, View, Animated, Pressable, ScrollView, PanResponder } from 'react-native';
import React, { useRef,useState } from 'react';

const panResponder = ({ navigation }) => {

  const [locationX,setLocationx]=useState(0);
  const [locationY,setLocationy]=useState(0);

  const panResponder=PanResponder.create({
  onStartShouldSetPanResponder:(e,gesture)=> true,
  onPanResponderRelease:(e,gesture)=>{
    setLocationx(e.nativeEvent.locationX.toFixed(3));
    setLocationy(e.nativeEvent.locationY.toFixed(3));
  }

})

  return (
    <View style={styles.container}>
      {/* Animated view that changes height */}
         <View style={{backgroundColor:'grey',flex:1,justifyContent:"center",alignItems:'center'}}>
          <Text style={{color:'#000',fontSize:20}}>X:{locationX}-y:{locationY}</Text>
         </View>
         <View style={{backgroundColor:"#a0a0a0",flex:2,overflow:'hidden'}}>
          <View style={{position:'absolute',top:parseFloat(locationX),left:parseFloat(locationY),width:40,height:40,borderRadius:40,backgroundColor:'red'}}></View>
          <View style={{flex:1,backgroundColor:'transparent'}}{...panResponder.panHandlers}></View>
         </View>
          <View> 
             <Pressable
         onPress={() => navigation.navigate('sampleOne')} 
        style={styles.button}>
        <Text>next</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default panResponder;

// Styles for layout and UI components
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
                      