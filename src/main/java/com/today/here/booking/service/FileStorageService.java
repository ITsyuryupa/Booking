package com.today.here.booking.service;



import java.io.IOException;
import java.util.stream.Stream;

import com.today.here.booking.model.Hotel;
import com.today.here.booking.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import  com.today.here.booking.model.FileHotel;
import  com.today.here.booking.repository.FileHotelRepository;

@Service
public class FileStorageService {

    @Autowired
    private FileHotelRepository fileHotelRepository;

    @Autowired
    private HotelRepository hotelRepository;

    public FileHotel store(MultipartFile file, Long hotel_id) throws IOException {

        Hotel hotel = hotelRepository.findHotelById(hotel_id);
        FileHotel fileHotel = new FileHotel(file.getContentType(), file.getBytes(), hotel);

        return fileHotelRepository.save(fileHotel);
    }

    public FileHotel getFile(String id) {
        return fileHotelRepository.findById(id).get();
    }

    public Stream<FileHotel> getAllFiles() {
        return fileHotelRepository.findAll().stream();
    }
}

