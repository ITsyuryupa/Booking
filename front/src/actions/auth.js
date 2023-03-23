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
            const response = await axios.post(`http://localhost:8080/api/auth/authenticate`, {
                phone,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/authenticate`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}

