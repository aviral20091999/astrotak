import React, { Component } from 'react';
import { Text,View,Image,StyleSheet,TouchableOpacity,Dimensions,Modal} from 'react-native';

class Header extends Component {
  state={
        showModalFilter:false
    }
  render() {
    const screenWidth = Math.round((Math.round(Dimensions.get('window').width) ) / 1.9);
    return (
    <View style={[styles.container2,this.props.search?{}:{}]}>
      <View style={styles.container}>
          <View style={styles.eachImg}>
          <Image
                style={styles.image}
                source={require('../../assets/hamburger.png')}
          />
          </View>
          <View style={styles.eachImg3}>
          <Image
                style={styles.image2}
                source={require('../../assets/logo.png')}
          />
          </View>
          <View style={styles.eachImg2}>
          <Image
                style={styles.image3}
                source={require('../../assets/profile.png')}
          />
          </View>
      </View>
      {this.props.search===true?
      <View style={styles.container}>
      
      <Text style={styles.title}>Talk to an Astrologer</Text>
      
      
      <View style={styles.eachImg2}>
      <TouchableOpacity onPress={this.props.searchActual}>
      <Image
            style={styles.image3}
            source={require('../../assets/search.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.props.filter}>
      <Image
            style={styles.image3}
            source={require('../../assets/filter.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.props.sort}>
      <Image
            style={styles.image3}
            source={require('../../assets/sort.png')}
      />
      </TouchableOpacity>
      </View>
      </View>
      :null
          }
    
    
    </View>
    );
  }
}
const styles=StyleSheet.create({
    image:{
        height:18,
        width:18,
        
    },
    title: {
        flex: 2,
        fontSize: 17,
        fontWeight:"bold",
        lineHeight: 20,
        color: '#020306',
      },
    image2:{
        height:47,
        width:47,
    },
    image3:{
        height:23,
        width:23,
        marginLeft:8,
        
    },
    image4:{
        height:23,
        width:23,
        
    },
    eachImg:{
        flex:1,
    },
    eachImg2:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        flexDirection:'row'
    },
    eachImg3:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:0,
        marginBottom:5
    },
    container2:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:9,
        marginBottom:5,
        
        
        
    }
})

export default Header;