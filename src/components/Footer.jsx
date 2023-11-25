import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2023 My App. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  text: {
    fontSize: 14,
    color: '#666',
  },
});

export default Footer;
