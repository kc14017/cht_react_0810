package com.chtti.fullstack.demo.Backend1.service;

import com.chtti.fullstack.demo.Backend1.exceptions.ProjectIdException;
import com.chtti.fullstack.demo.Backend1.model.Project;
import com.chtti.fullstack.demo.Backend1.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Project saveOrUpdateProject(Project project) {
        String upperCaseProjectId = project.getProjectIdentifier().toUpperCase();
        try {
            project.setProjectIdentifier(upperCaseProjectId);
            return repository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException(String.format("Project ID %s already exists",
                    upperCaseProjectId));
        }
    }
}