import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image , 
  TouchableOpacity} from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log(`Text clicked in time: ${new Date().toLocaleTimeString()}`);
  }
  
   

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>ئەسسالام ئەلەيكۇم، قانداق ئەھۋالىڭىز؟ بۇ مېنىڭ تۇنجى رېئەكت نېيتىۋ پروجېكتىم</Text>
      {/* <Image source={require("./assets/image01.png")} /> */}
      {/* <TouchableOpacity onPress={()=>console.log(`Image clicked in time: ${new Date().toLocaleTimeString()}`)}>
      <Image 
      blurRadius={10}
      fadeDuration={200}
      source={{
        width: 100,
        height: 100,
        uri: "https://picsum.photos/100/100"}} />

      </TouchableOpacity> */}
      <View style={{width:200, height:70, backgroundColor:"dodgerblue"}}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
