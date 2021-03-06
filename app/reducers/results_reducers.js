import { FETCH_RESULTS, INVALIDATE_RESULTS, RECEIVE_RESULTS } from '../actions/search_actions';

const initialState = {
	isFetching: false,
	didInvalidate: false,
	options: []
}

export default function results(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case INVALIDATE_RESULTS:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case RECEIVE_RESULTS:
    	return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        options: action.payload.data.items
        // lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}