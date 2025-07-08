# Hello World DevSecOps (EPCC Proof of Concept)

Welcome to **Hello World DevSecOps**, a collaborative proof-of-concept built and presented for El Paso Community College (EPCC) in November 2022.

---

## 🚀 Project Overview

This repository demonstrates secure, automated CI/CD for a cloud-native application stack, integrating DevSecOps best practices. It was showcased live for students and faculty at EPCC to illustrate:

- Secure app development and deployment
- Automated builds, code checks, and infrastructure as code
- Real-world DevSecOps workflows from development to Kubernetes

The project includes a containerized frontend and backend, Jenkins pipelines, and Kubernetes deployment manifests.

---

## 🛠️ Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **CI/CD**: Jenkins, Jenkins Pipelines
- **Containerization**: Docker, Docker Compose
- **Orchestration**: Kubernetes (K8s) with YAML manifests
- **Security**: Mocked Security Steps in Jenkins Pipeline

---

## ⚡ Getting Started (Local)

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/youruser/hello-world-devsecops.git
   cd hello-world-devsecops
   ```

2.	**Start locally with Docker Compose**

    ```bash
    docker-compose up --build
    ```

3.	**Visit the apps**

    * app: http://localhost:4000
    * api: http://localhost:3200

---

## 🚦 CI/CD & DevSecOps Highlights

* Automated Jenkins pipelines for build, test, and deploy
* Static analysis/linting for both frontend and backend
* Secure Docker images and least-privilege configurations
* Kubernetes manifests for deployment, service, and routing
* GitHub for version control and code review

---

## 🤝 Credits & Acknowledgements

This project was presented voluntarily by:
* Daniel Saenz ([disaenz](https://github.com/disaenz))
* Armando Campose ([camposa03](https://github.com/camposa03))
* Cesar Valenzuela([cvalenzuela13](https://github.com/cvalenzuela13))
* Gilbert Ornelas ([gtornelas](gtornelas))

## Acknowledgements

Special thanks to [Professor Cristian Servin, PH.D](https://www.christianservin.com) and to [El Paso Community College (EPCC)](https://www.epcc.edu)
for giving us the opportunity to showcase DevSecOps practices and inspire the next generation of cloud and security engineers!

---

## 📜 License

This project is open source under the [MIT License](./license.md) and is intended for educational and demonstration purposes.