package com.backend.poabackend.controller;

import com.backend.poabackend.model.Organization;
import com.backend.poabackend.repository.OrganizationRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "organizations")
public class OrganizationController {
    OrganizationRepository organizationRepository;

    @GetMapping(value = "/", produces = "application/json")
    public @ResponseBody List<Organization> getAllOrganizations() {
        return organizationRepository.findAll();
    }
}
