package com.chtti.fullstack.demo.Backend1.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class ProjectTask {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(updatable=false, unique = true)
    private String projectSequence;
    @NotBlank(message="please include a task summary")
    private String summary;
    private String acceptanceCriteria;
    private String status;
    private Integer priority;
    private Date dueDate;
    private Date createAt;
    private Date updateAt;
    @Column(updatable = false)
    private String projectIdentifier;
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="backlog_id", nullable=false)
    @JsonIgnore
    private Backlog backlog;
    @PrePersist
    public void onCreate(){
        this.createAt = new Date();
    }
    @PreUpdate
    public void onUpdate() {
        this.updateAt = new Date();
    }
}
