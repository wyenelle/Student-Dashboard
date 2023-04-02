#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
        stage("Docker build"){
            steps{
                script{
                    try{
                        sh "docker build -t achebeh-/student-dashboard ."
                    }
                    catch(error){
                    }
                }
            }
        }
    }
} 