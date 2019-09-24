import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';

import styles from './Avatar.styles';

const Avatar = ({urlAvatar}) => (
  <View style={styles.containerAvatar}>
    <View style={styles.avatarWrapper}>
      <Image style={styles.avatar} source={{uri: urlAvatar}} />
    </View>
  </View>
);

Avatar.propTypes = {
  urlAvatar: PropTypes.string.isRequired,
};

export default Avatar;
