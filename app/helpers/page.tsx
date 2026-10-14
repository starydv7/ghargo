"use client";

import { useState } from "react";
import "./helpers.css";

type Helper = {
  id: number;
  name: string;
  category: string;
  area: string;
  location: string;
  rating: string;
  reviews: number;
  price: number;
  experience: number;
  specialties: string;
  languages: string;
  photo: string;
  gender: "Female" | "Male";
  availability: "Full-Time" | "Part-Time" | "Live-In" | "Flexible";
};

type Filters = {
  categories: string[];
  location: string;
  experience: number;
  salary: number;
  availability: string[];
  gender: string[];
};

const helpers: Helper[] = [
  {
    id: 1,
    name: "Priya Sharma",
    category: "Maid",
    area: "Indiranagar",
    location: "Indiranagar, Bangalore",
    rating: "4.9",
    reviews: 128,
    price: 18000,
    experience: 3,
    specialties: "Cleaning, Laundry",
    languages: "Hindi, English",
    photo: "/images/helpers/priya-sharma.jpg",
    gender: "Female",
    availability: "Full-Time",
  },
  {
    id: 2,
    name: "Anjali Verma",
    category: "Cook",
    area: "Koramangala",
    location: "Koramangala, Bangalore",
    rating: "4.8",
    reviews: 96,
    price: 20000,
    experience: 5,
    specialties: "North & South Indian",
    languages: "Hindi, English, Kannada",
    photo: "/images/helpers/anjali-verma.jpg",
    gender: "Female",
    availability: "Full-Time",
  },
  {
    id: 3,
    name: "Sneha Iyer",
    category: "Babysitter",
    area: "Whitefield",
    location: "Whitefield, Bangalore",
    rating: "4.9",
    reviews: 142,
    price: 16000,
    experience: 4,
    specialties: "Babysitting, Childcare",
    languages: "English, Tamil, Hindi",
    photo: "/images/helpers/sneha-iyer.jpg",
    gender: "Female",
    availability: "Part-Time",
  },
  {
    id: 4,
    name: "Meera Nair",
    category: "Elder Care",
    area: "HSR Layout",
    location: "HSR Layout, Bangalore",
    rating: "4.8",
    reviews: 110,
    price: 22000,
    experience: 6,
    specialties: "Elder Care, Companionship",
    languages: "Hindi, Malayalam, English",
    photo: "/images/helpers/meera-nair.jpg",
    gender: "Female",
    availability: "Live-In",
  },
  {
    id: 5,
    name: "Kavya Reddy",
    category: "Driver",
    area: "Marathahalli",
    location: "Marathahalli, Bangalore",
    rating: "4.7",
    reviews: 88,
    price: 19000,
    experience: 5,
    specialties: "City Driving, Family Trips",
    languages: "English, Hindi, Telugu",
    photo: "/images/helpers/kavya-reddy.jpg",
    gender: "Female",
    availability: "Full-Time",
  },
  {
    id: 6,
    name: "Ritika Singh",
    category: "Housekeeping",
    area: "Bellandur",
    location: "Bellandur, Bangalore",
    rating: "4.9",
    reviews: 134,
    price: 17000,
    experience: 3,
    specialties: "Housekeeping, Laundry",
    languages: "Hindi, Bengali",
    photo: "/images/helpers/ritika-singh.jpg",
    gender: "Female",
    availability: "Flexible",
  },
];

const workerCategories = [
  { name: "Maid", count: 124, icon: "maid" },
  { name: "Cook", count: 98, icon: "cook" },
  { name: "Babysitter", count: 76, icon: "baby" },
  { name: "Nanny", count: 62, icon: "nanny" },
  { name: "Elder Care", count: 51, icon: "elder" },
  { name: "Driver", count: 43, icon: "driver" },
  { name: "Patient Care", count: 38, icon: "care" },
  { name: "Housekeeping", count: 67, icon: "home" },
];

const availabilityOptions = [
  { name: "Full-Time", count: 180, icon: "clock" },
  { name: "Part-Time", count: 92, icon: "clock" },
  { name: "Live-In", count: 64, icon: "home" },
  { name: "Flexible", count: 74, icon: "clock" },
];

const genderOptions = [
  { name: "Female", count: 228, icon: "female" },
  { name: "Male", count: 56, icon: "male" },
  { name: "Any", count: 284, icon: "people" },
];

const areas = [
  "Indiranagar",
  "Koramangala",
  "Whitefield",
  "HSR Layout",
  "Marathahalli",
  "Bellandur",
];

