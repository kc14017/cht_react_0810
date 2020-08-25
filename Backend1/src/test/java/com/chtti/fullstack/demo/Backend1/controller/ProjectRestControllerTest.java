package com.chtti.fullstack.demo.Backend1.controller;

import com.chtti.fullstack.demo.Backend1.model.Project;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.util.Map;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProjectRestControllerTest {
    @LocalServerPort
    private int port;
    @Autowired
    private TestRestTemplate restTemplate;
    private static final Logger LOGGER = LoggerFactory.getLogger(TestRestTemplate.class);

    @Test
    public void addProjectSuccess() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234");
        project.setDescription("Hi this is my first project");
        project.setProjectName("Demo Project1");
        ResponseEntity<String> response =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, String.class);
        LOGGER.info("response={}", response.getStatusCode());
        LOGGER.info("response={}", response.getBody());
        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    public void getAllProject() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234");
        project.setDescription("Hi this is my first project");
        project.setProjectName("Demo Project1");
        String localURL = String.format("http://localhost:%d/api/project", port);
        ResponseEntity<String> response =
                restTemplate.postForEntity(localURL,
                        project, String.class);
        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
        ResponseEntity<Project[]> response2 =
                restTemplate.getForEntity(localURL + "/all", Project[].class);
        Project[] projects = response2.getBody();
        MediaType contentType = response2.getHeaders().getContentType();
        assertEquals(projects.length, 1);
        assertThat(contentType).isEqualByComparingTo(MediaType.APPLICATION_JSON);
        assertThat(response2.getStatusCode()).isEqualByComparingTo(HttpStatus.OK);
    }

    @Test
    public void addProjectMissingName() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234");
        project.setDescription("Hi this is my first project");
        //project.setProjectName("Demo Project1");
        ResponseEntity<Map> response =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, Map.class);
        Map<String, String> errorMessages = response.getBody();
        LOGGER.info("response={}", response.getStatusCode());
        LOGGER.info("response={}", errorMessages.get("projectName"));
        assertEquals(response.getStatusCode(), HttpStatus.BAD_REQUEST);
        assertEquals(errorMessages.get("projectName"), "project name is required");
    }

    @Test
    public void addProjectDuplicateId() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234");
        project.setDescription("Hi this is my first project");
        project.setProjectName("Demo Project1");
        ResponseEntity<Map> response =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, Map.class);
        Map<String, String> errorMessages = response.getBody();
        ResponseEntity<Map> response2 =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, Map.class);
        Map<String, String> errorMessages2 = response2.getBody();
        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
        assertEquals(response2.getStatusCode(), HttpStatus.BAD_REQUEST);
        LOGGER.info("duplicate message={}", errorMessages2.get("projectIdentifier"));


    }

}