package com.chtti.fullstack.demo.Backend1.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class Project {
    public Project(Long id, String projectName) {
        this.id = id;
        this.projectName = projectName;
    }

    private Long id;
    private String projectName;
    private String projectIdentifier;
    private String description;
    private Date startDate;
    private Date endDate;
}