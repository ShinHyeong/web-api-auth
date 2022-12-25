package com.ShinHyeong.webapiauth.account;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account/")
public class AccountController {

    @PostMapping("create")
    public String signup(@RequestBody String data){
        /*
        JsonParser parser = new JSONParser();
        JsonElement element = parser.parse(data);
        String userId = element.getAsJsonObject().get("userId").getAsString();
        String password = element.getAsJsonObject().get("password").getAsString();
        */
        return "welcome";
    }


}
