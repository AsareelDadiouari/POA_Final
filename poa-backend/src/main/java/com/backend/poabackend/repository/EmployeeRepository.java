package com.backend.poabackend.repository;

import com.backend.poabackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepository extends MongoRepository<Employee, Long> {
}
