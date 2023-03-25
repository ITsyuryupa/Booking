package com.today.here.booking.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.today.here.booking.model.Room;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findByName(String name);

}