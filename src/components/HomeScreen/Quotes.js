import React, { Component } from 'react';
import { Text,View,StyleSheet,Image } from 'react-native';

class Quotes extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={{flex:3}}>
        <Image style={styles.image3} source={require('../../assets/doublequote.png')} />
        <Text style={[styles.text,{transform: [{ scaleY: 1 }]}]}>There is no better boat than horoscope to help a man cross over the sea of life.{' '}
            <Image style={styles.image2} source={require('../../assets/doublequote.png')} />
                   
        
        </Text>
        
        <Text style={styles.text2}>-Varahamihira</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image
                style={styles.image}
                source={require('../../assets/ganesh.png')}
          />
      </View>
    </View>
    );
  }
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginRight:30,
        marginLeft:30,
    },
    text:{
        lineHeight:17,
        marginLeft:22,
        marginRight:20,
        marginTop:2.5,
        fontSize:15,
        color:'#656666'
        
    },
    text2:{
        lineHeight:20,
        textAlign:'center',
        color:'#a7aba7',
        marginTop:10
        
    },
    image:{
        height:75,
        width:75,
        borderRadius:75/2,
    },
    image2:{
        height:10/1.3,
        width:30/1.4,
        
    },
    image3:{
        height:10/1.3,
        width:28/1.2,
        marginTop:10
    }

})

export default Quotes;