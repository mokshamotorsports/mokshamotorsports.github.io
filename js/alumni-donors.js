/* ================================================================
   MOKSHA MOTORSPORTS — Alumni Donors Page Data & Renderer
   Data-driven recognition system for alumni financial supporters.
   ================================================================ */

/**
 * Alumni Donors Dataset
 * Note:
 * - 'donation' field is used ONLY for computing the aggregate total contribution.
 * - Individual donation amounts are never displayed publicly.
 * - To add a new alumnus: add an object with name, photo, linkedin, graduationYear (optional), degree (optional), and donation.
 */
const alumniDonors = [
  {
    name: "Puneet Swami",
    photo: "",
    linkedin: "https://www.linkedin.com/in/puneet-swami/",
    graduationYear: "2019",
    degree: "B.Tech Civil Engineering",
    donation: 80000
  },
  {
    name: "Akhilesh Ravi",
    photo: "",
    linkedin: "https://www.linkedin.com/in/akhileshravi/",
    graduationYear: "2020",
    degree: "B.Tech Dual Major (CSE & EE)",
    donation: 40000
  },
  {
    name: "Saksham Singal",
    photo: "",
    linkedin: "https://www.linkedin.com/in/saksham-singal/",
    graduationYear: "2019",
    degree: "B.Tech Mechanical Engineering",
    donation: 20000
  },
  {
    name: "Ankit Agarwal",
    photo: "",
    linkedin: "https://www.linkedin.com/in/ankit-agarwal-a369257a/",
    graduationYear: "2017",
    degree: "B.Tech Mechanical Engineering",
    donation: 10000
  },
  {
    name: "Jaydeep Kakadiya",
    photo: "",
    linkedin: "https://www.linkedin.com/in/jaydeep-kakadiya-4a5822171/",
    graduationYear: "2022",
    degree: "B.Tech Mechanical Engineering",
    donation: 10000
  },
  {
    name: "Narendra Saraswat",
    photo: "",
    linkedin: "",
    graduationYear: "",
    degree: "IIT Gandhinagar Alumnus",
    donation: 10000
  },
  {
    name: "Saurav Nagar",
    photo: "",
    linkedin: "https://www.linkedin.com/in/sauravnagar/",
    graduationYear: "2019",
    degree: "B.Tech Mechanical Engineering",
    donation: 5000
  }
];

/**
 * Alumni Donation Target Configuration
 */
const donationTarget = 200000; // Official alumni donation target: ₹2,00,000 (2 Lacs)

document.addEventListener('DOMContentLoaded', () => {
  renderAlumniDonorsPage();
});

/**
 * Calculates and formats the total aggregate contributions from alumni.
 */
function calculateTotalDonation(donors) {
  if (!Array.isArray(donors) || donors.length === 0) return 0;
  return donors.reduce((sum, donor) => {
    const val = Number(donor.donation);
    return sum + (isNaN(val) ? 0 : val);
  }, 0);
}

/**
 * Formats currency to INR with standard Indian notation (e.g. ₹1,75,000)
 */
function formatCurrency(amount) {
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  } catch (e) {
    return `₹${Number(amount).toLocaleString('en-IN')}`;
  }
}

/**
 * Renders the total summary progress bar and donor grid.
 */
function renderAlumniDonorsPage() {
  // 1. Animate Progress Bar and Stats
  animateProgressBarAndStats();

  // 2. Render Donor Cards Grid
  const gridWrapper = document.getElementById('alumniGridWrapper');
  if (!gridWrapper) return;

  if (!Array.isArray(alumniDonors) || alumniDonors.length === 0) {
    gridWrapper.innerHTML = `
      <div class="alumni-empty-state">
        <div class="empty-state-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h3 class="empty-state-title">OUR ALUMNI SUPPORT</h3>
        <p class="empty-state-desc">
          Our alumni continue to be an invaluable foundation of the Moksha journey, supporting our team from the workshop to the race track.
        </p>
      </div>
    `;
    return;
  }

  let cardsHtml = '';
  alumniDonors.forEach(alumnus => {
    cardsHtml += createAlumniCardHtml(alumnus);
  });

  gridWrapper.innerHTML = cardsHtml;
}

/**
 * Handles smooth animated filling of progress bar and count-up of stats
 */
