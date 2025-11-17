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

// SEO Section - FIXED: Added all required properties
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
  author: "Asim Ullah",
  twitter: "@asimullah312", // Added missing property
  facebook: "", // Added missing property
};

// Social Media Links - FIXED: Added all required properties
export const socialMediaLinks = {
  github: "https://github.com/asimullah312",
  linkedin: "https://linkedin.com/in/asimullah312",
  gmail: "asimullah312@gmail.com",
  gitlab: "",
  facebook: "https://facebook.com/asimullah312",
  medium: "",
  stackoverflow: "",
  Instagram: "https://instagram.com/asimullah312",
  twitter: "https://twitter.com/asimullah312",
  behance: "",
  dribbble: "",
  youtube: "",
  blogger: "",
  hackerrank: "https://www.hackerrank.com/profile/asimullah312",
  leetcode: "https://leetcode.com/u/asimullah312",
  topcoder: "",
  codechef: "",
  codeforces: "",
  geeks_for_geeks: "",
  discord: "",
  rssurl: "",
};

// Competitive Sites - FIXED: Correct structure
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

// Skills Section - FIXED: Complete structure
export const skillsSection = {
  title: "What I do",
  subTitle: "DEVOPS ENGINEER & CLOUD ENTHUSIAST",
  data: [
    {
      title: "DevOps & Cloud Infrastructure",
      lottieAnimationFile: "/lottie/build.json", // You'll need to add this file
      skills: [
        "⚡ Develop and maintain CI/CD pipelines using Jenkins, GitLab CI/CD",
        "⚡ Containerize applications using Docker and deploy to Kubernetes",
        "⚡ Cloud infrastructure management on AWS & GCP",
        "⚡ Infrastructure as Code using Terraform and CloudFormation",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "fab fa-docker",
          style: {
            color: "#2496ED"
          }
        },
        {
          skillName: "Kubernetes", 
          fontAwesomeClassname: "fas fa-cubes",
          style: {
            color: "#326CE5"
          }
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "fas fa-code",
          style: {
            color: "#7B42BC"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "fab fa-aws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "fas fa-cloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "fab fa-jenkins",
          style: {
            color: "#D24939"
          }
        },
      ]
    }
  ]
};

// Skills - FIXED: Added viewSkillBars property
export const skills = {
  title: "Skills",
  subTitle: "DEVOPS ENGINEER & CLOUD ENTHUSIAST", 
  viewSkillBars: true, // Added this required property
  experience: [
    {
      Stack: "Containerization",
      progressPercentage: "90"
    },
    {
      Stack: "Kubernetes",
      progressPercentage: "85"
    },
    {
      Stack: "AWS/GCP",
      progressPercentage: "80"
    },
    {
      Stack: "CI/CD",
      progressPercentage: "85"
    },
    {
      Stack: "Terraform",
      progressPercentage: "75"
    },
    {
      Stack: "Linux/Shell Scripting",
      progressPercentage: "80"
    }
  ]
};

// Degrees Section - FIXED: Added required structure
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

// Certifications Section - FIXED: Complete structure
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

// Experience Section - FIXED: Complete structure
export const experience = {
  title: "Experience",
  subtitle: "WORK AND INTERNSHIP",
  description: "I've worked with cutting-edge DevOps technologies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "DevOps Engineer",
          company: "Tech Company",
          company_url: "https://company.com",
          logo_path: "company-logo.png",
          duration: "Jan 2022 – Present",
          location: "Islamabad, Pakistan",
          description: "Building and maintaining CI/CD pipelines and cloud infrastructure.",
          color: "#0879bf",
        },
        {
          title: "Cloud Engineer Intern",
          company: "Startup Inc.",
          company_url: "https://startup.com",
          logo_path: "startup-logo.png",
          duration: "Jun 2021 – Dec 2021",
          location: "Remote",
          description: "Assisted in cloud infrastructure deployment and automation.",
          color: "#0879bf",
        }
      ]
    }
  ]
};

// Projects Header
export const projectsHeader = {
  title: "Projects",
  description: "My projects make use of latest technology tools. My best experience is creating DevOps projects and deploying them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg"
};

// Projects Section - FIXED: Complete structure
export const projects = {
  data: [
    {
      id: "1",
      name: "Multi-Cloud Kubernetes Cluster",
      url: "https://github.com/asimullah312/multi-cloud-k8s",
      description: "Deployed Kubernetes clusters across AWS and GCP with automated provisioning",
      languages: [
        {
          name: "Terraform",
          iconifyClass: "vscode-icons:file-type-terraform"
        },
        {
          name: "Kubernetes",
          iconifyClass: "logos:kubernetes"
        },
        {
          name: "AWS",
          iconifyClass: "logos:aws"
        },
        {
          name: "GCP", 
          iconifyClass: "logos:google-cloud"
        }
      ]
    },
    {
      id: "2",
      name: "Automated CI/CD Pipeline", 
      url: "https://github.com/asimullah312/automated-cicd",
      description: "End-to-end CI/CD pipeline with Jenkins and Kubernetes for microservices",
      languages: [
        {
          name: "Jenkins",
          iconifyClass: "logos:jenkins"
        },
        {
          name: "Docker",
          iconifyClass: "logos:docker-icon"
        },
        {
          name: "Kubernetes",
          iconifyClass: "logos:kubernetes"
        },
        {
          name: "Groovy",
          iconifyClass: "vscode-icons:file-type-groovy"
        }
      ]
    }
  ]
};

// Contact Info - FIXED: Complete structure
export const contactInfo = {
  title: "Contact Me",
  subtitle: "DISCUSS A PROJECT OR JUST WANT TO SAY HI?",
  number: "+92-300-1234567",
  email_address: "asimullah312@gmail.com",
  email: "asimullah312@gmail.com", // Added this
  address: "Islamabad, Pakistan", // Added this
  twitter: "asimullah312", // Added this
  github: "asimullah312", // Added this
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
    locality: "Pakistan", // Added this
    country: "PK", // Added this
    region: "Islamabad", // Added this
    postalCode: "44000", // Added this
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com", // Added this
  },
  phoneSection: {
    title: "Phone Number", 
    subtitle: "+92-300-1234567"
  }
};

// Education Section - FIXED: Complete structure
export const educationInfo = {
  viewEducation: true, // Added this
  education: [
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

// Other sections with minimal required structure
export const publicationsHeader = {
  title: "Publications", 
  description: "",
  avatar_image_path: "publications_image.svg"
};

export const publications = {
  data: []
};

export const openSource = {
  githubConvertedToken: "",
  githubUserName: "asimullah312",
};

export const blogSection = {
  title: "Blogs",
  subtitle: "",
  link: "",
  avatar_image_path: "blogs_image.svg"
};

export const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: []
};

export const talkSection = {
  title: "TALKS", 
  subtitle: "",
  talks: []
};

export const achievementSection = {
  title: "ACHIEVEMENTS",
  subtitle: "",
  achievementsCards: []
};

// FIXED: Default export with all sections in correct order
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
  experience,
  educationInfo,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  openSource,
  contactPageData,
  contactInfo,
  blogSection,
  podcastSection,
  talkSection,
  achievementSection
};
