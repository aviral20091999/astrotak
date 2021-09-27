import React, { Component } from 'react';
import { Text,FlatList,View,Image,StyleSheet,Dimensions, TouchableOpacity,Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const screenWidth = Math.round((Math.round(Dimensions.get('window').width)));
class Reports extends Component {
    state={
        data:this.props.data
    }
    
  render() {
    const screenWidth = Math.round((Math.round(Dimensions.get('window').width) ) / 1.9);
    return (
      <View style={styles.container}>
          
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Hear from our Happy Customers!</Text>
          </View>
          <View>
            <FlatList
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             data={this.state.data}
             renderItem={({item,index})=>
                <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginRight:screenWidth/10,borderColor:'#cfd1d0',borderWidth:1,borderBottomWidth:2,borderRadius:5,width:screenWidth,height:screenWidth*1.2,shadowColor: '#cfd1d0',shadowOpacity: 0.8,elevation: 1.2,shadowRadius: 5 ,shadowOffset : { width: 0, height: 0}}}>
                    <View style={{height:3.5/(3.5+1.8)*screenWidth*1.2,width:screenWidth-15,marginTop:7.5}}>
                        <Image style={styles.image3} source={require('../../assets/doublequote.png')} />
                        <Text numberOfLines={6} style={{color:'grey'}}>{item.text}</Text>

                    </View>
                    <View style={{height:1.5/(3.5+1.8)*screenWidth*1.2,backgroundColor:'#e1e5e6',width:screenWidth-2,justifyContent:'center',alignItems:'center',borderRadius:5}}>
                        <Text style={{fontSize:16,marginTop:15}}>{item.customer}</Text>
                        <Text style={{fontSize:12,color:'grey'}}>{item.location}</Text>
                    </View>
                    <Image style={styles.image4} source={require('../../assets/user.png')} />
                
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
        backgroundColor:'#f0f0f0',
        marginTop:8
    },
    image:{
        height:screenWidth/2.1,
        width:screenWidth/1.6,
        borderRadius:10
        
        
    },
    image3:{
        height:10/1.3,
        width:28/2.4,
        marginTop:10
    },
    image4:{
        height:40/2.4*2.5,
        width:40/2.4*2.5,
        borderRadius:20/2.4*2.5,
        position:'absolute',
        top:3.5/(3.5+1.8)*screenWidth*0.58,
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
        lineHeight: 17,
        color: '#020306',
        marginLeft:11,
        marginTop:15,
        marginBottom:5
      },
      title3:{
        fontSize: 12,
        
        lineHeight: 14,
        color:'#a7aba7',
        marginTop:5
      },
      hor1:{
        flexDirection:'row',
        marginLeft:11
      }
})

export default Reports;