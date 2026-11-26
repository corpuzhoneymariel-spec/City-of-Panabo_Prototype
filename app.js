// Panabo City Prototype Data & Interactive Navigation
const CHARTER_SERVICES = [
  {
    id: "business-permit",
    category: "Business & Permits",
    title: "Business Permit Renewal & New Registration",
    office: "Business Permits & Licensing Office (BPLO)",
    processingTime: "1–2 Working Days",
    fees: "Based on gross sales / capital investment",
    summary: "Annual renewal and issuance of Mayor's Permit for commercial establishments in Panabo City.",
    requirements: [
      "Duly accomplished Unified Business Permit Application Form",
      "Barangay Business Clearance",
      "DTI / SEC / CDA Registration Certificate",
      "Latest Community Tax Certificate (Cedula)",
      "Fire Safety Inspection Certificate (BFP) & Sanitary Permit"
    ]
  },
  {
    id: "civil-registry",
    category: "Civil Registry",
    title: "Certified True Copy of Birth, Marriage, or Death Certificate",
    office: "Office of the City Civil Registrar",
    processingTime: "30 Minutes",
    fees: "PHP 100.00 per certified copy",
    summary: "Issuance of local civil registry documents registered in Panabo City.",
    requirements: [
      "Valid Government-Issued ID of requester",
      "Authorization letter (if representative)",
      "Document details (Full name, date, and place of event)"
    ]
  },
  {
    id: "rpt-payment",
    category: "Taxes & Treasury",
    title: "Real Property Tax (Amilyar) Assessment & Payment",
    office: "City Treasurer's Office / City Assessor's Office",
    processingTime: "20–45 Minutes",
    fees: "Per approved Tax Declaration & assessment schedule",
    summary: "Payment of annual or quarterly real property taxes and issuance of Tax Clearance.",
    requirements: [
      "Previous Official Receipt or Tax Declaration Number",
      "Valid ID of property owner or authorized representative"
    ]
  },
  {
    id: "building-permit",
    category: "Business & Permits",
    title: "Building & Occupancy Permit Application",
    office: "City Engineering Office / Office of the Building Official",
    processingTime: "5–7 Working Days",
    fees: "Assessed under National Building Code schedule",
    summary: "Review of structural, electrical, plumbing, and zoning plans for construction projects.",
    requirements: [
      "Accomplished Building Permit Application Forms",
      "Transfer Certificate of Title (TCT) or Deed of Sale",
      "5 Sets of Signed & Sealed Architectural/Engineering Plans",
      "Barangay Construction Clearance & Zoning Clearance"
    ]
  },
  {
    id: "social-assistance",
    category: "Health & Social",
    title: "Assistance to Individuals in Crisis Situation (AICS)",
    office: "City Social Welfare & Development Office (CSWDO)",
    processingTime: "1 Working Day",
    fees: "Free of charge",
    summary: "Medical, burial, educational, and emergency financial support for qualified Panaboans.",
    requirements: [
      "Barangay Certificate of Indigency",
      "Valid ID of client / claimant",
      "Medical Abstract / Hospital Bill / Funeral Contract (as applicable)"
    ]
  },
  {
    id: "health-cert",
    category: "Health & Social",
    title: "Sanitary Permit & Individual Health Certificate",
    office: "City Health Office (CHO)",
    processingTime: "1 Working Day",
    fees: "PHP 150.00",
    summary: "Health clearance and laboratory screening for food handlers and commercial workers.",
    requirements: [
      "Official Receipt from City Treasurer's Office",
      "1x1 ID Photo (2 copies)",
      "Laboratory results (Urinalysis, Stool Exam, Chest X-Ray)"
    ]
  }
];

