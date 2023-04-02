#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
        stage("Docker build"){
            steps {            
                sh "docker build -t achebeh/student-dashboard ."       
            }
        }
    }
} 