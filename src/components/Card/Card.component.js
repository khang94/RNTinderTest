import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar.component';
import UserDetails from '../UserDetails/UserDetails.component';
import styles from './Card.component.styles';
import Handlers from './Card.handlers';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    activeTab: 'location',
  };

  onSelectItem = activeTab => {
    this.setState({
      activeTab: activeTab,
    });
  };

  render() {
    const {avatar, user} = this.props;
    const {activeTab} = this.state;

    const {title, content} = Handlers.getUserInformation(activeTab, user);
    return (
      <View style={styles.card}>
        <View style={styles.topCard}>
          <Avatar urlAvatar={avatar} />
          <UserDetails
            title={title}
            content={content}
            activeTab={activeTab}
            onSelectItem={this.onSelectItem}
          />
        </View>
      </View>
    );
  }
}

Card.defaultProps = {
  avatar: '',
  user: {},
};

Card.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
};

export default Card;
