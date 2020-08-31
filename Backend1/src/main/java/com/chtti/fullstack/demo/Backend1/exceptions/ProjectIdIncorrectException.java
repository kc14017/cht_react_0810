package com.chtti.fullstack.demo.Backend1.exceptions;

//@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectIdIncorrectException extends RuntimeException {
    public ProjectIdIncorrectException(String message) {
        super(message);
    }
}