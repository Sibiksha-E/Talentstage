const state = {
  role: "Both",
  route: "dashboard",
  savedFreelancers: ["maya"],
  identityVerified: false,
  proActive: false,
  searchTerm: "",
  proposals: [
    {
      id: "p1",
      projectId: "proj1",
      freelancer: "Maya Rao",
      amount: 155000,
      timeline: "5 weeks",
      message: "I will rebuild the analytics UX with validated flows, clean charts, and a launch-ready design system.",
      status: "Shortlisted"
    },
    {
      id: "p2",
      projectId: "proj1",
      freelancer: "Arjun Mehta",
      amount: 130000,
      timeline: "4 weeks",
      message: "I can implement the front end, component library, and dashboard performance improvements.",
      status: "New"
    }
  ],
  contracts: [
    {
      title: "Creator CRM Launch",
      client: "Northstar Media",
      freelancer: "Maya Rao",
      value: 180000,
      status: "Active",
      deliverables: [
        { name: "Discovery and wireframes", status: "Approved", payment: 40000 },
        { name: "Dashboard UI kit", status: "Submitted", payment: 60000 },
        { name: "Final prototype", status: "In progress", payment: 80000 }
      ]
    }
  ],
  feed: [
    { by: "Nisha", text: "Shared a case study on turning client briefs into measurable outcomes.", type: "Tip" },
    { by: "Dev", text: "Won a weekly dashboard redesign challenge with a full Figma prototype.", type: "Win" },
    { by: "Kabir", text: "Posted a resource pack for proposal writing and discovery questions.", type: "Resource" }
  ]
};

