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
          
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Daily Horoscopes</Text>
            <TouchableOpacity
                style={{flexDirection:'row'}} 
                activeOpacity={1.0} 
                >
                <Text style={styles.seeMore}>See All {'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.desc}>Read your daily horoscope based on your sunsign, select your zodiac sign and give the right start to your day.</Text>
          <View style={styles.innerContainer}>
          <FlatList
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             data={this.state.data}
             renderItem={({item,index})=>
                <View style={{alignItems:'center',marginRight:screenWidth/7}}>
                <TouchableOpacity >
                    <Image
                    style={[styles.image]}
                    source={{uri: item.image}}
                    />
                </TouchableOpacity>
                <Text style={styles.title2}>{item.title}</Text>
                <Text style={styles.title3}>{item.date}</Text>
                </View>}
          />
          </View>
          
          
      </View>
    );
  }
}
const styles=StyleSheet.create({
    container:{
        marginTop:15,
    },
    desc:{
        color:'#656666',
    },
    innerContainer:{
        marginLeft:10,
        marginTop:8
    },
    image:{
        height:screenWidth/5,
        width:screenWidth/5,
        
        borderRadius:screenWidth/10,
        
    },
    titleBlock: {
        flexDirection: 'row',
        
        marginBottom:12
      }, title: {
        flex: 1,
        fontSize: 17,
        fontWeight:"bold",
        lineHeight: 20,
        color: '#020306',
      }, seeMore: {
        color: '#fa7305',
        fontSize: 17,
        lineHeight: 18,
        fontWeight:"bold"

      },
      title2:{
        fontSize: 16,
        fontWeight:"bold",
        lineHeight: 20,
        color: '#020306',
        marginTop:5
      },
      title3:{
        fontSize: 12,
        
        lineHeight: 14,
        color:'#a7aba7',
        marginTop:5
      }
})

export default AstrologerCollection;