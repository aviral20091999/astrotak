import React, { Component } from 'react';
import { Text,View,ScrollView,Modal,StyleSheet,TouchableOpacity,TextInput,Image } from 'react-native'; 
import RadioButtonRN from 'radio-buttons-react-native';
import Footer from '../components/Footer'
import Header from '../components/HomeScreen/Header'
import Astro from '../components/Astrologer/Astro';



class Astrologer extends Component {
  state={
    filter:false,
    sort:false,
    filterdata:[
      {
        label: 'Vedic Astrology'
       },
       {
        label: 'Palmistry'
       },
       {
        label: 'Vastu'
       },
       
       {
        label: 'Astrology'
       },
       {
        label: 'Numerology'
       },
       {
        label: 'Face Reading'
       },
       {
        label: 'Coffee Cup Reading'
       },
       {
        label: 'English'
       },
       {
        label: 'Hindi'
       },
      ], 
      sortdata:[
        {
          label: 'Experience-high to low'
         },
         {
          label: 'Experience-low to high'
         },
         {
          label: 'Price-high to low'
         },
         
         {
          label: 'Price-high to low'
         }
        ], 
      selectedFilter: '',
      filter2:false,
      sort2:false,
      selectedSort:'',
      search:false,
      searchText:'',
    data:[{name:'Arvind Misra',skill:'Coffee Cup Reading',language:'Hindi',price:'100',experience:'25'},
          {name:'Aviral Arpan',skill:'Numerology, Tarot, Vastu, Palmistry',language:'English',price:'200',experience:'30'},
          {name:'Arvind Misra',skill:'Coffee Cup Reading',language:'Hindi',price:'100',experience:'25'},
          {name:'Aviral Arpan',skill:'Numerology, Tarot, Vastu, Palmistry',language:'English',price:'200',experience:'30'},
          {name:'Arvind Misra',skill:'Coffee Cup Reading',language:'Hindi',price:'100',experience:'25'},
          {name:'Aviral Arpan',skill:'Numerology, Tarot, Vastu, Palmistry',language:'English',price:'200',experience:'30'},]
  }
  
