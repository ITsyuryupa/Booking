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

    @PostMapping("/reservation/create")
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation reservation) {
        try {
                if (reservation.getDateIn().equals(null)){
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                } else if (reservation.getDateOut().equals(null)) {
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                } else if (reservation.getRoom().equals(null)) {
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                } else if (reservation.getUser().equals(null)) {
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                } else if (reservation.getDateUser().equals(null)) {
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                } else if (reservation.getPassportSeries().equals(null)) {
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                } else if (reservation.getPassportNumber().equals(null)) {
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                }
            Reservation _reservation = reservationRepository
                        .save(new Reservation(reservation.getDateIn(), reservation.getDateOut(),
                                reservation.getRoom(), reservation.getUser(), reservation.getDateUser(), reservation.getPassportSeries(), reservation.getPassportNumber()));
                return new ResponseEntity<>(_reservation, HttpStatus.CREATED);


        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/reservation/getall/{user_id}")
    public ResponseEntity<List<Reservation>> getAllReservationByUserId(@RequestBody User user) {
        try {
            List<Reservation> reservation = reservationRepository.findAllByUser(user);
            return new ResponseEntity<>(reservation, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
