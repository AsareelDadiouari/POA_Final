package com.backend.poabackend.config;

import org.springframework.context.annotation.Configuration;

//import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
//@EnableWebSecurity
//@EnableMethodSecurity
public class WebSecurityConfig {
    /*@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.ignoringRequestMatchers("/**").disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/organizations/**", "/employees/**", "/**")
                        .permitAll()
                        .anyRequest().permitAll()
                )
                .headers(headers -> headers.frameOptions().sameOrigin())
                .httpBasic(withDefaults())
                .anonymous().disable()
                .build();
    }*/
}
