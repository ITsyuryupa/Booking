package com.today.here.booking.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import com.today.here.booking.model.Hotel;
import com.today.here.booking.repository.HotelRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/hotel")
public class HotelController {

    @Autowired
    HotelRepository hotelRepository;


}
