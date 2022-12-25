package com.ShinHyeong.webapiauth.account;

import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/account/")
public class AccountController {
    @ResponseBody
    @PostMapping("create")
    public String signup(@RequestBody String data){
        JsonParser parser = new JSONParser();
        JsonElement element = parser.parse(data);
        String userId = element.getAsJsonObject().get("userId").getAsString();
        String password = element.getAsJsonObject().get("password").getAsString();


    }

}
