pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Downloading source code from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building Node.js application'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image'
                sh 'docker build -t jenkins-cicd-app:latest .'
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deploying application using Docker'

                sh '''
                    docker rm -f jenkins-cicd-app || true

                    docker run -d \
                    --name jenkins-cicd-app \
                    --restart unless-stopped \
                    -p 3000:3000 \
                    jenkins-cicd-app:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline Completed Successfully!'
        }

        failure {
            echo 'CI/CD Pipeline Failed!'
        }
    }
}
