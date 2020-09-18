import streams from '../apis/streams';
import history from '../history';
import {
    SIGN_IN, 
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from './constants';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }   
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}


//Creating action creator responsible for creating POST request using axios
//When posting stream, destructure out userID from google OAuth for verification whether the stream was created by yourself. This is to enable edit/delete of your own stream but NOT other people's streams.
export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })

    //Insert Programmatic Navigation to show creating a stream was successful. Get User back to the root route. We need to access the history object 

    history.push('/');

}

//Action Creator: fetch list of streams

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
}

//Action Creator: Fetch single record of stream

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    });
}

//Action Creator: Edit a Stream, formValues contain updates to particular Stream

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });
    history.push('/');
}

//Action Creator: Delete A Stream:

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({
        type: DELETE_STREAM,
        payload: id
    });

    history.push('/');
}