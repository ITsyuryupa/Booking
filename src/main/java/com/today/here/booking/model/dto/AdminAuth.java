package com.today.here.booking.model.dto;

public class AdminAuth {

    private String login;
    private String password;

    public AdminAuth() {

    }

    public AdminAuth(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getLogin() {
        return login;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setLogin(String login) {
        this.login = login;
    }
}
