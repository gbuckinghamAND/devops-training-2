pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'bower install'
            }
        }
        stage('Test') {
            steps {
                sh 'karma start'
            }
        }
    }
}
