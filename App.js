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




import HomeScreen from './screens/Home';
import SettingScreen from './screens/Setting';
import LoginScreen from './screens/Login';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={main} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen  name="B" component={B} />
        <Stack.Screen name="Login" component ={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Drawercomp() {
  return (
    <View>
      <Text>sss</Text>
    </View>
  );
}

function main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function Video() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Drawercomp} />
    </Drawer.Navigator>
  );
}
function Item() {
  return (
    <View>
      <Text>sfdsfds</Text>
    </View>
  );
}

function B(){
  return(
    <View>
      <Text>b</Text>
    </View>
  )
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
    backgroundColor: 'red',
    width: 100,
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
  },
});
