package com.chtti.fullstack.demo.Backend1.controller;

import com.chtti.fullstack.demo.Backend1.model.Project;
import com.chtti.fullstack.demo.Backend1.service.ProjectService;
import com.chtti.fullstack.demo.Backend1.ulility.MapValidationError;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    ProjectService projectService;
    private static final Logger LOGGER = LoggerFactory.getLogger(ProjectController.class);

    @PostMapping("")
    public ResponseEntity<?>
    createNewProject(@Valid @RequestBody Project project,
                     BindingResult bindingResult) {
        LOGGER.info("get project from json={}", project);
        ResponseEntity<Map<String, String>> errorMap = MapValidationError.MapValidation(bindingResult);
        if (errorMap != null) return errorMap;
        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<>(project1, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Project> getAllProjects() {
        return projectService.findAllProjects();
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    private static final String DELETE_STRING = "Project with ID:%s was deleted";

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProjectById(@PathVariable String projectId) {
        projectService.deleteProjectByIdentifier(projectId);
        return new ResponseEntity<>(String.format(DELETE_STRING, projectId), HttpStatus.OK);
    }
}