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

function Setting({navigation}) {
    return (
      <View>
        <Button title="next" onPress={() => navigation.naigate('B')} />
      </View>
    );

    }
    export default Setting;
