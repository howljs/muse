import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="red" size="large" />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
