import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const appName = 'Incredible Todo List App';
  const name = 'Yuk Kwan Ma';
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>{appName}</Text>
        <Text style={styles.text}>Created by: {name}</Text>
        <Text style={styles.text}>Current Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default AboutScreen;
