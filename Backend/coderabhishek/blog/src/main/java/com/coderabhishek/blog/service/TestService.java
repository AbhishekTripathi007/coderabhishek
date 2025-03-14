package com.coderabhishek.blog.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.coderabhishek.blog.model.TestMongo;
import com.coderabhishek.blog.repository.Testrepo;

@Service
public class TestService {
	public final Testrepo testrepo;

	public TestService(Testrepo testrepo) {
		this.testrepo = testrepo;
	}
	
	public List<TestMongo> getAll() {
		return testrepo.findAll();
	}
	
	public TestMongo createTest(TestMongo testMongo) {
		return testrepo.save(testMongo);
	}
}
