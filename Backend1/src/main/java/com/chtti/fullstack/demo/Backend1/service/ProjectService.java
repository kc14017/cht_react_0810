package com.chtti.fullstack.demo.Backend1.service;

import com.chtti.fullstack.demo.Backend1.exceptions.ProjectIdException;
import com.chtti.fullstack.demo.Backend1.model.Backlog;
import com.chtti.fullstack.demo.Backend1.model.Project;
import com.chtti.fullstack.demo.Backend1.repository.BacklogRepository;
import com.chtti.fullstack.demo.Backend1.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;
    @Autowired
    private BacklogRepository backlogRepository;

    public Project saveOrUpdateProject(Project project) {
        String upperCaseProjectId = project.getProjectIdentifier().toUpperCase();
        try {
            if (project.getId() == null) { // new project
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(upperCaseProjectId);
            } else { // old project
                project.setBacklog(
                        backlogRepository.findByProjectIdentifier(upperCaseProjectId));
            }
            project.setProjectIdentifier(upperCaseProjectId);
            return repository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException(String.format("Project ID %s already exists",
                    upperCaseProjectId));
        }
    }

    public Iterable<Project> findAllProjects() {
        return repository.findAll();
    }

    public Project findProjectByIdentifier(String projectId) {
        Project project = repository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectIdException("Project ID:" + projectId + " does not exist");
        }
        return project;
    }

    public void deleteProjectByIdentifier(String projectId) {
        Project projectToDelete =
                repository.findByProjectIdentifier(projectId.toUpperCase());
        if (projectToDelete == null) {
            throw new ProjectIdException(
                    String.format("can not delete project with id %s, this project does not exist",
                            projectId));
        }
        repository.delete(projectToDelete);
    }
}