const freelancers = [
  {
    id: "maya",
    name: "Maya Rao",
    title: "Product Designer and Webflow Expert",
    rate: 2800,
    availability: "Available this week",
    rating: 4.9,
    skills: ["Figma", "UX Research", "Webflow", "Dashboards"],
    verified: ["Verified Figma Designer", "Verified UX Strategist"],
    education: "B.Des, MIT Institute of Design",
    experience: "5 years across SaaS, fintech, and creator tools",
    cover: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    portfolioQuality: 96,
    budgetFit: 92,
    reviews: ["Clear discovery, fast revisions, excellent final handoff.", "Her prototype helped us close seed clients."],
    projects: [
      {
        title: "PulseOps Dashboard",
        category: "Product design",
        tools: "Figma, Maze, Webflow",
        summary: "Reduced admin review time by 31% with a cleaner reporting flow.",
        image: "https://images.unsplash.com/photo-1559028006-448665bd7e86?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "CreatorKit Website",
        category: "Web build",
        tools: "Webflow, Lottie",
        summary: "Launched a conversion-focused marketing site for a creator tool.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "arjun",
    name: "Arjun Mehta",
    title: "React Developer and Animation Engineer",
    rate: 2200,
    availability: "Open for hourly work",
    rating: 4.8,
    skills: ["React", "Node", "GSAP", "TypeScript"],
    verified: ["Verified React Developer"],
    education: "B.Tech CSE, VIT",
    experience: "4 years building creator commerce and data products",
    cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    portfolioQuality: 88,
    budgetFit: 96,
    reviews: ["Performance-minded and communicates tradeoffs well.", "Delivered a polished React app ahead of schedule."],
    projects: [
      {
        title: "Fintech onboarding build",
        category: "Frontend engineering",
        tools: "React, TypeScript, Node",
        summary: "Cut onboarding friction with a responsive flow and reusable components.",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Motion dashboard system",
        category: "Interface animation",
        tools: "GSAP, React, SVG",
        summary: "Introduced motion details that made a dense product feel lighter.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "zoya",
    name: "Zoya Khan",
    title: "Video Editor and Motion Storyteller",
    rate: 1800,
    availability: "Booked until Friday",
    rating: 4.7,
    skills: ["Premiere Pro", "After Effects", "Reels", "YouTube"],
    verified: ["Verified Video Editor"],
    education: "BA Media Studies, St. Xavier's",
    experience: "Edited 300+ short-form campaigns for D2C brands",
    cover: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    portfolioQuality: 84,
    budgetFit: 89,
    reviews: ["Understands retention hooks and brand tone.", "Great revision discipline."],
    projects: [
      {
        title: "Tutorial series",
        category: "Video editing",
        tools: "Premiere Pro, After Effects",
        summary: "Shaped a 10-part learning series with tight pacing and clean motion titles.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Launch reel pack",
        category: "Social content",
        tools: "Premiere Pro, CapCut",
        summary: "Built short-form assets for launch campaigns and creator promos.",
        image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "neel",
    name: "Neel Iyer",
    title: "Technical Writer for APIs and AI Products",
    rate: 1600,
    availability: "Available for fixed projects",
    rating: 4.8,
    skills: ["Docs", "API Writing", "OpenAPI", "Content Strategy"],
    verified: ["Verified Technical Writer"],
    education: "MA English, Delhi University",
    experience: "6 years documenting developer platforms",
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    portfolioQuality: 91,
    budgetFit: 90,
    reviews: ["Made our docs readable without losing technical depth.", "Excellent information architecture."],
    projects: [
      {
        title: "Payments API docs",
        category: "Documentation",
        tools: "OpenAPI, Markdown",
        summary: "Wrote guides that helped developers integrate faster with fewer support tickets.",
        image: "https://images.unsplash.com/photo-1516321310765-8d8c9ecb1a12?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "SDK migration notes",
        category: "Developer docs",
        tools: "OpenAPI, Docs site",
        summary: "Mapped every edge case to smooth migration from the old SDK.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
      }
    ]
  }
];

const clients = [
  {
    id: "northstar",
    name: "Northstar Media",
    contact: "Priya Sharma",
    title: "Product marketing team",
    budget: "INR 1.2L - 1.9L",
    needs: "Dashboard redesign, design system, launch support",
    projects: ["SaaS analytics redesign", "Launch landing page", "Design system audit"],
    projectDetails: [
      {
        title: "SaaS analytics redesign",
        status: "Open",
        description: "A dashboard refresh with better hierarchy, navigation, and reporting visibility.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Launch landing page",
        status: "Soon",
        description: "A conversion page for an upcoming product launch with testimonials and pricing.",
        image: "https://images.unsplash.com/photo-1516321310765-8d8c9ecb1a12?auto=format&fit=crop&w=900&q=80"
      }
    ],
    cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "promptbay",
    name: "PromptBay",
    contact: "Arun Joseph",
    title: "AI education startup",
    budget: "INR 60K - 1.1L",
    needs: "Video tutorials, motion graphics, thumbnails",
    projects: ["Tutorial video series", "Motion intro pack", "Thumbnail system"],
    projectDetails: [
      {
        title: "Tutorial video series",
        status: "Open",
        description: "10 polished videos with motion callouts, captions, and pacing for retention.",
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Motion intro pack",
        status: "Open",
        description: "Reusable intro animations for product explainers and social clips.",
        image: "https://images.unsplash.com/photo-1516321310765-8d8c9ecb1a12?auto=format&fit=crop&w=900&q=80"
      }
    ],
    cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "finedge",
    name: "FinEdge",
    contact: "Meera Nair",
    title: "Payments platform",
    budget: "INR 90K - 1.5L",
    needs: "API docs, migration guides, sample snippets",
    projects: ["Payments API docs", "Migration guide", "Sandbox examples"],
    projectDetails: [
      {
        title: "Payments API docs",
        status: "Hiring",
        description: "A docs revamp with examples, quick-start, and migration notes.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Sandbox examples",
        status: "Open",
        description: "Practical snippets and integration flows for common payment scenarios.",
        image: "https://images.unsplash.com/photo-1516321310765-8d8c9ecb1a12?auto=format&fit=crop&w=900&q=80"
      }
    ],
    cover: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
  }
];

const projects = [
  {
    id: "proj1",
    title: "SaaS Analytics Dashboard Redesign",
    client: "Northstar Media",
    type: "Fixed",
    budget: [120000, 190000],
    deadline: "2026-06-28",
    skills: ["Figma", "React", "Dashboards"],
    description: "Redesign a creator analytics dashboard, improve onboarding, and hand off a component-ready design system.",
    status: "Open"
  },
  {
    id: "proj2",
    title: "AI Tutorial Video Series",
    client: "PromptBay",
    type: "Hourly",
    budget: [60000, 110000],
    deadline: "2026-06-20",
    skills: ["After Effects", "YouTube", "Scriptwriting"],
    description: "Create 10 polished tutorial videos with motion callouts, captions, and thumbnail templates.",
    status: "Open"
  },
  {
    id: "proj3",
    title: "Developer Docs for Payments API",
    client: "FinEdge",
    type: "Fixed",
    budget: [90000, 150000],
    deadline: "2026-07-04",
    skills: ["API Writing", "OpenAPI", "Docs"],
    description: "Write getting started guides, reference examples, and migration notes for a sandbox payments API.",
    status: "Hiring"
  }
];

const portfolioProjects = [
  {
    title: "PulseOps Dashboard",
    category: "Product Design",
    tools: "Figma, FigJam, Maze",
    description: "Reduced admin review time by 31% with clearer workflows and revenue visibility.",
    link: "https://example.com/pulseops"
  },
  {
    title: "CreatorKit Website",
    category: "Web Build",
    tools: "Webflow, Lottie, Analytics",
    description: "Launched a conversion-focused site with reusable CMS sections and fast page speed.",
    link: "https://example.com/creatorkit"
  },
  {
    title: "Fintech Onboarding",
    category: "UX Research",
    tools: "Figma, UserTesting",
    description: "Mapped drop-off points and redesigned KYC screens for a smoother activation path.",
    link: "https://example.com/fintech"
  }
];

const formatMoney = (amount) => `INR ${amount.toLocaleString("en-IN")}`;
const byId = (id) => document.getElementById(id);
const profileThemes = {
  maya: { a: "rgba(33, 106, 142, 0.56)", b: "rgba(31, 122, 103, 0.54)" },
  arjun: { a: "rgba(63, 88, 166, 0.58)", b: "rgba(47, 62, 140, 0.56)" },
  zoya: { a: "rgba(181, 82, 63, 0.58)", b: "rgba(126, 52, 95, 0.54)" },
  neel: { a: "rgba(82, 104, 74, 0.56)", b: "rgba(39, 91, 109, 0.54)" },
  northstar: { a: "rgba(41, 86, 154, 0.56)", b: "rgba(46, 117, 128, 0.54)" },
  promptbay: { a: "rgba(131, 74, 152, 0.56)", b: "rgba(55, 109, 132, 0.54)" },
  finedge: { a: "rgba(42, 102, 118, 0.58)", b: "rgba(52, 126, 82, 0.54)" }
};

function coverStyle(item) {
  const theme = profileThemes[item.id] || { a: "rgba(49, 96, 143, 0.56)", b: "rgba(31, 122, 103, 0.54)" };
  return `--cover:url('${item.cover}');--tint-a:${theme.a};--tint-b:${theme.b};`;
}

function scoreFreelancer(freelancer, project = projects[0]) {
  const skillMatches = project.skills.filter((skill) =>
    freelancer.skills.some((item) => item.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(item.toLowerCase()))
  ).length;
  const skillScore = (skillMatches / project.skills.length) * 35;
  const qualityScore = freelancer.portfolioQuality * 0.25;
  const ratingScore = freelancer.rating * 5;
  const budgetScore = freelancer.budgetFit * 0.15;
  return Math.round(skillScore + qualityScore + ratingScore + budgetScore);
}

function evaluateProposal(proposal) {
  const relevance = proposal.message.toLowerCase().includes("dashboard") || proposal.message.toLowerCase().includes("ux") ? 91 : 76;
  const clarity = proposal.message.length > 80 ? 88 : 70;
  const value = proposal.amount <= 155000 ? 90 : 78;
  const total = Math.round((relevance + clarity + value) / 3);
  return { relevance, clarity, value, total };
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function getRoleMode() {
  return state.role === "Both" ? "Both" : state.role;
}

function renderDashboard() {
  const bestFreelancers = [...freelancers].sort((a, b) => scoreFreelancer(b) - scoreFreelancer(a)).slice(0, 3);
  const featuredClient = clients[0];
  const featuredFreelancer = bestFreelancers[0];
  const roleMode = getRoleMode();
  const isFreelancer = roleMode === "Freelancer";
  const isClient = roleMode === "Client";
  const spotlightMarkup =
    roleMode === "Client"
      ? renderDashboardFreelancerPreview(featuredFreelancer)
      : roleMode === "Freelancer"
        ? renderClientPreview(featuredClient)
        : `<div class="dashboard-both">
            <div>
              <p class="eyebrow">Client side</p>
              ${renderClientPreview(featuredClient)}
            </div>
            <div>
              <p class="eyebrow">Freelancer side</p>
              ${renderDashboardFreelancerPreview(featuredFreelancer)}
            </div>
          </div>`;
  const summaryMarkup =
    roleMode === "Client"
      ? `<div class="three-col">${bestFreelancers.map((freelancer) => renderCompactMatch(freelancer, { showMatch: true })).join("")}</div>`
      : roleMode === "Freelancer"
        ? `<div class="three-col">${clients.slice(0, 3).map(renderCompactClient).join("")}</div>`
        : `<div class="dashboard-summaries">
            <section>
              <p class="eyebrow">Clients</p>
              <div class="three-col">${clients.slice(0, 3).map(renderCompactClient).join("")}</div>
            </section>
            <section>
              <p class="eyebrow">Freelancers</p>
              <div class="three-col">${bestFreelancers.map((freelancer) => renderCompactMatch(freelancer, { showMatch: false })).join("")}</div>
            </section>
          </div>`;
  byId("dashboard").innerHTML = `
    <div class="hero hero-stage">
      <div class="hero-panel hero-copy">
        <div class="hero-copy-top">
          <p class="eyebrow">TalentStage marketplace</p>
          <h2>${isFreelancer ? "Find clients who need your skills." : isClient ? "Find freelancers who fit the brief." : "Find the right person at a glance."}</h2>
          <p>${isFreelancer ? "Focus on open briefs, top client contacts, and the fastest path to a proposal." : isClient ? "Focus on verified freelancers, project fit, and fast hiring decisions." : "A calm starting point for browsing clients, freelancers, profiles, and AI match results."}</p>
        </div>
        <div class="hero-copy-bottom">
          <div class="hero-search-row">
            <input class="searchbar hero-search" id="heroSearch" placeholder="Search clients, freelancers, projects, or budgets" value="${state.searchTerm || ""}" />
            <button class="primary-button" data-action="jump-marketplace">Search</button>
          </div>
          <div class="hero-actions">
            ${isClient ? `<button class="primary-button" data-route-to="marketplace">Browse freelancers</button>` : isFreelancer ? `<button class="primary-button" data-route-to="marketplace">Browse clients</button>` : `<button class="primary-button" data-route-to="marketplace">Browse profiles</button>`}
            <button class="ghost-button" data-route-to="ai">${isFreelancer ? "Open client match" : isClient ? "Open freelancer match" : "Open AI Studio"}</button>
          </div>
        </div>
      </div>
      <div class="hero-cinema" aria-hidden="true">
        ${renderHeroCinema(roleMode)}
      </div>
    </div>
    <div class="hero-spotlight">
      ${spotlightMarkup}
    </div>
    ${summaryMarkup}
  `;
  const heroSearch = byId("heroSearch");
  if (heroSearch) {
    heroSearch.addEventListener("input", (event) => {
      state.searchTerm = event.target.value;
      renderAll();
      navigate("marketplace");
    });
  }
}

function renderHeroCinema(roleMode) {
  const leftLabel = roleMode === "Client" ? "Trusted talent" : "Creative opportunity";
  const rightLabel = roleMode === "Freelancer" ? "Open briefs" : "Trusted delivery";
  return `
    <div class="cinema-stage">
      <div class="cinema-glow cinema-glow-left"></div>
      <div class="cinema-glow cinema-glow-right"></div>
      <div class="glass-panel glass-panel-top"></div>
      <div class="glass-panel glass-panel-bottom"></div>
      <div class="cinema-grid"></div>
      <div class="silhouette silhouette-left">
        <span class="silhouette-label">${leftLabel}</span>
        <div class="silhouette-head"></div>
        <div class="silhouette-torso"></div>
        <div class="silhouette-arm silhouette-arm-front"></div>
        <div class="silhouette-arm silhouette-arm-back"></div>
      </div>
      <div class="silhouette silhouette-right">
        <span class="silhouette-label">${rightLabel}</span>
        <div class="silhouette-head"></div>
        <div class="silhouette-torso"></div>
        <div class="silhouette-arm silhouette-arm-front"></div>
        <div class="silhouette-arm silhouette-arm-back"></div>
      </div>
      <div class="handshake-core">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="connection-arc connection-arc-left"></div>
      <div class="connection-arc connection-arc-right"></div>
      <div class="particle particle-a"></div>
      <div class="particle particle-b"></div>
      <div class="particle particle-c"></div>
    </div>
  `;
}

function renderClientPreview(client) {
  return `
    <article class="hero-preview client-preview">
      <div class="hero-preview-cover" style="${coverStyle(client)}"></div>
      <div class="hero-preview-body">
        <div class="inline-actions">
          <span class="chip">Client brief</span>
          <span class="status-badge">Hiring now</span>
        </div>
        <div class="profile-inline">
          <img class="preview-avatar" src="${client.avatar}" alt="${client.name}" />
          <div>
            <h3>${client.name}</h3>
            <p class="muted">${client.contact}</p>
          </div>
        </div>
        <p class="preview-title">${client.title}</p>
        <p>${client.needs}</p>
        <p class="muted">${client.budget}</p>
        <div class="card-actions">
          <button class="primary-button" data-action="view-client" data-name="${client.name}">Open profile</button>
          <button class="ghost-button" data-action="message" data-name="${client.name}">Message</button>
        </div>
      </div>
    </article>
  `;
}

function renderDashboardFreelancerPreview(freelancer) {
  return `
    <article class="hero-preview freelancer-preview">
      <div class="hero-preview-cover" style="${coverStyle(freelancer)}"></div>
      <div class="hero-preview-body">
        <div class="inline-actions">
          <span class="chip">${scoreFreelancer(freelancer)}% AI match</span>
          <span class="badge">Verified</span>
        </div>
        <div class="profile-inline">
          <img class="preview-avatar" src="${freelancer.avatar}" alt="${freelancer.name}" />
          <div>
            <h3>${freelancer.name}</h3>
            <p class="muted">${freelancer.title}</p>
          </div>
        </div>
        <p class="preview-title">${formatMoney(freelancer.rate)}/hr</p>
        <p>${freelancer.availability}</p>
        <div class="chips">${freelancer.skills.slice(0, 3).map((skill) => `<span class="chip">${skill}</span>`).join("")}</div>
      </div>
    </article>
  `;
}

function renderCompactMatch(freelancer, options = {}) {
  const { showMatch = true } = options;
  const hireLabel = getRoleMode() === "Client" ? "Willing to hire" : "Invite to brief";
  return `
    <article class="summary-card profile-card">
      <div class="summary-cover profile-cover" style="${coverStyle(freelancer)}"></div>
      <div class="summary-body summary-panel">
        <div class="inline-actions">
          ${showMatch ? `<span class="score">${scoreFreelancer(freelancer)}% AI match</span>` : `<span class="badge">Freelancer</span>`}
          <span class="status-badge">${freelancer.availability}</span>
        </div>
        <div class="profile-inline">
          <img class="preview-avatar summary-preview-avatar" src="${freelancer.avatar}" alt="${freelancer.name}" />
          <div>
            <h3>${freelancer.name}</h3>
            <p class="muted">${freelancer.title}</p>
          </div>
        </div>
        <p class="muted">${formatMoney(freelancer.rate)}/hr</p>
        <div class="chips">${freelancer.skills.slice(0, 3).map((skill) => `<span class="chip">${skill}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="primary-button hire-button" data-action="view-profile" data-id="${freelancer.id}">${hireLabel}</button>
          <button class="ghost-button" data-action="message" data-name="${freelancer.name}">Start chat</button>
        </div>
      </div>
    </article>
  `;
}

function renderCompactClient(client) {
  return `
    <article class="summary-card client-card" data-action="view-client" data-name="${client.name}" role="button" tabindex="0">
      <div class="summary-cover client-cover" style="${coverStyle(client)}"></div>
      <div class="summary-body summary-panel">
        <div class="inline-actions">
          <span class="chip">Client</span>
          <span class="status-badge">Open briefs</span>
        </div>
        <div class="profile-inline">
          <img class="preview-avatar summary-preview-avatar" src="${client.avatar}" alt="${client.name}" />
          <div>
            <h3>${client.name}</h3>
            <p class="muted">${client.contact}</p>
          </div>
        </div>
        <p>${client.needs}</p>
        <div class="chips">${client.projects.slice(0, 2).map((project) => `<span class="badge">${project}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="primary-button" data-action="view-client" data-name="${client.name}">Open profile</button>
          <button class="ghost-button" data-action="message" data-name="${client.name}">Message</button>
        </div>
      </div>
    </article>
  `;
}

function renderMarketplace() {
  const searchTerm = state.searchTerm || "";
  const roleMode = getRoleMode();
  byId("marketplace").innerHTML = `
    <div class="toolbar">
      <div>
        <p class="eyebrow">Marketplace</p>
        <h2>${roleMode === "Freelancer" ? "Browse clients and open briefs" : roleMode === "Client" ? "Browse freelancers and portfolios" : "Browse clients and freelancers"}</h2>
      </div>
      <input class="searchbar" id="talentSearch" placeholder="Search names, skills, services, or budgets" value="${searchTerm}" />
    </div>
    <div class="section-stack">
      ${roleMode !== "Client" ? `
      <section>
        <div class="section-heading">
          <h3>Client profiles</h3>
          <p class="muted">${roleMode === "Freelancer" ? "Client details and what they need from freelancers." : "Each profile shows a background image, contact point, and project appetite."}</p>
        </div>
        <div class="grid three-col" id="clientGrid">${clients.map(renderClientCard).join("")}</div>
      </section>` : ""}
      ${roleMode !== "Freelancer" ? `
      <section>
        <div class="section-heading">
          <h3>Freelancer profiles</h3>
          <p class="muted">${roleMode === "Client" ? "Verified freelancers and their full portfolio details." : "Search remains available for quick comparison across both sides of the marketplace."}</p>
        </div>
        <div class="grid three-col" id="freelancerGrid">${freelancers.map(renderFreelancerCard).join("")}</div>
      </section>` : ""}
    </div>
  `;
  byId("talentSearch").addEventListener("input", (event) => {
    const term = event.target.value.toLowerCase();
    state.searchTerm = event.target.value;
    const clientGrid = byId("clientGrid");
    const freelancerGrid = byId("freelancerGrid");
    if (clientGrid) {
      clientGrid.innerHTML = clients
        .filter((client) => `${client.name} ${client.contact} ${client.title} ${client.needs} ${client.budget}`.toLowerCase().includes(term))
        .map(renderClientCard)
        .join("");
    }
    if (freelancerGrid) {
      freelancerGrid.innerHTML = freelancers
        .filter((freelancer) => `${freelancer.name} ${freelancer.title} ${freelancer.skills.join(" ")} ${freelancer.availability}`.toLowerCase().includes(term))
        .map(renderFreelancerCard)
        .join("");
    }
  });
}

function renderClientCard(client) {
  return `
    <article class="client-card" data-action="view-client" data-name="${client.name}" role="button" tabindex="0">
      <div class="client-cover" style="${coverStyle(client)}"></div>
      <div class="client-body">
        <img class="client-avatar" src="${client.avatar}" alt="${client.name}" />
        <div class="inline-actions">
          <span class="chip">Client</span>
          <span class="status-badge">Open briefs</span>
        </div>
        <h3>${client.name}</h3>
        <p class="muted">${client.contact} - ${client.title}</p>
        <p>${client.needs}</p>
        <p class="muted">${client.budget}</p>
        <div class="chips">${client.projects.map((project) => `<span class="chip">${project}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="primary-button" data-action="view-client" data-name="${client.name}">Open profile</button>
          <button class="ghost-button" data-action="view-client" data-name="${client.name}">View profile</button>
        </div>
      </div>
    </article>
  `;
}

function renderFreelancerCard(freelancer) {
  const saved = state.savedFreelancers.includes(freelancer.id);
  const hireLabel = getRoleMode() === "Client" ? "Willing to hire" : "Invite to brief";
  return `
    <article class="profile-card">
      <div class="profile-cover" style="${coverStyle(freelancer)}"></div>
      <div class="profile-body">
        <img class="avatar" src="${freelancer.avatar}" alt="${freelancer.name}" />
        <div class="inline-actions">
          <span class="score">${scoreFreelancer(freelancer)}% match</span>
          <span class="status-badge">${freelancer.availability}</span>
        </div>
        <h3>${freelancer.name}</h3>
        <p>${freelancer.title}</p>
        <p class="muted">${formatMoney(freelancer.rate)}/hr - ${freelancer.rating} rating</p>
        <div class="chips">${freelancer.skills.map((skill) => `<span class="chip">${skill}</span>`).join("")}</div>
        <div class="chips">${freelancer.verified.map((badge) => `<span class="badge">${badge}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="primary-button hire-button" data-action="view-profile" data-id="${freelancer.id}">${hireLabel}</button>
          <button class="ghost-button" data-action="message" data-name="${freelancer.name}">Start chat</button>
          <button class="icon-button" title="Save freelancer" data-action="save-freelancer" data-id="${freelancer.id}">${saved ? "Saved" : "+"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  byId("projects").innerHTML = `
    <div class="toolbar">
      <div>
        <p class="eyebrow">Client and freelancer workflows</p>
        <h2>Projects, proposals, hiring</h2>
      </div>
      <button class="primary-button" data-action="post-project">Post project</button>
    </div>
    <div class="two-col">
      <div class="grid">
        ${projects.map(renderProjectCard).join("")}
      </div>
      <aside class="card">
        <h3>Proposal Evaluator</h3>
        <p class="muted">AI scores relevance, clarity, and value for money, then recommends a shortlist.</p>
        <div class="table-like">
          ${state.proposals.map(renderProposal).join("")}
        </div>
      </aside>
    </div>
  `;
}

function renderProjectCard(project) {
  return `
    <article class="project-card">
      <div class="project-body">
        <div class="inline-actions">
          <span class="status-badge">${project.status}</span>
          <span class="chip">${project.type}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="muted">${project.client} - ${formatMoney(project.budget[0])} to ${formatMoney(project.budget[1])} - Due ${project.deadline}</p>
        <div class="chips">${project.skills.map((skill) => `<span class="chip">${skill}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="primary-button" data-action="submit-proposal" data-id="${project.id}">Submit proposal</button>
          <button class="ghost-button" data-action="match-project" data-id="${project.id}">Rank freelancers</button>
          <button class="ghost-button" data-action="scope-project" data-id="${project.id}">Scope brief</button>
        </div>
      </div>
    </article>
  `;
}

function renderProposal(proposal) {
  const score = evaluateProposal(proposal);
  return `
    <div class="card">
      <div class="inline-actions">
        <strong>${proposal.freelancer}</strong>
        <span class="score">${score.total}%</span>
        <span class="chip">${proposal.status}</span>
      </div>
      <p class="muted">${formatMoney(proposal.amount)} - ${proposal.timeline}</p>
      <p>${proposal.message}</p>
      <div class="chips">
        <span class="chip">Relevance ${score.relevance}</span>
        <span class="chip">Clarity ${score.clarity}</span>
        <span class="chip">Value ${score.value}</span>
      </div>
      <button class="small-button" data-action="hire" data-name="${proposal.freelancer}">Hire</button>
    </div>
  `;
}

function renderPortfolio() {
  byId("portfolio").innerHTML = `
    <div class="toolbar">
      <div>
        <p class="eyebrow">Freelancer side</p>
        <h2>Rich portfolio profile</h2>
      </div>
      <button class="primary-button" data-action="skill-test">Generate skill test</button>
    </div>
    <div class="two-col">
      <section class="card">
        <h3>Maya Rao</h3>
        <p>Product designer helping SaaS teams turn vague workflows into fast, measurable product experiences.</p>
        <div class="form-grid">
          <label>Bio<textarea>Product designer with 5 years of experience across SaaS dashboards, UX research, and Webflow launches.</textarea></label>
          <label>Hourly rate<input class="field" value="INR 2,800/hr" /></label>
          <label>Availability<select><option>Available this week</option><option>Booked</option><option>Open next month</option></select></label>
          <label>Education<input class="field" value="B.Des, MIT Institute of Design" /></label>
          <label class="full">Work experience<textarea>Led dashboards, onboarding, and creator commerce launches for fintech and SaaS teams.</textarea></label>
        </div>
        <div class="chips">
          <span class="badge">Verified Figma Designer</span>
          <span class="badge" id="reactBadge">Verified UX Strategist</span>
        </div>
      </section>
      <aside class="card">
        <h3>Portfolio Reviewer</h3>
        <p class="muted">AI checks descriptions, outcomes, links, and category coverage.</p>
        <button class="primary-button" data-action="review-portfolio">Review portfolio</button>
        <div id="portfolioReview" class="timeline"></div>
      </aside>
    </div>
    <div class="three-col" style="margin-top:16px">
      ${portfolioProjects.map((project) => `
        <article class="card">
          <span class="chip">${project.category}</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p class="muted">${project.tools}</p>
          <a href="${project.link}" target="_blank" rel="noreferrer">Live link</a>
        </article>
      `).join("")}
    </div>
  `;
}

function renderAI() {
  byId("ai").innerHTML = `
    <div class="toolbar">
      <div>
        <p class="eyebrow">Simulated AI tools</p>
        <h2>Decision assistants for both sides</h2>
      </div>
    </div>
    <div class="three-col">
      <article class="card">
        <h3>Smart Freelancer Match</h3>
        <p class="muted">Ranks talent by skills, portfolio quality, rating, budget fit, and pro priority.</p>
        <button class="primary-button" data-action="match-project" data-id="proj1">Run match</button>
      </article>
      <article class="card">
        <h3>Project Scoping Assistant</h3>
        <textarea id="scopeText" placeholder="Example: Need a modern portfolio website for a video editor"></textarea>
        <button class="primary-button" data-action="scope-custom">Generate brief</button>
      </article>
      <article class="card">
        <h3>Skill Verifier</h3>
        <input class="field" id="skillInput" value="React" />
        <button class="primary-button" data-action="skill-test">Create test</button>
      </article>
    </div>
    <div class="card" style="margin-top:16px">
      <h3>AI output</h3>
      <div id="aiOutput" class="timeline"></div>
    </div>
  `;
}

function renderContracts() {
  byId("contracts").innerHTML = `
    <div class="toolbar">
      <div>
        <p class="eyebrow">Collaboration</p>
        <h2>Active contracts and deliverables</h2>
      </div>
    </div>
    <div class="table-like">
      ${state.contracts.map((contract, index) => `
        <article class="contract-row">
          <div>
            <span class="status-badge">${contract.status}</span>
            <h3>${contract.title}</h3>
            <p class="muted">${contract.client} hired ${contract.freelancer} - ${formatMoney(contract.value)}</p>
            <div class="timeline">
              ${contract.deliverables.map((item, itemIndex) => `
                <div>
                  <strong>${item.name}</strong>
                  <span class="chip">${item.status}</span>
                  <button class="small-button" data-action="advance-deliverable" data-contract="${index}" data-deliverable="${itemIndex}">Update</button>
                </div>
              `).join("")}
            </div>
          </div>
          <button class="primary-button" data-action="message" data-name="${contract.client}">Open chat</button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderCommunity() {
  byId("community").innerHTML = `
    <div class="toolbar">
      <div>
        <p class="eyebrow">Community</p>
        <h2>Feed, challenges, mentorship</h2>
      </div>
      <button class="primary-button" data-action="new-post">Share update</button>
    </div>
    <div class="two-col">
      <section class="grid">
        ${state.feed.map((item) => `
          <article class="feed-item">
            <header><strong>${item.by}</strong><span class="chip">${item.type}</span></header>
            <p>${item.text}</p>
            <div class="inline-actions"><button class="small-button">Appreciate</button><button class="small-button">Comment</button></div>
          </article>
        `).join("")}
      </section>
      <aside class="grid">
        <article class="card">
          <h3>Weekly skill challenge</h3>
          <p>Design a finance dashboard in Figma. Top submission gets featured on the marketplace home.</p>
          <button class="primary-button" data-action="challenge">Submit challenge</button>
        </article>
        <article class="card">
          <h3>Mentorship matching</h3>
          <p class="muted">Experienced freelancers can offer paid or free sessions.</p>
          <button class="primary-button" data-action="mentor">Find mentor</button>
        </article>
      </aside>
    </div>
  `;
}

function renderPayments() {
  const total = 180000;
  const commission = total * 0.1;
  byId("payments").innerHTML = `
    <div class="toolbar">
      <div>
        <p class="eyebrow">Sandbox payments</p>
        <h2>Milestones, commission, withdrawals, Pro</h2>
      </div>
      <button class="primary-button" data-action="pro-checkout">${state.proActive ? "Pro active" : "Upgrade to Pro"}</button>
    </div>
    <div class="three-col">
      <article class="stat"><span>Total earned</span><strong>${formatMoney(total)}</strong><p class="muted">Released milestone payments</p></article>
      <article class="stat"><span>Platform commission</span><strong>${formatMoney(commission)}</strong><p class="muted">10% per transaction</p></article>
      <article class="stat"><span>Net payout</span><strong>${formatMoney(total - commission)}</strong><p class="muted">Withdrawal simulation ready</p></article>
    </div>
    <div class="two-col" style="margin-top:16px">
      <section class="card">
        <h3>Milestone payment system</h3>
        <div class="timeline">
          <div><strong>Discovery and wireframes</strong><span class="chip">Released</span><button class="small-button">Receipt</button></div>
          <div><strong>Dashboard UI kit</strong><span class="chip">Pending approval</span><button class="small-button" data-action="release-payment">Release</button></div>
          <div><strong>Final prototype</strong><span class="chip">Not submitted</span><button class="small-button">Escrow</button></div>
        </div>
      </section>
      <aside class="card">
        <h3>Pro Freelancer subscription</h3>
        <p>Featured profile, priority in AI match, unlimited proposals, and richer analytics.</p>
        <p class="muted">Sandbox checkout only. No real money is collected.</p>
        <button class="primary-button" data-action="pro-checkout">${state.proActive ? "Manage Pro" : "Sandbox checkout"}</button>
      </aside>
    </div>
  `;
}

function openModal(title, body) {
  byId("modalContent").innerHTML = `<div class="modal-header"><h2>${title}</h2></div>${body}`;
  byId("modal").showModal();
}

function openProfileViewer(body) {
  byId("modalContent").innerHTML = body;
  byId("modal").showModal();
}

function openProfile(id) {
  const freelancer = freelancers.find((item) => item.id === id);
  openProfileViewer(`
    <div class="profile-viewer">
      <div class="profile-viewer-topbar">
        <div class="profile-ident">
          <img class="profile-viewer-avatar" src="${freelancer.avatar}" alt="${freelancer.name}" />
          <div>
            <p class="eyebrow">Freelancer profile</p>
            <h2>${freelancer.name}</h2>
            <p class="muted">${freelancer.title}</p>
          </div>
        </div>
        <div class="card-actions">
          <button class="primary-button" data-action="message" data-name="${freelancer.name}">Message</button>
          <button class="ghost-button" data-action="save-freelancer" data-id="${freelancer.id}">Save</button>
        </div>
      </div>
      <div class="profile-viewer-grid">
        <section class="card profile-panel">
          <h3>Overview</h3>
          <div class="chips">
            <span class="chip">${formatMoney(freelancer.rate)}/hr</span>
            <span class="status-badge">${freelancer.availability}</span>
            <span class="score">${scoreFreelancer(freelancer)}% fit</span>
          </div>
          <p><strong>Education:</strong> ${freelancer.education}</p>
          <p><strong>Experience:</strong> ${freelancer.experience}</p>
          <div class="chips">${freelancer.verified.map((badge) => `<span class="badge">${badge}</span>`).join("")}</div>
          <h4>Skills</h4>
          <div class="chips">${freelancer.skills.map((skill) => `<span class="chip">${skill}</span>`).join("")}</div>
        </section>
        <section class="card profile-panel">
          <h3>Projects</h3>
          <div class="project-stack">
            ${freelancer.projects.map((project) => `
              <article class="project-tile">
                <img src="${project.image}" alt="${project.title}" />
                <div>
                  <div class="inline-actions">
                    <span class="chip">${project.category}</span>
                    <span class="status-badge">${project.tools}</span>
                  </div>
                  <h4>${project.title}</h4>
                  <p>${project.summary}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      </div>
      <section class="card profile-panel">
        <h3>Reviews received</h3>
        <div class="timeline">
          ${freelancer.reviews.map((review) => `<div><strong>Client note</strong><span>${review}</span><button class="small-button">Reply</button></div>`).join("")}
        </div>
      </section>
    </div>
  `);
}

function openClientProfile(name) {
  const client = clients.find((item) => item.name === name);
  if (!client) return;
  openProfileViewer(`
    <div class="profile-viewer">
      <div class="profile-viewer-topbar">
        <div class="profile-ident">
          <img class="profile-viewer-avatar" src="${client.avatar}" alt="${client.name}" />
          <div>
            <p class="eyebrow">Client profile</p>
            <h2>${client.name}</h2>
            <p class="muted">${client.contact} - ${client.title}</p>
          </div>
        </div>
        <div class="card-actions">
          <button class="primary-button" data-action="message" data-name="${client.name}">Message</button>
          <button class="ghost-button" data-action="view-client-projects" data-name="${client.name}">Projects</button>
        </div>
      </div>
      <div class="profile-viewer-grid">
        <section class="card profile-panel">
          <h3>Client details</h3>
          <div class="chips">
            <span class="chip">${client.budget}</span>
            <span class="status-badge">Active client</span>
          </div>
          <p><strong>What they need:</strong> ${client.needs}</p>
          <p><strong>Contact person:</strong> ${client.contact}</p>
          <div class="chips">${client.projects.map((project) => `<span class="badge">${project}</span>`).join("")}</div>
        </section>
        <section class="card profile-panel">
          <h3>Open projects</h3>
          <div class="project-stack">
            ${client.projectDetails.map((project) => `
              <article class="project-tile">
                <img src="${project.image}" alt="${project.title}" />
                <div>
                  <div class="inline-actions">
                    <span class="chip">${project.status}</span>
                    <span class="status-badge">${client.name}</span>
                  </div>
                  <h4>${project.title}</h4>
                  <p>${project.description}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      </div>
      <section class="card profile-panel">
        <h3>Available buttons</h3>
        <div class="card-actions">
          <button class="primary-button" data-action="message" data-name="${client.name}">Message client</button>
          <button class="ghost-button" data-action="view-client-projects" data-name="${client.name}">See projects</button>
        </div>
      </section>
    </div>
  `);
}

function openIdentityFlow() {
  openModal(
    "Identity verification",
    `
      <p class="muted">Upload a student ID or provide LinkedIn URL. This is a UI flow simulation for hackathon judging.</p>
      <div class="form-grid">
        <label>LinkedIn URL<input class="field" id="linkedinUrl" placeholder="https://linkedin.com/in/yourname" /></label>
        <label>Student ID upload<input class="field" type="file" /></label>
        <label class="full">Role<select><option>Both</option><option>Freelancer</option><option>Client</option></select></label>
      </div>
      <button class="primary-button" data-action="verify-identity">Verify identity</button>
    `
  );
}

function proposalForm(projectId) {
  openModal(
    "Submit proposal",
    `
      <div class="form-grid">
        <label>Bid amount<input class="field" id="bidAmount" value="145000" /></label>
        <label>Timeline<input class="field" id="bidTimeline" value="4 weeks" /></label>
        <label class="full">Cover message<textarea id="bidMessage">I can deliver this with a clean discovery sprint, measurable UX improvements, and weekly demos.</textarea></label>
      </div>
      <button class="primary-button" data-action="save-proposal" data-id="${projectId}">Submit and score</button>
    `
  );
}

function postProjectForm() {
  openModal(
    "Post a project",
    `
      <div class="form-grid">
        <label>Title<input class="field" id="projectTitle" value="Landing page for creator finance app" /></label>
        <label>Project type<select id="projectType"><option>Fixed</option><option>Hourly</option></select></label>
        <label>Budget range<input class="field" id="projectBudget" value="INR 80,000 - INR 1,40,000" /></label>
        <label>Deadline<input class="field" type="date" id="projectDeadline" value="2026-06-30" /></label>
        <label class="full">Required skills<input class="field" id="projectSkills" value="Figma, Webflow, Copywriting" /></label>
        <label class="full">Description<textarea id="projectDescription">Need a polished conversion page with pricing, testimonials, onboarding flow, and mobile-first design.</textarea></label>
      </div>
      <button class="primary-button" data-action="create-project">Publish project</button>
    `
  );
}

function runMatch(projectId) {
  const project = projects.find((item) => item.id === projectId) || projects[0];
  const rows = [...freelancers]
    .sort((a, b) => scoreFreelancer(b, project) - scoreFreelancer(a, project))
    .slice(0, 5)
    .map((freelancer, index) => `
      <div>
        <strong>${index + 1}. ${freelancer.name}</strong>
        <span>${scoreFreelancer(freelancer, project)}% fit for ${project.title}. Skills: ${freelancer.skills.join(", ")}.</span>
        <button class="small-button" data-action="view-profile" data-id="${freelancer.id}">Profile</button>
      </div>
    `)
    .join("");
  openModal("Top 5 AI freelancer matches", `<div class="timeline">${rows}</div>`);
  const output = byId("aiOutput");
  if (output) output.innerHTML = rows;
}

function scopeBrief(text = "") {
  const source = text || "Build a modern freelance marketplace feature with clean hiring flows";
  const output = `
    <div><strong>Deliverables</strong><span>Discovery brief, responsive UI, proposal flow, payment milestones, review workflow.</span><button class="small-button">Add</button></div>
    <div><strong>Timeline</strong><span>Week 1 discovery, week 2 design, week 3 build, week 4 QA and launch.</span><button class="small-button">Add</button></div>
    <div><strong>Budget</strong><span>Recommended range: INR 90,000 to INR 1,60,000 for "${source.slice(0, 70)}".</span><button class="small-button">Use</button></div>
  `;
  openModal("Structured project brief", `<div class="timeline">${output}</div>`);
  const aiOutput = byId("aiOutput");
  if (aiOutput) aiOutput.innerHTML = output;
}

function skillTest() {
  const skill = byId("skillInput")?.value || "React";
  openModal(
    `${skill} Skill Verifier`,
    `
      <p class="muted">A 10-question AI-generated test is simulated here. Passing creates a verified badge.</p>
      <div class="timeline">
        <div><strong>MCQ 1</strong><span>Which pattern best prevents unnecessary re-renders?</span><button class="small-button">Answer</button></div>
        <div><strong>MCQ 2</strong><span>Choose the strongest accessibility practice for form errors.</span><button class="small-button">Answer</button></div>
        <div><strong>Practical</strong><span>Build a reusable card component with loading and empty states.</span><button class="small-button">Upload</button></div>
      </div>
      <button class="primary-button" data-action="pass-skill" data-skill="${skill}">Mark passed</button>
    `
  );
}

function bindGlobalActions() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action], [data-route-to], [data-role]");
    if (!target) return;

    if (target.dataset.routeTo) {
      navigate(target.dataset.routeTo);
      return;
    }

    if (target.dataset.role) {
      state.role = target.dataset.role;
      document.querySelectorAll(".role-pill").forEach((button) => button.classList.toggle("active", button.dataset.role === state.role));
      renderAll();
      showToast(`Role switched to ${state.role}`);
      return;
    }

    const action = target.dataset.action;
    const id = target.dataset.id;
    if (action === "toggle-nav") document.querySelector(".sidebar").classList.toggle("open");
    if (action === "open-identity") openIdentityFlow();
    if (action === "jump-marketplace") {
      state.route = "marketplace";
      state.searchTerm = byId("heroSearch")?.value || state.searchTerm;
      renderAll();
      navigate("marketplace");
      setTimeout(() => byId("talentSearch")?.focus(), 0);
    }
    if (action === "verify-identity") {
      state.identityVerified = true;
      byId("identityStatus").textContent = "Verified";
      byId("modal").close();
      showToast("Identity verified for marketplace trust.");
    }
    if (action === "view-profile") openProfile(id);
    if (action === "view-client") openClientProfile(target.dataset.name);
    if (action === "view-client-projects") openClientProfile(target.dataset.name);
    if (action === "save-freelancer") {
      if (!state.savedFreelancers.includes(id)) state.savedFreelancers.push(id);
      showToast("Freelancer saved for future work.");
      renderAll();
    }
    if (action === "message") showToast(`Message thread opened with ${target.dataset.name}.`);
    if (action === "post-project") postProjectForm();
    if (action === "create-project") {
      projects.unshift({
        id: `proj${Date.now()}`,
        title: byId("projectTitle").value,
        client: "You",
        type: byId("projectType").value,
        budget: [80000, 140000],
        deadline: byId("projectDeadline").value,
        skills: byId("projectSkills").value.split(",").map((item) => item.trim()),
        description: byId("projectDescription").value,
        status: "Open"
      });
      byId("modal").close();
      renderAll();
      showToast("Project published and ready for proposals.");
    }
    if (action === "submit-proposal") proposalForm(id);
    if (action === "save-proposal") {
      const proposal = {
        id: `p${Date.now()}`,
        projectId: id,
        freelancer: "You",
        amount: Number(byId("bidAmount").value.replace(/\D/g, "")) || 145000,
        timeline: byId("bidTimeline").value,
        message: byId("bidMessage").value,
        status: "New"
      };
      state.proposals.unshift(proposal);
      byId("modal").close();
      renderAll();
      showToast(`Proposal submitted. AI score: ${evaluateProposal(proposal).total}%.`);
    }
    if (action === "match-project") runMatch(id);
    if (action === "scope-project") scopeBrief(projects.find((project) => project.id === id)?.description);
    if (action === "scope-custom") scopeBrief(byId("scopeText").value);
    if (action === "hire") showToast(`${target.dataset.name} hired. Contract and escrow created.`);
    if (action === "skill-test") skillTest();
    if (action === "pass-skill") {
      byId("modal").close();
      showToast(`Verified ${target.dataset.skill} badge added.`);
    }
    if (action === "review-portfolio") {
      byId("portfolioReview").innerHTML = `
        <div><strong>Descriptions</strong><span>Add one more measurable outcome to CreatorKit Website.</span><button class="small-button">Fix</button></div>
        <div><strong>Links</strong><span>All projects include links. Good.</span><button class="small-button">View</button></div>
        <div><strong>Coverage</strong><span>Add one collaboration or handoff example for client confidence.</span><button class="small-button">Add</button></div>
      `;
      showToast("Portfolio review completed.");
    }
    if (action === "advance-deliverable") {
      const deliverable = state.contracts[target.dataset.contract].deliverables[target.dataset.deliverable];
      deliverable.status = deliverable.status === "In progress" ? "Submitted" : deliverable.status === "Submitted" ? "Approved" : "In progress";
      renderContracts();
      showToast(`${deliverable.name} moved to ${deliverable.status}.`);
    }
    if (action === "new-post") {
      state.feed.unshift({ by: "You", text: "Shared a new resource with the TalentStage community.", type: "Resource" });
      renderCommunity();
      showToast("Community post shared.");
    }
    if (action === "challenge") showToast("Challenge submission uploaded and queued for judging.");
    if (action === "mentor") showToast("Mentorship matches suggested based on your skills.");
    if (action === "release-payment") showToast("Sandbox milestone payment released.");
    if (action === "pro-checkout") {
      state.proActive = true;
      renderPayments();
      showToast("Pro subscription activated in sandbox mode.");
    }
  });

  window.addEventListener("hashchange", () => navigate(location.hash.replace("#", "") || "dashboard"));
}

function navigate(route) {
  state.route = route;
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active-view", view.id === route));
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.route === route));
  document.querySelector(".sidebar").classList.remove("open");
  if (location.hash.replace("#", "") !== route) location.hash = route;
}

function renderAll() {
  renderDashboard();
  renderMarketplace();
  renderProjects();
  renderPortfolio();
  renderAI();
  renderContracts();
  renderCommunity();
  renderPayments();
  navigate(state.route);
}

bindGlobalActions();
renderAll();
