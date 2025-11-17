/* Change this file to get your personal Portfolio */

import splashAnimation from "./assets/lottie/splashAnimation";

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
  subTitle: "A passionate DevOps Engineer 🚀 | Docker | Kubernetes | CI/CD | Cloud Enthusiast",
  resumeLink: "https://drive.google.com/file/d/your-resume-id/view",
  displayGreeting: true,
};

// Social Media Links
export const socialMediaLinks = {
  github: "https://github.com/asimullah312",
  linkedin: "https://linkedin.com/in/asimullah312",
  gmail: "asimullah312@gmail.com",
  twitter: "https://twitter.com/asimullah312",
};

// Competitive Sites
export const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white"
      },
      profileLink: "https://github.com/asimullah312"
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/profile/asimullah312"
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116"
      },
      profileLink: "https://leetcode.com/u/asimullah312/"
    },
    {
      siteName: "DevOps",
      iconifyClassname: "simple-icons:docker",
      style: {
        color: "#2496ED"
      },
      profileLink: "https://hub.docker.com/u/asimullah312"
    }
  ]
};

// Skills / Tech Stack
export const skillsSection = {
  title: "What I do",
  subTitle: "DEVOPS ENGINEER & CLOUD ENTHUSIAST",
  skills: [
    "⚡ Develop and maintain CI/CD pipelines using Jenkins, GitLab CI/CD",
    "⚡ Containerize applications using Docker and deploy to Kubernetes",
    "⚡ Cloud infrastructure management on AWS & GCP",
    "⚡ Infrastructure as Code using Terraform and CloudFormation",
    "⚡ Monitoring and logging with Prometheus, Grafana, and ELK Stack",
    "⚡ Scripting and automation with Python, Bash, and Groovy",
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

// Degrees Section
export const degrees = {
  degrees: [
    {
      title: "Bachelor of Computer Science",
      subtitle: "University Name",
      logo_path: "university-logo.png",
      alt_name: "University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Learned about cloud computing, distributed systems, and DevOps practices.",
        "⚡ Completed various projects on containerization and orchestration technologies."
      ],
      website_link: "https://www.university.edu",
    }
  ],
};

// Certifications Section
export const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "Amazon Web Services",
      logo_path: "aws-certified.png",
      certificate_link: "https://www.credly.com/badges/example",
      alt_name: "AWS",
      color_code: "#FF9900"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle: "Cloud Native Computing Foundation",
      logo_path: "kubernetes-certified.png",
      certificate_link: "https://www.credly.com/badges/example",
      alt_name: "Kubernetes",
      color_code: "#326CE5"
    },
    {
      title: "Terraform Associate",
      subtitle: "HashiCorp",
      logo_path: "terraform-certified.png",
      certificate_link: "https://www.credly.com/badges/example",
      alt_name: "Terraform",
      color_code: "#7B42BC"
    },
    {
      title: "Docker Certified Associate",
      subtitle: "Docker",
      logo_path: "docker-certified.png",
      certificate_link: "https://www.credly.com/badges/example",
      alt_name: "Docker",
      color_code: "#2496ED"
    }
  ]
};

// Projects Header
export const projectsHeader = {
  title: "Projects",
  description: "My projects make use of a vast variety of latest technology tools. My best experience is creating DevOps projects and deploying them to cloud infrastructure using modern CI/CD practices.",
  avatar_image_path: "projects_image.svg"
};

// Open Source Projects Section
export const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: process.env.REACT_APP_GITHUB_USERNAME,
  title: "Open Source Projects",
  subtitle: "My contributions to the open source community",
  viewAllLink: "https://github.com/asimullah312",
};

