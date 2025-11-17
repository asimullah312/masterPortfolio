/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // keep your splash animation

// Images
import profile from "./assets/images/profile.png";
import contactMail from "./assets/images/contactMail.png";

// Tech & company logos
import docker from "./assets/images/docker.png";
import kubernetes from "./assets/images/kubernetes.png";
import terraform from "./assets/images/terraform.png";
import aws from "./assets/images/aws.png";
import gcpLogo from "./assets/images/gcp_logo.png";
import jenkins from "./assets/images/jenkins.png";
import gitlab from "./assets/images/gitlab.png";
import python from "./assets/images/python.png";
import linux from "./assets/images/linux.png";

// Splash Screen
export const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Greeting
export const greeting = {
  username: "Asim Ullah",
  title: "Hi all, I'm Asim",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 | Docker | Kubernetes | CI/CD | Cloud Enthusiast"
  ),
  resumeLink: "https://drive.google.com/file/d/your-resume-id/view",
  displayGreeting: true,
};

// Social Media Links
export const socialMediaLinks = {
  github: "https://github.com/asimullah312",
  linkedin: "https://linkedin.com/in/asimullah312",
  gmail: "asimullah312@example.com",
  twitter: "https://twitter.com/asimullah312",
};

// Skills / Tech Stack
export const skillsSection = {
  title: "What I do",
  subTitle: "DEVOPS ENGINEER & CLOUD ENTHUSIAST",
  skills: [
    emoji("⚡ Develop and maintain CI/CD pipelines using Jenkins, GitLab CI/CD"),
    emoji("⚡ Containerize applications using Docker and deploy to Kubernetes"),
    emoji("⚡ Cloud infrastructure management on AWS & GCP"),
    emoji("⚡ Infrastructure as Code using Terraform and CloudFormation"),
    emoji("⚡ Monitoring and logging with Prometheus, Grafana, and ELK Stack"),
    emoji("⚡ Scripting and automation with Python, Bash, and Groovy"),
  ],
  softwareSkills: [
    { skillName: "Docker", fontAwesomeClassname: docker },
    { skillName: "Kubernetes", fontAwesomeClassname: kubernetes },
    { skillName: "Terraform", fontAwesomeClassname: terraform },
    { skillName: "AWS", fontAwesomeClassname: aws },
    { skillName: "GCP", fontAwesomeClassname: gcpLogo },
    { skillName: "Jenkins", fontAwesomeClassname: jenkins },
    { skillName: "GitLab", fontAwesomeClassname: gitlab },
    { skillName: "Python", fontAwesomeClassname: python },
    { skillName: "Linux", fontAwesomeClassname: linux },
  ],
};

// Open Source Projects Section
export const openSourceSection = {
  title: "Open Source Projects",
  viewAllLink: "https://github.com/asimullah312",
  projects: [
    {
      title: "Kubernetes Deployment Automation",
      description: "Automated Kubernetes deployment scripts with Helm charts",
      link: "https://github.com/asimullah312/kubernetes-automation",
    },
    {
      title: "Terraform AWS Infrastructure",
      description: "Infrastructure as Code for AWS services using Terraform",
      link: "https://github.com/asimullah312/terraform-aws",
    },
    {
      title: "CI/CD Pipeline Templates",
      description: "Jenkins and GitLab CI/CD pipeline templates for various applications",
      link: "https://github.com/asimullah312/cicd-templates",
    },
  ],
};

// Experience Section
export const experienceSection = {
  title: "Experience",
  experiences: [
    {
      role: "DevOps Engineer",
      company: "Tech Company",
      duration: "2022 - Present",
      description: "Building and maintaining CI/CD pipelines, container orchestration, and cloud infrastructure.",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
    },
    {
      role: "Cloud Engineer",
      company: "Previous Company",
      duration: "2020 - 2022",
      description: "Managed cloud infrastructure and implemented automation solutions.",
      skills: ["GCP", "Docker", "Python", "Bash", "GitLab CI"],
    },
  ],
};

// Education Section
export const educationSection = {
  title: "Education",
  schools: [
    {
      name: "University Name",
      degree: "Bachelor of Computer Science",
      duration: "2016 - 2020",
      description: "Specialized in Cloud Computing and Distributed Systems",
    },
  ],
};

// Contact Section
export const contactSection = {
  title: "Contact Me",
  profile_image_path: profile,
  description:
    "I'm always interested in new opportunities and collaborations. Feel free to reach out to me for any DevOps, cloud, or automation projects.",
  mail: contactMail,
};

// Projects Section
export const projectsSection = {
  title: "Featured Projects",
  projects: [
    {
      name: "Multi-Cloud Kubernetes Cluster",
      description: "Deployed and managed Kubernetes clusters across AWS and GCP with automated scaling and monitoring",
      githubLink: "https://github.com/asimullah312/multi-cloud-k8s",
      demoLink: "",
      technologies: ["Kubernetes", "AWS", "GCP", "Terraform", "Helm"],
    },
    {
      name: "Automated CI/CD Pipeline",
      description: "End-to-end CI/CD pipeline with Jenkins, Docker, and Kubernetes including security scanning",
      githubLink: "https://github.com/asimullah312/automated-cicd",
      demoLink: "",
      technologies: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Nexus"],
    },
    {
      name: "Infrastructure Monitoring Stack",
      description: "Complete monitoring solution with Prometheus, Grafana, and Alertmanager for cloud infrastructure",
      githubLink: "https://github.com/asimullah312/monitoring-stack",
      demoLink: "",
      technologies: ["Prometheus", "Grafana", "Docker", "AWS", "Terraform"],
    },
  ],
};

export default {
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  openSourceSection,
  experienceSection,
  educationSection,
  contactSection,
  projectsSection,
};
