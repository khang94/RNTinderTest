import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './UserDetails.styles';
import assets from './../../assets/images';

const UserDetails = ({title, content, activeTab, onSelectItem}) => (
  <View style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
    <View style={styles.iconList}>
      <TouchableOpacity onPress={() => onSelectItem('account')}>
        {activeTab === 'account' ? (
          <Image source={assets.accountActive} style={styles.icon} />
        ) : (
          <Image source={assets.account} style={styles.icon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelectItem('birthday')}>
        {activeTab === 'birthday' ? (
          <Image source={assets.birthdayActive} style={styles.icon} />
        ) : (
          <Image source={assets.birthday} style={styles.icon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelectItem('location')}>
        {activeTab === 'location' ? (
          <Image source={assets.locationActive} style={styles.icon} />
        ) : (
          <Image source={assets.location} style={styles.icon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelectItem('phone')}>
        {activeTab === 'phone' ? (
          <Image source={assets.phoneActive} style={styles.icon} />
        ) : (
          <Image source={assets.phone} style={styles.icon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelectItem('password')}>
        {activeTab === 'password' ? (
          <Image source={assets.passwordActive} style={styles.icon} />
        ) : (
          <Image source={assets.password} style={styles.icon} />
        )}
      </TouchableOpacity>
    </View>
  </View>
);

UserDetails.defaultProps = {
  title: '',
  content: '',
  activeTab: '',
  onSelectItem: () => {},
};

UserDetails.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};

export default UserDetails;
