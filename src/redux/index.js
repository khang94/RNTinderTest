import {combineReducers} from 'redux';
import FavouriteReducer, {
  stateName as FavouriteStateName,
} from './Favourite/Favourite.reducer';

const AppReducer = combineReducers({
  [FavouriteStateName]: FavouriteReducer,
});

export default AppReducer;
