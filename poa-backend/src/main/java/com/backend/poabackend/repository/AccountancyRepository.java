package com.backend.poabackend.repository;

import com.backend.poabackend.model.Accountancy;
import com.backend.poabackend.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AccountancyRepository extends MongoRepository<Accountancy, Long> {

    @Query("{'organization.name': :#{#orgName}")
    Optional<Accountancy> findAccountancyByOrganizationName(@Param("orgName")String orgName);
}
