package com.today.here.booking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "hotel")
@JsonIgnoreProperties(value = { "hibernateLazyInitializer", "handler" })
public class Hotel implements Serializable {

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

    @Column(name = "email")
    private String email;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL)
    private Set<Room> rooms = new HashSet<>();

    public Hotel() {

    }

    public Hotel(String name, String country, String city, String street, Integer houseNumber, String description, String email) {
        this.name = name;
        this.country = country;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.description = description;
        this.email = email;
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

    public String getEmail() {
        return email;
    }

}
