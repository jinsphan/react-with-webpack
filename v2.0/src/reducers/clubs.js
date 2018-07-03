import {
    clubsAction
} from "actions"

const defaultState = [];

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case clubsAction.FETCH_DATA_BY_NAME: {
            return [
                ...payload.data
            ]
        } 
        default: return state;
    }
}
