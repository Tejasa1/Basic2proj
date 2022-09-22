package com.example.fisuserbackend.model.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.fisuserbackend.model.User;
import com.example.fisuserbackend.service.FisUserService;

@RestController
@CrossOrigin("*")
public class FisUserController {
	
	
	@Autowired
	FisUserService service;
	
	@GetMapping("/users")
	public List<User> findAllUsers(){
		return service.displayAllUsers();
	}
	
	@PostMapping("/save")
	public User createUser(@RequestBody User user){
		return service.insertUser(user);
	}
	
	@PutMapping("/check")
	public boolean checkUser(@RequestBody User user){
		return service.checkUser(user);
	}

}
