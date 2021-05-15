export default function Reducer(state, action) {
    switch (action.type) {
        case "MOB_NAV_ACTIVE":
            return {
                ...state,
                mobNavActive: action.payload.mobNavActive
            }
    
        default:
            return state;
    }
}