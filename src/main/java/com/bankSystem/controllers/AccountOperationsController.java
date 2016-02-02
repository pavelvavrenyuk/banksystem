package com.bankSystem.controllers;

import com.bankSystem.constants.UserRoles;
import org.json.JSONObject;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@Component
public class AccountOperationsController {

    @ResponseBody
    @Secured({UserRoles.ROLE_USER, UserRoles.ROLE_ADMIN})
    @RequestMapping(value="/replenishAccount", method = RequestMethod.POST)
    public String replenishAccount(@RequestParam String sum) {

        System.out.println(" ----- Sum to replenishAccount: " + sum);

        JSONObject dataJSON=new JSONObject();
        dataJSON.put("isReplenishAccountComplete", true);

//        System.out.println("Object JSON: " + dataJSON);

        return dataJSON.toString();
    }

}
