package com.today.here.booking.model.dto;

import java.time.LocalDate;

//Data Transfer Object to authorize
public class FindHotel {
    private LocalDate dateIn;
    private LocalDate dateOut;

    private String city;

    public FindHotel() {

    }

    public FindHotel(LocalDate dateIn, LocalDate dateOut, String city) {
        this.dateIn = dateIn;
        this.dateOut = dateOut;
        this.city = city;
    }

    public LocalDate getDateIn() {
        return dateIn;
    }

    public LocalDate getDateOut() {
        return dateOut;
    }

    public String getCity() {
        return city;
    }

    public void setDateIn(LocalDate dateIn) {
        this.dateIn = dateIn;
    }

    public void setDateOut(LocalDate dateOut) {
        this.dateOut = dateOut;
    }

    public void setCity (String city) {
        this.city = city;
    }
}

