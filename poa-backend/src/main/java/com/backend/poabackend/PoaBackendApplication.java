package com.backend.poabackend;

import com.backend.poabackend.model.Organization;
import com.backend.poabackend.repository.OrganizationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages =
        {
                "com.backend.poabackend.controller",
                "com.backend.poabackend.repository",
                "com.backend.poabackend.model"
        },
        exclude = {DataSourceAutoConfiguration.class},
        excludeName = "WebSecurityConfig"
)
public class PoaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PoaBackendApplication.class, args);
    }
}
