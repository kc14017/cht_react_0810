package com.chtti.fullstack.demo.Backend1.repository;

import com.chtti.fullstack.demo.Backend1.model.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {
    Backlog findByProjectIdentifier(String identifier);
}