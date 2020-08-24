package com.chtti.fullstack.demo.Backend1;

import com.chtti.fullstack.demo.Backend1.model.Project;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ProjectTest {
    private static final Logger LOGGER =
            LoggerFactory.getLogger(ProjectTest.class.getSimpleName());

    @Test
    void testLombokEquality() {
        Project p1 = new Project();
        Project p2 = new Project();
        p1.setProjectName("yearly_review");
        p2.setProjectName("yearly_review");
        Project p3 = p1;
        LOGGER.info("p1={}", p1);
        LOGGER.info("p2={}", p2);
        LOGGER.info("p1==p2 ==>{}, p1.equals(p2)==>{}", p1 == p2, p1.equals(p2));
        LOGGER.info("p1==p3 ==>{}, p1.equals(p3)==>{}", p1 == p3, p1.equals(p3));
    }
}