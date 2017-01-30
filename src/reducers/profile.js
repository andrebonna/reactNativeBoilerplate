import {TOGGLE_BOOLEAN, CHANGE_TEXT} from '../constants/types';

const defaultState = {
    isOk: false,
    text: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case TOGGLE_BOOLEAN: {
            return {
                ...state,
                isOk: !state.isOk
            };
        }
        case CHANGE_TEXT: {
            return {
                ...state,
                text: action.value
            };
        }
        default: {
            return state;
        }
    }
}