const OFFICES = [
  {
    name: "Office of the City Mayor",
    location: "3rd Floor, New City Hall Building, Brgy. J.P. Laurel",
    hours: "Mon–Fri, 8:00 AM – 5:00 PM",
    contact: "(084) 628-5100 | mayor@panabocity.gov.ph",
    mandate: "Executive leadership, city-wide policy direction, and public service coordination."
  },
  {
    name: "Business Permits & Licensing Office (BPLO)",
    location: "Ground Floor (BOSS Wing), New City Hall Building",
    hours: "Mon–Fri, 8:00 AM – 5:00 PM",
    contact: "(084) 628-5124 | bplo@panabocity.gov.ph",
    mandate: "Business registration, Mayor's Permits, and commercial regulatory compliance."
  },
  {
    name: "Office of the City Civil Registrar",
    location: "Ground Floor, New City Hall Building",
    hours: "Mon–Fri, 8:00 AM – 5:00 PM",
    contact: "(084) 628-5118 | civilregistrar@panabocity.gov.ph",
    mandate: "Registration and certification of births, marriages, and deaths."
  },
  {
    name: "City Treasurer's Office",
    location: "Ground Floor, New City Hall Building",
    hours: "Mon–Fri, 8:00 AM – 5:00 PM",
    contact: "(084) 628-5112 | treasury@panabocity.gov.ph",
    mandate: "Collection of local taxes, fees, charges, and fiscal disbursements."
  },
  {
    name: "City Health Office (CHO)",
    location: "City Health Complex, Brgy. Gredu, Panabo City",
    hours: "Mon–Fri, 8:00 AM – 5:00 PM (24/7 Emergency Birthing)",
    contact: "(084) 628-5140 | cho@panabocity.gov.ph",
    mandate: "Primary healthcare, sanitation permits, immunization, and public health programs."
  },
  {
    name: "City Social Welfare & Development Office (CSWDO)",
    location: "Ground Floor Annex, New City Hall Building",
    hours: "Mon–Fri, 8:00 AM – 5:00 PM",
    contact: "(084) 628-5135 | cswdo@panabocity.gov.ph",
    mandate: "Social protection, senior citizen/PWD IDs, and crisis assistance programs."
  }
];

const FORMS = [
  {
    code: "BPLO-2026-01",
    title: "Unified Business Permit Application Form",
    office: "Business Permits & Licensing Office",
    format: "PDF / Fillable (2 pages)",
    notes: "Used for both new business registration and annual Mayor's Permit renewal."
  },
  {
    code: "OBO-2026-04",
    title: "Unified Application Form for Building Permit",
    office: "Office of the Building Official",
    format: "PDF (3 pages)",
    notes: "Accompanied by architectural, structural, and sanitary plan checklists."
  },
  {
    code: "CCR-2026-02",
    title: "Civil Registry Document Request Slip",
    office: "City Civil Registrar",
    format: "PDF (1 page)",
    notes: "For requesting certified copies of Birth, Marriage, or Death records."
  },
  {
    code: "FOI-2026-01",
    title: "Freedom of Information (FOI) Standard Request Form",
    office: "City Information Office",
    format: "PDF (1 page)",
    notes: "Used to formally request non-exempt public records and city datasets."
  },
  {
    code: "CSWDO-2026-03",
    title: "Senior Citizen / PWD Identification Application Form",
    office: "City Social Welfare & Development Office",
    format: "PDF (2 pages)",
    notes: "Submit with 2x2 ID photo and proof of residency in Panabo City."
  }
];

const FAQS = [
  {
    q: "Where is Panabo City Hall located and what are the office hours?",
    a: "Panabo City Hall is located at Brgy. J.P. Laurel, Panabo City, Davao del Norte. Regular government offices are open Monday to Friday from 8:00 AM to 5:00 PM, with no noon break for frontline service windows."
  },
  {
    q: "When is the deadline for annual Business Permit renewal?",
    a: "Annual renewal runs from January 2 to January 20 each year without surcharge or penalty. The Business One-Stop Shop (BOSS) operates at the City Hall Ground Floor to streamline approvals."
  },
  {
    q: "How can I avail of Real Property Tax (Amilyar) early payment discounts?",
    a: "Full-year advance payments made on or before March 31 qualify for the standard prompt payment discount under the Local Revenue Code. Bring your latest Official Receipt or Tax Declaration to the City Treasurer's Office."
  },
  {
    q: "How do I request public documents under Freedom of Information (FOI)?",
    a: "Download the FOI Standard Request Form from the Downloadable Forms section, attach a valid government ID, and submit it to the City Information Office or via email."
  },
  {
    q: "How do I apply for a Senior Citizen or PWD ID in Panabo City?",
    a: "Visit the CSWDO office with your Barangay Residency Certificate, birth certificate or valid ID showing age/medical abstract (for PWD), and two 1x1 or 2x2 ID photos."
  }
];

