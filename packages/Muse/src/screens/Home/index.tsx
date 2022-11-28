import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Open mini app"
        onPress={() => {
          navigation.navigate('mTravel');
        }}
      />
    </View>
  );
};

export default Home;
