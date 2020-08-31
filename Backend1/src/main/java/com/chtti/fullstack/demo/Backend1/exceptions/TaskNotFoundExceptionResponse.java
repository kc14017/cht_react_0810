package com.chtti.fullstack.demo.Backend1.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TaskNotFoundExceptionResponse {
    private String task_id;
}
