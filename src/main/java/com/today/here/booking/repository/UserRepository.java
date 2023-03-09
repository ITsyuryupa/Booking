package com.today.here.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.today.here.booking.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
