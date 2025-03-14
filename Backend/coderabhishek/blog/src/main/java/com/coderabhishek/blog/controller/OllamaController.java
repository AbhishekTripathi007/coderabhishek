package com.coderabhishek.blog.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
//import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/ollama")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your React app's origin

public class OllamaController {

    private final RestTemplate restTemplate = new RestTemplate();
//    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping(value = "/generate", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public ResponseEntity<String> generate(@RequestBody Map<String, String> request) {
        String model = request.get("model");
        String prompt = request.get("prompt");

        String ollamaUrl = "http://localhost:11434/api/generate";

        try {
            Map<String, String> ollamaRequest = new HashMap<>();
            ollamaRequest.put("model", model);
            ollamaRequest.put("prompt", prompt);

            ResponseEntity<String> ollamaResponse = restTemplate.postForEntity(ollamaUrl, ollamaRequest, String.class);

            if (ollamaResponse.getStatusCode().is2xxSuccessful()) {
                String responseBody = ollamaResponse.getBody();
                //Here we need to process the stream and return it to the client.
                return ResponseEntity.ok()
                        .contentType(MediaType.TEXT_EVENT_STREAM)
                        .body(responseBody);

            } else {
                return ResponseEntity.status(ollamaResponse.getStatusCode()).body("Ollama API Error");
            }

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Internal Server Error");
        }
    }
}