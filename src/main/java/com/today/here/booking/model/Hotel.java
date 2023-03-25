package com.today.here.booking.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "hotel")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "country")
    private String country;

    @Column(name = "city")
    private String city;

    @Column(name = "street")
    private String street;

    @Column(name = "houseNumber")
    private Integer houseNumber;

    @Column(name = "description")
    @Lob
    private String description;

    @OneToMany(mappedBy = "rooms", cascade = CascadeType.ALL)
    private Set<Room> rooms = new HashSet<>();

    public Hotel() {

    }

    public Hotel(String name, String country, String city, String street, Integer houseNumber, String description) {
        this.name = name;
        this.country = country;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCountry() {
        return country;
    }

    public String getCity() {
        return city;
    }

    public String getStreet() {
        return street;
    }

    public Integer getHouseNumber() {
        return houseNumber;
    }

    public String getDescription() {
        return description;
    }


}
