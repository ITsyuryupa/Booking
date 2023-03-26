package com.today.here.booking.model.dto;

import java.time.LocalDate;

//Data Transfer Object to authorize
public class FindHotel {
    private LocalDate dateIn;
    private LocalDate dateOut;

    public FindHotel() {

    }

    public FindHotel(LocalDate dateIn, LocalDate dateOut) {
        this.dateIn = dateIn;
        this.dateOut = dateOut;
    }

    public LocalDate getDateIn() {
        return dateIn;
    }

    public LocalDate getDateOut() {
        return dateOut;
    }

    public void setDateIn(LocalDate dateIn) {
        this.dateIn = dateIn;
    }

    public void setDateOut(LocalDate dateOut) {
        this.dateOut = dateOut;
    }
}

