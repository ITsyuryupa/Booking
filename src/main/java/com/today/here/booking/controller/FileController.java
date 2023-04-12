package com.today.here.booking.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.today.here.booking.model.Hotel;
import com.today.here.booking.model.Room;
import com.today.here.booking.model.User;
import com.today.here.booking.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.today.here.booking.model.FileHotel;

@Controller
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/file")
public class FileController {

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping("/upload/hotel")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("hotel_id") long id) {
        String message = "";
        try {
            fileStorageService.storeHotel(file, id);
            message = "Uploaded the file successfully";
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "Could not upload the file";
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }

    @GetMapping("/hotel/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        FileHotel fileHotel = fileStorageService.getFileHotel(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment")
                .body(fileHotel.getData());
    }

    @GetMapping("/getid/hotel/{hotel_id}")
    public ResponseEntity<List<String>> getAllIdByHotelId(@PathVariable("hotel_id") long id) {
        try {
            List<String> filesId = fileStorageService.getAllFileHotelByHotelId(id);
            return new ResponseEntity<>(filesId, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
