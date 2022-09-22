package com.example.fisuserbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.example.fisuserbackend")
public class FisuserbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FisuserbackendApplication.class, args);
	}

}
