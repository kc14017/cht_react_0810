package com.chtti.fullstack.demo.Backend1.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectIdIncorrectException extends RuntimeException {
    public ProjectIdIncorrectException(String message) {
        super(message);
    }
}