import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text>Travel app</Text>
      <Button
        title="Go Detail"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
      <Button
        title="Open popup"
        onPress={() => {
          navigation.navigate('Popup');
        }}
      />
      <Button
        title="Close mini app"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
