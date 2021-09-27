import React, { Component } from 'react';
import { Text,FlatList,View,Image,StyleSheet,Dimensions, TouchableOpacity,Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const screenWidth = Math.round((Math.round(Dimensions.get('window').width)));
class Reports extends Component {
    
  state={
    selectedCategory:'',
  }
  render() {
    const screenWidth = Math.round((Math.round(Dimensions.get('window').width) - 32) / 2.4);
    return (
      <View style={styles.container}>
          
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Ask a Question</Text>
          </View>
          <Text style={styles.desc}>Seek accurate answers to your life problems and guide you towards the right path. Whether the problem is related to love,self,life,business,money,education or work, our astrologers will do an in depth study of your birth chart and provide personalized responses along with remedies.</Text>
          <View style={styles.innerContainer}>
            <Text style={[styles.title2]}>Choose Category</Text>
            <View>
            <Picker
            
            style={[{backgroundColor:'white',marginVertical:10,paddingVertical:2},styles.selectInput]}
            selectedValue={this.state.selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({selectedCategory:itemValue})
            }>
            <Picker.Item value='' label='Select a category' color='grey' />
            <Picker.Item label="Career" value="career" color='black'/>
            <Picker.Item label="Education" value="education" color='black'/>
            <Picker.Item label="Relationship" value="relationship" color='black'/>
            </Picker>
            {/*<RNPickerSelect
            onValueChange={(value) => console.log(value)}
            
            items={[
                { label: 'Work', value: 'work' },
                { label: 'Health', value: 'health' },
                { label: 'Relationships', value: 'relationship' },
            ]}
          />*/}
            </View>
            <View style={styles.hor1}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:10}}>
                    <Text style={{fontSize:10.5,fontWeight:"bold"}}>{' '+'\u20b9'}99</Text>
                    <Text style={{fontSize:10.5,marginLeft:5,color:'#808080',fontWeight:"bold"}} >( including GST )</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginBottom:10}}>
                    <Text style={{fontSize:10.5,fontWeight:"bold",marginRight:8}}>Ideas what to ask</Text>
                    <TouchableOpacity style={{backgroundColor:'#fa7305',borderRadius:4,marginRight:11}} onPress={()=>{console.log('ask a question')}}>
                        <Text style={{fontSize:9,fontWeight:"bold",paddingVertical:4,paddingHorizontal:10,color:'white'}}>Ask a Question</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        backgroundColor:'#e1e5e6',
        marginTop:8
    },
    image:{
        height:screenWidth/2.1,
        width:screenWidth/1.6,
        borderRadius:10
        
        
    },
    selectInput: {
      transform: [
        { scaleX: 0.9 }, 
        { scaleY: 1},
     ],
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
        marginLeft:17,
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
        marginLeft:17,
        marginRight:4
      }
})

export default Reports;