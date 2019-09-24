import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import DeckSwiper from 'react-native-deck-swiper';
import Card from './../../components/Card/Card.component';
import styles from './Favourite.styles';

const renderUserCard = user => {
  if (!user) {
    return <View />;
  }

  const avatar = (user && user.picture) || '';
  return <Card avatar={avatar} user={user} />;
};

const FavouriteContainer = ({favouriteUsers}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <Text style={styles.title}>Your Favourite Friends</Text>
      {favouriteUsers.length === 0 && (
        <Text style={styles.note}>No favourite users is available</Text>
      )}
      <DeckSwiper
        containerStyle={styles.card}
        cards={favouriteUsers}
        renderCard={renderUserCard}
        infinite={true}
        cardIndex={0}
        backgroundColor={'transparent'}
        stackSize={2}
      />
    </View>
  );
};

FavouriteContainer.defaultProps = {
  favouriteUsers: [],
};

FavouriteContainer.propTypes = {
  favouriteUsers: PropTypes.array,
};

const mapStateToProps = state => ({
  favouriteUsers: state.favourite.users,
});

export default connect(
  mapStateToProps,
  null,
)(FavouriteContainer);