// Live Philippine Standard Time clock (UTC+8)
function updatePSTClock() {
  const clockEl = document.getElementById("pst-clock");
  if (!clockEl) return;
  const now = new Date();
  const formatted = new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(now);
  clockEl.textContent = `Philippine Standard Time: ${formatted}`;
}

updatePSTClock();
setInterval(updatePSTClock, 1000);

// State & Routing
const viewHome = document.getElementById("view-home");
const viewSubpage = document.getElementById("view-subpage");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveNav(route) {
  const navMap = {
    home: "home",
    "the-city": "the-city",
    government: "government",
    services: "services",
    charter: "services",
    directory: "government",
    forms: "services",
    faq: "services"
  };
  const targetNav = navMap[route] || "home";
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === targetNav);
  });
}

function navigateTo(route, options = {}) {
  setActiveNav(route);
  if (route === "home") {
    viewSubpage.hidden = true;
    viewSubpage.innerHTML = "";
    viewHome.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  viewHome.hidden = true;
  viewSubpage.hidden = false;

  if (route === "charter" || route === "services") {
    renderCharterView(options.filter || "All");
  } else if (route === "directory") {
    renderDirectoryView();
  } else if (route === "forms") {
    renderFormsView();
  } else if (route === "faq") {
    renderFaqView();
  } else if (route === "the-city") {
    renderTheCityView();
  } else if (route === "government") {
    renderGovernmentView();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function breadcrumbHtml(currentLabel) {
  return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <button type="button" data-route="home">Home</button>
      <span aria-hidden="true">/</span>
      <span>${currentLabel}</span>
    </nav>
  `;
}

// View Renderers
function renderCharterView(activeCategory = "All", searchQuery = "") {
  const categories = ["All", "Business & Permits", "Civil Registry", "Taxes & Treasury", "Health & Social"];
  const filtered = CHARTER_SERVICES.filter((item) => {
    const matchCat = activeCategory === "All" || item.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.office.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  viewSubpage.innerHTML = `
    ${breadcrumbHtml("Citizen's Charter – 2026")}
    <div class="subpage-header">
      <h1 class="subpage-title">Citizen's Charter – 2026</h1>
      <p class="subpage-desc">Browse frontline government services, responsible offices, fees, processing times, and documentary requirements.</p>
    </div>

    <div class="filter-bar">
      <div class="filter-pills" role="group" aria-label="Filter services by category">
        ${categories
          .map(
            (cat) => `
          <button type="button" class="filter-pill ${cat === activeCategory ? "is-active" : ""}" data-cat="${cat}">
            ${cat}
          </button>`
          )
          .join("")}
      </div>
      <input type="search" id="charter-filter-input" class="subpage-search" placeholder="Filter services..." value="${escapeHtml(searchQuery)}" aria-label="Filter Citizen's Charter services" />
    </div>

    <div class="list-stack">
      ${
        filtered.length
          ? filtered
              .map(
                (svc) => `
            <article class="data-card">
              <div class="data-card-main">
                <span class="data-card-tag">${svc.category}</span>
                <h2 class="data-card-title">${svc.title}</h2>
                <p class="data-card-text">${svc.summary}</p>
                <div class="data-card-meta">
                  <span><strong>Office:</strong> ${svc.office}</span>
                  <span><strong>Processing:</strong> ${svc.processingTime}</span>
                  <span><strong>Fee:</strong> ${svc.fees}</span>
                </div>
              </div>
              <button type="button" class="btn-primary" data-service-id="${svc.id}">View Requirements</button>
            </article>
          `
              )
              .join("")
          : `<p class="data-card-text">No matching services found. Try clearing your filter.</p>`
      }
    </div>
  `;

  viewSubpage.querySelectorAll("[data-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentInput = document.getElementById("charter-filter-input")?.value || "";
      renderCharterView(btn.dataset.cat, currentInput);
    });
  });

  const filterInput = document.getElementById("charter-filter-input");
  filterInput?.addEventListener("input", (e) => {
    renderCharterView(activeCategory, e.target.value);
    const refreshed = document.getElementById("charter-filter-input");
    if (refreshed) {
      refreshed.focus();
      refreshed.setSelectionRange(refreshed.value.length, refreshed.value.length);
    }
  });

  viewSubpage.querySelectorAll("[data-service-id]").forEach((btn) => {
    btn.addEventListener("click", () => openServiceModal(btn.dataset.serviceId));
  });
}

function renderDirectoryView(searchQuery = "") {
  const q = searchQuery.trim().toLowerCase();
  const filtered = OFFICES.filter(
    (o) =>
      !q ||
      o.name.toLowerCase().includes(q) ||
      o.mandate.toLowerCase().includes(q) ||
      o.location.toLowerCase().includes(q)
  );

  viewSubpage.innerHTML = `
    ${breadcrumbHtml("Office Directory")}
    <div class="subpage-header">
      <h1 class="subpage-title">Office Directory</h1>
      <p class="subpage-desc">Locate Panabo City Hall departments, service windows, office hours, and official contact lines.</p>
    </div>

    <div class="filter-bar">
      <span class="data-card-text">Showing ${filtered.length} city offices</span>
      <input type="search" id="directory-filter-input" class="subpage-search" placeholder="Search office or department..." value="${escapeHtml(searchQuery)}" aria-label="Search office directory" />
    </div>

    <div class="list-stack">
      ${filtered
        .map(
          (office) => `
        <article class="data-card">
          <div class="data-card-main">
            <h2 class="data-card-title">${office.name}</h2>
            <p class="data-card-text">${office.mandate}</p>
            <div class="data-card-meta">
              <span><strong>Location:</strong> ${office.location}</span>
              <span><strong>Hours:</strong> ${office.hours}</span>
              <span><strong>Contact:</strong> ${office.contact}</span>
            </div>
          </div>
        </article>
      `
        )
        .join("")}
    </div>
  `;

  const input = document.getElementById("directory-filter-input");
  input?.addEventListener("input", (e) => {
    renderDirectoryView(e.target.value);
    const refreshed = document.getElementById("directory-filter-input");
    if (refreshed) {
      refreshed.focus();
      refreshed.setSelectionRange(refreshed.value.length, refreshed.value.length);
    }
  });
}

function renderFormsView() {
  viewSubpage.innerHTML = `
    ${breadcrumbHtml("Downloadable Forms")}
    <div class="subpage-header">
      <h1 class="subpage-title">Downloadable Forms</h1>
      <p class="subpage-desc">Official application forms and request slips ready for printing or digital preparation before visiting City Hall.</p>
    </div>

    <div class="list-stack">
      ${FORMS.map(
        (form) => `
        <article class="data-card">
          <div class="data-card-main">
            <span class="data-card-tag">${form.code} • ${form.format}</span>
            <h2 class="data-card-title">${form.title}</h2>
            <p class="data-card-text">${form.notes}</p>
            <div class="data-card-meta">
              <span><strong>Issuing Office:</strong> ${form.office}</span>
            </div>
          </div>
          <button type="button" class="btn-primary" data-form-code="${form.code}">Preview / Download</button>
        </article>
      `
      ).join("")}
    </div>
  `;

  viewSubpage.querySelectorAll("[data-form-code]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const form = FORMS.find((f) => f.code === btn.dataset.formCode);
      if (!form) return;
      openModal(
        form.title,
        `
          <p><strong>Form Code:</strong> ${form.code}</p>
          <p><strong>Issuing Office:</strong> ${form.office}</p>
          <p><strong>Format:</strong> ${form.format}</p>
          <p>${form.notes}</p>
          <p><em>Prototype Note: In the live portal, clicking Download serves the official PDF package directly from panabocity.gov.ph.</em></p>
        `
      );
    });
  });
}

function renderFaqView() {
  viewSubpage.innerHTML = `
    ${breadcrumbHtml("Frequently Asked Questions")}
    <div class="subpage-header">
      <h1 class="subpage-title">Frequently Asked Questions</h1>
      <p class="subpage-desc">Quick answers on Panabo City public services, schedules, and requirements.</p>
    </div>

    <div class="list-stack">
      ${FAQS.map(
        (item, idx) => `
        <div class="faq-item">
          <button type="button" class="faq-trigger" aria-expanded="${idx === 0 ? "true" : "false"}">
            <span>${item.q}</span>
            <span aria-hidden="true">${idx === 0 ? "−" : "+"}</span>
          </button>
          <div class="faq-answer" ${idx === 0 ? "" : "hidden"}>${item.a}</div>
        </div>
      `
      ).join("")}
    </div>
  `;

  viewSubpage.querySelectorAll(".faq-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      trigger.querySelector("span:last-child").textContent = expanded ? "+" : "−";
      trigger.nextElementSibling.hidden = expanded;
    });
  });
}

function renderTheCityView() {
  viewSubpage.innerHTML = `
    ${breadcrumbHtml("The City")}
    <div class="subpage-header">
      <h1 class="subpage-title">About Panabo City</h1>
      <p class="subpage-desc">A thriving agro-industrial and commercial component city in Davao del Norte, Mindanao.</p>
    </div>

    <div class="info-grid">
      <article class="info-card">
        <span class="info-card-badge">Profile</span>
        <h2 class="info-card-title">Banana Capital of the Philippines</h2>
        <p class="info-card-text">
          Panabo City serves as a major agricultural export and logistics gateway in the Davao Region, home to 40 barangays and a growing urban workforce.
        </p>
      </article>
      <article class="info-card">
        <span class="info-card-badge">Invest in Panabo</span>
        <h2 class="info-card-title">Strategic Port &amp; Trade Hub</h2>
        <p class="info-card-text">
          Positioned along the Pan-Philippine Highway with international container port facilities, ideal for agri-processing, cold storage, and retail enterprises.
        </p>
      </article>
      <article class="info-card">
        <span class="info-card-badge">Contact City Hall</span>
        <h2 class="info-card-title">Visit &amp; Citizen Assistance</h2>
        <p class="info-card-text">
          New City Hall Building, Brgy. J.P. Laurel, Panabo City, Davao del Norte 8105. Public Assistance Desk: (084) 628-5100.
        </p>
      </article>
    </div>
  `;
}

function renderGovernmentView() {
  viewSubpage.innerHTML = `
    ${breadcrumbHtml("Government & Transparency")}
    <div class="subpage-header">
      <h1 class="subpage-title">City Government &amp; Transparency</h1>
      <p class="subpage-desc">Local leadership, open governance portals, and public accountability disclosures.</p>
    </div>

    <div class="list-stack">
      <article class="data-card">
        <div class="data-card-main">
          <span class="data-card-tag">Transparency Seal</span>
          <h2 class="data-card-title">Full Disclosure Policy &amp; City Budget</h2>
          <p class="data-card-text">Annual budget allocations, quarterly financial statements, IRA utilization, and procurement plans.</p>
        </div>
        <button type="button" class="btn-secondary" data-route="forms">FOI &amp; Disclosure Forms</button>
      </article>
      <article class="data-card">
        <div class="data-card-main">
          <span class="data-card-tag">Freedom of Information</span>
          <h2 class="data-card-title">FOI People's Manual &amp; Public Records</h2>
          <p class="data-card-text">Procedures for requesting official city records, executive orders, and Sangguniang Panlungsod ordinances.</p>
        </div>
        <button type="button" class="btn-primary" data-route="directory">Find City Offices</button>
      </article>
      <article class="data-card">
        <div class="data-card-main">
          <span class="data-card-tag">Bagong Pilipinas</span>
          <h2 class="data-card-title">Frontline Public Service Standards</h2>
          <p class="data-card-text">Committed to responsive, transparent, and citizen-first local governance across all Panabo City offices.</p>
        </div>
        <button type="button" class="btn-secondary" data-route="charter">View Citizen's Charter</button>
      </article>
    </div>
  `;
}

// Modal helpers
const modalBackdrop = document.getElementById("detail-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

function openModal(title, htmlContent) {
  modalTitle.textContent = title;
  modalBody.innerHTML = htmlContent;
  modalBackdrop.hidden = false;
  document.getElementById("modal-close").focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
}

function openServiceModal(serviceId) {
  const svc = CHARTER_SERVICES.find((s) => s.id === serviceId);
  if (!svc) return;
  openModal(
    svc.title,
    `
      <p><strong>Responsible Office:</strong> ${svc.office}</p>
      <p><strong>Processing Time:</strong> ${svc.processingTime}</p>
      <p><strong>Applicable Fee:</strong> ${svc.fees}</p>
      <p><strong>Checklist of Requirements:</strong></p>
      <ul>
        ${svc.requirements.map((req) => `<li>${req}</li>`).join("")}
      </ul>
    `
  );
}

document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-close-footer").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

// Global Search on Home
const searchInput = document.getElementById("global-search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const searchResultsPanel = document.getElementById("search-results-panel");

function buildSearchIndex() {
  const entries = [];
  CHARTER_SERVICES.forEach((s) =>
    entries.push({
      type: "Citizen's Charter",
      title: s.title,
      desc: `${s.office} • ${s.processingTime}`,
      action: () => {
        navigateTo("charter");
        openServiceModal(s.id);
      }
    })
  );
  OFFICES.forEach((o) =>
    entries.push({
      type: "Office Directory",
      title: o.name,
      desc: o.location,
      action: () => navigateTo("directory")
    })
  );
  FORMS.forEach((f) =>
    entries.push({
      type: "Downloadable Form",
      title: f.title,
      desc: `${f.code} • ${f.office}`,
      action: () => navigateTo("forms")
    })
  );
  FAQS.forEach((faq) =>
    entries.push({
      type: "FAQ",
      title: faq.q,
      desc: faq.a.slice(0, 95) + "...",
      action: () => navigateTo("faq")
    })
  );
  return entries;
}

const SEARCH_INDEX = buildSearchIndex();

function renderGlobalSearch(query) {
  const q = query.trim().toLowerCase();
  searchClearBtn.hidden = q.length === 0;
  if (!q) {
    searchResultsPanel.hidden = true;
    searchResultsPanel.innerHTML = "";
    return;
  }

  const matches = SEARCH_INDEX.filter(
    (entry) => entry.title.toLowerCase().includes(q) || entry.desc.toLowerCase().includes(q) || entry.type.toLowerCase().includes(q)
  ).slice(0, 8);

  searchResultsPanel.hidden = false;
  if (!matches.length) {
    searchResultsPanel.innerHTML = `<div class="search-result-item"><span class="search-result-desc">No matching government information for "${escapeHtml(query)}".</span></div>`;
    return;
  }

  searchResultsPanel.innerHTML = matches
    .map(
      (m, i) => `
      <button type="button" class="search-result-item" data-search-idx="${i}">
        <span class="search-result-meta">${m.type}</span>
        <span class="search-result-title">${escapeHtml(m.title)}</span>
        <span class="search-result-desc">${escapeHtml(m.desc)}</span>
      </button>
    `
    )
    .join("");

  searchResultsPanel.querySelectorAll("[data-search-idx]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.searchIdx);
      searchResultsPanel.hidden = true;
      matches[idx].action();
    });
  });
}

searchInput.addEventListener("input", (e) => renderGlobalSearch(e.target.value));
searchClearBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderGlobalSearch("");
  searchInput.focus();
});
document.getElementById("global-search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  renderGlobalSearch(searchInput.value);
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) {
    searchResultsPanel.hidden = true;
  }
});

// Delegated navigation clicks across header, quick cards, footer, and breadcrumbs
document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-route]");
  if (!target) return;
  if (target.tagName === "A") e.preventDefault();
  navigateTo(target.dataset.route, { filter: target.dataset.filter });
});

// Accessibility toggles
const btnTextSize = document.getElementById("btn-text-size");
const btnContrast = document.getElementById("btn-contrast");

btnTextSize.addEventListener("click", () => {
  const active = document.body.classList.toggle("large-text");
  btnTextSize.setAttribute("aria-pressed", String(active));
});

btnContrast.addEventListener("click", () => {
  const active = document.body.classList.toggle("high-contrast");
  btnContrast.setAttribute("aria-pressed", String(active));
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

