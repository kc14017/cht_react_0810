package com.chtti.fullstack.demo.Backend1.controller;

import com.chtti.fullstack.demo.Backend1.model.ProjectTask;
import com.chtti.fullstack.demo.Backend1.service.ProjectTaskService;
import com.chtti.fullstack.demo.Backend1.ulility.MapValidationError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {
    @Autowired
    private ProjectTaskService projectTaskService;
    @PostMapping("/{project_id}")
    public ResponseEntity<?> addTaskToBacklog(@Valid @RequestBody ProjectTask projectTask,
                                              BindingResult result,
                                              @PathVariable String project_id) {
        ResponseEntity<?> errorMap = MapValidationError.MapValidation(result);
        if (errorMap!=null) {
            return errorMap;
        }
        ProjectTask projectTaskToReturn =
                projectTaskService.addProjectTask(project_id, projectTask);
        return new ResponseEntity<>(projectTaskToReturn, HttpStatus.CREATED);
    }
}
