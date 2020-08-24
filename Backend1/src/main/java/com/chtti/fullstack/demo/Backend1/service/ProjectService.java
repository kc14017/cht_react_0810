package com.chtti.fullstack.demo.Backend1.service;

import com.chtti.fullstack.demo.Backend1.model.Project;
import com.chtti.fullstack.demo.Backend1.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Project saveOrUpdateProject(Project project) {
        return repository.save(project);
    }
}