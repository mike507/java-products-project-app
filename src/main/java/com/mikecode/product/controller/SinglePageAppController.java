package com.mikecode.product.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins = "*")
public class SinglePageAppController {
    @RequestMapping(value = {"/", "/picture/**", "/login/**"})
    public String index() {
        return "index";
    }
}