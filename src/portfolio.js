/* Change this file to get your personal Portfolio */

// Splash Screen - disabled
export const splashScreen = {
  enabled: false,
  animation: null,
  duration: 2000,
};

// Settings
export const settings = {
  isSplash: false,
  useCustomName: false,
  themeColor: "#000000",
};

// Greeting
export const greeting = {
  username: "Asim Ullah",
  title: "Hi all, I'm Asim",
  subTitle: "A passionate DevOps Engineer 🚀 | Docker | Kubernetes | CI/CD | Cloud Enthusiast",
  resumeLink: "https://drive.google.com/file/d/your-resume-id/view",
  displayGreeting: true,
};

// SEO Section
export const seo = {
  title: "Asim Ullah | DevOps Engineer",
  description: "A passionate DevOps Engineer specializing in Docker, Kubernetes, CI/CD, AWS, GCP, and Cloud Infrastructure.",
  image: "https://asimullah312.github.io/profile.png",
  url: "https://asimullah312.github.io",
  keywords: [
    "Asim Ullah",
    "DevOps Engineer",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "AWS",
    "GCP",
    "Terraform"
  ],
  author: "Asim Ullah"
};

// Social Media Links - FIXED: Correct property names for components
export const socialMediaLinks = [
  {
    name: "Gmail",
    url: "mailto:asimullah312@gmail.com",
    className: "fa-envelope"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/asimullah312",
    className: "fa-linkedin-in"
  },
  {
    name: "GitHub",
    url: "https://github.com/asimullah312",
    className: "fa-github"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/asimullah312", 
    className: "fa-twitter"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/asimullah312",
    className: "fa-facebook"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/asimullah312", 
    className: "fa-instagram"
  }
];

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
      profileLink: "https://leetcode.com/u/asimullah312"
    }
  ]
};

// Skills Section - FIXED: Complete structure with all required properties
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
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes", 
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ]
};

// Skills - FIXED: Same structure as skillsSection
export const skills = {
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
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cubes" 
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
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
        "⚡ Specialized in Cloud Computing and Distributed Systems",
        "⚡ Completed projects on containerization and orchestration",
        "⚡ Graduated with First Class Honors"
      ],
      website_link: "https://www.university.edu",
    }
  ]
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
    }
  ]
};

// Projects Header
export const projectsHeader = {
  title: "Projects",
  description: "My projects make use of latest technology tools. My best experience is creating DevOps projects and deploying them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg"
};

// Publications Header
export const publicationsHeader = {
  title: "Publications", 
  description: "I have contributed to research papers and technical articles in DevOps and Cloud Computing.",
  avatar_image_path: "publications_image.svg"
};

// Publications Section
export const publications = {
  title: "Publications",
  subtitle: "RESEARCH AND ACADEMIC PUBLICATIONS",
  description: "I have contributed to various research papers in DevOps and Cloud Computing.",
  publications: [
    {
      title: "Optimizing Kubernetes Cluster Performance",
      conference: "International Conference on Cloud Computing",
      journal: "Journal of Cloud Infrastructure", 
      description: "Strategies for optimizing Kubernetes across multiple cloud providers.",
      link: "https://example.com/publication1",
      authors: "Asim Ullah"
    }
  ]
};

// Open Source Projects Section
export const openSource = {
  githubConvertedToken: "your_token_here",
  githubUserName: "asimullah312",
  title: "Open Source Projects", 
  subtitle: "My contributions to open source",
  viewAllLink: "https://github.com/asimullah312"
};

// Experience Section
export const experience = {
  title: "Experience",
  subtitle: "WORK AND INTERNSHIP",
  description: "I've worked with cutting-edge DevOps technologies.",
  experiences: [
    {
      role: "DevOps Engineer",
      company: "Tech Company",
      companylogo: "/path/to/logo.png",
      date: "Jan 2022 – Present",
      desc: "Building and maintaining CI/CD pipelines and cloud infrastructure.",
      descBullets: [
        "Implemented Kubernetes clusters",
        "Reduced deployment time by 70%",
        "Managed AWS and GCP infrastructure"
      ]
    }
  ]
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
      duration: "2016 - 2020",
      desc: "Specialized in Cloud Computing",
      grade: "Grade A",
      descBullets: [
        "Graduated with First Class Honors",
        "Specialized in Cloud Infrastructure"
      ]
    }
  ]
};

// Contact Page Data
export const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description: "I'm always interested in new opportunities and collaborations.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Islamabad, Pakistan",
    avatar_image_path: "address_image.svg"
  },
  phoneSection: {
    title: "Phone Number", 
    subtitle: "+92-300-1234567"
  }
};

// Contact Info
export const contactInfo = {
  title: "Contact Me",
  subtitle: "DISCUSS A PROJECT OR JUST WANT TO SAY HI?",
  number: "+92-300-1234567",
  email_address: "asimullah312@gmail.com"
};

// Projects Section
export const projects = {
  title: "Featured Projects",
  subtitle: "MY CREATIONS AND CONTRIBUTIONS",
  projects: [
    {
      name: "Multi-Cloud Kubernetes Cluster",
      desc: "Deployed Kubernetes clusters across AWS and GCP",
      github: "https://github.com/asimullah312/multi-cloud-k8s",
      link: "https://github.com/asimullah312/multi-cloud-k8s"
    },
    {
      name: "Automated CI/CD Pipeline", 
      desc: "End-to-end CI/CD pipeline with Jenkins and Kubernetes",
      github: "https://github.com/asimullah312/automated-cicd",
      link: "https://github.com/asimullah312/automated-cicd"
    }
  ]
};

// Blog Section
export const blogSection = {
  title: "Blogs",
  subtitle: "I write about DevOps and Cloud",
  link: "https://medium.com/@asimullah312",
  avatar_image_path: "blogs_image.svg"
};

// Podcast Section
export const podcastSection = {
  title: "Podcast",
  subtitle: "I talk about technology",
  podcast: []
};

// Talks Section
export const talkSection = {
  title: "TALKS", 
  subtitle: "I share my knowledge",
  talks: []
};

// Achievement Section
export const achievementSection = {
  title: "ACHIEVEMENTS",
  subtitle: "Certifications and Awards",
  achievementsCards: []
};

// FIXED: All exports in correct order
export default {
  splashScreen,
  settings,
  greeting,
  seo,
  socialMediaLinks,
  competitiveSites,
  skills,
  skillsSection, 
  degrees,
  certifications,
  projectsHeader,
  publicationsHeader,
  publications,
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
