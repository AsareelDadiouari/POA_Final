package com.backend.poabackend.controller;

import com.backend.poabackend.model.Employee;
import com.backend.poabackend.model.Organization;
import com.backend.poabackend.repository.EmployeeRepository;
import com.backend.poabackend.repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/organizations")
public class OrganizationController {

    private final OrganizationRepository organizationRepository;
    private final EmployeeRepository employeeRepository;

    @Autowired
    public OrganizationController(OrganizationRepository organizationRepository, EmployeeRepository employeeRepository) {
        this.organizationRepository = organizationRepository;
        this.employeeRepository = employeeRepository;
    }

    @GetMapping(value = "", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> getAllOrganizations() {
        List<Organization> organizationList = organizationRepository.findAll();
        List<Employee> employeeList = employeeRepository.findAll();

        organizationList.forEach(organization -> {
            organization.setEmployees(employeeList
                    .stream()
                    .filter(employee -> Objects.equals(employee.getOrganization().getId(), organization.getId()))
                    .collect(Collectors.toList()));
        });

        return new ResponseEntity<>(organizationList, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> getAllOrganizationById(@PathVariable Long id) {
        Optional<Organization> org = organizationRepository.findById(id);

        return new ResponseEntity<>(org, org.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }

    @PostMapping(value = "", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> addOrganization(@RequestBody Organization organization) {
        Optional<Organization> found = organizationRepository.findOrganizationByName(organization.getName());

        if (found.isPresent())
            return new ResponseEntity<>(found, HttpStatus.OK);

        if (organization.getId() == null)
            organization.setId(ThreadLocalRandom.current().nextLong(1, 32664 + 1));

        return new ResponseEntity<>(organizationRepository.save(organization), HttpStatus.OK);
    }
}
