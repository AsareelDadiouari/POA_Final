package com.backend.poabackend.repository;

import com.backend.poabackend.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface EmployeeRepository extends MongoRepository<Employee, Long> {
    @Query("{'lastname': :#{#lastname}, 'firstname': :#{#firstname}}")
    Optional<Employee> findEmployeeByLastnameAndFirstname(@Param("lastname")String lastname, @Param("firstname")String firstname);
}
