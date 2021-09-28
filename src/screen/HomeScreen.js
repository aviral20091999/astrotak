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
    offers:'',
    horoscopes:'',
    reports:'',
    questionCategories:'',
    reviews:'',
    astrologerDetails:'',
  }
  componentDidMount(){
    this.getData();
  }
  getData=async()=>{
    try {
      const res=await(axios.get('http://localhost:4000/api/v1/getOffers'));
      console.log(res.data);
      this.setState({offers:res.data.data})
    } catch (error) {
      console.log(error.message)
    }

    try {
      const res=await(axios.get('http://localhost:4000/api/v1/getHoroscopes'));
      console.log(res.data);
      this.setState({horoscopes:res.data.data})
    } catch (error) {
      console.log(error.message)
    }

    try {
      const res=await(axios.get('http://localhost:4000/api/v1/getReports'));
      console.log(res.data);
      this.setState({reports:res.data.data})
    } catch (error) {
      console.log(error.message)
    }

    try {
      const res=await(axios.get('http://localhost:4000/api/v1/getQuestions'));
      console.log(res.data);
      this.setState({questionCategories:res.data.data})
    } catch (error) {
      console.log(error.message)
    }

    try {
      const res=await(axios.get('http://localhost:4000/api/v1/getReviews'));
      console.log(res.data);
      this.setState({reviews:res.data.data})
    } catch (error) {
      console.log(error.message)
    }

    try {
      const res=await(axios.get('http://localhost:4000/api/v1/getAstrologerDetails'));
      console.log(res.data);
      this.setState({astrologerDetails:res.data.data})
    } catch (error) {
      console.log(error.message)
    }
    
  }
  render() {
    
    return (
      
      <View>
      
      <View style={{marginHorizontal:17}}>
        <Header search={false}/>
        {this.state.offers!=''&&this.state.horoscopes!=''&&this.state.reports!=''&&this.state.questionCategories!=''&&this.state.reviews!=''&&this.state.astrologerDetails!=''?
        <ScrollView showsVerticalScrollIndicator={false}>
        <Quotes />
        <AstrologerCollection data={this.state.offers}/>
        <DailyHoroscope data={this.state.horoscopes} />
        <Reports data={this.state.reports} />
        <Question categories={this.state.questionCategories}/>
        <Review data={this.state.reviews}/>
        <Text style={{marginTop:120}}></Text>
        
        
        
        
        </ScrollView>
        :null}
        

        

          
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