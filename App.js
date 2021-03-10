import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TextInput,Button,TouchableOpacity,ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>Hello World </Text>
      <StatusBar style="auto" />
      {/* Image from direct internet */}
      {/* <Image style = {{width : 300,height:200}} source = {{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBf3UtXhrM4HJuH2YtBJe5LmSWLMJk5vH0Q&usqp=CAU" }} /> */}
{/* Image from folder */}

{/* <Image style = {{width:300,height : 200,resizeMode : "contain"}} source = {require("./assets/pic.jpeg")}   /> */}

{/* <TextInput  
// keyboardType = {"number-pad"} // when you use for number 


// autoCapitalize = {"characters"} // for auto capitalize input 


secureTextEntry = {true}
onChangeText = {(text) => console.log(text)}
 style ={{
  width:200,
  height:40,
  color : "black",
  border :"aqua"
}}
  placeholder = "Enter your name" /> */}

{/* Buttons  */}

  {/* <Button  title = {"click me"} onPress ={()=> alert ("you clicked me") }/>  */}

{/* often used touchableopacity */}

  {/* <TouchableOpacity>
    <Text onPress = {() => alert("you clicked me")}>Click Me</Text>
  </TouchableOpacity> */}

  {/* <View style = {styles.main1}>


  </View>
  <View style = {styles.main2}>

  </View>
  <View style = {styles.main3}> */}
  

  {[1,2,3,4,5,6,7,8,9].map ((v,i) => {
    return (

   
    <View style = {styles.card} >
   <Text >Abdul Qadeer</Text>
 </View>

    )
  })
  }
  

 
 
    </View>
    </ScrollView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 100,
  },
  card : {
    backgroundColor : "red",
    width : "80%",
    height : 200,
    justifyContent : "center",
    alignItems : "center",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 10,
},
shadowOpacity: 0.51,
shadowRadius: 13.16,

elevation: 20,
  }
// main1 : {
//    backgroundColor : "red",
//    flex : 1,
//    width : "100%"
// },
// main2 : {
//   backgroundColor : "aqua",
//   flex : 2,
//   width : "100%"
// },
// main3 : {
//   backgroundColor : "blue",
//   flex : 3,
//   width : "100%"
// }
  // button : {
  //   backgroundColor : "aqua",
  //   width : "40%",
  //   marginBottom: "30px"
  // }
});
