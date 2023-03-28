package com.today.here.booking.controller;

import com.today.here.booking.model.dto.Auth;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.today.here.booking.model.User;
import com.today.here.booking.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<User> signinUser(@RequestBody Auth auth) {
        try {
            List<User> users = userRepository.findByPhone(auth.getPhone());
            if (users.isEmpty()) {
                return new ResponseEntity<>(null,HttpStatus.UNAUTHORIZED);
            } else if (users.get(0).getPassword().equals(auth.getPassword())) {
                return new ResponseEntity<>(users.get(0) , HttpStatus.OK);
            } else {
                return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
        Optional<User> userData = userRepository.findById(id);

        if (userData.isPresent()) {
            User _user = userData.get();
            _user.setEmail(user.getEmail());
            _user.setFullName(user.getFullName());
            _user.setPhone(user.getPhone());
            _user.setPassword(user.getPassword());
            return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