const pills = [
  "Maid",
  "Cook",
  "Babysitter",
  "Nanny",
  "Elder Care",
  "Driver",
  "Patient Care",
  "Housekeeping",
  "Part-time",
  "Full-time",
];

const emptyFilters: Filters = {
  categories: [],
  location: "",
  experience: 0,
  salary: 50000,
  availability: [],
  gender: [],
};

function formatRupees(amount: number) {
  return `₹${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function Icon({ name }: { name: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "sliders":
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
          <circle cx="8" cy="7" r="2.2" fill="#fff" />
          <circle cx="15" cy="12" r="2.2" fill="#fff" />
          <circle cx="10" cy="17" r="2.2" fill="#fff" />
        </svg>
      );
    case "search":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16.5 20 20.5" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      );
    case "grid":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" />
          <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" />
          <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" />
          <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" />
        </svg>
      );
    case "list":
      return (
        <svg {...props}>
          <path d="M8 7h12M8 12h12M8 17h12" />
          <circle cx="4.5" cy="7" r="1" fill="currentColor" />
          <circle cx="4.5" cy="12" r="1" fill="currentColor" />
          <circle cx="4.5" cy="17" r="1" fill="currentColor" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9Z" />
        </svg>
      );
    case "heart-fill":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9Z"
            fill="currentColor"
          />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="m12 3.2 2.4 5.2 5.6.7-4.1 3.8 1.1 5.6L12 15.8 7 18.5l1.1-5.6L4 9.1l5.6-.7L12 3.2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "check":
      return (
        <svg {...props} strokeWidth={2.6}>
          <path d="M5 12.5 9.2 17 19 7" />
        </svg>
      );
    case "funnel":
      return (
        <svg {...props}>
          <path d="M4 6h16l-6 7v5l-4 2v-7L4 6Z" />
        </svg>
      );
    case "maid":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3" />
          <path d="M6.5 19c.8-3 2.8-4.5 5.5-4.5S16.7 16 17.5 19" />
        </svg>
      );
    case "cook":
      return (
        <svg {...props}>
          <path d="M8 10h8v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8Z" />
          <path d="M9 10c0-3 6-3 6 0M8 13h8" />
        </svg>
      );
    case "baby":
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="3.2" />
          <path d="M8 19c.6-2.4 2-3.6 4-3.6s3.4 1.2 4 3.6" />
          <path d="M9.2 8.2 8 6.2M14.8 8.2 16 6.2" />
        </svg>
      );
    case "nanny":
      return (
        <svg {...props}>
          <circle cx="9" cy="9" r="2.4" />
          <circle cx="16" cy="10" r="2" />
          <path d="M5.5 18c.5-2.4 2-3.6 3.8-3.6 1.5 0 2.6.7 3.2 1.8" />
          <path d="M13.2 18c.4-1.8 1.4-2.8 3-2.8 1.4 0 2.5.8 3 2.8" />
        </svg>
      );
    case "elder":
      return (
        <svg {...props}>
          <circle cx="12" cy="8.5" r="2.8" />
          <path d="M7 19c.7-3 2.4-4.5 5-4.5s4.3 1.5 5 4.5" />
          <path d="M9 8.2c.6-1.6 4.4-1.6 5 0" />
        </svg>
      );
    case "driver":
      return (
        <svg {...props}>
          <path d="M4 14h16v4H4z" />
          <path d="M6 14l2-4h8l2 4" />
          <circle cx="7.5" cy="18" r="1.3" />
          <circle cx="16.5" cy="18" r="1.3" />
        </svg>
      );
    case "care":
      return (
        <svg {...props}>
          <path d="M12 20s-6-3.6-6-8a3.4 3.4 0 0 1 6-2 3.4 3.4 0 0 1 6 2c0 4.4-6 8-6 8Z" />
          <path d="M12 9.5v5M9.5 12h5" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M4 11.5 12 5l8 6.5" />
          <path d="M7 10.8V19h10v-8.2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 8.5V12l2.5 2" />
        </svg>
      );
    case "female":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3" />
          <path d="M12 11v8M9.5 16h5" />
        </svg>
      );
    case "male":
      return (
        <svg {...props}>
          <circle cx="10" cy="14" r="4" />
          <path d="M13 11 19 5M15 5h4v4" />
        </svg>
      );
    case "people":
      return (
        <svg {...props}>
          <circle cx="9" cy="9" r="2.3" />
          <circle cx="16" cy="10" r="1.8" />
          <path d="M4.8 18c.6-2.5 2.2-3.8 4.2-3.8s3.5 1.2 4.1 3.4" />
          <path d="M13.5 18c.3-1.6 1.3-2.6 2.8-2.6 1.3 0 2.3.7 2.8 2.4" />
        </svg>
      );
    case "seal":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="m12 2.8 1.8 1.7 2.4-.4 1 2.2 2.2 1-.4 2.4L21.2 12l-1.7 1.8.4 2.4-2.2 1-1 2.2-2.4-.4L12 21.2l-1.8-1.7-2.4.4-1-2.2-2.2-1 .4-2.4L2.8 12l1.7-1.8-.4-2.4 2.2-1 1-2.2 2.4.4L12 2.8Z"
            fill="currentColor"
          />
          <path d="m8.6 12.2 2.2 2.2 4.6-4.8" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function CheckRow({
  label,
  count,
  icon,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  icon: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className={`check-row ${checked ? "is-checked" : ""}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="check-box" aria-hidden="true">
        {checked ? <Icon name="check" /> : null}
      </span>
      <span className={`row-icon icon-${icon}`}>
        <Icon name={icon} />
      </span>
      <span className="row-label">{label}</span>
      <span className="row-count">{count}</span>
    </label>
  );
}

