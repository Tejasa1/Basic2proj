package com.example.fisuserbackend.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fisuserbackend.model.User;

@Repository
public interface FisUserRep extends JpaRepository <User,String>{
	
	
}
