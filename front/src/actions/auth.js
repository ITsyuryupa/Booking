import axios from 'axios'
import {setUser} from "../reducers/userReducer";
import {setAdmin} from "../reducers/adminReducer";

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
        console.log(response)
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
            dispatch(setUser(response.data))
            console.log(response.data)

            localStorage.setItem('user', response.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const adminLogin =  (login, password) => {

    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:8080/api/admin/signin`, {
                login,
                password
            })
            dispatch(setAdmin(response.data))
            console.log(response.data)

            localStorage.setItem('admin', response.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const reservation = async (dateIn, dateOut, room, user, dateUser, passportSeries, passportNumber) => {

    try {
        const response = await axios.post(`http://localhost:8080/api/reservation/create`, {
            dateIn,
            dateOut,
            room,
            user,
            dateUser,
            passportSeries,
            passportNumber
        })
        alert("Вы успешно забранировали номер")
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const userUpdate = async (id, user) => {
    console.log(id)
    console.log(user)
    try {
        const response = await axios.put(`http://localhost:8080/api/user/update/` + id, {
            user
        })
        alert("Вы успешно обновили данные")
        console.log(response)
    } catch (e) {
        alert(e.response.data.message)
    }
}