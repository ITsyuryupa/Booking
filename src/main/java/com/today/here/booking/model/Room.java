package com.today.here.booking.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    public Room() {

    }

    public Room(String name, Integer countBeds, Float costNight) {
        this.name = name;
        this.countBeds = countBeds;
        this.costNight = costNight;
    }
}