function animateProgressBarAndStats() {
  const totalDonations = calculateTotalDonation(alumniDonors);
  const target = donationTarget > 0 ? donationTarget : 1;
  const rawPercentage = (totalDonations / target) * 100;
  const progressPercentage = Math.min(rawPercentage, 100);

  const fillEl = document.getElementById('alumniProgressBarFill');
  const raisedEl = document.getElementById('alumniTotalAmount');
  const targetEl = document.getElementById('alumniTargetAmount');
  const percentageEl = document.getElementById('alumniProgressPercentage');
  const goalTextEl = document.getElementById('alumniProgressGoalText');
  const trackEl = document.getElementById('alumniProgressBarTrack');

  // Accessibility attributes
  if (trackEl) {
    trackEl.setAttribute('aria-valuenow', Math.round(progressPercentage));
    trackEl.setAttribute('aria-valuetext', `${formatCurrency(totalDonations)} raised of ${formatCurrency(donationTarget)} target`);
  }

  if (targetEl) {
    targetEl.textContent = formatCurrency(donationTarget);
  }
  if (goalTextEl) {
    goalTextEl.textContent = `of ${formatCurrency(donationTarget)} target`;
  }

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    if (fillEl) fillEl.style.width = `${progressPercentage}%`;
    if (raisedEl) raisedEl.textContent = formatCurrency(totalDonations);
    if (percentageEl) percentageEl.textContent = `${rawPercentage % 1 === 0 ? rawPercentage.toFixed(0) : rawPercentage.toFixed(1)}%`;
    return;
  }

  // Initial 0% state for animation start
  if (fillEl) fillEl.style.width = '0%';
  if (raisedEl) raisedEl.textContent = formatCurrency(0);
  if (percentageEl) percentageEl.textContent = '0%';

  // Trigger progress fill animation
  setTimeout(() => {
    if (fillEl) {
      fillEl.style.width = `${progressPercentage}%`;
    }
  }, 100);

  // Number & Percentage count-up animation
  const duration = 1800; // 1.8s
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progressRatio = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progressRatio, 3); // easeOutCubic

    const currentRaised = Math.round(totalDonations * easedProgress);
    const currentPercent = rawPercentage * easedProgress;

    if (raisedEl) {
      raisedEl.textContent = formatCurrency(currentRaised);
    }
    if (percentageEl) {
      percentageEl.textContent = `${currentPercent % 1 === 0 ? currentPercent.toFixed(0) : currentPercent.toFixed(1)}%`;
    }

    if (progressRatio < 1) {
      requestAnimationFrame(step);
    } else {
      if (raisedEl) raisedEl.textContent = formatCurrency(totalDonations);
      if (percentageEl) percentageEl.textContent = `${rawPercentage % 1 === 0 ? rawPercentage.toFixed(0) : rawPercentage.toFixed(1)}%`;
    }
  }

  requestAnimationFrame(step);
}

/**
 * Generates single Alumni Card HTML
 */
function createAlumniCardHtml(alumnus) {
  const name = escapeHtml(alumnus.name || 'Anonymous Alumnus');
  const hasPhoto = alumnus.photo && alumnus.photo.trim() !== '';
  const photoUrl = hasPhoto ? escapeHtml(alumnus.photo) : '';
  const linkedinUrl = alumnus.linkedin ? escapeHtml(alumnus.linkedin) : '';
  const gradYear = alumnus.graduationYear ? escapeHtml(alumnus.graduationYear) : '';
  const degree = alumnus.degree ? escapeHtml(alumnus.degree) : '';

  // Avatar Fallback SVG
  const fallbackAvatar = `
    <div class="alumni-avatar-placeholder" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </div>
  `;

  const photoMarkup = hasPhoto
    ? `<img src="${photoUrl}" alt="${name}" class="alumni-photo" loading="lazy" onerror="this.onerror=null; this.parentElement.innerHTML=\`${fallbackAvatar}\`;" />`
    : fallbackAvatar;

  const metaMarkup = (gradYear || degree)
    ? `<p class="alumni-card-meta">${gradYear ? `Class of ${gradYear}` : ''}${gradYear && degree ? ' • ' : ''}${degree}</p>`
    : '';

  const linkedinMarkup = linkedinUrl
    ? `<a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="alumni-linkedin-link" aria-label="View ${name}'s LinkedIn profile">
        <svg class="linkedin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
        <span>LINKEDIN</span>
        <span class="arrow">↗</span>
       </a>`
    : '';

  return `
    <article class="alumni-card">
      <div class="alumni-photo-wrapper">
        ${photoMarkup}
      </div>
      <div class="alumni-card-content">
        <h3 class="alumni-card-name">${name}</h3>
        ${metaMarkup}
        ${linkedinMarkup}
      </div>
    </article>
  `;
}

/**
 * Utility to escape HTML strings preventing XSS
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
