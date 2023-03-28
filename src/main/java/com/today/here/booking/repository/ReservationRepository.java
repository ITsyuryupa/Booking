package com.today.here.booking.repository;

import com.today.here.booking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import com.today.here.booking.model.Reservation;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByRoom(String room);

    @Query(value = "SELECT * FROM reservations", nativeQuery = true)
    List<Reservation> findAll();

    @Override
    Optional<Reservation> findById(Long aLong);

    List<Reservation> findAllByUser(User user);
}
