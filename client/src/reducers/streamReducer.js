import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/constants';
import _ from 'lodash';

const initialState = {};

export default (state = initialState, action) => {
    //There are the same returns for three cases because we really only grab one stream from our api.
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload } //Key Interpolation Syntax
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            return _.omit(state, action.payload); //No need to reference id, the entire payload is just the id.
        default:
            return state;
    }
}