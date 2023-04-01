package com.today.here.booking.controller;

import com.today.here.booking.model.User;
import com.today.here.booking.model.dto.FindHotel;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.*;

import com.today.here.booking.model.Hotel;
import com.today.here.booking.model.Room;
import com.today.here.booking.model.Reservation;
import com.today.here.booking.repository.HotelRepository;
import com.today.here.booking.repository.ReservationRepository;
import com.today.here.booking.repository.RoomRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RoomController {

    @Autowired
    RoomRepository roomRepository;

    @GetMapping("/room/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable("id") long id) {
        Optional<Room> rooms = roomRepository.findById(id);

        if (rooms.isPresent()) {
            return new ResponseEntity<>(rooms.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/room/all")
    public ResponseEntity<List<Room>> getRoomAll() {
        List<Room> rooms = roomRepository.findAll();

        if (!rooms.equals(null)) {
            return new ResponseEntity<>(rooms, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/room/create")
    public ResponseEntity<Room> createRoom(@RequestBody Room room) {
        try {
            if (!roomRepository.existsByName(room.getName())) {
                Room _room = roomRepository
                        .save(new Room(room.getName(), room.getCountBeds(), room.getCostNight(), room.getHotel()));
                return new ResponseEntity<>(_room, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(HttpStatus.CONFLICT);
            }

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/room/{id}")
    public ResponseEntity<HttpStatus> deleteRoom(@PathVariable("id") long id) {
        try {
            roomRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/room/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable("id") long id, @RequestBody Room room) {
        Optional<Room> roomData = roomRepository.findById(id);

        if (roomData.isPresent()) {
            Room _room = roomData.get();
            _room.setCostNight(room.getCostNight());
            _room.setCountBeds(room.getCountBeds());
            _room.setHotel(room.getHotel());
            _room.setName(room.getName());

            return new ResponseEntity<>(roomRepository.save(_room), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
