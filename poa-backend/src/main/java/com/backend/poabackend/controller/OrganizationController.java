package com.backend.poabackend.controller;

import com.backend.poabackend.model.Organization;
import com.backend.poabackend.repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping(path = "/organizations")
public class OrganizationController {

    private final OrganizationRepository organizationRepository;

    @Autowired
    public OrganizationController(OrganizationRepository organizationRepository){
        this.organizationRepository = organizationRepository;
    }

    @GetMapping(value = "", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> getAllOrganizations() {
        return new ResponseEntity<>(organizationRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> addOrganization(@RequestBody Organization organization){
        if (organization.getId() == null)
            organization.setId(ThreadLocalRandom.current().nextLong(1, 32664 + 1));

        return new ResponseEntity<>(organizationRepository.save(organization), HttpStatus.OK);
    }
}
