package com.today.here.booking.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "countBeds")
    private Integer countBeds;

    @Column(name = "costNight")
    private Float costNight;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "hotel_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Hotel hotel;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private Set<Reservation> reservations = new HashSet<>();

    public Room() {

    }

    public Room(String name, Integer countBeds, Float costNight) {
        this.name = name;
        this.countBeds = countBeds;
        this.costNight = costNight;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getCountBeds() {
        return countBeds;
    }

    public Float getCostNight() {
        return costNight;
    }

    public Hotel getHotel() {
        return hotel;
    }
}
