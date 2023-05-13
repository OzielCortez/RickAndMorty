import { ADD_FAV, REMOVE_FAV } from "./types"

const initialState = {
    myFavorites: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, payload]};
        case REMOVE_FAV:
            let deleteCharacter = state.myFavorites.filter((char) => char.id !== Number(payload));
            return {...state, myFavorites: deleteCharacter};
        default:
            return {...state};
    }
};

export default rootReducer;