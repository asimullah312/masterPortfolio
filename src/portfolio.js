/* Portfolio.js fixed for your website */

// Website settings
const settings = {
  isSplash: true,
};

// SEO settings
const seo = {
  title: "Asim Ullah | Portfolio",
  description:
    "Computer Science graduate and DevOps Engineer focused on automation, CI/CD, cloud technologies, and modern DevOps tooling.",
  og: {
    title: "Asim Ullah | Portfolio",
    type: "website",
    url: "https://asimullah312.github.io/",
  },
};

// Splash Screen
const splashScreen = {
  enabled: settings.isSplash,
  duration: 2000,
};

// Home Page
const greeting = {
  title: "Hi 👋 I'm Asim Ullah",
  logo_name: "AsimUllah",
  nickname: "DevOps Engineer",
  subTitle:
    "Computer Science graduate focused on DevOps, CI/CD, and cloud technologies.",
  resumeLink: "",
  portfolio_repository: "https://github.com/asimullah312",
  githubProfile: "https://github.com/asimullah312",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/asimullah312",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/asim-ullah-43ab75270/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:asimullah312@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills
const skillsSection = {
  data: [
    {
      title: "DevOps & Cloud Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building CI/CD pipelines using Jenkins & GitHub Actions",
        "⚡ Containerization and orchestration with Docker & Kubernetes",
        "⚡ Infrastructure automation using Terraform & Ansible",
        "⚡ Deploying and managing applications on AWS",
        "⚡ Working with Linux environments and production servers",
      ],
      softwareSkills: [
        { skillName: "Docker", imageSrc: "docker.png" },
        { skillName: "Kubernetes", imageSrc: "kubernetes.png" },
        { skillName: "AWS", imageSrc: "aws.png" },
        { skillName: "Linux", imageSrc: "linux.png" },
        { skillName: "Ansible", imageSrc: "ansible.png" },
        { skillName: "Terraform", imageSrc: "terraform.png" },
        { skillName: "Jenkins", imageSrc: "jenkins.png" },
        { skillName: "Git", imageSrc: "git.png" },
      ],
    },
  ],
};

// Education Info
const educationInfo = {
  degrees: [
    {
      title: "University of Engineering and Technology Peshawar",
      subtitle: "B.Sc in Computer Science",
      logo_path: "uett_logo.png",
      alt_name: "UET Peshawar",
      duration: "2020 – 2024",
      descriptions: [
        "⚡ Studied core computer science subjects including Operating Systems, Programming, Cloud Computing, and Software Engineering.",
        "⚡ Focused on DevOps tools, modern software automation, and deployment pipelines.",
      ],
      website_link: "https://www.uetpeshawar.edu.pk/",
    },
  ],
};

// Work Experiences
const workExperiences = {
  title: "Experience",
  subtitle: "Internships",
  description:
    "Motivated DevOps Engineer with hands-on experience in CI/CD, Docker, Kubernetes, Terraform, Linux, AWS, and automation.",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "DevOps Intern",
          company: "Cortecsols",
          company_url: "",
          logo_path: "experience.svg",
          duration: "2024",
          location: "Remote",
          description:
            "Worked on deployment automation, CI/CD pipelines, and infrastructure provisioning using Terraform & Ansible.",
          color: "#0879bf",
        },
        {
          title: "DevOps Intern",
          company: "Mi6",
          company_url: "",
          logo_path: "experience.svg",
          duration: "2024",
          location: "Remote",
          description:
            "Hands-on experience with Docker, Kubernetes, Jenkins, Git, Linux servers and cloud technologies.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Contact Info
const contactInfo = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactMail.png",
    description: "Feel free to reach out to me via email or social media.",
  },
};

// Projects
const projects = {
  projectsHeader: {
    title: "Projects",
    description:
      "Here are some projects I have worked on related to DevOps, automation, and cloud technologies.",
  },
};

// Competitive Sites
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: { color: "#F79F1B" },
      profileLink: "",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: { color: "#2EC866" },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: { color: "#5B4638" },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: { color: "#1F8ACB" },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: { color: "#20BEFF" },
      profileLink: "",
    },
  ],
};

// Certifications
const certifications = {
  certifications: [
    {
      title: "DevOps Training",
      subtitle: "- TrainWithShubham",
      logo_path: "devops.png",
      certificate_link: "",
      alt_name: "TrainWithShubham",
      color_code: "#000000",
    },
    {
      title: "DevOps Certification",
      subtitle: "- Indian Institute (Online Course)",
      logo_path: "devops.png",
      certificate_link: "",
      alt_name: "Online Course",
      color_code: "#000000",
    },
  ],
};

// Publications
const publications = {
  publicationsHeader: {
    title: "Publications",
    description:
      "Some of my publications, blogs, and articles about DevOps, cloud, and technology.",
  },
  data: [],
};

// Export all
export {
  settings,
  seo,
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  contactInfo,
  projects,
  competitiveSites,
  certifications,
  publications,
};
