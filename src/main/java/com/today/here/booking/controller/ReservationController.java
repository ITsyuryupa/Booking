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
public class ReservationController {

    @Autowired
    HotelRepository hotelRepository;
    @Autowired
    ReservationRepository reservationRepository;
    @Autowired
    RoomRepository roomRepository;

    @PostMapping("/create")
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation reservation) {
        try {

                Reservation _reservation = reservationRepository
                        .save(new Reservation(reservation.getDateIn(), reservation.getDateOut(),
                                reservation.getRoom(), reservation.getUser(), reservation.getPassportSeries(), reservation.getPassportNumber()));
                return new ResponseEntity<>(_reservation, HttpStatus.CREATED);


        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
