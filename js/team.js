/* ================================================================
   MOKSHA MOTORSPORTS — Team Page Roster & Season State Management
   Single-page season switching (Current, 2026 Outgoing, 2025 Team)
   Dynamic rendering of CORE TEAM and TEAM MEMBERS profile cards
   ================================================================ */

const teamsData = {
  current: {
    seasonName: "2026-27 Team",
    heroSubtitle: "THE PEOPLE BEHIND THE MACHINE",
    facultyAdvisors: [
      {
        name: "Prof. K. Chelva",
        roles: ["Faculty Advisor"],
        initials: "KC",
        img: "assets/team-members/prof-chelva-img.webp",
        linkedin: "",
        instagram: "",
        email: "chelva@iitgn.ac.in"
      },
      {
        name: "Prof. Madhu Vadali",
        roles: ["Faculty Advisor"],
        initials: "MV",
        img: "assets/team-members/prof-madhu.webp",
        linkedin: "",
        instagram: "",
        email: "madhu.vadali@iitgn.ac.in"
      }
    ],
    coreTeam: [
      {
        name: "Aditya Yadav",
        roles: ["Captain", "Suspension Lead"],
        initials: "AY",
        img: "assets/team-members/adi-img.webp",
        linkedin: "https://in.linkedin.com/company/moksha-motorsports",
        instagram: "https://www.instagram.com/moksha.motorsports/",
        email: "aditya.yadav@iitgn.ac.in"
      },
      {
        name: "Rishi Pinara",
        roles: ["Vice-Captain", "PR Lead"],
        initials: "RP",
        img: "assets/team-members/rishi-img.webp",
        linkedin: "https://in.linkedin.com/company/moksha-motorsports",
        instagram: "https://www.instagram.com/moksha.motorsports/",
        email: "rishi.pinara@iitgn.ac.in"
      },
      {
        name: "Pratham Wala",
        roles: ["Vice-Captain", "Brakes Lead"],
        initials: "PW",
        img: "assets/team-members/pratham-img.webp",
        linkedin: "https://in.linkedin.com/company/moksha-motorsports",
        instagram: "https://www.instagram.com/moksha.motorsports/",
        email: "pratham.wala@iitgn.ac.in"
      },
      {
        name: "Pradnyesh Phadnis",
        roles: ["Chassis Lead"],
        initials: "PP",
        img: "assets/team-members/prady-img.webp",
        linkedin: "",
        instagram: "",
        email: "pradnyesh.phadnis@iitgn.ac.in"
      },
      {
        name: "Naitik Patel",
        roles: ["Steering Lead"],
        initials: "NP",
        img: "assets/team-members/naitik-img.webp",
        linkedin: "",
        instagram: "",
        email: "naitik.patel@iitgn.ac.in"
      },
      {
        name: "Kush Mehta",
        roles: ["Powertrain Lead"],
        initials: "KM",
        img: "assets/team-members/kush-img.webp",
        linkedin: "",
        instagram: "",
        email: "kush.mehta@iitgn.ac.in"
      },
      {
        name: "Viraat Krishna",
        roles: ["Electricals Lead"],
        initials: "VK",
        img: "assets/team-members/viraat-img.webp",
        linkedin: "",
        instagram: "",
        email: "24110016@iitgn.ac.in"
      },
      {
        name: "Vansh",
        roles: ["Finance Lead"],
        initials: "V",
        img: "assets/team-members/vansh-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Monisha Kavuri",
        roles: ["Project Planning Lead"],
        initials: "MK",
        img: "assets/team-members/monisha-img.webp",
        linkedin: "",
        instagram: "",
        email: "kavuri.monisha@iitgn.ac.in"
      },
      {
        name: "Dhruv Meshram",
        roles: [],
        initials: "DM",
        img: "assets/team-members/dhruv-meshram-img.jpeg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      }
    ],
    remainingTeam: [
      {
        name: "Dakshita Gupta",
        roles: ["Team Member"],
        initials: "DG",
        img: "assets/team-members/dakshita-img.webp",
        linkedin: "",
        instagram: "",
        email: "dakshita.gupta@iitgn.ac.in"
      },
      {
        name: "Keshav Sharma",
        roles: ["Team Member"],
        initials: "KS",
        img: "assets/team-members/keshav-img.webp",
        linkedin: "",
        instagram: "",
        email: "keshavsharma@iitgn.ac.in"
      },
      {
        name: "Manan Vaghela",
        roles: ["Chassis"],
        initials: "MV",
        img: "assets/team-members/manan-img.webp",
        linkedin: "",
        instagram: "",
        email: "manan.vaghela@iitgn.ac.in"
      },
      {
        name: "Niv Mehta",
        roles: ["Electricals"],
        initials: "NM",
        img: "assets/team-members/niv-img.webp",
        linkedin: "",
        instagram: "",
        email: "mehta.niv@iitgn.ac.in"
      },
      {
        name: "Om Malusare",
        roles: ["Brakes"],
        initials: "OM",
        img: "assets/team-members/om-m-img.webp",
        linkedin: "",
        instagram: "",
        email: "om.malusare@iitgn.ac.in"
      },
      {
        name: "Om Pawar",
        roles: ["Chassis"],
        initials: "OP",
        img: "assets/team-members/om-p-img.webp",
        linkedin: "",
        instagram: "",
        email: "om.pawar@iitgn.ac.in"
      },
      {
        name: "Pranjal Chaudhary",
        roles: ["Team Member"],
        initials: "PC",
        img: "assets/team-members/pranjal-img.webp",
        linkedin: "",
        instagram: "",
        email: "pranjalchaudhary@iitgn.ac.in"
      },
      {
        name: "Rajvansh",
        roles: ["Team Member"],
        initials: "R",
        img: "assets/team-members/rajvansh-img.webp",
        linkedin: "",
        instagram: "",
        email: "r.agarwal@iitgn.ac.in"
      },
      {
        name: "Rishi Kantharia",
        roles: ["Suspension"],
        initials: "RK",
        img: "assets/team-members/rishi-k-img.webp",
        linkedin: "",
        instagram: "",
        email: "rishi.kantharia@iitgn.ac.in"
      }
    ]
  },
  "2026": {
    seasonName: "2025-26 Team",
    heroSubtitle: "Graduating Senior Engineers & Department Mentors",
    facultyAdvisors: [
      {
        name: "Prof. K. Chelva",
        roles: ["Faculty Advisor"],
        initials: "KC",
        img: "assets/team-members/prof-chelva-img.webp",
        linkedin: "",
        instagram: "",
        email: "chelva@iitgn.ac.in"
      },
      {
        name: "Prof. Madhu Vadali",
        roles: ["Faculty Advisor"],
        initials: "MV",
        img: "assets/team-members/prof-madhu.webp",
        linkedin: "",
        instagram: "",
        email: "madhu.vadali@iitgn.ac.in"
      }
    ],
    coreTeam: [
      {
        name: "Deepak Gadhave",
        roles: ["Team Captain"],
        initials: "DG",
        img: "assets/team-members/deepak-gadhave-img.jpg",
        linkedin: "https://in.linkedin.com/company/moksha-motorsports",
        instagram: "https://www.instagram.com/moksha.motorsports/",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Kushagreek Basu",
        roles: ["Vice-Captain", "Suspension Lead", "Finance Lead"],
        initials: "KB",
        img: "assets/team-members/kushagreek-basu-img.jpg",
        linkedin: "https://in.linkedin.com/company/moksha-motorsports",
        instagram: "https://www.instagram.com/moksha.motorsports/",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Goraksh Bendale",
        roles: ["Vice-Captain", "Chassis Lead"],
        initials: "GB",
        img: "assets/team-members/goraksh-bendale-img.webp",
        linkedin: "https://in.linkedin.com/company/moksha-motorsports",
        instagram: "https://www.instagram.com/moksha.motorsports/",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Raghav Gopal Mudigonda",
        roles: ["Powertrain Lead"],
        initials: "RM",
        img: "assets/team-members/rgmg-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Ananya Balike",
        roles: ["Electricals Lead"],
        initials: "AB",
        img: "assets/team-members/ananya-balike-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Monisha Kavuri",
        roles: ["Brakes Lead"],
        initials: "MK",
        img: "assets/team-members/monisha-img.webp",
        linkedin: "",
        instagram: "",
        email: "kavuri.monisha@iitgn.ac.in"
      },
      {
        name: "Aditi Singh",
        roles: ["PR Lead"],
        initials: "AS",
        img: "assets/team-members/aditi-singh-img.JPG",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Aditya Jain",
        roles: ["Analysis Lead"],
        initials: "AJ",
        img: "assets/team-members/aditya-jain-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Apoorv Rane",
        roles: ["Steering Lead"],
        initials: "AR",
        img: "assets/team-members/apoorv-rane-img.jpeg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      }
    ],
    remainingTeam: [
      {
        name: "Aditya Yadav",
        roles: ["Powertrain"],
        initials: "AY",
        img: "assets/team-members/adi-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Rishi Pinara",
        roles: ["Suspension"],
        initials: "RP",
        img: "assets/team-members/rishi-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Pratham Wala",
        roles: ["Brakes"],
        initials: "PW",
        img: "assets/team-members/pratham-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Pradnyesh Phadnis",
        roles: ["Chassis"],
        initials: "PP",
        img: "assets/team-members/prady-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Dhruv Meshram",
        roles: ["Brakes"],
        initials: "DM",
        img: "assets/team-members/dhruv-meshram-img.jpeg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Kush Mehta",
        roles: ["Suspension"],
        initials: "KM",
        img: "assets/team-members/kush-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Viraat Krishna",
        roles: ["Electricals"],
        initials: "VK",
        img: "assets/team-members/viraat-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Abhinav",
        roles: ["Analysis"],
        initials: "A",
        img: "assets/team-members/abhinav-yadav-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Khushal Manani",
        roles: ["Analysis"],
        initials: "KM",
        img: "assets/team-members/khushal-manani-img.png",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Yada Sairam",
        roles: ["Powertrain"],
        initials: "YS",
        img: "assets/team-members/sairam-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Daksh Dave",
        roles: ["Electricals"],
        initials: "DD",
        img: "assets/team-members/daksh-dave-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Raghavpravin K S",
        roles: ["Electricals"],
        initials: "RK",
        img: "assets/team-members/raghavpravin-ks-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Afraz Azeem",
        roles: ["Chassis"],
        initials: "AA",
        img: "assets/team-members/afraz-azeem-img.png",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Kusal Sai Charan Korada",
        roles: ["Analysis"],
        initials: "KK",
        img: "assets/team-members/kusal-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Padisetti J S Srikar",
        roles: ["PR"],
        initials: "PS",
        img: "assets/team-members/srikar-padisetti-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Tejas Vijapur",
        roles: ["Suspension"],
        initials: "TV",
        img: "assets/team-members/tejas-nv-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      }
    ]
  },
  "2025": {
    seasonName: "2024-25 Team",
    heroSubtitle: "Founding Electric eV-Baja Competition Roster",
    facultyAdvisors: [
      {
        name: "Prof. K. Chelva",
        roles: ["Faculty Advisor"],
        initials: "KC",
        img: "assets/team-members/prof-chelva-img.webp",
        linkedin: "",
        instagram: "",
        email: "chelva@iitgn.ac.in"
      },
      {
        name: "Prof. Madhu Vadali",
        roles: ["Faculty Advisor"],
        initials: "MV",
        img: "assets/team-members/prof-madhu.webp",
        linkedin: "",
        instagram: "",
        email: "madhu.vadali@iitgn.ac.in"
      }
    ],
    coreTeam: [
      {
        name: "Yash Patil",
        roles: ["Captain"],
        initials: "YP",
        img: "assets/team-members/yash-patil-img.jpg",
        linkedin: "https://in.linkedin.com/company/moksha-motorsports",
        instagram: "https://www.instagram.com/moksha.motorsports/",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Tanish Phophalkar",
        roles: ["Vice Captain", "Design & Analysis Lead"],
        initials: "TP",
        img: "assets/team-members/tanish-img.jpg",
        linkedin: "https://in.linkedin.com/company/moksha-motorsports",
        instagram: "https://www.instagram.com/moksha.motorsports/",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Deepak Gadhave",
        roles: ["SSB Lead"],
        initials: "DG",
        img: "assets/team-members/deepak-gadhave-img.jpg",
        linkedin: "https://in.linkedin.com/company/moksha-motorsports",
        instagram: "https://www.instagram.com/moksha.motorsports/",
        email: "moksha.sae@iitgn.ac.in"
      }
    ],
    remainingTeam: [
      {
        name: "Kushagreek Basu",
        roles: ["Team Member"],
        initials: "KB",
        img: "assets/team-members/kushagreek-basu-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Goraksh Bendale",
        roles: ["Team Member"],
        initials: "GB",
        img: "assets/team-members/goraksh-bendale-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Ananya Balike",
        roles: ["Team Member"],
        initials: "AB",
        img: "assets/team-members/ananya-balike-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Monisha Kavuri",
        roles: ["Team Member"],
        initials: "MK",
        img: "assets/team-members/monisha-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Aditi Singh",
        roles: ["Team Member"],
        initials: "AS",
        img: "assets/team-members/aditi-singh-img.JPG",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Aditya Jain",
        roles: ["Team Member"],
        initials: "AJ",
        img: "assets/team-members/aditya-jain-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Apoorv Rane",
        roles: ["Team Member"],
        initials: "AR",
        img: "assets/team-members/apoorv-rane-img.jpeg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Raghav Gopal Mudigonda",
        roles: ["Team Member"],
        initials: "RM",
        img: "assets/team-members/rgmg-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Raghavpravin K S",
        roles: ["Team Member"],
        initials: "RK",
        img: "assets/team-members/raghavpravin-ks-img.jpg",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      },
      {
        name: "Aditya Yadav",
        roles: ["Team Member"],
        initials: "AY",
        img: "assets/team-members/adi-img.webp",
        linkedin: "",
        instagram: "",
        email: "moksha.sae@iitgn.ac.in"
      }
    ]
  }
};

let currentSelectedSeason = 'current';

document.addEventListener('DOMContentLoaded', () => {
  initSeasonSelector();
  renderSelectedSeason(currentSelectedSeason);
});

function initSeasonSelector() {
  const sidebarItems = document.querySelectorAll('.sidebar-season-item');
  const mobileSelect = document.getElementById('mobileSeasonSelect');

  // Sidebar item click handlers
  sidebarItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const season = item.dataset.season;
      switchSeason(season);
    });
  });

  // Mobile select change handler
  if (mobileSelect) {
    mobileSelect.addEventListener('change', (e) => {
      switchSeason(e.target.value);
    });
  }
}

