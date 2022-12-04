package com.backend.poabackend.model;

import jakarta.persistence.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "firstName")
    private String firstname;
    @Column(name = "lastName")
    private String lastname;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "organizationId")
    private Organization organization;

    public Employee(Long id, String firstname, String lastname, Organization organization ){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.organization = organization;
    }

    public Employee() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Organization getOrganization() {
        return organization;
    }

    public void setOrganization(Organization organization) {
        this.organization = organization;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
