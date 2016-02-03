package com.bankSystem.security;

import com.bankSystem.constants.UserRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
public class BankSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder authenticationMgr) throws Exception {
        /*authenticationMgr.inMemoryAuthentication()
                .withUser("admin@mail.ru")
                .password("admin")
                .authorities(UserRoles.ROLE_ADMIN);

        authenticationMgr.inMemoryAuthentication()
                .withUser("user@mail.ru")
                .password("user")
                .authorities(UserRoles.ROLE_USER);*/

        authenticationMgr.jdbcAuthentication().dataSource(dataSource)
                .usersByUsernameQuery(
                        "select email, password, enabled from users where email=?")
                .authoritiesByUsernameQuery(
                        "select email, role from user_roles where email=?");


    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/resources/**", "/").permitAll()
                .and()
                .formLogin().loginPage("/login")
                .loginProcessingUrl("/j_spring_security_check")
                .defaultSuccessUrl("/home")
                .failureUrl("/login?error")
                .usernameParameter("username").passwordParameter("password")
                .and()
                .logout().logoutSuccessUrl("/login");

        http.csrf().disable();
    }
}
