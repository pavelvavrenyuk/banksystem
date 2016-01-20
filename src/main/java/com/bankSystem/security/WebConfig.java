package com.bankSystem.security;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;



@Configuration
@EnableWebMvc
@ComponentScan("com.bankSystem")
public class WebConfig extends WebMvcConfigurerAdapter {

    private final static String resourceHanlder = "/resources/**";
    private final static String resourceLocations = "/resources/";


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        registry.addResourceHandler(resourceHanlder)
                .addResourceLocations(resourceLocations);
    }

}
