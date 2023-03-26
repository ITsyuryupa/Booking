import axios from 'axios'
import {setUser} from "../reducers/userReducer";
import {useSelector} from "react-redux";
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

            console.log(5)
            localStorage.setItem('user', response.data.user)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/signin`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            console.log(10)
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            localStorage.getItem('user')
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}