import fs from "fs";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Validate required environment variables
if (!process.env.GITHUB_TOKEN) {
  console.error("❌ ERROR: GITHUB_TOKEN is not set in .env file");
  console.log("💡 Please create a .env file with:");
  console.log("GITHUB_TOKEN=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");
  console.log("GITHUB_USERNAME=asimullah312");
  process.exit(1);
}

if (!process.env.GITHUB_USERNAME) {
  console.error("❌ ERROR: GITHUB_USERNAME is not set in .env file");
  process.exit(1);
}

const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};

console.log(`🔗 Fetching GitHub data for user: ${openSource.githubUserName}`);

const query_pr = {
  query: `
	query {
	  user(login: "${openSource.githubUserName}"){
	    pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
      totalCount
      nodes{
        id
        title
        url
        state
	      mergedBy {
	          avatarUrl
	          url
	          login
	      }
	      createdAt
	      number
        changedFiles
	      additions
	      deletions
        baseRepository {
	          name
	          url
	          owner {
	            avatarUrl
	            login
	            url
	          }
	        }
      }
    }
	}
}
	`,
};

const query_issue = {
  query: `query{
		user(login: "${openSource.githubUserName}") {
    issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
      totalCount
      nodes{
      	id
        closed
        title
        createdAt
        url
        number
        assignees(first:100){
          nodes{
            avatarUrl
            name
            url
          }
        }
        repository{
          name
          url
          owner{
            login
            avatarUrl
            url
          }
        }
      }
    }
  }
	}`,
};

const query_org = {
  query: `query{
	user(login: "${openSource.githubUserName}") {
	    repositoriesContributedTo(last: 100){
	      totalCount
	      nodes{
	        owner{
	          login
	          avatarUrl
	          __typename
	        }
	      }
	    }
	  }
	}`,
};

const query_pinned_projects = {
  query: `
	query { 
	  user(login: "${openSource.githubUserName}") { 
	    pinnedItems(first: 6, types: REPOSITORY) {
	      totalCount
	      nodes{
	        ... on Repository{
	          id
		          name
		          createdAt,
		          url,
		          description,
		          isFork,
		          languages(first:10){
		            nodes{
		              name
		            }
		          }
	        }
	      }
		  }
	  }
	}
	`,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
  Go: "logos-go",
  TypeScript: "logos-typescript-icon",
  "C++": "logos-c-plusplus",
  Swift: "logos-swift",
  Kotlin: "logos-kotlin",
  Terraform: "simple-icons:terraform",
  YAML: "simple-icons:yaml",
  JSON: "simple-icons:json",
  Markdown: "simple-icons:markdown",
  PowerShell: "simple-icons:powershell",
  Bash: "simple-icons:gnubash",
  Docker: "simple-icons:docker",
  Kubernetes: "simple-icons:kubernetes",
  AWS: "simple-icons:amazonaws",
  "Google Cloud": "simple-icons:googlecloud",
  Azure: "simple-icons:microsoftazure",
};

// Fetch Pull Requests
const fetchPullRequests = async () => {
  try {
    console.log("📥 Fetching Pull Request data...");
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(query_pr),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }
    
    var cropped = { data: [] };
    cropped["data"] = data["data"]["user"]["pullRequests"]["nodes"];

    var open = 0;
    var closed = 0;
    var merged = 0;
    for (var i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["state"] === "OPEN") open++;
      else if (cropped["data"][i]["state"] === "MERGED") merged++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["merged"] = merged;
    cropped["totalCount"] = cropped["data"].length;

    // Ensure directory exists
    const dir = "./src/shared/opensource";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(
      "./src/shared/opensource/pull_requests.json",
      JSON.stringify(cropped, null, 2)
    );
    console.log("✅ Pull Request data saved successfully!");
  } catch (error) {
    console.log("❌ Error fetching PR data:", error.message);
  }
};

// Fetch Issues
const fetchIssues = async () => {
  try {
    console.log("📥 Fetching Issues data...");
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(query_issue),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }
    
    var cropped = { data: [] };
    cropped["data"] = data["data"]["user"]["issues"]["nodes"];

    var open = 0;
    var closed = 0;
    for (var i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["closed"] === false) open++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["totalCount"] = cropped["data"].length;

    fs.writeFileSync(
      "./src/shared/opensource/issues.json",
      JSON.stringify(cropped, null, 2)
    );
    console.log("✅ Issues data saved successfully!");
  } catch (error) {
    console.log("❌ Error fetching issues data:", error.message);
  }
};

// Fetch Organizations
const fetchOrganizations = async () => {
  try {
    console.log("📥 Fetching Organization data...");
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(query_org),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }
    
    const orgs = data["data"]["user"]["repositoriesContributedTo"]["nodes"];
    var newOrgs = { data: [] };
    for (var i = 0; i < orgs.length; i++) {
      var obj = orgs[i]["owner"];
      if (obj["__typename"] === "Organization") {
        var flag = 0;
        for (var j = 0; j < newOrgs["data"].length; j++) {
          if (JSON.stringify(obj) === JSON.stringify(newOrgs["data"][j])) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          newOrgs["data"].push(obj);
        }
      }
    }

    fs.writeFileSync(
      "./src/shared/opensource/organizations.json",
      JSON.stringify(newOrgs, null, 2)
    );
    console.log("✅ Organization data saved successfully!");
  } catch (error) {
    console.log("❌ Error fetching organizations data:", error.message);
  }
};

// Fetch Pinned Projects
const fetchPinnedProjects = async () => {
  try {
    console.log("📥 Fetching Pinned Projects data...");
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(query_pinned_projects),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }
    
    const projects = data["data"]["user"]["pinnedItems"]["nodes"];
    var newProjects = { data: [] };
    for (var i = 0; i < projects.length; i++) {
      var obj = projects[i];
      var langobjs = obj["languages"]["nodes"];
      var newLangobjs = [];
      for (var j = 0; j < langobjs.length; j++) {
        if (langobjs[j]["name"] in languages_icons) {
          newLangobjs.push({
            name: langobjs[j]["name"],
            iconifyClass: languages_icons[langobjs[j]["name"]],
          });
        } else {
          // Add default icon for unknown languages
          newLangobjs.push({
            name: langobjs[j]["name"],
            iconifyClass: "simple-icons:git",
          });
        }
      }
      obj["languages"] = newLangobjs;
      newProjects["data"].push(obj);
    }

    fs.writeFileSync(
      "./src/shared/opensource/projects.json",
      JSON.stringify(newProjects, null, 2)
    );
    console.log("✅ Pinned Projects data saved successfully!");
  } catch (error) {
    console.log("❌ Error fetching pinned projects:", error.message);
  }
};

// Run all fetches
const fetchAllData = async () => {
  console.log("🚀 Starting GitHub data fetch...");
  console.log("==========================================");
  
  await fetchPullRequests();
  await fetchIssues();
  await fetchOrganizations();
  await fetchPinnedProjects();
  
  console.log("==========================================");
  console.log("🎉 All GitHub data fetched successfully!");
  console.log("📁 Data saved to: ./src/shared/opensource/");
};

// Execute the data fetching
fetchAllData().catch(error => {
  console.error("💥 Fatal error:", error);
  process.exit(1);
});
