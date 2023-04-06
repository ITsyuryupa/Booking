const SET_ADMIN = "SET_ADMIN"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentAdmin: {},
    isAuth: false,
    phone: {},
}

export default function adminReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ADMIN:
            return {
                ...state,
                currentAdmin: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentAdmin: {},
                isAuth: false
            }
        default:
            return state
    }
}


export const setAdmin = admin => ({type: SET_ADMIN, payload: admin})
export const logout = () => ({type: LOGOUT})