// Experience Section
export const experience = {
  title: "Experience",
  subtitle: "WORK, INTERNSHIP AND VOLUNTEERING",
  description: "I've worked with cutting-edge technologies and contributed to various DevOps projects.",
  experiences: [
    {
      role: "DevOps Engineer",
      company: "Tech Company",
      companylogo: "/path/to/logo.png",
      date: "Jan 2022 – Present",
      desc: "Building and maintaining CI/CD pipelines, container orchestration, and cloud infrastructure.",
      descBullets: [
        "Implemented Kubernetes clusters serving 100+ microservices",
        "Reduced deployment time by 70% through automation",
        "Managed AWS and GCP cloud infrastructure"
      ],
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
    },
    {
      role: "Cloud Engineer",
      company: "Previous Company",
      companylogo: "/path/to/logo.png",
      date: "Jun 2020 – Dec 2022",
      desc: "Managed cloud infrastructure and implemented automation solutions.",
      descBullets: [
        "Automated infrastructure provisioning using Terraform",
        "Implemented monitoring solutions with Prometheus and Grafana",
        "Reduced cloud costs by 30% through optimization"
      ],
      skills: ["GCP", "Docker", "Python", "Bash", "GitLab CI"],
    },
  ],
};

// Education Section
export const educationInfo = {
  title: "Education",
  subtitle: "ACADEMIC CAREER",
  schools: [
    {
      schoolName: "University Name",
      logo: "/path/to/university-logo.png",
      subHeader: "Bachelor of Computer Science",
      duration: "September 2016 - April 2020",
      desc: "Specialized in Cloud Computing and Distributed Systems",
      grade: "Grade A",
      descBullets: [
        "Graduated with First Class Honors",
        "Specialized in Cloud Infrastructure and DevOps",
        "Completed projects on container orchestration and microservices"
      ],
    },
  ],
};

// Contact Page Data
export const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description: "I'm always interested in new opportunities and collaborations. Feel free to reach out to me for any DevOps, cloud, or automation projects.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Islamabad, Pakistan",
    locality: "Pakistan",
    country: "PK",
    region: "Islamabad",
    postalCode: "44000",
    streetAddress: "Street Address",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92-300-1234567",
  },
};

// Contact Info
export const contactInfo = {
  title: "Contact Me",
  subtitle: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
  number: "+92-300-1234567",
  email_address: "asimullah312@gmail.com",
};

// Projects Section
export const projects = {
  title: "Featured Projects",
  subtitle: "MY CREATIONS AND CONTRIBUTIONS",
  projects: [
    {
      name: "Multi-Cloud Kubernetes Cluster",
      desc: "Deployed and managed Kubernetes clusters across AWS and GCP with automated scaling and monitoring",
      github: "https://github.com/asimullah312/multi-cloud-k8s",
      link: "https://github.com/asimullah312/multi-cloud-k8s",
      technologies: ["Kubernetes", "AWS", "GCP", "Terraform", "Helm"],
    },
    {
      name: "Automated CI/CD Pipeline",
      desc: "End-to-end CI/CD pipeline with Jenkins, Docker, and Kubernetes including security scanning",
      github: "https://github.com/asimullah312/automated-cicd",
      link: "https://github.com/asimullah312/automated-cicd",
      technologies: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Nexus"],
    },
    {
      name: "Infrastructure Monitoring Stack",
      desc: "Complete monitoring solution with Prometheus, Grafana, and Alertmanager for cloud infrastructure",
      github: "https://github.com/asimullah312/monitoring-stack",
      link: "https://github.com/asimullah312/monitoring-stack",
      technologies: ["Prometheus", "Grafana", "Docker", "AWS", "Terraform"],
    },
  ],
};

// Blog Section
export const blogSection = {
  title: "Blogs",
  subtitle: "I occasionally write about DevOps, Cloud, and Automation",
  link: "https://medium.com/@asimullah312",
  avatar_image_path: "blogs_image.svg"
};

// Podcast Section
export const podcastSection = {
  title: "Podcast",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: []
};

// Talks Section
export const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE",
  talks: []
};

// Achievement Section
export const achievementSection = {
  title: "ACHIEVEMENTS AND CERTIFICATIONS",
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
  achievementsCards: []
};

export default {
  splashScreen,
  greeting,
  socialMediaLinks,
  competitiveSites,
  skillsSection,
  degrees,
  certifications,
  projectsHeader,
  openSource,
  experience,
  educationInfo,
  contactPageData,
  contactInfo,
  projects,
  blogSection,
  podcastSection,
  talkSection,
  achievementSection
};
