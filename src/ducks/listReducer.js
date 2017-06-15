import apiURL from '../api';

const initialState = {
  loading: false,
  customerList: []
}

// Action Types
const GET_LIST = "GET_LIST"

// Reducer
export default function listReducer( state = initialState, action ) {
  switch( action.type ) {
    // Pending

    // Fulfilled

    default: return state;
  }
}

// Action Creators
