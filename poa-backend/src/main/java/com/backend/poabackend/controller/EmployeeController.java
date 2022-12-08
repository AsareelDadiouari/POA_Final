package com.backend.poabackend.controller;

import com.backend.poabackend.model.Employee;
import com.backend.poabackend.model.Organization;
import com.backend.poabackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;
@CrossOrigin("*")
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
    public @ResponseBody ResponseEntity<Object> addEmployee(@RequestBody Employee employee) {
        Optional<Employee> found = employeeRepository.findEmployeeByLastnameAndFirstname(employee.getLastname(), employee.getLastname());

        if (found.isPresent()){
            Employee employee1 = found.get();

            employee1.setId(ThreadLocalRandom.current().nextLong(1, 32664 + 1));
            employee1.setFirstname(employee1.getFirstname() + " (" + employee1.getId() + ")");
            employee1.setLastname(employee1.getLastname() + " (" + employee1.getId() + ")");

            return new ResponseEntity<>(found, HttpStatus.OK);
        }


        if (employee.getId() == null)
            employee.setId(ThreadLocalRandom.current().nextLong(1, 32664 + 1));

        return new ResponseEntity<>(employeeRepository.save(employee), HttpStatus.OK);
    }
}
