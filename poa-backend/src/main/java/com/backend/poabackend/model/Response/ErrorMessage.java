package com.backend.poabackend.model.Response;

import java.util.Optional;

public class ErrorMessage {
    public String timestamp;
    public int status;
    public String message;
    public String path;

    public ErrorMessage(){

    }

    public ErrorMessage(String message){
        this.message = message;
        this.status = 404;
    }

    public ErrorMessage(String message, int status){

    }
}
