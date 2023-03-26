package com.today.here.booking.controller;

import com.today.here.booking.model.dto.FindHotel;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

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
    public ResponseEntity<List<Hotel>> getAllHotelFreeBetweenDate(@RequestBody FindHotel findHotel) {
        try {
            List<Room> rooms = roomRepository.findAll();
            List<Reservation> reservations = reservationRepository.findAll();

            if (rooms.isEmpty()) {
                return new ResponseEntity<>(null, HttpStatus.OK);
            } else {
                LocalDate dateIn = findHotel.getDateIn();
                LocalDate dateOut = findHotel.getDateOut();
                // find all appropriate rooms
                for (int i = 0; i < reservations.size(); i++) {
                    LocalDate reservDateIn = reservations.get(i).getDateIn();
                    LocalDate reservDateOut = reservations.get(i).getDateOut();
                    if (dateIn.isAfter(reservDateIn) && dateIn.isBefore(reservDateOut)) {
                        rooms.remove(reservations.get(i).getRoom());

                    } else if (dateOut.isAfter(reservDateIn) && dateOut.isBefore(reservDateOut)) {
                        rooms.remove(reservations.get(i).getRoom());

                    } else if(reservDateOut.isAfter(dateIn) && reservDateOut.isBefore(dateOut)) {
                        rooms.remove(reservations.get(i).getRoom());

                    } else if(reservDateIn.isAfter(dateIn) && reservDateIn.isBefore(dateOut)) {
                        rooms.remove(reservations.get(i).getRoom());

                    } else if (reservDateIn.equals(dateIn) && reservDateOut.equals(dateOut)) {
                        rooms.remove(reservations.get(i).getRoom());

                    }
                }
                Set<Hotel> hotels = new HashSet<>();

                for (Room room: rooms) {
                    hotels.add(room.getHotel());
                }
                return new ResponseEntity<List<Hotel>>(hotels.stream().toList(), HttpStatus.OK);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
