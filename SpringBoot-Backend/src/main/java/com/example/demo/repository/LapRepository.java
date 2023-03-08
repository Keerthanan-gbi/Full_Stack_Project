package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Lap;

public interface LapRepository extends JpaRepository<Lap, Integer>{

}
