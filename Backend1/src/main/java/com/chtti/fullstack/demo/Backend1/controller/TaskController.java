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
@RequestMapping("/api/task")
@CrossOrigin
public class TaskController {
    @Autowired
    private ProjectTaskService projectTaskService;

    @PatchMapping("")
    public ResponseEntity<?> updateProjectTask(@Valid @RequestBody ProjectTask projectTask,
                                               BindingResult result) {
        ResponseEntity<?> errorMap = MapValidationError.MapValidation(result);
        if (errorMap != null) {
            return errorMap;
        }
        ProjectTask updateTask = projectTaskService.updateByProjectSequence(projectTask);
        return new ResponseEntity<>(updateTask, HttpStatus.OK);
    }

    @GetMapping("/{task_id}")
    public ResponseEntity<?> getProjectTask(@PathVariable String task_id) {
        ProjectTask projectTask = projectTaskService.findTaskByProjectSequence(task_id);
        return new ResponseEntity<>(projectTask, HttpStatus.OK);
    }

    @DeleteMapping("/{task_id}")
    public ResponseEntity<?> deleteProjectTask(@PathVariable String task_id) {
        projectTaskService.deleteTaskByProjctSequence(task_id);
        String message = String.format("Project task [%s] was delete successfully", task_id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
