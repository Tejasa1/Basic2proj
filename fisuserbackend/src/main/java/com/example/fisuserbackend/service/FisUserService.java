package com.example.fisuserbackend.service;

import java.util.List;

import com.example.fisuserbackend.model.User;



public interface FisUserService {
	
	public boolean checkUser(User user);
	public List<User> displayAllUsers();
	public User insertUser(User user);
	

}
