package com.backend.poabackend.repository;

import com.backend.poabackend.model.Employee;
import com.backend.poabackend.model.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface OrganizationRepository extends MongoRepository<Organization, Long> {
}
