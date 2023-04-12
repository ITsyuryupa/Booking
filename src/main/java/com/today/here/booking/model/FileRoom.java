package com.today.here.booking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "file_room")
public class FileRoom {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String type;

    @Lob
    private byte[] data;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "room_id")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    @JsonIgnoreProperties("hibernateLazyInitializer")
    private Room room;

    public FileRoom() {
    }

    public FileRoom(String type, byte[] data, Room room) {
        this.type = type;
        this.data = data;
        this.room = room;
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

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}


