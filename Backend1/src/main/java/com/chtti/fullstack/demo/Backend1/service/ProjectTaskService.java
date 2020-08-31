package com.chtti.fullstack.demo.Backend1.service;

import com.chtti.fullstack.demo.Backend1.exceptions.ProjectIdException;
import com.chtti.fullstack.demo.Backend1.exceptions.ProjectIdIncorrectException;
import com.chtti.fullstack.demo.Backend1.exceptions.TaskNotFoundException;
import com.chtti.fullstack.demo.Backend1.model.Backlog;
import com.chtti.fullstack.demo.Backend1.model.Project;
import com.chtti.fullstack.demo.Backend1.model.ProjectTask;
import com.chtti.fullstack.demo.Backend1.repository.BacklogRepository;
import com.chtti.fullstack.demo.Backend1.repository.ProjectRepository;
import com.chtti.fullstack.demo.Backend1.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {
    @Autowired
    private BacklogRepository backlogRepository;
    @Autowired
    private ProjectTaskRepository projectTaskRepository;
    @Autowired
    private ProjectRepository projectRepository;

    public enum Priority {
        NOT_SET(0), LOW(1), MEDIUM(2), HIGH(3);
        public final int value;

        private Priority(int value) {
            this.value = value;
        }
    }

    public enum Status {
        NOT_SET(""), TO_DO("TO_DO");
        public final String value;

        private Status(String value) {
            this.value = value;
        }
    }

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
        Backlog backlog = backlogRepository.
                findByProjectIdentifier(projectIdentifier);
        if (backlog == null) {
            String message = String.format("Project identifier:%s not found", projectIdentifier);
            throw new ProjectIdException(message);

        }
        projectTask.setBacklog(backlog);
        //
        Integer backlogSequence = backlog.getPTSequence();
        backlogSequence++;
        backlog.setPTSequence(backlogSequence);
        projectTask.setProjectSequence(projectIdentifier + '-' + backlogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);
        // set importance
        if (projectTask.getPriority() == null || projectTask.getPriority() == Priority.NOT_SET.value) {
            projectTask.setPriority(Priority.MEDIUM.value);
        }
        if (projectTask.getStatus() == null || projectTask.getStatus().equals(Status.NOT_SET.value)) {
            projectTask.setStatus(Status.TO_DO.value);
        }
        return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findTaskById(String backlog_id) {
        Project project = projectRepository.findByProjectIdentifier(backlog_id);
        if (project == null) {
            String message = String.format("project id:%s does not exist!", backlog_id);
            throw new ProjectIdIncorrectException(message);
        }
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(backlog_id);
    }

    public ProjectTask findTaskByProjectSequence(String task_id) {
        ProjectTask task = projectTaskRepository.findByProjectSequence(task_id);
        if (task == null) {
            String message = String.format("Task with task_id:%s does not exist", task_id);
            throw new TaskNotFoundException(message);
        }
        return task;
    }

    public ProjectTask updateByProjectSequence(ProjectTask updateTask) {
        Backlog backlog =
                backlogRepository.findByProjectIdentifier(updateTask.getProjectIdentifier());
        updateTask.setBacklog(backlog);
        return projectTaskRepository.save(updateTask);

    }

    public void deleteTaskByProjctSequence(String task_id) {
        ProjectTask task = findTaskByProjectSequence(task_id);
        projectTaskRepository.delete(task);
    }
}
