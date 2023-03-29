package com.today.here.booking.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
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

}

