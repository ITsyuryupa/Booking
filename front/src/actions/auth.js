import axios from 'axios'
import {setUser} from "../reducers/userReducer";
import {setAdmin} from "../reducers/adminReducer";
import {useNavigate} from "react-router-dom";

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
        return true;
    } catch (e) {
        alert(e.response.data.message)
        return false;
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
            return true
            localStorage.setItem('user', response.data)
        } catch (e) {
            alert(e.response.data.message)
            return false
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
            localStorage.setItem('admin', response.data)
        } catch (e) {
            alert("Неверное имя или пароль")
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
        return true;
    } catch (e) {
        alert(e.response.data.message)
        return false;
    }
}
export const AddHotels = async (name, country, city, street, houseNumber, description, email) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/hotel/create`, {
            name,
            country,
            city,
            street,
            houseNumber,
            description,
            email
        })
        alert("Вы успешно добавили отель")
        return true;
    } catch (e) {
        alert(e.response.data.message)
        return false;
    }
}

export const UpdateHotel = async (id, name, country, city, street, houseNumber, description, email) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/hotel/` + id, {
            id,
            name,
            country,
            city,
            street,
            houseNumber,
            description,
            email
        })
        alert("Вы успешно обновили данные о отеле")
        return true;
    } catch (e) {
        alert(e.response.data.message)
        return false;
    }
}
export const DeleteHotel = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/hotel/` + id)
        alert("Вы успешно удалили отель")
        return true;
    } catch (e) {
        alert(e.response.data.message)
        return false;
    }
}
export const DeleteRoom = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/room/` + id)
        alert("Вы успешно удалили комнату")
        return true;
    } catch (e) {
        alert(e.response.data.message)
        return false;
    }
}

export const DeleteReservation = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/reservation/` + id)
        alert("Вы успешно удалили бронь")
        return true;
    } catch (e) {
        alert(e.response.data.message)
        return false;
    }
}

export const ChangeRoom = async (id, name, countBeds, costNight, count, hotel) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/room/` + id,{
            id, name, countBeds, costNight, count, hotel
        })
        alert("Вы успешно изменили комнату")
        return true;
    } catch (e) {
        alert(e.response.data.message)
        return false;
    }
}

export const userUpdate = async (id, fullName, phone, email, password) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/user/` + id, {
            fullName,
            phone,
            email,
            password
        })
        alert("Вы успешно обновили данные")
        return true
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
}
export const userDelete = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/user/` + id, {
        })
        alert("Вы успешно удалили аккаунт")
        return true

    } catch (e) {
        return false
        alert(e.response.data.message)
    }
}
export const createRoom = async (name, countBeds, costNight, count, hotel) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/room/create`, {
            count, name, countBeds, costNight, hotel
        })
        alert("Вы успешно обновили данные")
        return true
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
}