package com.chtti.fullstack.demo.Backend1.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Backlog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer PTSequence = 0;
    private String projectIdentifier;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "project_id", nullable = false)
    @JsonIgnore
    private Project project;
    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true,
            fetch = FetchType.EAGER, mappedBy = "backlog")
    private List<ProjectTask> projectTask = new ArrayList<>();
}