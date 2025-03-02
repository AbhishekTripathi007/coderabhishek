package com.coderabhishek.blog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.coderabhishek.blog.model.TestMongo;

public interface Testrepo extends MongoRepository<TestMongo, String> {

}
