import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image , 
  Alert,
  TouchableOpacity,
  Button,
  Platform} from 'react-native';
  // import { useWindowDimensions ,  useDeviceOrientation, } from "@react-native-community/hooks";

export default function App() {



  // console.log(Dimensions.get("screen")) 

  const handlePress = () => {
    console.log(`Text clicked in time: ${new Date().toLocaleTimeString()}`);
  }
  
   

  return (
    <SafeAreaView style={styles.container }>
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
      {/* <View style={{width:200, height:70, backgroundColor:"dodgerblue"}}>

      </View> */}

      {/* <Button
        title = "كۇنۇپكا"  
        onPress={ ()=> 
          Alert.alert("ئەسسالام ئەلەيكۇم", "قانداق ئەھۋالڭىز؟", [
          {text: "ياخشى" , onPress: ()=> console.log("Elhemdulillah")},
          {text: "سورىما", onPress: ()=> console.log("Elhemdulillah ala kulli hal")}
        ])
            // Alert.prompt("ئەسسالام ئەلەيكۇم", "قانداق ئەھۋالڭىز؟", (text) => console.log(text))// this doesn't work in android
        }
      /> */}

      {/* <View style={{
        backgroundColor: 'dodgerblue',
        width:"100%",
        height: "30%",
      }}>
      </View> */}

      <View
        style={{
          backgroundColor:"red",
          flex:1,
        }} 
      />
            <View
        style={{
          backgroundColor:"white",
          flex:1,
        }} 
      />
            <View
        style={{
          backgroundColor:"blue",
          flex:1,
        }} 
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop : Platform.OS ==="android" ? StatusBar.currentHeight : 0,
    
  },
});
 