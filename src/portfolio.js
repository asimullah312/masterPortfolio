/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // keep your splash animation

// Images
import profile from "./assets/images/profile.png";
import contactMail from "./assets/images/contactMail.png";
import codeInLogo from "./assets/images/codeInLogo.png";
import github from "./assets/images/git.png";
import googleLogo from "./assets/images/google_logo.png";
import linkedin from "./assets/images/linkedin.png";

// Tech & company logos
import docker from "./assets/images/docker.png";
import kubernetes from "./assets/images/kubernetes.png";
import terraform from "./assets/images/terraform.png";
import aws from "./assets/images/aws.png";
import gcpLogo from "./assets/images/gcp_logo.png";
import jenkins from "./assets/images/jenkins.png";
import intelLogo from "./assets/images/intel_logo.png";
import ibmLogo from "./assets/images/ibm_logo.png";
import microsoftLogo from "./assets/images/microsoft_logo.png";
import tiktokLogo from "./assets/images/tiktok_logo.png";
import stanfordLogo from "./assets/images/stanford_logo.png";

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
    "A passionate DevOps engineer 🚀 | Docker | CI/CD | Cloud Enthusiast"
  ),
  displayGreeting: true,
};

// Social Media Links
export const socialMediaLinks = {
  github: "https://github.com/<your-github-username>",
  linkedin: "https://linkedin.com/in/<your-linkedin>",
  gmail: "your.email@example.com",
};

// Skills / Tech Stack
export const skillsSection = {
  title: "What I do",
  skills: [
    emoji("⚡ Develop CI/CD pipelines using Jenkins, GitLab CI/CD"),
    emoji("⚡ Dockerize applications and deploy to Kubernetes"),
    emoji("⚡ Cloud deployments with AWS & GCP"),
    emoji("⚡ Automation and Infrastructure as Code using Terraform"),
  ],
  softwareSkills: [
    { skillName: "Docker", fontAwesomeClassname: docker },
    { skillName: "Kubernetes", fontAwesomeClassname: kubernetes },
    { skillName: "Terraform", fontAwesomeClassname: terraform },
    { skillName: "AWS", fontAwesomeClassname: aws },
    { skillName: "GCP", fontAwesomeClassname: gcpLogo },
    { skillName: "Jenkins", fontAwesomeClassname: jenkins },
  ],
};

// Contact Section
export const contactSection = {
  title: "Contact Me",
  profile_image_path: profile,
  description:
    "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  mail: contactMail,
};

// Projects Section
export const projectsSection = {
  title: "Projects",
  projects: [
    {
      name: "Project 1",
      description: "Dockerized web app deployed on Kubernetes",
      githubLink: "https://github.com/<your-github-username>/project1",
    },
    {
      name: "Project 2",
      description: "CI/CD pipeline setup with Jenkins and GitLab",
      githubLink: "https://github.com/<your-github-username>/project2",
    },
  ],
};

export default {
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  contactSection,
  projectsSection,
};
