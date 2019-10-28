import { combineReducers } from 'redux';
import someItems from './someItems';
import selectedItem from './selectedItem';

const rootReducer = combineReducers( {someItems, selectedItem} );

export default rootReducer;
