import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const favoritesScreen = (props) => {
  return (
    <View>
      <Text>Favorite Screen</Text>
    </View>
  );
};

const fstyle = StyleSheet.create({
  favoriteScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default favoritesScreen;
