import React, { Component } from 'react';
import { Text,FlatList,View,Image,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
const screenWidth = Math.round((Math.round(Dimensions.get('window').width)));
class Reports extends Component {
  state={
      data:this.props.data
  }
  render() {
    const screenWidth = Math.round((Math.round(Dimensions.get('window').width) - 32) / 2.4);
    return (
      <View style={styles.container}>
          
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Reports</Text>
            <TouchableOpacity
                style={{flexDirection:'row'}} 
                activeOpacity={1.0} 
                >
                <Text style={styles.seeMore}>See All {'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.desc}>Astrology report or what is commonly known as Horoscope report is basically an in depth look at your birth chart.Horoscope report will look at various planetary positions in your birth charts and also derive relationships and angle to understand your personality and trait.</Text>
          <View style={styles.innerContainer}>
          <FlatList
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             data={this.state.data}
             renderItem={({item,index})=>
                <View style={{alignItems:'center',marginRight:screenWidth/17}}>
                <TouchableOpacity >
                    <Image
                    style={[styles.image]}
                    source={{uri: item.image}}
                    />
                </TouchableOpacity>
                
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
        marginBottom:10
    },
    innerContainer:{
        
        marginTop:8
    },
    image:{
        height:screenWidth/2.1,
        width:screenWidth/1.6,
        borderRadius:10
        
        
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

export default Reports;