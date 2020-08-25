package com.chtti.fullstack.demo.Backend1.controller;

import com.chtti.fullstack.demo.Backend1.model.Project;
import com.chtti.fullstack.demo.Backend1.service.ProjectService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
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
        if (bindingResult.hasErrors()) {
            // if validate error, get collected errors here
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorMap,
                    HttpStatus.BAD_REQUEST);

        }
        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<>(project1, HttpStatus.CREATED);
    }
}