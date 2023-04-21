package com.today.here.booking.controller;

import com.today.here.booking.model.Admin;
import com.today.here.booking.model.dto.AdminAuth;
import com.today.here.booking.repository.AdminRepository;
import com.today.here.booking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    AdminRepository adminRepository;

    @PostMapping("/signin")
    public ResponseEntity<Admin> signinAdmin(@RequestBody AdminAuth auth) {
        try {
            Admin admin = adminRepository.findByLogin(auth.getLogin());
            if (admin.equals(null)) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            } else if (admin.getPassword().equals(auth.getPassword())) {
                return new ResponseEntity<>(admin , HttpStatus.OK);
            } else {
                return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
