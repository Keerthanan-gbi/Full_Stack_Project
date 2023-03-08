package com.example.demo.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Lap;
import com.example.demo.repository.LapRepository;

@RequestMapping("/api")
@CrossOrigin("*")

@RestController
public class LapController {
	
	@Autowired
	private LapRepository eRepo;

	@GetMapping("/laps")
	public List<Lap> getAllLaps() {
		return eRepo.findAll();
	}

	@GetMapping("/laps/{id}")
	public Lap getLapById(@PathVariable Integer id) {
		return eRepo.findById(id).get();
	}

	@PostMapping("/laps")
	public Lap saveLapDetails(@RequestBody Lap lap) {
		return eRepo.save(lap);
	}

	@PutMapping("/laps")
	public Lap updateLap(@RequestBody Lap lap) {
		return eRepo.save(lap);
	}

	@DeleteMapping("/laps/{id}")
	public ResponseEntity<HttpStatus> deleteLapById(@PathVariable Integer id) {
	eRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
