# Snake Game - Demo for CI/CD & Kubernetes

> ⚠️ **Note**  
> I did **not develop this app myself**.  
> This repository is used purely to **demonstrate CI/CD pipelines, GitOps, and Kubernetes deployments**.  
> The original game was made (quickly) by a friend for me, and I am using it here as a sample application.


## 🎮 About the App
This is a classic **Snake game** built with **HTML, CSS, and JavaScript**:

- Frontend only (no backend)
- Uses a canvas for game rendering
- Includes keyboard and button controls
- Tracks score and high score using `localStorage`

The app is served via **Nginx** in a Docker container.
The focus of this repository is **DevOps, CI/CD, and GitOps practices**, not the game itself.


## 🛠 Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Containerization:** Docker, Nginx  
- **CI/CD & DevOps:**  
     - GitHub Actions (linting, unit tests, SAST, Docker build & scan, image publishing)  
     - GitOps workflows for Kubernetes deployments  
     - ArgoCD & Argo Rollouts for progressive delivery and canary strategies  


## 🤖 CI/CD & GitOps Workflows

The `.github` folder contains automated workflows that:

- Run on every code push
- Ensure code quality via linting and unit tests
- Build and scan Docker images
- Publish images to GHCR
- Update the GitOps repository with new image versions
- Trigger ArgoCD sync for Kubernetes deployments


## 🎯 Purpose of This Repository

This repository showcases **my understanding of modern DevOps practices**.  
It demonstrates **how to build and automate CI/CD pipelines**, integrate **unit testing**, manage **Docker containerization**, and implement **GitOps workflows on Kubernetes**.  

Through this project, I aim to illustrate **my ability to automate deployments end-to-end**, and convey a structured, secure, and professional approach to **infrastructure-as-code**.  

It is both a **learning tool** and a **portfolio piece**, highlighting my commitment to **automation, testing, and clean deployment practices**.

> Feel free to clone the repository, run the app locally, and explore the CI/CD and GitOps workflows for understanding or learning purposes.
