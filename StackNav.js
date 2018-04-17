import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import { StyleSheet, Text, View } from 'react-native';
import budaya from '../comp/budaya';
import pkmundiksha from '../comp/pkmundiksha';



export default Home = StackNavigator({
	budaya: {
		screen: budaya},
	pkmundiksha: {
		screen: pkmundiksha},
},{
	initialRouteName: 'budaya'
});
