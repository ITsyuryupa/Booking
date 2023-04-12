package com.today.here.booking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

    @Column(name = "count")
    private Integer count;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "hotel_id")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    @JsonIgnoreProperties("hibernateLazyInitializer")
    private Hotel hotel;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private Set<Reservation> reservations = new HashSet<>();

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private Set<FileRoom> fileRoom = new HashSet<>();

    public Room() {

    }

    public Room(String name, Integer countBeds, Float costNight, Hotel hotel, Integer count) {
        this.name = name;
        this.countBeds = countBeds;
        this.costNight = costNight;
        this.hotel = hotel;
        this.count = count;
    }

    public long getId() {
        return id;
    }

    public Integer getCount() {
        return count;
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

    public void setId(long id) {
        this.id = id;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCountBeds(Integer countBeds) {
        this.countBeds = countBeds;
    }

    public void setCostNight(Float costNight) {
        this.costNight = costNight;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }
}
