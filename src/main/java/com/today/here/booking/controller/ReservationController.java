package com.today.here.booking.controller;

import com.today.here.booking.mail.EmailService;
import com.today.here.booking.model.User;
import com.today.here.booking.model.dto.FindHotel;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.time.Period;
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
    @Autowired
    EmailService emailService;

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
                } else if (reservation.getDateUser().equals(null) || Period.between(reservation.getDateUser(), LocalDate.now()).getYears() < 18) {
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                } else if (reservation.getPassportSeries().equals(null)) {
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                } else if (reservation.getPassportNumber().equals(null)) {
                    return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
                }
            System.out.println(reservation.getRoom().getHotel().getEmail());
            emailService.sendSimpleEmail(reservation.getRoom().getHotel().getEmail(), "Welcome", "This is a welcome email for your!!");

            Reservation _reservation = reservationRepository
                        .save(new Reservation(reservation.getDateIn(), reservation.getDateOut(),
                                reservation.getRoom(), reservation.getUser(), reservation.getDateUser(), reservation.getPassportSeries(), reservation.getPassportNumber()));
                return new ResponseEntity<>(_reservation, HttpStatus.CREATED);


        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/reservation/getall/{user_id}")
    public ResponseEntity<List<Reservation>> getAllReservationByUserId(@PathVariable("user_id") long id) {
        try {
            List<Reservation> reservation = reservationRepository.findAllByUserId(id);
            return new ResponseEntity<>(reservation, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/reservation/getall")
    public ResponseEntity<List<Reservation>> getAllReservation() {
        try {
            List<Reservation> reservation = reservationRepository.findAll();
            return new ResponseEntity<>(reservation, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/reservation/get/{id}")
    public ResponseEntity<?> getReservationById(@PathVariable("id") long id) {
        try {
            Optional<Reservation> reservation = reservationRepository.findById(id);
            return new ResponseEntity<>(reservation, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/reservation/{id}")
    public ResponseEntity<HttpStatus> deleteReservation(@PathVariable("id") long id) {
        try {
            reservationRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/reservation/{id}")
    public ResponseEntity<Reservation> updateReservation(@PathVariable("id") long id, @RequestBody Reservation reservation) {
        Optional<Reservation> reservationData = reservationRepository.findById(id);

        if (reservationData.isPresent()) {
            Reservation _reservation = reservationData.get();
            _reservation.setDateOut(reservation.getDateOut());
            _reservation.setDateUser(reservation.getDateUser());
            _reservation.setRoom(reservation.getRoom());
            _reservation.setUser(reservation.getUser());
            _reservation.setPassportNumber(reservation.getPassportNumber());
            _reservation.setPassportSeries(reservation.getPassportSeries());
            _reservation.setDateIn(reservation.getDateIn());
            return new ResponseEntity<>(reservationRepository.save(_reservation), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
