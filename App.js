import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, View,StyleSheet,Image,button, Touchable, TouchableOpacity, alert, TextInput} from 'react-native';


const App = () =>{
  return( 
    <View style={style.container}> 
    <Text style={style.title}>skeler</Text>
    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0WeRvLbkgczBH_u4bmaAQWzEoVXc7XaPPYA&s'}}
    style={style.image}/> 
   <TouchableOpacity 
       style={style.button}
        onPress={()=> Alert.alert('ayo brrr')}>
          <Text style={style.buttonText}>Push me </Text> 
          </TouchableOpacity>
          <Text>sipirili</Text>
      <TextInput placeholder=""
          style={style.input} ></TextInput>
      <Text>noporolo</Text>
      <TextInput placeholder=""
      style={style.input}></TextInput>
      </View> 
);
};

const style=StyleSheet.create({
  container:{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundcolor: 'green'},
  title:{fontSize:30},
  texto:{backgroundcolor:'yellow', fontSize:50},
  image:{height : 200, width:200,borderRadius:90},
  button:{backgroundColor:'blue',
  padding:7,
  marginTop:10
  },
  buttonText:{
    color:'BLACK',fontSize:20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 10, // margen superior
    marginBottom: 10, // margen inferior
    width: '80%', // ajusta el ancho según necesites
  },
})

export default App;