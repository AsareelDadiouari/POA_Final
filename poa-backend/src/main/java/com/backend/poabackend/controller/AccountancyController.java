package com.backend.poabackend.controller;

import com.backend.poabackend.model.Accountancy;
import com.backend.poabackend.repository.AccountancyRepository;
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
@RequestMapping(path = "/accounting")
public class AccountancyController {
    private final AccountancyRepository accountancyRepository;

    @Autowired
    public AccountancyController(AccountancyRepository accountancyRepository) {
        this.accountancyRepository = accountancyRepository;
    }

    @GetMapping(value = "", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> getAllAccountancies() {
        return new ResponseEntity<>(accountancyRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "findByOrgName", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> getAccountancyByOrgName(@RequestParam("orgName") String orgName){
        Accountancy found = accountancyRepository.findAll().stream().filter(accountancy -> Objects.equals(accountancy.getOrganization().getName(), orgName)).toList().get(0);

        return new ResponseEntity<>(found, HttpStatus.OK);
    }

    @PostMapping(value = "", produces = "application/json")
    public @ResponseBody ResponseEntity<Object> addAccountancy(@RequestBody Accountancy accountancy){

        if (accountancy.getId() == null)
            accountancy.setId(ThreadLocalRandom.current().nextLong(1, 32664 + 1));

        return new ResponseEntity<>(accountancyRepository.save(accountancy), HttpStatus.OK);
    }
}
