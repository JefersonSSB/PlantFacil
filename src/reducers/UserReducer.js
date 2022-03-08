export const initialState = {
    plantId: 0,

};


export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setPlant':
            return { ...state, plantId: action.payload.plantId };
            break;
        default:
            return state;
    }
}