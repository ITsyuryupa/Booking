package com.today.here.booking.repository;

import com.today.here.booking.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.today.here.booking.model.FileHotel;

import java.util.List;

@Repository
public interface FileHotelRepository extends JpaRepository<FileHotel, String> {

    @Query(value = "SELECT id FROM file_hotel  WHERE hotel_id = ?1", nativeQuery = true)
    List<String> findAllIdByHotelId(@Param("id") Long hotel_id);
}
