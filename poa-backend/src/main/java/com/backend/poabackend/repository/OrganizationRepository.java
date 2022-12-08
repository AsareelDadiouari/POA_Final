package com.backend.poabackend.repository;

import com.backend.poabackend.model.Organization;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface OrganizationRepository extends MongoRepository<Organization, Long> {
    @Query("{'name': :#{#name}}")
    Optional<Organization> findOrganizationByName(@Param("name")String name);
}
