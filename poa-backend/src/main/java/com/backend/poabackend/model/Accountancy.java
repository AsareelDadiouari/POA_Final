package com.backend.poabackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("Accountancy")
public class Accountancy {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    @Indexed(unique = true) private Long id;
    private Organization organization;
    private int numberOfEmployees;
    private Double globalSalary;
    private Double totalContribution;
    private List<Double> payedAmounts;


    public Organization getOrganization() {
        return organization;
    }

    public Double getGlobalSalary() {
        return globalSalary;
    }

    public Double getTotalContribution() {
        return totalContribution;
    }

    public int getNumberOfEmployees() {
        return numberOfEmployees;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setOrganization(Organization organization) {
        this.organization = organization;
    }

    public void setGlobalSalary(Double globalSalary) {
        this.globalSalary = globalSalary;
    }

    public void setNumberOfEmployees(int numberOfEmployees) {
        this.numberOfEmployees = numberOfEmployees;
    }

    public void setTotalContribution(Double totalContribution) {
        this.totalContribution = totalContribution;
    }

    public List<Double> getPayedAmounts() {
        return payedAmounts;
    }

    public void setPayedAmounts(List<Double> payedAmounts) {
        this.payedAmounts = payedAmounts;
    }
}