  render() {
    return (
      <View style={{backgroundColor:'white'}}>
      <View style={{marginHorizontal:17}}>
        <Header search={true} filter={()=>{this.setState({filter:true})} } sort={()=>{this.setState({sort:true}) } } searchActual={()=>{this.setState({search:true});console.log(this.state.search) } } />
        {this.state.search===true?
        <View style={{flexDirection:'row',backgroundColor:'#f0eded',}}>
          <Image
            style={styles.image3}
            source={require('../assets/search.png')}
          />
        {/*<Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
        <TextInput
            style={styles.input}
            placeholder="User Nickname"
            onChangeText={(searchText) => {this.setState({searchText})}}
            underlineColorAndroid="transparent"
        />*/}
        <TextInput
        style={styles.input}
        placeholder="Search Astrologer"
        onChangeText={(searchText) => {this.setState({searchText})}}
        underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={{flex:0.5}} onPress={()=>this.setState({search:false})}>
        <Text
            style={styles.image4}
            >✕</Text>
        </TouchableOpacity>
        
        </View>:null}
        <ScrollView showsVerticalScrollIndicator={false}>
          
          {(this.state.filter2==false||this.state.selectedFilter=='')&&(this.state.sort2==false||this.state.selectedSort=='')&&(this.state.search==false||this.state.searchText=='')?this.state.data.map((e, idx) => 
          <Astro
          name={e.name} 
          address={e.skill} 
          language={e.language} 
          price={e.price} 
          experience={e.experience+' years'}
          />
          ):null}
          {(this.state.filter2==true&&this.state.selectedFilter!='')?this.state.data.filter((item)=>{return(item.skill.includes(this.state.selectedFilter)||item.language.includes(this.state.selectedFilter))}).map((e, idx) => 
          <Astro
          name={e.name} 
          address={e.skill} 
          language={e.language} 
          price={e.price} 
          experience={e.experience+' years'}
          />
          ):null}
          {(this.state.sort2==true&&this.state.selectedSort!='')?this.state.data.sort((a,b)=>{
            if(this.state.selectedSort=='Experience-high to low') {return b.experience-a.experience}
            if(this.state.selectedSort=='Experience-low to high') {return a.experience-b.experience}
            if(this.state.selectedSort=='Price-high to low') {return b.price-a.price}
            if(this.state.selectedSort=='Price-low to high') {return a.price-b.price}
          }).map((e, idx) => 
          <Astro
          name={e.name} 
          address={e.skill} 
          language={e.language} 
          price={e.price} 
          experience={e.experience+' years'}
          />
          ):null}
          {
            this.state.search&&this.state.searchText!=''?
            this.state.data.filter((item)=>{return(item.name.includes(this.state.searchText)||item.language.includes(this.state.searchText)||item.skill.includes(this.state.searchText))}).map((e, idx) => 
            <Astro
            name={e.name} 
            address={e.skill} 
            language={e.language} 
            price={e.price} 
            experience={e.experience+' years'}
            />
            ):null
          }
          <Text style={{marginTop:150}}>..</Text>
        </ScrollView>

        
        {this.state.filter? 
        <View>
          <Modal
            visible={true}
            transparent={true}
            animationType={"fade"}>
            <View style={styles.mainOuterComponent}>
            <View style={styles.mainContainer}>
            <View style={styles.topPart1}>
                <Text style={styles.alertTitleTextStyle}>
                    Filter
                </Text>
            </View>

            <View style={styles.topPart2}>
            <RadioButtonRN
                  data={this.state.filterdata}
                  box={false}
                  selectedBtn={(e) => {
                    this.setState({selectedFilter: e.label})
                  }}
                />
            </View>
            <View style={styles.bottomPart2}>
              
                <TouchableOpacity
                  onPress={()=>{this.setState({filter:false});this.setState({filter2:true});this.setState({sort2:false})}}
                  style={styles.alertMessageButtonStyle} >
                  <Text style={styles.alertMessageButtonTextStyle}>OK</Text>
                </TouchableOpacity>
              
              
                <TouchableOpacity
                  onPress={()=>{this.setState({filter:false});this.setState({filter2:false})}}
                  style={styles.alertMessageButtonStyle}>
                  <Text style={styles.alertMessageButtonTextStyle}>Cancel</Text>
                </TouchableOpacity>
              
            </View>
            </View>
            </View>
          </Modal>
        </View>:null}
        {this.state.sort? 
        <View>
          <Modal
            visible={true}
            transparent={true}
            animationType={"fade"}>
            <View style={styles.mainOuterComponent}>
            <View style={styles.mainContainer}>
            <View style={styles.topPart1}>
                <Text style={styles.alertTitleTextStyle}>
                    Sort
                </Text>
            </View>

            <View style={styles.topPart2}>
            <RadioButtonRN
                  data={this.state.sortdata}
                  box={false}
                  selectedBtn={(e) => {
                    this.setState({selectedSort: e.label})
                  }}
                />
            </View>
            <View style={styles.bottomPart2}>
              
                <TouchableOpacity
                  onPress={()=>{this.setState({sort:false});this.setState({sort2:true});this.setState({filter2:false});}}
                  style={styles.alertMessageButtonStyle} >
                  <Text style={styles.alertMessageButtonTextStyle}>OK</Text>
                </TouchableOpacity>
              
              
                <TouchableOpacity
                  onPress={()=>{this.setState({sort:false});this.setState({sort2:false})}}
                  style={styles.alertMessageButtonStyle}>
                  <Text style={styles.alertMessageButtonTextStyle}>Cancel</Text>
                </TouchableOpacity>
              
            </View>
            </View>
            </View>
          </Modal>
        </View>:null}
        
      </View>
        <View style={{marginTop:'auto'}}> 
        <Footer
        
          pageName= 'Astrologer'
          navigation={this.props.navigation}
        />
        </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000088'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor:'#f0eded',
    borderColor: '#ebe8e8',
    borderWidth:1,
    color: '#424242',
    height:35,
    flex:4.5
    
},
  alertMessageButtonTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  alertMessageButtonStyle: {
    width: '30%',
    paddingHorizontal: 4,
    marginVertical: 4,
    
    
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bottomPart2: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingTop:15,
    paddingBottom:20,
    justifyContent: 'flex-end'
  },
  mainContainer: {
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 4,
  },
  topPart1: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 15,
    paddingTop:20,
  },
  image3:{
    height:20,
    width:20,
    marginTop:7,
    marginLeft:8,
    flex:0.4
    
},
image4:{
  height:20,
  width:20,
  
  fontSize:18,
  marginTop:3,
  color:'#fc7a0f',
  
  
},
  alertTitleTextStyle2: {
    //flex:5.5,
    textAlign: 'center',
    fontFamily:'Avenir Next LT Pro',
    color: "black",
    fontSize: 20,
    
    marginTop:15,
    marginHorizontal: 2
  },
  alertTitleTextStyle: {
    flex:5.5,
    textAlign: 'justify',
    fontFamily:'Avenir Next LT Pro',
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 2
  },
  topPart2: {
    width: '100%',
    //height:'50%',
    
    paddingHorizontal: 2,
    paddingVertical: 15
  },

})

export default Astrologer;