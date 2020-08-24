package com.chtti.fullstack.demo.Backend1;

import com.chtti.fullstack.demo.Backend1.model.Project;
import com.chtti.fullstack.demo.Backend1.repository.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class ProjectRepositoryTest {
    @Autowired
    private ProjectRepository repository;
    @Test
    public void testAddProjectToRepository() {
        Project project = new Project();
        project.setProjectName("project1");
        project.setProjectIdentifier("TEST_PROJECT1");
        project.setDescription("this is my first test project");
        repository.save(project);
        Project project2 = new Project();
        project2.setProjectName("project2");
        project2.setProjectIdentifier("TEST_PROJECT2");
        project2.setDescription("this is my second test project");
        repository.save(project2);
        assertEquals(repository.count(), 2);
    }
}