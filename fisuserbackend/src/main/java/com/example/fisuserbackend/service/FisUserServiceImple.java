package com.example.fisuserbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fisuserbackend.model.User;
import com.example.fisuserbackend.repo.FisUserRep;


@Service
public class FisUserServiceImple implements FisUserService {
	
	@Autowired
	FisUserRep repo;

	@Override
	public boolean checkUser(User user) {
		// TODO Auto-generated method stub
		List<User> users = repo.findAll();
		boolean isFound=false;
		for(User u:users) {
			if(u.getUsername().equals(user.getUsername()) && 
					u.getPassword().equals(user.getPassword())){
				isFound=true;
				break;
			}
		}

		return isFound;
	}

	@Override
	public List<User> displayAllUsers() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public User insertUser(User user) {
		// TODO Auto-generated method stub
		return repo.save(user);
	}

}