function HelperCard({
  helper,
  onOpen,
}: {
  helper: Helper;
  onOpen: (helper: Helper) => void;
}) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="helper-card">
      <div className="helper-photo">
        <img src={helper.photo} alt={`${helper.name}, ${helper.category}`} />

        <div className="photo-badges">
          <span className="status-badge">
            <i /> Available Today
          </span>
          <span className="verified-badge">
            <Icon name="seal" /> Verified
          </span>
        </div>

        <button
          type="button"
          className={`favorite-button ${favorite ? "is-favorite" : ""}`}
          onClick={() => setFavorite((value) => !value)}
          aria-label={favorite ? `Remove ${helper.name} from favorites` : `Save ${helper.name}`}
        >
          <Icon name={favorite ? "heart-fill" : "heart"} />
        </button>

        <button className="image-arrow image-arrow-left" type="button" aria-label="Previous photo">
          ‹
        </button>
        <button className="image-arrow image-arrow-right" type="button" aria-label="Next photo">
          ›
        </button>

        <div className="photo-bottom-info">
          <span className="rating-pill">
            <Icon name="star" /> {helper.rating} ({helper.reviews})
          </span>
          <span className="location-pill">
            <Icon name="pin" /> {helper.location}
          </span>
        </div>

        <div className="image-indicators" aria-hidden="true">
          <span className="active" />
          <span />
          <span />
        </div>
      </div>

      <div className="helper-card-content">
        <div className="helper-heading">
          <div>
            <h2>{helper.name}</h2>
            <p>{helper.experience}+ Years Experience</p>
          </div>
          <div className="helper-price">
            <strong>{formatRupees(helper.price)}</strong>
            <span>per month</span>
          </div>
        </div>

        <div className="chip-row">
          <button className="chip-arrow" type="button" aria-label="Previous details">
            ‹
          </button>
          <div className="helper-details">
            <div className="detail-chip">
              <span className="detail-icon teal">
                <Icon name="clock" />
              </span>
              <div>
                <strong>Experience</strong>
                <span>{helper.experience}+ years</span>
              </div>
            </div>
            <div className="detail-chip">
              <span className="detail-icon coral">
                <Icon name="star" />
              </span>
              <div>
                <strong>Specialties</strong>
                <span>{helper.specialties}</span>
              </div>
            </div>
            <div className="detail-chip">
              <span className="detail-icon blue">文</span>
              <div>
                <strong>Languages</strong>
                <span>{helper.languages}</span>
              </div>
            </div>
          </div>
          <button className="chip-arrow" type="button" aria-label="Next details">
            ›
          </button>
        </div>

        <button className="view-details-button" type="button" onClick={() => onOpen(helper)}>
          View Details <span>→</span>
        </button>
      </div>
    </article>
  );
}

