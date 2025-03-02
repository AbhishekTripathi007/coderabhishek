package com.coderabhishek.blog.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coderabhishek.blog.model.TestMongo;
import com.coderabhishek.blog.service.TestService;

@RestController
@RequestMapping("/test")
public class TestController {
	public final TestService testService;

	public TestController(TestService tesService) {
		this.testService = tesService;
	}

	@GetMapping("/getAll")
	public List<TestMongo> getAll() {
		return testService.getAll();
	}

	@PostMapping("/create")
	public TestMongo createTest(@RequestBody TestMongo testMongo) {
		return testService.createTest(testMongo);
	}
	
	@GetMapping("/ok")
	public String ok() {
		return("ok");
	}
}
