import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './Card.component.styles';

const CardWithLoading = () => (
  <View style={styles.card}>
    <View style={styles.topCard}>
      <ActivityIndicator />
    </View>
  </View>
);

export default CardWithLoading;
