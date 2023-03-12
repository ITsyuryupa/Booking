package com.today.here.booking.controller;

import com.today.here.booking.model.dto.Auth;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.today.here.booking.model.User;
import com.today.here.booking.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        try {
            if (!userRepository.existsByPhone(user.getPhone())) {
                User _user = userRepository
                        .save(new User(user.getFullName(), user.getPhone(), user.getEmail(), user.getPassword()));
                return new ResponseEntity<>(_user, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(HttpStatus.CONFLICT);
            }

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signinUser(@RequestBody Auth auth) {
        try {
            List<User> users = userRepository.findByPhone(auth.getPhone());
            if (users.isEmpty()) {
                return new ResponseEntity<>("User dont found",HttpStatus.UNAUTHORIZED);
            } else if (users.get(0).getPassword().equals(auth.getPassword())) {
                return new ResponseEntity<>("Access allowed" , HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Password is wrong", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


}
