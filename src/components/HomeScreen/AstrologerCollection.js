import React, { Component } from 'react';

import { Text,FlatList,View,Image,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
const screenWidth = Math.round((Math.round(Dimensions.get('window').width)));
class AstrologerCollection extends Component {
  state={
      data:this.props.data
  }
  render() {
    const screenWidth = Math.round((Math.round(Dimensions.get('window').width) - 32) / 2.4);
    return (
      <View style={styles.container}>
          <FlatList
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             data={this.state.data}
             renderItem={({item,index})=>
                
                <TouchableOpacity style={styles.button} onPress={()=>{console.log(item.redirectionUrl)}}>
                    <Image
                    style={[styles.image]}
                    source={{uri: item.imgUrl}}
                    />
                </TouchableOpacity>
                }
          />

          
      </View>
    );
  }
}
const styles=StyleSheet.create({
    container:{
        marginVertical:10,
    },
    image:{
        height:screenWidth/3.0,
        width:screenWidth/2.5,
        marginRight:7,
        borderRadius:10,
        
        
        
    },
    button: {
      height:screenWidth/2.952,
        width:screenWidth/2.5,
        marginRight:7,
      
      
      borderRadius:14,
      
      
      shadowColor: '#cfd1d0',
      shadowOpacity: 0.8,
      elevation: 5,
      shadowRadius: 14 ,
      shadowOffset : { width: 0, height: 0},
    }
    
})

export default AstrologerCollection;