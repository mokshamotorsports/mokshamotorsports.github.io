/* ================================================================
   MOKSHA MOTORSPORTS — Partners Page Data & Renderer Architecture
   Data-Driven Tier System: Powered By, Title, Platinum, Technical, Software, Past
   ================================================================ */

const tiersConfig = [
  {
    id: "powered-by",
    title: "INSTITUTIONAL SUPPORTER",
    layout: "full",
    cardClass: "powered-by-card",
    partners: [
      {
        name: "IIT Gandhinagar",
        logo: "assets/iitgn-logo.png",
        website: "https://www.iitgn.ac.in"
      }
    ]
  },
  {
    id: "platinum-sponsor",
    title: "PLATINUM SPONSOR",
    layout: "full",
    cardClass: "platinum-sponsor-card",
    partners: [
      {
        name: "Spark Minda Foundation",
        logo: "assets/smf-logo.png",
        website: "https://sparkminda.com"
      }
    ]
  },
  {
    id: "gold-sponsor",
    title: "GOLD SPONSOR",
    layout: "full",
    cardClass: "gold-sponsor-card",
    partners: [
      {
        name: "Gujarat Tourism",
        logo: "assets/gt-logo.png",
        website: "https://www.gujarattourism.com"
      }
    ]
  },
  {
    id: "associate-partners",
    title: "ASSOCIATE PARTNERS",
    layout: "2-up",
    cardClass: "associate-partner-card",
    partners: [
      {
        name: "BKT",
        logo: "assets/bkt-logo.svg",
        website: "https://www.bkt-tires.com"
      },
      {
        name: "Dassault Systèmes",
        logo: "assets/ds-logo.svg",
        website: "https://www.3ds.com"
      },
      {
        name: "Ansys",
        logo: "assets/ansys-logo.svg",
        website: "https://www.ansys.com"
      },
      {
        name: "Maker Bhavan",
        logo: "assets/AMKER BHAVAN.png",
        website: "https://iitgn.ac.in"
      }
    ]
  },
  {
    id: "past-sponsors",
    title: "PAST SPONSORS",
    layout: "register",
    cardClass: "past-sponsor-card",
    partners: [
      {
        name: "Autodesk",
        logo: "assets/autodesk-logo.svg",
        website: ""
      },
      {
        name: "White Carbon",
        logo: "assets/wcm-logo.png",
        website: ""
      },
      {
        name: "Namtech",
        logo: "assets/ft-logo.webp",
        website: ""
      },
      {
        name: "Ashok Leyland",
        logo: "assets/ashok-leyland.svg",
        website: ""
      },
      {
        name: "Pima Controls",
        logo: "assets/pima-logo.svg",
        website: ""
      },
      {
        name: "DIC IITGN",
        logo: "assets/DIC IITGN.png",
        website: ""
      }
    ]
  }
];

const sponsorshipDeckConfig = {
  title: "Moksha Motorsports Sponsorship Deck",
  file: "assets/moksha-motorsports-brochure.pdf",
  downloadName: "Moksha_Motorsports_Sponsorship_Deck.pdf"
};

document.addEventListener('DOMContentLoaded', () => {
  renderPartnersPage();
  initDeckModal();
});

function initDeckModal() {
  const fullscreenBtn = document.getElementById('fullscreenDeckBtn');
  const openModalBtn = document.getElementById('openDeckModalBtn');
  const closeModalBtn = document.getElementById('closeDeckModalBtn');
  const modal = document.getElementById('deckModal');
  const backdrop = document.querySelector('.deck-modal-backdrop');
  const iframe = document.getElementById('modalPdfFrame');

  function openModal() {
    if (!modal) return;
    if (iframe && (!iframe.src || iframe.src === 'about:blank' || iframe.src.endsWith('.html'))) {
      iframe.src = `${sponsorshipDeckConfig.file}#toolbar=1&navpanes=1`;
    }
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (fullscreenBtn) fullscreenBtn.addEventListener('click', openModal);
  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function renderPartnersPage() {
  const wrapper = document.getElementById('partnersTierWrapper');
  if (!wrapper) return;

  let html = '';
  tiersConfig.forEach(tier => {
    html += createTierSectionHtml(tier);
  });

  wrapper.innerHTML = html;
}

function createTierSectionHtml(tier) {
  const isPast = tier.id === 'past-sponsors';
  let gridClass = `${tier.id}-grid`;

  if (tier.layout === '3-up') gridClass += ' grid-3-up';
  else if (tier.layout === '2-up') gridClass += ' grid-2-up';
  else if (tier.layout === 'register') gridClass += ' grid-register';
  else gridClass += ' grid-full';

  let partnersHtml = '';
  tier.partners.forEach(partner => {
    partnersHtml += createPartnerTileHtml(partner, tier.cardClass, isPast);
  });

  return `
    <section class="partner-tier-section ${tier.id}-section" aria-label="${escapeHtml(tier.title)}">
      <div class="partner-tier-container container">
        <div class="tier-header">
          <h2 class="tier-title">${escapeHtml(tier.title)}</h2>
        </div>
        <div class="tier-grid ${gridClass}">
          ${partnersHtml}
        </div>
      </div>
    </section>
  `;
}

function createPartnerTileHtml(partner, cardClass = '', isPast = false) {
  const hasLogo = partner.logo && partner.logo.trim() !== '';
  const hasUrl = partner.website && partner.website.trim() !== '';

  const tileInner = `
    <div class="partner-tile-inner">
      <div class="partner-logo-area">
        ${hasLogo
      ? `<img src="${escapeHtml(partner.logo)}" alt="${escapeHtml(partner.name)} Logo" class="partner-logo-img" loading="lazy" />`
      : `<div class="partner-placeholder-tile">
              <span class="placeholder-name">${escapeHtml(partner.name)}</span>
              <span class="placeholder-badge">// LOGO PLACEHOLDER</span>
             </div>`
    }
      </div>
      <span class="partner-tag">${escapeHtml(partner.name)}</span>
      <div class="card-hover-border"></div>
    </div>
  `;

  if (hasUrl && !isPast) {
    return `
      <a href="${escapeHtml(partner.website)}" target="_blank" rel="noopener noreferrer" class="partner-card ${cardClass}" aria-label="Visit ${escapeHtml(partner.name)} website">
        ${tileInner}
      </a>
    `;
  }

  return `
    <div class="partner-card ${cardClass}">
      ${tileInner}
    </div>
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
