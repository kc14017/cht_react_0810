package com.chtti.fullstack.demo.Backend1.controller;


import com.chtti.fullstack.demo.Backend1.model.Project;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProjectRestControllerDelete {
    @LocalServerPort
    private int port;
    @Autowired
    private TestRestTemplate restTemplate;
    private static final Logger LOGGER =
            LoggerFactory.getLogger(ProjectRestControllerDelete.class);
    private static final String PROJECT_IDENTIFIER = "abc1234";

    @BeforeEach
    public void testPrecondition() {
        assertNotNull(restTemplate);
        Project project = new Project();
        project.setProjectName("My sample Project");
        project.setProjectIdentifier(PROJECT_IDENTIFIER);
        project.setDescription("project to be deleted");
        ResponseEntity<String> result =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, String.class);
        assertEquals(result.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    void singleProjectDelete() {
        ResponseEntity<Project[]> entity1 =
                restTemplate.getForEntity(String.format("http://localhost:%d/api/project/all",
                        port), Project[].class);
        assertEquals(entity1.getBody().length, 1);
        restTemplate.delete(String.format("http://localhost:%d/api/project/" + PROJECT_IDENTIFIER, port));
        System.out.println("delete complete");
        ResponseEntity<Project[]> entity2 =
                restTemplate.getForEntity(String.format("http://localhost:%d/api/project/all",
                        port), Project[].class);
        assertEquals(entity2.getBody().length, 0);

    }
}