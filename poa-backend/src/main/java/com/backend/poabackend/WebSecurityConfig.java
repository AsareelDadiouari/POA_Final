package com.backend.poabackend;

import org.springframework.context.annotation.Configuration;

@Configuration
//@EnableWebSecurity
public class WebSecurityConfig {
    /*@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests().anyRequest().permitAll()
                .and()*/
    //.csrf().disable().authorizeHttpRequests().requestMatchers("/**", "/", "/*", "*/*", "*", "/organizations").permitAll()
    // .and()
    //.httpBasic();

    //http.
    //csrf(csrf -> csrf.ignoringRequestMatchers("/"))
    //.authorizeRequests(auth -> auth.requestMatchers("/**", "/", "/*", "*/*", "*", "/organizations")
    //        .permitAll().anyRequest().authenticated())
    //.headers(headers -> headers.frameOptions().sameOrigin());

    // return http.build();
    //}
}
