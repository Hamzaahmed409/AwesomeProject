import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TabBarIOS,
  Settings,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function Home({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={{...styles.touch, backgroundColor: 'yellow'}}
            onPress={() => navigation.navigate('Item')}>
            <Text style={{fontSize: 45}}>Hello</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.touch, backgroundColor: 'green'}}
          
          >
            <Text style={{fontSize: 45}}>Hello</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={{...styles.touch,backgroundColor:'blue'}}>
            <Text style={{fontSize: 45}}>Hello</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <Text style={{fontSize: 45}}>Hello</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.touch}>
            <Text style={{fontSize: 45}}>Hello</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <Text style={{fontSize: 45, alignItems: 'flex-end'}}>Hello</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={{backgroundColor: 'red', width: 150, height: 150}}>
            <Text style={{fontSize: 45}}>Hello</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor: 'red', width: 150, height: 150}}>
            <Text style={{fontSize: 45, alignItems: 'flex-end'}}>Hello</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
  },
  Views: {
    padding: 40,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 35,
    flex: 1,
  },

  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 150,
    height: 150,
    borderRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
  },
});

export default Home;
