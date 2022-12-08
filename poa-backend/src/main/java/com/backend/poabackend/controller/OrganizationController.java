package com.backend.poabackend.controller;

import com.backend.poabackend.model.Organization;
import com.backend.poabackend.repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;
@CrossOrigin("*")
@RestController
@RequestMapping(path = "/organizations")
public class OrganizationController {

    private final OrganizationRepository organizationRepository;

    @Autowired
    public OrganizationController(OrganizationRepository organizationRepository) {
        this.organizationRepository = organizationRepository;
    }

    @GetMapping(value = "", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> getAllOrganizations() {
        return new ResponseEntity<>(organizationRepository.findAll(), HttpStatus.OK);
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
