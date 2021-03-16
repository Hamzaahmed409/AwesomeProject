import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoriesScreen = (props) => {
  return (
    <View>
      <Text>Categories screen</Text>
    </View>
  );
};

const styless = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
