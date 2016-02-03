package com.bankSystem.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@Component
public class LoginController {

    private static final String URL_LOGIN_JSP = "login";
    private static final String URL_MAIN_JSP = "main";
    private static final String URL_LOGOUT = "redirect:/login?logout";

    @RequestMapping(value = "/login")//, method = RequestMethod.GET)
    public String doLogin(){
        return URL_LOGIN_JSP;
    }

    @RequestMapping("/home")
    public String displayHomePage(){
        return URL_MAIN_JSP;
    }

    @RequestMapping(value="/logout", method = RequestMethod.GET)
    public String logoutPage (HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null){
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return URL_LOGOUT;
    }
}