export default function ExploreHelpersPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("relevant");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selected, setSelected] = useState<Helper | null>(null);
  const [draft, setDraft] = useState<Filters>({ ...emptyFilters, categories: ["Maid"] });
  const [applied, setApplied] = useState<Filters>(emptyFilters);

  function toggleDraft(key: "categories" | "availability" | "gender", value: string) {
    setDraft((current) => {
      const list = current[key];
      const next = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
      return { ...current, [key]: next };
    });
  }

  function toggleLive(key: "categories" | "availability", value: string) {
    const list = draft[key];
    const nextList = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
    const next = { ...draft, [key]: nextList };
    setDraft(next);
    setApplied(next);
  }

  function selectCategory(name: string) {
    const nextCategories = draft.categories.length === 1 && draft.categories[0] === name ? [] : [name];
    const next = { ...draft, categories: nextCategories };
    setDraft(next);
    setApplied(next);
  }

  function setBoth(patch: Partial<Filters>) {
    setDraft((current) => ({ ...current, ...patch }));
    setApplied((current) => ({ ...current, ...patch }));
  }

  function resetFilters() {
    setSearch("");
    setSort("relevant");
    setDraft(emptyFilters);
    setApplied(emptyFilters);
  }

  const visibleHelpers = helpers
    .filter((helper) => {
      const text = `${helper.name} ${helper.category} ${helper.location} ${helper.specialties} ${helper.languages}`.toLowerCase();
      const genderOk =
        applied.gender.length === 0 ||
        applied.gender.includes("Any") ||
        applied.gender.includes(helper.gender);

      return (
        (!search || text.includes(search.toLowerCase())) &&
        (applied.categories.length === 0 || applied.categories.includes(helper.category)) &&
        (!applied.location || helper.area === applied.location || helper.location.toLowerCase().includes(applied.location.toLowerCase())) &&
        helper.experience >= applied.experience &&
        helper.price <= applied.salary &&
        (applied.availability.length === 0 || applied.availability.includes(helper.availability)) &&
        genderOk
      );
    })
    .sort((a, b) => {
      if (sort === "rating") return Number(b.rating) - Number(a.rating);
      if (sort === "price") return a.price - b.price;
      if (sort === "experience") return b.experience - a.experience;
      return a.id - b.id;
    });

  const filtersClear =
    !search &&
    applied.categories.length === 0 &&
    !applied.location &&
    applied.experience === 0 &&
    applied.salary >= 50000 &&
    applied.availability.length === 0 &&
    applied.gender.length === 0;

  const resultCount = filtersClear ? 284 : visibleHelpers.length;
  const heroCategory = applied.categories.length === 1 ? applied.categories[0] : "";

  return (
    <main className="explore-page">
      <aside className={`filter-sidebar ${mobileFiltersOpen ? "mobile-open" : ""}`}>
        <div className="filter-header">
          <h2>
            <Icon name="sliders" /> Filters
          </h2>
          <button type="button" onClick={resetFilters}>
            Clear All
          </button>
        </div>

        <section className="filter-section">
          <h3>Worker Category</h3>
          {workerCategories.map((category) => (
            <CheckRow
              key={category.name}
              label={category.name}
              count={category.count}
              icon={category.icon}
              checked={draft.categories.includes(category.name)}
              onChange={() => toggleDraft("categories", category.name)}
            />
          ))}
        </section>

        <section className="filter-section">
          <h3>
            <Icon name="pin" /> Location
          </h3>
          <label className="sidebar-select">
            <select
              value={draft.location}
              onChange={(event) => setDraft((current) => ({ ...current, location: event.target.value }))}
            >
              <option value="">Select Area</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="filter-section">
          <div className="filter-label-row">
            <h3>Experience</h3>
            <span>0 - 10+ years</span>
          </div>
          <input
            className="range-input"
            type="range"
            min="0"
            max="10"
            value={draft.experience}
            style={{ ["--pct" as string]: `${(draft.experience / 10) * 100}%` }}
            onChange={(event) =>
              setDraft((current) => ({ ...current, experience: Number(event.target.value) }))
            }
            aria-label="Minimum years of experience"
          />
        </section>

        <section className="filter-section">
          <h3>Salary Range (₹/month)</h3>
          <input
            className="range-input"
            type="range"
            min="5000"
            max="50000"
            step="1000"
            value={draft.salary}
            style={{ ["--pct" as string]: `${((draft.salary - 5000) / 45000) * 100}%` }}
            onChange={(event) =>
              setDraft((current) => ({ ...current, salary: Number(event.target.value) }))
            }
            aria-label="Maximum monthly salary"
          />
          <div className="range-labels">
            <span>₹5,000</span>
            <span>₹50,000+</span>
          </div>
        </section>

        <section className="filter-section">
          <h3>Availability</h3>
          {availabilityOptions.map((option) => (
            <CheckRow
              key={option.name}
              label={option.name}
              count={option.count}
              icon={option.icon}
              checked={draft.availability.includes(option.name)}
              onChange={() => toggleDraft("availability", option.name)}
            />
          ))}
        </section>

        <section className="filter-section">
          <h3>Gender</h3>
          {genderOptions.map((option) => (
            <CheckRow
              key={option.name}
              label={option.name}
              count={option.count}
              icon={option.icon}
              checked={draft.gender.includes(option.name)}
              onChange={() => toggleDraft("gender", option.name)}
            />
          ))}
        </section>

        <button
          className="apply-filters-button"
          type="button"
          onClick={() => {
            setApplied(draft);
            setMobileFiltersOpen(false);
          }}
        >
          <Icon name="funnel" /> Apply Filters
        </button>
      </aside>

      {mobileFiltersOpen ? (
        <button
          className="filter-backdrop"
          type="button"
          aria-label="Close filters"
          onClick={() => setMobileFiltersOpen(false)}
        />
      ) : null}

      <section className="explore-content">
        <header className="explore-hero">
          <div className="hero-copy">
            <h1>
              Find Trusted <span>Home Helpers</span>
            </h1>
            <p>Professional. Verified. Reliable. Book the right helper for your home.</p>

            <form className="helper-search" onSubmit={(event) => event.preventDefault()}>
              <label className="search-field">
                <Icon name="search" />
                <input
                  placeholder="Search for maid, cook, babysitter..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>
              <label className="search-select">
                <Icon name="pin" />
                <select
                  value={applied.location}
                  onChange={(event) => setBoth({ location: event.target.value })}
                >
                  <option value="">Select Location</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </label>
              <label className="search-select">
                <Icon name="grid" />
                <select
                  value={heroCategory}
                  onChange={(event) =>
                    setBoth({ categories: event.target.value ? [event.target.value] : [] })
                  }
                >
                  <option value="">Select Category</option>
                  {workerCategories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
              <button className="search-submit" type="submit">
                <Icon name="search" /> Search
              </button>
            </form>

            <div className="category-pills">
              {pills.map((pill) => {
                const availability =
                  pill === "Part-time" ? "Part-Time" : pill === "Full-time" ? "Full-Time" : "";
                const selected = availability
                  ? applied.availability.includes(availability)
                  : applied.categories.includes(pill);

                return (
                  <button
                    key={pill}
                    type="button"
                    className={selected ? "selected" : ""}
                    onClick={() =>
                      availability ? toggleLive("availability", availability) : selectCategory(pill)
                    }
                  >
                    {pill}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hero-art">
            <img src="/images/helpers/hero-banner.jpg" alt="Trusted home helper in a green uniform" />
            <div className="hero-art-label">
              <strong>Trusted Helpers</strong>
              <small>For A Better Home</small>
            </div>
          </div>
        </header>

        <div className="results-toolbar">
          <div className="results-title">
            <h2>{resultCount} Helpers Found</h2>
            <p>Verified • Background Checked • Trained Professionals</p>
          </div>
          <div className="results-actions">
            <button
              className="mobile-filter-toggle"
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <Icon name="sliders" /> Filters
            </button>
            <label className="sort-control">
              <span>Sort by:</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="relevant">Most Relevant</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
                <option value="experience">Most Experienced</option>
              </select>
            </label>
            <div className="view-toggle">
              <button
                type="button"
                className={view === "grid" ? "active" : ""}
                aria-label="Grid view"
                onClick={() => setView("grid")}
              >
                <Icon name="grid" />
              </button>
              <button
                type="button"
                className={view === "list" ? "active" : ""}
                aria-label="List view"
                onClick={() => setView("list")}
              >
                <Icon name="list" />
              </button>
            </div>
          </div>
        </div>

        {visibleHelpers.length ? (
          <div className={`helper-grid ${view === "list" ? "is-list" : ""}`}>
            {visibleHelpers.map((helper) => (
              <HelperCard key={helper.id} helper={helper} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <span>
              <Icon name="search" />
            </span>
            <h2>No helpers found</h2>
            <p>Try changing your search or filters.</p>
            <button type="button" onClick={resetFilters}>
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {selected ? (
        <div className="details-modal" role="dialog" aria-modal="true" aria-labelledby="helper-dialog-title">
          <button className="details-backdrop" type="button" aria-label="Close details" onClick={() => setSelected(null)} />
          <div className="details-card">
            <img src={selected.photo} alt="" />
            <div className="details-copy">
              <p className="details-kicker">{selected.category} • {selected.availability}</p>
              <h2 id="helper-dialog-title">{selected.name}</h2>
              <p>{selected.location}</p>
              <ul>
                <li>Rating {selected.rating} from {selected.reviews} reviews</li>
                <li>{selected.experience}+ years of experience</li>
                <li>Specialties: {selected.specialties}</li>
                <li>Languages: {selected.languages}</li>
                <li>{formatRupees(selected.price)} per month</li>
              </ul>
              <button type="button" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
