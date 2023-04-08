package com.today.here.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.today.here.booking.model.FileHotel;

@Repository
public interface FileHotelRepository extends JpaRepository<FileHotel, String> {

}
