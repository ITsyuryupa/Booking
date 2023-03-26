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

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "room_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Room room;

    public Reservation() {

    }

    public Reservation(LocalDate dateIn, LocalDate dateOut) {
        this.dateIn = dateIn;
        this.dateOut = dateOut;
    }

    public Reservation(LocalDate dateIn, LocalDate dateOut, Room room) {
        this.dateIn = dateIn;
        this.dateOut = dateOut;
        this.room = room;
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



}

