package com.today.here.booking.controller;

import com.today.here.booking.model.User;
import com.today.here.booking.model.dto.FindHotel;
import com.today.here.booking.model.dto.FindHotelRoom;
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
public class HotelController {

    @Autowired
    HotelRepository hotelRepository;
    @Autowired
    ReservationRepository reservationRepository;
    @Autowired
    RoomRepository roomRepository;
  /*  @PostMapping("/hotel/find")
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
                    if (hotel.getCity().equalsIgnoreCase(findHotel.getCity()) ){
                        hotels.add(hotel);
                    }
                }
                return new ResponseEntity<List<Hotel>>(hotels, HttpStatus.OK);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

    @GetMapping("/hotel/find")
    public ResponseEntity<?> geTAllHotelFreeBetweenDate(@RequestParam(name = "dateIn") LocalDate dateIn, @RequestParam(name = "dateOut") LocalDate dateOut, @RequestParam(name = "city") String city) {
        try {
            List<Room> rooms = roomRepository.findAll();
            List<Reservation> reservations = reservationRepository.findAll();

            if (rooms.isEmpty()) {
                return new ResponseEntity<>(null, HttpStatus.OK);
            } else if (dateIn.isAfter(dateOut)) {
                return new ResponseEntity<>("DataIn after dateOut", HttpStatus.BAD_REQUEST);
            } else {
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
                    if (hotel.getCity().equalsIgnoreCase(city) ){
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

    @GetMapping("/hotel/all")
    public ResponseEntity<?> getAllHotel() {
        try {
            List<Hotel> hotels = hotelRepository.findAll();
            return new ResponseEntity<List<Hotel>>(hotels, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/hotel/get/{hotel_id}")
    public ResponseEntity<Hotel> getHotelById(@PathVariable("hotel_id") long id) {
        try {
            Hotel hotel = hotelRepository.findById(id);
            return new ResponseEntity<>(hotel, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/hotel/create")
    public ResponseEntity<Hotel> createHotel(@RequestBody Hotel hotel) {
        try {
            if (!hotelRepository.existsByName(hotel.getName())) {
                Hotel _hotel = hotelRepository
                        .save(new Hotel(hotel.getName(), hotel.getCountry(), hotel.getCity(), hotel.getStreet(), hotel.getHouseNumber(), hotel.getDescription(), hotel.getEmail()));
                return new ResponseEntity<>(_hotel, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(HttpStatus.CONFLICT);
            }

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/hotel/{id}")
    public ResponseEntity<HttpStatus> deleteHotel(@PathVariable("id") long id) {
        try {
            hotelRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //room part
    //get all room by hotell id
    @GetMapping("/hotel/allroom/{hotel_id}")
    public ResponseEntity<List<Room>> getAllHotelRoom(@PathVariable("hotel_id") long id) {
        try {
            List<Room> rooms = roomRepository.findAllByHotelId(id);
            return new ResponseEntity<>(rooms, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/hotel/allroom/free")
    public ResponseEntity<?> getAllHotelRoomFreeBetweenDate(@RequestParam(name = "dateIn") LocalDate dateIn, @RequestParam(name = "dateOut") LocalDate dateOut, @RequestParam(name = "hotel_id") long id) {
        try {
            List<Room> rooms = roomRepository.findAll();
            List<Reservation> reservations = reservationRepository.findAll();

            if (rooms.isEmpty()) {
                return new ResponseEntity<>(null, HttpStatus.OK);
            } else if (dateIn.isAfter(dateOut)) {
                return new ResponseEntity<>("DataIn after dateOut", HttpStatus.BAD_REQUEST);
            } else {
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

                List<Room> corresctRoom = new ArrayList<>();
                for (Room room: rooms) {
                    if (room.getHotel().getId() == id){
                        corresctRoom.add(room);
                    }
                }
                return new ResponseEntity<List<Room>>(corresctRoom, HttpStatus.OK);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
