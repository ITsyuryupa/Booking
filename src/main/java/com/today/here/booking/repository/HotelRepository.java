package com.today.here.booking.repository;
import com.today.here.booking.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import com.today.here.booking.model.User;

import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel, Long> {

    List<Hotel> findByCountry(String Country);

    boolean existsByName(String name);
}
