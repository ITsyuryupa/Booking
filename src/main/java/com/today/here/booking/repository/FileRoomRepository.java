package com.today.here.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.today.here.booking.model.FileRoom;

import java.util.List;

@Repository
public interface FileRoomRepository extends JpaRepository<FileRoom, String> {

    @Query(value = "SELECT id FROM file_room  WHERE room_id = ?1", nativeQuery = true)
    List<String> findAllIdByRoomId(@Param("id") Long room_id);
}
