package com.chtti.fullstack.demo.Backend1.controller;

import com.chtti.fullstack.demo.Backend1.model.ProjectTask;
import com.chtti.fullstack.demo.Backend1.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/task")
@CrossOrigin
public class TaskController {
    @Autowired
    private ProjectTaskService projectTaskService;

    @GetMapping("/{task_id}")
    public ResponseEntity<?> getProjectTask(@PathVariable String task_id) {
        ProjectTask projectTask = projectTaskService.findTaskByProjectSequence(task_id);
        return new ResponseEntity<>(projectTask, HttpStatus.OK);
    }
}