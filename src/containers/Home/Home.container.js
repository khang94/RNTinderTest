import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import DeckSwiper from 'react-native-deck-swiper';

import {connect} from 'react-redux';

import {actions} from '../../redux/Favourite/Favourite.reducer';
import styles from './Home.styles';
import userJson from './../../assets/json/sample.json';
import Card from '../../components/Card/Card.component';
import CardWithLoading from '../../components/Card/CardWithLoading.component';
import Handlers from './Home.handlers';
import Constants from '../../config/Constants';

const {Direction} = Constants;

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleState = this.setState.bind(this);
  }

  state = {
    users: [],
    currentUser: userJson.results[0].user,
    activeTab: 'location',
    loading: false,
  };

  componentDidMount() {
    Handlers.fetchUser(this.handleState, this.state);
  }

  renderCard = card => {
    const {currentUser, loading} = this.state;
    const avatar = (currentUser && currentUser.picture) || '';
    return loading ? (
      <CardWithLoading />
    ) : (
      <Card avatar={avatar} user={currentUser} />
    );
  };

  onSwipedRight = () => {
    this.saveFavouriteUser();
  };

  onSwipedLeft = () => {
    Handlers.fetchUser(this.handleState, this.state);
  };

  saveFavouriteUser = () => {
    const {currentUser} = this.state;
    const {addFavouriteUser} = this.props;
    addFavouriteUser({user: currentUser});
  };

  render() {
    const {users} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.top} />
        <Text style={styles.title}>Find Your Friends</Text>

        <DeckSwiper
          containerStyle={styles.card}
          cards={users}
          renderCard={this.renderCard}
          onSwipedLeft={this.onSwipedLeft}
          onSwipedRight={this.onSwipedRight}
          cardIndex={0}
          backgroundColor={'transparent'}
          stackSize={1}
          keyExtractor={(user, index) => user + index}
        />
      </View>
    );
  }
}

HomeContainer.defaultProps = {
  addFavouriteUser: () => {},
};

HomeContainer.propTypes = {
  addFavouriteUser: PropTypes.func,
};

const mapDispatchToProps = {
  addFavouriteUser: actions.addFavouriteUser,
};

export {HomeContainer};

export default connect(
  null,
  mapDispatchToProps,
)(HomeContainer);
