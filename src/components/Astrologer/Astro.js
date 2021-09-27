import React, { Component } from 'react';
import { Text,FlatList,View,Image,StyleSheet,Dimensions, TouchableOpacity,Button } from 'react-native';
class Astro extends Component{


    render(){
        return(
            <View style={{flexDirection:'row',borderColor:'#d6d6d6',borderBottomWidth:1,marginVertical:5,backgroundColor:'white'}}>
                <View style={{flex:2.6}}>
                    <Image
                    style={styles.image}
                    source={require('../../assets/astrologer.png')}
                    />
                </View>
                <View style={{flex:5,flexDirection:'column',marginLeft:5}}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <View style={{flexDirection:'row'}}>
                    <Image
                    style={styles.image2}
                    source={require('../../assets/skills.png')}
                    />
                    <Text style={{flex:4,fontSize:14}}>{this.props.address}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginVertical:5}}>
                    <Image
                    style={styles.image2}
                    source={require('../../assets/language.png')}
                    />
                    <Text style={{flex:4,fontSize:14}}>{this.props.language}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginBottom:5}}>
                    <Image
                    style={styles.image2}
                    source={require('../../assets/price.png')}
                    />
                    <Text style={{flex:4,fontSize:14,fontWeight:"bold",marginBottom:14}}>{'\u20b9 '}{this.props.price}{' /Min'}</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#fa7305',borderRadius:8,marginRight:50,marginBottom:10,justifyContent:'center',alignItems:'center'}} onPress={()=>{console.log('talk on call')}}>
                        <Text style={{fontWeight:"bold",paddingVertical:10,paddingHorizontal:10,color:'white'}}><Image />Talk on Call</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1.5}}>
                    <Text style={{marginTop:8}}>{this.props.experience}</Text>
                </View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    image:{
        height:86,
        width:89,
        marginTop:5
    },
    image2:{
        height:20,
        width:20,
        marginRight:5,
        flex:0.55
    },
    title: {
        flex: 1,
        fontSize: 15.5,
        fontWeight:"bold",
        lineHeight: 20,
        color: '#020306',
      },
})
export default Astro;