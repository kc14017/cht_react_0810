package com.chtti.fullstack.demo.Backend1.repository;

import com.chtti.fullstack.demo.Backend1.model.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
}