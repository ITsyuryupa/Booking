import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const registration = async (fullName, phone, email, password) => {

    try {
        console.log(fullName, phone, email, password)
        const response = await axios.post(`http://localhost:8080/api/user/create`, {
            fullName,
            phone,
            email,
            password
        })
        alert("Вы успешно зарегестрировались")
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