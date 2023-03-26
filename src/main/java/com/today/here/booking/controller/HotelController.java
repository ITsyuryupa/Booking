package com.today.here.booking.controller;

import com.today.here.booking.model.dto.FindHotel;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.SQLOutput;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.today.here.booking.model.Hotel;
import com.today.here.booking.model.Room;
import com.today.here.booking.model.Reservation;
import com.today.here.booking.repository.HotelRepository;
import com.today.here.booking.repository.ReservationRepository;
import com.today.here.booking.repository.RoomRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/hotel")
public class HotelController {

    @Autowired
    HotelRepository hotelRepository;
    @Autowired
    ReservationRepository reservationRepository;
    @Autowired
    RoomRepository roomRepository;
    @GetMapping("/freehotel")
    public ResponseEntity<?> getAllHotelFreeBetweenDate(@RequestBody FindHotel findHotel) {
        try {
            List<Room> rooms = roomRepository.findAll();
            List<Reservation> reservations = reservationRepository.findAll();

            if (rooms.isEmpty()) {
                return new ResponseEntity<>(null, HttpStatus.OK);
            } else if (findHotel.getDateIn().isAfter(findHotel.getDateOut())) {
                return new ResponseEntity<>("DataIn after dateOut", HttpStatus.BAD_REQUEST);
            } else {
                LocalDate dateIn = findHotel.getDateIn();
                LocalDate dateOut = findHotel.getDateOut();
                // find all appropriate rooms
                for (Reservation reservation : reservations) {
                    LocalDate reservDateIn = reservation.getDateIn();
                    LocalDate reservDateOut = reservation.getDateOut();
                    if (dateIn.isAfter(reservDateIn) && dateIn.isBefore(reservDateOut)) {
                        rooms.remove(reservation.getRoom());

                    } else if (dateOut.isAfter(reservDateIn) && dateOut.isBefore(reservDateOut)) {
                        rooms.remove(reservation.getRoom());

                    } else if (reservDateOut.isAfter(dateIn) && reservDateOut.isBefore(dateOut)) {
                        rooms.remove(reservation.getRoom());

                    } else if (reservDateIn.isAfter(dateIn) && reservDateIn.isBefore(dateOut)) {
                        rooms.remove(reservation.getRoom());

                    } else if (reservDateIn.equals(dateIn) && reservDateOut.equals(dateOut)) {
                        rooms.remove(reservation.getRoom());

                    }
                }
                Set<Hotel> hotelHashSet = new HashSet<>();

                for (Room room: rooms) {
                    hotelHashSet.add(room.getHotel());
                }

                List<Hotel> hotels = new ArrayList<>();
                for (Hotel hotel: hotelHashSet) {
                    if (hotel.getCity().equals(findHotel.getCity()) ){
                        hotels.add(hotel);
                    }
                }
                return new ResponseEntity<List<Hotel>>(hotels, HttpStatus.OK);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
