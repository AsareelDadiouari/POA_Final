package com.backend.poabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication(scanBasePackages =
        {
                "com.backend.poabackend.controller",
                "com.backend.poabackend.repository",
                "com.backend.poabackend.model"
        },
        exclude = {DataSourceAutoConfiguration.class},
        excludeName = "WebSecurityConfig"
)
@EnableMongoRepositories
public class PoaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PoaBackendApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return  new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                WebMvcConfigurer.super.addCorsMappings(registry);
                registry.addMapping("/")
                        .allowedOrigins("http://localhost:4200", "*");
            }
        };
    }
}
