#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
        stage("Docker build"){
            steps {            
                sh "docker build -t achebeh/student-dashboard ."       
            }
        }

        stage ("Docker push image"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh "docker push achebeh/student-dashboard"
                }
            }
        }

        stage ("Docker run app"){
            steps{
                sh "docker compose up"
            }
        }
    }
} 