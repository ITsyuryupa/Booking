package com.today.here.booking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "dateIn")
    private LocalDate dateIn;


    @Column(name = "dateOut")
    private LocalDate dateOut;

    @Column(name = "dateUser")
    private LocalDate dateUser;

    @Column(name = "passportSeries")
    private Integer passportSeries ;

    @Column(name = "passportNumber")
    private Integer passportNumber ;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "room_id")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    @JsonIgnoreProperties("hibernateLazyInitializer")
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user;

    public Reservation() {

    }

    public Reservation(LocalDate dateIn, LocalDate dateOut, Room room, User user, LocalDate dateUser,Integer passportSeries, Integer passportNumber) {
        this.dateIn = dateIn;
        this.dateOut = dateOut;
        this.room = room;
        this.user = user;
        this.dateUser = dateUser;
        this.passportSeries = passportSeries;
        this.passportNumber = passportNumber;
    }

    public long getId() {
        return id;
    }

    public LocalDate getDateIn() {
        return dateIn;
    }

    public LocalDate getDateOut() {
        return dateOut;
    }

    public Room getRoom() {
        return room;
    }

    public User getUser() {
        return user;
    }

    public LocalDate getDateUser() {
        return dateUser;
    }

    public Integer getPassportSeries() {
        return passportSeries;
    }

    public Integer getPassportNumber() {
        return passportNumber;
    }


    public void setDateIn(LocalDate dateIn) {
        this.dateIn = dateIn;
    }

    public void setDateOut(LocalDate dateOut) {
        this.dateOut = dateOut;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setDateUser(LocalDate dateUser) {
            this.dateUser = dateUser;
    }

    public void setPassportSeries(Integer passportSeries) {
            this.passportSeries = passportSeries;
    }

    public void setPassportNumber(Integer passportNumber) {
        this.passportNumber = passportNumber;
    }

}

