package com.fightclub.FinalProject5.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fightclub.FinalProject5.entity.Customer;
import com.fightclub.FinalProject5.service.CustomerService;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/api")
@RestController
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@GetMapping("/customer/{customerId}")
	public Optional<Customer> getCustomertById(@PathVariable int customerId) {
		return customerService.getCustomer(customerId);
	}
	
	@PostMapping("/signup")
	public Customer saveCustomer(@RequestBody Customer customer) {
		return customerService.saveCustomer(customer);
	}

	@PostMapping("/login/{email}/{password}")
	public Optional<Customer> doLogin(@PathVariable String email,@PathVariable String password) {

		Optional<Customer> optional = customerService.getCustomer(email, password);

		if (optional.isEmpty()) {
			return null;
		} else {

			return optional;
		}
	}
	
	@GetMapping("/customer")
	public List<Customer> getAllCustomer() {
		return customerService.getAllCustomer();
	}


}
