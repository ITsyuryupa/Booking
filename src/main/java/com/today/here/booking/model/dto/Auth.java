package com.today.here.booking.model.dto;
//Data Transfer Object to authorize
public class Auth {
    private String phone;
    private String password;

    public Auth() {

    }

    public Auth(String phone, String password) {
        this.phone = phone;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
