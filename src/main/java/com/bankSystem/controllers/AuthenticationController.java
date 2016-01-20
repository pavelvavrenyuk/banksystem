package com.bankSystem.controllers;

import com.bankSystem.json.JSONService;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by pahan on 19.11.15.
 */

@Controller
@RequestMapping
public class AuthenticationController {


    //@ResponseBody
    //@Secured({UserRoles.ROLE_USER})
    //@RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
    public String loginPost(@RequestParam String email, @RequestParam String password) {

        System.out.println("HellO to Login Page POST!");
        System.out.println("email: " + email + " password: " + password);

        JSONObject dataJSON=new JSONObject();
        dataJSON.put("email", email);
        dataJSON.put("password", password);
        dataJSON.put("Key", true);



        System.out.println("Object JSON: " + dataJSON);


        return dataJSON.toString();
        //return "/resources/templates/main.jsp";
        //return "/WEB-INF/views/hello.jsp";

    }

    //@ResponseBody
    //@Secured({UserRoles.ROLE_USER})
    //@RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginGet() {

        System.out.println("HellO to Login Page! GET");

        JSONObject obj=new JSONObject();
        obj.put("Key", true);

        return obj.toString();
    }

    @RequestMapping(value = "/", method = {RequestMethod.GET})
    public String start() {

        System.out.println("START Page! GET and HEAD");

        //return "/resources/templates/login-page.html";
        return "/WEB-INF/views/index.jsp";
    }

    @RequestMapping(value = "/", method = {RequestMethod.HEAD})
    public String startHead() {

        System.out.println("START Page! GET and HEAD");

        //return "/resources/templates/login-page.html";
        return "/WEB-INF/views/index.jsp";
    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String register() {

        System.out.println("HellO to Register Page!");

        return "/resources/templates/register-page.html";
    }

}
