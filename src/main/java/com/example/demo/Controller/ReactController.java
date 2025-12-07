package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactController {

    /**
     * Serves the React app for the root URL and React routes.
     * This allows React Router to handle client-side routing.
     */
    @GetMapping(value = {"/react", "/react/**"})
    public String serveReact() {
        return "forward:/react-build/index.html";
    }
}
