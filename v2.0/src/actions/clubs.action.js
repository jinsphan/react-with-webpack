import { clubsApi } from "api";

const keyAction = "clubs.action";

const getTypeActions = (name) => `${keyAction}.${name}`;

export const FETCH_DATA_BY_NAME = getTypeActions("FETCH_DATA_BY_NAME");
const setClubs = (data = []) => {
    return {
        type: FETCH_DATA_BY_NAME,
        payload: {
            data
        }
    }
}
export const fetchDataByName = name => {
    return dispatch => {
        return clubsApi.fetchByName(name)
            .then(data => {
                dispatch(setClubs(data))
            })
            .catch(err => {
                dispatch(setClubs())
                throw err;
            })
    }
}