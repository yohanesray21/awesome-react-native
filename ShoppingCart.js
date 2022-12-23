import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Cart from './shopping-cart.png';
const ShoppingCart = ({qty}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={Cart} style={styles.cart} />
        <Text style={styles.notif}>{qty}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    padding: 20,
  },
  cart: {width: 60, height: 60},
  container: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notif: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
    padding: 3,
    color: 'white',
    borderRadius: 15,
    position: 'absolute',
    right: 0,
    top: 0,
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default ShoppingCart;
