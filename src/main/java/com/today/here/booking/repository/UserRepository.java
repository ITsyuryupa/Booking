package com.today.here.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.today.here.booking.model.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByPhone(String phone);

    boolean existsByPhone(String phone);

}
