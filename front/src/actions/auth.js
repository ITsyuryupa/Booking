import axios from 'axios'
import {setUser} from "../reducers/userReducer";
export const registration = async (phone, email, fullname,password) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/user/create`, {
            phone,
            email,
            fullname,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}
export const login =  (phone, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:8080/api/user/signin`, {
                phone,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('user', response.data.user)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            dispatch(localStorage.getItem('user'))
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('user')
        }
    }
}
