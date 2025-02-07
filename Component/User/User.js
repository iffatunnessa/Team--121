import React from 'react'
import {StyleSheet, View, Text, Image } from 'react-native'
import Button from "react-native-bootstrap-buttons";
import { addTheme } from "react-native-bootstrap-buttons";
addTheme( "myTheme", "white", "gray", "darkcyan", "teal" );

export default function User(props) {
    const { photo1, price} = props.user;
    return (
        
        <View style={styles.container}>
            <Text style={{paddingTop: 25,
    paddingBottom: 25, fontSize: 25, paddingLeft: 25}}>{props.user.name}</Text>
            <Image
          source={photo1}
          resizeMode="contain"
          style={styles.tinyLogo}
        />
        <Text style={{paddingTop: 25,
    paddingBottom: 25, fontSize: 15}}>Price: {price} ৳</Text>
    <Button label="Explore" buttonType="myTheme" square > </Button>
        </View>
    )
}
const styles = StyleSheet.create({
     container: {
      
    paddingTop: 50,
    paddingBottom: 50,
    flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
  });
  