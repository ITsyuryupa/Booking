package com.today.here.booking.model.dto;

import java.time.LocalDate;

//Data Transfer Object to authorize
public class FindHotelRoom {
    private LocalDate dateIn;
    private LocalDate dateOut;

    private long hotelId;

    public FindHotelRoom() {

    }

    public FindHotelRoom(LocalDate dateIn, LocalDate dateOut, long hotelId) {
        this.dateIn = dateIn;
        this.dateOut = dateOut;
        this.hotelId = hotelId;
    }

    public LocalDate getDateIn() {
        return dateIn;
    }

    public LocalDate getDateOut() {
        return dateOut;
    }

    public long gethHotelId() {
        return hotelId;
    }

    public void setDateIn(LocalDate dateIn) {
        this.dateIn = dateIn;
    }

    public void setDateOut(LocalDate dateOut) {
        this.dateOut = dateOut;
    }

    public void setCity (long hotelId) {
        this.hotelId = hotelId;
    }
}

