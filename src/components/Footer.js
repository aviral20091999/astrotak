import React from 'react';
import { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
class DefaultFooter extends Component {
	
	
	render() {
        const {pageName}=this.props;
		
		return (
			<View style={styles.headerStyle}>
				<TouchableOpacity
					activeOpacity={1.0}
					onPress={()=>{this.props.navigation.navigate('Home')}}
					style={styles.centervertical}>
                    <Image
                        style={styles.sideMenuStyle}
                        source={pageName==='HomeScreen'?require('../assets/home.png'):require('../assets/home-grey.png')}
                    />
					<Text style={[styles.bottomTextStyle, pageName === 'HomeScreen' ? {color: '#fc7200'}:{color:'#a6a6a4'}]}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={1.0}
					onPress={()=>{this.props.navigation.navigate('Astro')}}
					style={styles.centervertical}>
                    <Image
                        style={styles.sideMenuStyle4}
                        source={pageName=='Astrologer'?require('../assets/talk-orange.png'):require('../assets/talk.png')}
                    />
					<Text style={[styles.bottomTextStyle, pageName === 'Astrologer' ? {color: '#fc7200'}:{color:'#a6a6a4'}]}>Talk To Astrologer</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={1.0}
					onPress={()=>{console.log('crow')}}
					style={styles.centervertical}>
                    <Image
                        style={styles.sideMenuStyle2}
                        source={require('../assets/ask.png')}
                    />
					<Text style={[styles.bottomTextStyle, pageName === 'Question' ? {color: '#fc7200'}:{color:'#a6a6a4'}]}>Ask Question</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={1.0}
					onPress={()=>{console.log('crow')}}
					style={styles.centervertical}>
                    <Image
                        style={styles.sideMenuStyle3}
                        source={require('../assets/reports.png')}
                    />
					<Text style={[styles.bottomTextStyle, pageName === 'Reports' ? {color: '#fc7200'}:{color:'#a6a6a4'}]}>Reports</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerStyle: {
		borderTopWidth: 1,
		borderColor: '#eaeaea',
		backgroundColor: '#ffffff',
		paddingTop: 14,
		paddingBottom: 6,
		flexDirection: 'row',
		justifyContent: "space-evenly",
		
	},
	centervertical: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: 70
	},
	 sideMenuStyle: {
		width: 24/1,
		height: 30/1.25,
	}, 
    sideMenuStyle2: {
		width: 30.5/1.2,
		height: 30/1.25,
	},
    sideMenuStyle4: {
		width: 30.5/1.2,
		height: 30/1.3,
	},
    sideMenuStyle3: {
		width: 24/1.25,
		height: 30/1.25,
	},bottomTextStyle: {
		fontWeight: "bold",
		fontSize: 8,
		marginTop: 4,
		textAlign:'center',
		
		
        
	}
});

export default DefaultFooter;