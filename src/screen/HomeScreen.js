import React, { Component } from 'react';
const axios = require('axios');
import { Text,View,ScrollView,Dimensions } from 'react-native';
import Footer from '../components/Footer'
import Header from '../components/HomeScreen/Header'
import Quotes from '../components/HomeScreen/Quotes'
import AstrologerCollection from '../components/HomeScreen/AstrologerCollection'
import DailyHoroscope from '../components/HomeScreen/DailyHoroscope'
import Reports from '../components/HomeScreen/Reports'
import Question from '../components/HomeScreen/Question'
import Review from '../components/HomeScreen/Review'
const screenWidth=Dimensions.get('window');
class HomeScreen extends Component {
  constructor(props){
    super(props)
  }
  state={
    dataOffers:''
  }
  componentDidMount(){
    console.log(this.props.navigation)
    this.getData();
  }
  getData=async()=>{
    try {
      const res=await(axios.get('http://localhost:4000/api/v1/getOffers'));
      console.log(res.data);
    } catch (error) {
      console.log(error.message)
    }
    
  }
  render() {
    
    return (
      <View>
      <View style={{marginHorizontal:17}}>
        <Header search={false}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Quotes />
          <AstrologerCollection data={['https://i.ibb.co/FK3Dm9G/img1.png','https://i.ibb.co/VMqm2hx/img2.png','https://i.ibb.co/FK3Dm9G/img1.png','https://i.ibb.co/VMqm2hx/img2.png']}/>
          <DailyHoroscope data={[{image:'https://i.ibb.co/2SR4wJm/hu1.png',title:'Aries',date:'March 21-April 19'},{image:'https://i.ibb.co/t2TNkm2/hu2.png',title:'Taurus',date:'April 20-May 20'},{image:'https://i.ibb.co/nQ20gBJ/hu3.png',title:'Gemini',date:'May 21-June 20'},{image:'https://i.ibb.co/t2TNkm2/hu2.png',title:'Virgo',date:'June 21-July 19'}]} />
          <Reports data={[{image:'https://i.ibb.co/8Y64dSH/what1.png'},{image:'https://i.ibb.co/8Y64dSH/what1.png'},{image:'https://i.ibb.co/8Y64dSH/what1.png'}]} />
          <Question />
          <Review data={[{text:'I discussed with Mr. Arvind ji and i am very satisfied with the discussion.I discussed with Mr. Arvind ji and i am very satisfied with the discussion.',customer:'Aviral Arpan',location:'Ranchi,India'},{text:'I discussed with Mr. Arvind ji and i am very satisfied with the discussion.,I discussed with Mr. Arvind ji and i am very satisfied with the discussion ',customer:'Aviral Arpan',location:'Ranchi,India'}]}/>
          <Text style={{marginTop:120}}></Text>
          
          
          
          
        </ScrollView>

        

          
        </View>
        <View style={{marginTop:'auto'}}> 
          <View >
          <Footer
            
            pageName= 'HomeScreen'
            navigation={this.props.navigation}
          />
          </View>
        </View>
        
      </View>
    );
  }
}

export default HomeScreen;