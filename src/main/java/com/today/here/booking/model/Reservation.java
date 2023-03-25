package com.today.here.booking.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "dateIn")
    private String dateIn;


    @Column(name = "dateOut")
    private String dateOut;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "room_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Room room;

    public Reservation() {

    }

    public Reservation(String dateIn, String dateOut) {
        this.dateIn = dateIn;
        this.dateOut = dateOut;

    }

    public long getId() {
        return id;
    }

    public String getDateIn() {
        return dateIn;
    }

    public String getDateOut() {
        return dateOut;
    }



}

