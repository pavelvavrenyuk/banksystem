package com.bankSystem.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.access.SecurityConfig;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;


@Configuration
@EnableWebMvc
@ComponentScan("com.bankSystem")
//@Import({ SecurityConfig.class })
public class WebConfig extends WebMvcConfigurerAdapter {

    private static final String RESOURCE_HANDLER = "/resources/**";
    private static final String RESOURCE_LOCATIONS = "/resources/";

    private static final String PROPERTY_DATABASE_DRIVER_CLASS_NAME = "com.mysql.jdbc.Driver";
    private static final String PROPERTY_DATABASE_URL = "jdbc:mysql://localhost:3306/bankSystem";
    private static final String PROPERTY_DATABASE_USERNAME = "root";
    private static final String PROPERTY_DATABASE_PASSWORD = "1";


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        registry.addResourceHandler(RESOURCE_HANDLER)
                .addResourceLocations(RESOURCE_LOCATIONS);
    }

    @Bean(name = "dataSource")
    public DriverManagerDataSource dataSource() {
        DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource();
        driverManagerDataSource.setDriverClassName(PROPERTY_DATABASE_DRIVER_CLASS_NAME);
        driverManagerDataSource.setUrl(PROPERTY_DATABASE_URL);
        driverManagerDataSource.setUsername(PROPERTY_DATABASE_USERNAME);
        driverManagerDataSource.setPassword(PROPERTY_DATABASE_PASSWORD);
        return driverManagerDataSource;
    }

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/WEB-INF/views/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }

}
