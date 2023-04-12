package com.today.here.booking.repository;


import com.today.here.booking.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import com.today.here.booking.model.Room;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findByName(String name);

    Optional<Room> findById(Long id);

    @Query(value = "SELECT * FROM rooms  WHERE hotel_id = ?1", nativeQuery = true)
    List<Room> findAllByHotelId(@Param("id") Long hotel_id);

    boolean existsByName(String name);

}