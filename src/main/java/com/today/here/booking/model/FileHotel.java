package com.today.here.booking.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "file_hotel")
public class FileHotel {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String type;

    @Lob
    private byte[] data;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "hotel_id")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    @JsonIgnoreProperties("hibernateLazyInitializer")
    private Hotel hotel;

    public FileHotel() {
    }

    public FileHotel(String type, byte[] data, Hotel hotel) {
        this.type = type;
        this.data = data;
        this.hotel = hotel;
    }

    public String getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }
}

