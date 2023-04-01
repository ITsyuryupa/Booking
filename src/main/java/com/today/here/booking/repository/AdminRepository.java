package com.today.here.booking.repository;

import com.today.here.booking.model.Admin;

import org.springframework.data.jpa.repository.JpaRepository;



public interface AdminRepository extends JpaRepository<Admin, Long> {

    Admin findByLogin(String login);

}
