package com.backend.poabackend.controller;

import com.backend.poabackend.model.Employee;
import com.backend.poabackend.model.Organization;
import com.backend.poabackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequestMapping(path = "/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping(value = "", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> getAllEmployees() {
        return new ResponseEntity<>(employeeRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> addEmployee(@RequestBody Employee employee){
        if (employee.getId() == null)
            employee.setId(ThreadLocalRandom.current().nextLong(1, 32664 + 1));


        return new ResponseEntity<>(employeeRepository.save(employee), HttpStatus.OK);
    }
}
