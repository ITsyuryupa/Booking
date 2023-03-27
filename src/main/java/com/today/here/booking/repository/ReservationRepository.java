package com.today.here.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.today.here.booking.model.Reservation;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByRoom(String room);

    @Query(value = "SELECT * FROM reservations", nativeQuery = true)
    List<Reservation> findAll();


}
