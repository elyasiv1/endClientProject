import * as actionsType from './../actions/types.js';

const initialState = {
    show: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionsType.SHOW_CART: {
            return ({ ...state, show: action.show });
        }
        default: return state;
    }
}
