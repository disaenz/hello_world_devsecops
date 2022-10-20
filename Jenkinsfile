pipeline
{
    agent
    {
        kubernetes
        {
            cloud "openshift"
            defaultContainer "docker-agent"
            yamlFile "agents/KubernetesPod.yaml"
        }
    }

    options {
        skipStagesAfterUnstable()
    }

    environment
    {
        ART_USERNAME = credentials("devsecops-art-username")
        OPEN_SHIFT_URL = credentials("OPENSHIFT_URL_PLACEHOLDER")
        OPEN_SHIFT_TOKEN = credentials("OPENSHIFT_TOKEN_PLACEHOLDER")
        OCP_PROJECT = "devsecops-demo"
        ART_TOKEN = credentials("devsecops-art-token")
        ART_DOCKER_REPO = "ARTIFACTORY_DOCKER_REPO_PLACEHOLDER"
        DOCKER_HOST = "tcp://aoappd-w-dev001.ctho.sndg.gtwy.dcn:2375"
        ART_HOST = "cfar.nsapps.dcn"
        IMG_NAME = "devsecops/hello-world-api"
        EMAILS_TO_NOTIFY = "gilbert_ornelas@ao.uscourts.gov"
    }

    
    stages {
        /*
        stage('Initial Notification Process'){
            steps{
                echo 'Starting Pipeline'
                sh 'chmod +x scripts/*'  
            }

            post {
                success {
                    emailext to: "${EMAILS_TO_NOTIFY}",
                        subject: "Jenkins Pipeline: Pipeline ${JOB_NAME} has Started",
                        body: readFile("email-templates/pipeline-started.html")
                }
            }

        }
        stage('Fortify Scan') {
            steps {
                container('fortify') {
                    sh "sh scripts/fortify-scan.sh"
                }
            }
        }

        stage('Fortify Upload') {
            steps {
                container('alpine-jq') {
                    sh "sh scripts/fortify-upload.sh ${FORTIFY_APP_ID}"
                }
            }
        }
        stage('Fortify Security Check') {
            steps {
                container('fortify') {
                    sh "sh scripts/fortify-parse-report.sh"
                }
            }

            post {
                success {
                    echo 'Security checks have passed.'
                }

                failure {
                    echo 'Security checks have failed. An e-mail will be sent shortly'
                    sh "sh scripts/html-template-parser.sh"
                    emailext to: "${EMAILS_TO_NOTIFY}",
                       subject: "Jenkins Pipeline: Security check failed",
                       body: readFile("email-templates/fortify-failed.html")
                }
            }
        }
*/
        stage('Login to Artifactory Server'){
            steps{
                sh "sh scripts/art-login.sh"                    
            }
        }
/*
        stage('Build Docker Image') {
            steps{    
                sh "sh scripts/build-docker-image.sh" 
            }
        }
        
         
        stage('Push Docker Image to Artifactory') {
            steps{
                sh "sh scripts/art-push.sh"
            }
        }

        stage("Send Approval Email") {
            steps {
                  emailext to: 'PLACEHOLDER',
                    subject: "Jenkins Approval Required",
                    body: "${currentBuild.projectName} is about to get deployed. Please click the following link to approve.<a href=\"${BUILD_URL}input\">Click to approve or deny this request</a>"
            }
        } 

        stage("Approval") {
            input {
                message "Ready to deploy?"
                ok "Yes"
                submitter "PLACEHOLDER"
                parameters {
                    string(name: "DEPLOY_ENV", defaultValue: "production")
                }
            }
            steps {
                echo "Deploy to the ${DEPLOY_ENV} environment."
            }
        }

        stage('Deploy application to OCP') {
            steps{
                sh "sh scripts/deploy-app.sh"
            }

            post {
                success {
                    echo 'Openshift Deployment passed.'
                }

                failure {
                    echo 'Openshift Deployment failed'
                    emailext to: "${EMAILS_TO_NOTIFY}",
                        subject: "Jenkins Pipeline: Openshift Deployment failed",
                        body: readFile("email-templates/deployment-failed.html")
                }
            }
        }

    
        stage('Run Tests Cases') {
                    steps {
                        sh "sh scripts/run-tests.sh"
                    }

                    post {
                        success {
                            echo 'Integration Tests passed.'
                        }

                        failure {
                            echo 'Openshift Deployment failed'
                            emailext to: "${EMAILS_TO_NOTIFY}",
                                subject: "Jenkins Pipeline: Integration tests failed",
                                body: readFile("email-templates/test-cases-failed.html")
                        }
                    }
                }
        */
            }

    post {
        success {
            echo 'Pipeline has Finished.'
            emailext to: "${EMAILS_TO_NOTIFY}",
                subject: "Jenkins Pipeline: Pipeline has Finished Successfully",
                body: readFile("email-templates/pipeline-finished.html")
        }
    }
}
