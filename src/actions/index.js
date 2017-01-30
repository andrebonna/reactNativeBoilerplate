import {TOGGLE_BOOLEAN, CHANGE_TEXT} from '../constants/types';

export const toggleBoolean = () => {

    return (dispatch) => {
        dispatch({type: TOGGLE_BOOLEAN});
    };
};

export const changeText = (text) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_TEXT,
            value: text
        });
    };
};