function switchSeason(seasonKey) {
  if (!teamsData[seasonKey]) return;
  currentSelectedSeason = seasonKey;

  // Update Desktop Sidebar active states
  document.querySelectorAll('.sidebar-season-item').forEach(item => {
    if (item.dataset.season === seasonKey) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update Mobile Dropdown
  const mobileSelect = document.getElementById('mobileSeasonSelect');
  if (mobileSelect) mobileSelect.value = seasonKey;

  // Fade transition for main content
  const contentWrapper = document.getElementById('teamDynamicContent');
  if (contentWrapper) {
    contentWrapper.style.opacity = '0';
    contentWrapper.style.transform = 'translateY(10px)';

    setTimeout(() => {
      renderSelectedSeason(seasonKey);
      contentWrapper.style.opacity = '1';
      contentWrapper.style.transform = 'translateY(0)';
    }, 180);
  } else {
    renderSelectedSeason(seasonKey);
  }
}

function renderSelectedSeason(seasonKey) {
  const data = teamsData[seasonKey];

  // Update Hero Subtitle
  const subtitleElem = document.getElementById('teamHeroSubtitle');
  if (subtitleElem) subtitleElem.textContent = data.heroSubtitle;

  // Render FACULTY ADVISORY
  renderFacultyAdvisors(data.facultyAdvisors);

  // Render CORE TEAM
  renderCoreTeam(data.coreTeam);

  // Render TEAM MEMBERS (REMAINING TEAM)
  renderRemainingTeam(data.remainingTeam);
}

function renderFacultyAdvisors(facultyMembers) {
  const container = document.getElementById('facultyAdvisorsGrid');
  if (!container) return;

  if (!facultyMembers || facultyMembers.length === 0) {
    container.innerHTML = `<p class="no-members-msg">No Faculty Advisors listed for this season.</p>`;
    return;
  }

  let html = '';
  facultyMembers.forEach(member => {
    html += createMemberCardHtml(member, 'core-card');
  });

  container.innerHTML = html;
}

function renderCoreTeam(coreMembers) {
  const container = document.getElementById('coreTeamGrid');
  if (!container) return;

  if (!coreMembers || coreMembers.length === 0) {
    container.innerHTML = `<p class="no-members-msg">No Core Team members listed for this season.</p>`;
    return;
  }

  const leadership = [];
  const deptLeads = [];

  coreMembers.forEach(member => {
    const rolesStr = Array.isArray(member.roles)
      ? member.roles.join(' ').toLowerCase()
      : (member.role || '').toLowerCase();

    const isLeadership = rolesStr.includes('captain') || rolesStr.includes('vice');
    if (isLeadership) {
      leadership.push(member);
    } else {
      deptLeads.push(member);
    }
  });

  let html = '';
  if (leadership.length > 0) {
    html += `<div class="core-leadership-wrap">`;
    leadership.forEach(member => {
      html += createMemberCardHtml(member, 'core-card');
    });
    html += `</div>`;
  }

  if (deptLeads.length > 0) {
    html += `<div class="core-dept-leads-wrap">`;
    deptLeads.forEach(member => {
      html += createMemberCardHtml(member, 'core-card');
    });
    html += `</div>`;
  }

  container.innerHTML = html;
}

function renderRemainingTeam(remainingMembers) {
  const container = document.getElementById('remainingTeamGrid');
  if (!container) return;

  if (!remainingMembers || remainingMembers.length === 0) {
    container.innerHTML = `<p class="no-members-msg">No team members listed for this season.</p>`;
    return;
  }

  let html = '';
  remainingMembers.forEach(member => {
    html += createMemberCardHtml(member, 'remaining-card');
  });

  container.innerHTML = html;
}

/**
 * Reusable TeamMemberCard Component Renderer
 */
function createMemberCardHtml(member, cardClass = '') {
  const hasImg = member.img && member.img.trim() !== '';

  // Format multi-role or single role cleanly
  let rolesHtml = '';
  if (Array.isArray(member.roles) && member.roles.length > 0) {
    rolesHtml = member.roles.map(r => `<span class="member-role-badge">${escapeHtml(r)}</span>`).join('');
  } else if (member.role) {
    rolesHtml = `<span class="member-role-badge">${escapeHtml(member.role)}</span>`;
  }

  // LinkedIn Action Link or Disabled State
  const linkedinHtml = member.linkedin && member.linkedin.trim() !== ''
    ? `<a href="${escapeHtml(member.linkedin)}" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="LinkedIn profile of ${escapeHtml(member.name)}" title="LinkedIn profile of ${escapeHtml(member.name)}">
        <svg class="member-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
       </a>`
    : `<span class="social-icon-link disabled" title="LinkedIn unavailable" aria-hidden="true">
        <svg class="member-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
       </span>`;

  // Instagram Action Link or Disabled State
  const instagramHtml = member.instagram && member.instagram.trim() !== ''
    ? `<a href="${escapeHtml(member.instagram)}" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="Instagram profile of ${escapeHtml(member.name)}" title="Instagram profile of ${escapeHtml(member.name)}">
        <svg class="member-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
       </a>`
    : `<span class="social-icon-link disabled" title="Instagram unavailable" aria-hidden="true">
        <svg class="member-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
       </span>`;

  // Email Action Link or Disabled State
  const emailHtml = member.email && member.email.trim() !== ''
    ? `<a href="mailto:${escapeHtml(member.email)}" class="social-icon-link" aria-label="Send email to ${escapeHtml(member.name)}" title="Send email to ${escapeHtml(member.name)}">
        <svg class="member-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
       </a>`
    : `<span class="social-icon-link disabled" title="Email unavailable" aria-hidden="true">
        <svg class="member-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
       </span>`;

  return `
    <article class="member-card ${cardClass}" aria-label="Team Member ${escapeHtml(member.name)}">
      <div class="member-portrait-wrap">
        ${hasImg
      ? `<img src="${escapeHtml(member.img)}" alt="${escapeHtml(member.name)}" class="member-portrait" loading="lazy" />`
      : `<div class="monogram-tile"><span class="monogram-text">${escapeHtml(member.initials || 'MM')}</span></div>`
    }
        <div class="card-hover-border"></div>
      </div>
      <div class="member-info">
        <h3 class="member-name">${escapeHtml(member.name)}</h3>
        <div class="member-roles">
          ${rolesHtml}
        </div>
        <div class="member-socials">
          ${emailHtml}
        </div>
      </div>
    </article>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

