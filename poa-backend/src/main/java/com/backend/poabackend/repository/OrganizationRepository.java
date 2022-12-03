package com.backend.poabackend.repository;

import com.backend.poabackend.model.Employee;
import com.backend.poabackend.model.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface OrganizationRepository extends JpaRepository<Organization, Long> {
    List<Organization> findAll();

    Optional<Organization> findById(Long id);

    @Query(value = "SELECT * FROM Employee JOIN Organization ON Employee.organizationId = Organization.id", nativeQuery = true)
    List<Employee> getAllEmployees();
}
