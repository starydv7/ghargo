
"use client";

import { useState } from "react";
import "./register.css";

type FormData = {
  fullName: string;
  mobile: string;
  age: string;
  gender: string;
  city: string;
  area: string;
  address: string;
  services: string[];
  experience: string;
  languages: string[];
  availability: string;
  workType: string;
  expectedEarning: string;
  hasDocuments: string;
  consent: boolean;
};

const initialForm: FormData = {
  fullName: "",
  mobile: "",
  age: "",
  gender: "",
  city: "Patna",
  area: "",
  address: "",
  services: [],
  experience: "",
  languages: ["Hindi"],
  availability: "",
  workType: "Both",
  expectedEarning: "",
  hasDocuments: "",
  consent: false,
};

const steps = [
  { title: "Your details", hint: "आपके बारे में" },
  { title: "Your work", hint: "आप कौन-सा काम करते हैं?" },
  { title: "Work location", hint: "आप कहाँ काम करेंगे?" },
  { title: "Work & earnings", hint: "काम का समय और कमाई" },
  { title: "Review", hint: "सब कुछ सही है?" },
];

const serviceOptions = [
  { name: "Home cleaning", hindi: "घर की सफाई", icon: "🏠" },
  { name: "Cooking", hindi: "खाना बनाना", icon: "🍲" },
  { name: "Elderly care", hindi: "बुजुर्गों की देखभाल", icon: "🤝" },
  { name: "Baby care", hindi: "बच्चों की देखभाल", icon: "👶" },
  { name: "Nursing care", hindi: "नर्सिंग की देखभाल", icon: "🩺" },
  { name: "Laundry & ironing", hindi: "कपड़े धोना और प्रेस", icon: "👕" },
  { name: "Dishwashing", hindi: "बर्तन धोना", icon: "🫧" },
  { name: "Other household work", hindi: "दूसरा घरेलू काम", icon: "🧹" },
];

const experienceOptions = [
  "No experience yet",
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "More than 5 years",
];

const earningOptions = [
  "₹5,000–₹10,000",
  "₹10,000–₹15,000",
  "₹15,000–₹20,000",
  "₹20,000+",
];

export default function WorkerRegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors([]);
  };

  const toggleOption = (
    key: "services" | "languages",
    value: string
  ) => {
    setForm((current) => {
      const selected = current[key];
      const updated = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value];

      return { ...current, [key]: updated };
    });
    setErrors([]);
  };

  const validateStep = () => {
    const nextErrors: string[] = [];

    if (step === 0) {
      if (form.fullName.trim().length < 2) {
        nextErrors.push("Please enter your full name.");
      }
      if (!/^[6-9]\d{9}$/.test(form.mobile)) {
        nextErrors.push("Enter a valid 10-digit Indian mobile number.");
      }
      if (!form.age || Number(form.age) < 18 || Number(form.age) > 100) {
        nextErrors.push("Workers must be at least 18 years old.");
      }
      if (!form.gender) {
        nextErrors.push("Please select an option for gender.");
      }
    }

    if (step === 1) {
      if (form.services.length === 0) {
        nextErrors.push("Please choose at least one service.");
      }
      if (!form.experience) {
        nextErrors.push("Please select your work experience.");
      }
    }

    if (step === 2) {
      if (!form.city.trim()) nextErrors.push("Please enter your city.");
      if (!form.area.trim()) nextErrors.push("Please enter your area or locality.");
    }

    if (step === 3) {
      if (!form.availability) {
        nextErrors.push("Please select when you are available to work.");
      }
      if (!form.workType) {
        nextErrors.push("Please select your preferred work type.");
      }
      if (!form.expectedEarning) {
        nextErrors.push("Please select your expected monthly earnings.");
      }
      if (!form.hasDocuments) {
        nextErrors.push("Please tell us whether you have identity documents.");
      }
    }

    if (step === 4 && !form.consent) {
      nextErrors.push("Please confirm that your information is correct.");
    }

    setErrors(nextErrors);
    return nextErrors.length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousStep = () => {
    setErrors([]);
    setStep((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitRegistration = () => {
    if (!validateStep()) return;

    // UI demo only: connect this handler to your registration API.
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <main className="worker-register">
        <div className="registration-success">
          <div className="success-icon">✓</div>
          <p className="eyebrow">GHARGO WORKER REGISTRATION</p>
          <h1>You’re one step closer!</h1>
          <p className="success-copy">
            Thank you, {form.fullName}. Your registration details are ready.
            Once the server submission and verification process is connected,
            you’ll be able to track your application here.
          </p>
          <div className="success-summary">
            <div>
              <span>Registered mobile</span>
              <strong>+91 {form.mobile}</strong>
            </div>
            <div>
              <span>Services selected</span>
              <strong>{form.services.length} service(s)</strong>
            </div>
            <div>
              <span>Current demo status</span>
              <strong>Not submitted to server</strong>
            </div>
          </div>
          <button
            className="primary-button"
            onClick={() => {
              setForm(initialForm);
              setStep(0);
              setSubmitted(false);
              setErrors([]);
            }}
          >
            Start again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="worker-register">
      <div className="register-shell">
        <aside className="register-aside">
          <a href="/" className="register-brand" aria-label="GharGo home">
            <span className="brand-mark">G</span>
            <span>GharGo</span>
          </a>

          <div className="aside-content">
            <span className="aside-pill">
              <span className="live-dot" /> WORK WITH GHARGO
            </span>
            <h1>
              Your skills.
              <br />
              Your work.
              <br />
              <span>Your future.</span>
            </h1>
            <p>
              Find work near your home, choose services you know, and build
              a better future with GharGo.
            </p>

            <div className="aside-benefits">
              <div className="benefit">
                <span className="benefit-icon">✓</span>
                <div>
                  <strong>Simple registration</strong>
                  <small>Easy steps, clear questions</small>
                </div>
              </div>
              <div className="benefit">
                <span className="benefit-icon">⌂</span>
                <div>
                  <strong>Work near you</strong>
                  <small>Share your preferred location</small>
                </div>
              </div>
              <div className="benefit">
                <span className="benefit-icon">₹</span>
                <div>
                  <strong>Know your earnings</strong>
                  <small>Tell us your work preferences</small>
                </div>
              </div>
            </div>
          </div>

          <div className="aside-footer">
            <span>Made for people who make homes better.</span>
            <span>© GharGo</span>
          </div>
        </aside>

        <section className="register-main">
          <div className="mobile-brand">
            <a href="/" className="register-brand">
              <span className="brand-mark">G</span>
              <span>GharGo</span>
            </a>
            <span className="mobile-help">Worker registration</span>
          </div>

          <div className="form-topline">
            <div>
              <span className="step-kicker">
                STEP {step + 1} OF {steps.length}
              </span>
              <div className="progress-track" aria-label={`Step ${step + 1} of ${steps.length}`}>
                {steps.map((item, index) => (
                  <span
                    key={item.title}
                    className={`progress-segment ${
                      index <= step ? "is-complete" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="time-estimate">About 3–5 minutes</span>
          </div>

          <div className="form-heading">
            <p className="eyebrow">LET’S GET YOU STARTED</p>
            <h2>{steps[step].title}</h2>
            <p className="heading-hindi">{steps[step].hint}</p>
            <p className="heading-description">
              {step === 0 && "Tell us a little about yourself."}
              {step === 1 && "Choose the work you can do confidently."}
              {step === 2 && "Help us find work close to you."}
              {step === 3 && "Tell us when you can work and what you expect to earn."}
              {step === 4 && "Check your details before continuing."}
            </p>
          </div>

          {errors.length > 0 && (
            <div className="form-errors" role="alert">
              <strong>Please check the following:</strong>
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="form-content">
            {step === 0 && (
              <div className="form-step">
                <label className="field-label" htmlFor="fullName">
                  What is your full name? <span>*</span>
                  <small>आपका पूरा नाम</small>
                </label>
                <input
                  id="fullName"
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                />

                <label className="field-label" htmlFor="mobile">
                  Mobile number <span>*</span>
                  <small>आपका मोबाइल नंबर</small>
                </label>
                <div className="phone-input">
                  <span>🇮🇳 +91</span>
                  <input
                    id="mobile"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={form.mobile}
                    onChange={(e) =>
                      update("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                  />
                </div>
                <p className="field-help">
                  We’ll use this number to contact you about work. OTP
                  verification will be connected to the backend.
                </p>

                <div className="field-row">
                  <div>
                    <label className="field-label" htmlFor="age">
                      Your age <span>*</span>
                      <small>आपकी उम्र</small>
                    </label>
                    <input
                      id="age"
                      type="number"
                      inputMode="numeric"
                      min="18"
                      max="100"
                      placeholder="Age"
                      value={form.age}
                      onChange={(e) => update("age", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="gender">
                      Gender <span>*</span>
                      <small>लिंग</small>
                    </label>
                    <select
                      id="gender"
                      value={form.gender}
                      onChange={(e) => update("gender", e.target.value)}
                    >
                      <option value="">Choose</option>
                      <option value="Woman">Woman</option>
                      <option value="Man">Man</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <div className="privacy-note">
                  <span>🔒</span>
                  <p>
                    Your personal details are used for registration and
                    verification. They won’t be shown publicly on your profile.
                  </p>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="form-step">
                <p className="field-label">
                  What work can you do? <span>*</span>
                  <small>आप कौन-कौन से काम कर सकते हैं? एक से ज़्यादा चुन सकते हैं।</small>
                </p>
                <div className="service-grid">
                  {serviceOptions.map((service) => {
                    const selected = form.services.includes(service.name);
                    return (
                      <button
                        type="button"
                        key={service.name}
                        className={`service-option ${selected ? "selected" : ""}`}
                        aria-pressed={selected}
                        onClick={() => toggleOption("services", service.name)}
                      >
                        <span className="service-icon">{service.icon}</span>
                        <span className="service-name">{service.name}</span>
                        <small>{service.hindi}</small>
                        <span className="option-check">{selected ? "✓" : "+"}</span>
                      </button>
                    );
                  })}
                </div>

                <label className="field-label" htmlFor="experience">
                  How much experience do you have? <span>*</span>
                  <small>आपको इस काम का कितना अनुभव है?</small>
                </label>
                <select
                  id="experience"
                  value={form.experience}
                  onChange={(e) => update("experience", e.target.value)}
                >
                  <option value="">Choose your experience</option>
                  {experienceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <p className="field-help">
                  It’s okay if you are new. Choose “No experience yet” if
                  you are just starting.
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <div className="location-callout">
                  <span className="location-icon">⌖</span>
                  <div>
                    <strong>Let’s find work close to home</strong>
                    <p>
                      Enter your area so customers nearby can find suitable
                      services.
                    </p>
                  </div>
                </div>

                <label className="field-label" htmlFor="city">
                  City or town <span>*</span>
                  <small>शहर या कस्बा</small>
                </label>
                <input
                  id="city"
                  autoComplete="address-level2"
                  placeholder="e.g. Patna"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                />

                <label className="field-label" htmlFor="area">
                  Area or locality <span>*</span>
                  <small>आपका मोहल्ला या इलाका</small>
                </label>
                <input
                  id="area"
                  autoComplete="address-level3"
                  placeholder="e.g. Kankarbagh"
                  value={form.area}
                  onChange={(e) => update("area", e.target.value)}
                />

                <label className="field-label" htmlFor="address">
                  Full address <span className="optional">(Optional)</span>
                  <small>पूरा पता</small>
                </label>
                <textarea
                  id="address"
                  autoComplete="street-address"
                  rows={3}
                  placeholder="House number, street or nearby landmark"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                />
                <p className="field-help">
                  Your exact home address should remain private. You can
                  provide more details later if needed.
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <p className="field-label">
                  When can you work? <span>*</span>
                  <small>आप कब काम कर सकते हैं?</small>
                </p>
                <div className="choice-list">
                  {[
                    ["Full-time", "रोज़ाना पूरा समय"],
                    ["Part-time", "कुछ घंटे"],
                    ["Weekends", "शनिवार और रविवार"],
                    ["Flexible", "समय के अनुसार"],
                  ].map(([value, hint]) => (
                    <button
                      type="button"
                      key={value}
                      className={`choice-option ${form.availability === value ? "selected" : ""}`}
                      aria-pressed={form.availability === value}
                      onClick={() => update("availability", value)}
                    >
                      <span className="choice-radio">
                        {form.availability === value && <span />}
                      </span>
                      <span>
                        <strong>{value}</strong>
                        <small>{hint}</small>
                      </span>
                    </button>
                  ))}
                </div>

                <p className="field-label">
                  What type of work do you prefer? <span>*</span>
                  <small>आप किस तरह का काम चाहते हैं?</small>
                </p>
                <div className="choice-list two-column">
                  {[
                    ["At customer's home", "ग्राहक के घर पर"],
                    ["Live-in", "ग्राहक के घर रहकर"],
                    ["Both", "दोनों"],
                  ].map(([value, hint]) => (
                    <button
                      type="button"
                      key={value}
                      className={`choice-option ${form.workType === value ? "selected" : ""}`}
                      aria-pressed={form.workType === value}
                      onClick={() => update("workType", value)}
                    >
                      <span className="choice-radio">
                        {form.workType === value && <span />}
                      </span>
                      <span>
                        <strong>{value}</strong>
                        <small>{hint}</small>
                      </span>
                    </button>
                  ))}
                </div>

                <label className="field-label" htmlFor="earning">
                  Expected monthly earnings <span>*</span>
                  <small>आप महीने में कितनी कमाई चाहते हैं?</small>
                </label>
                <select
                  id="earning"
                  value={form.expectedEarning}
                  onChange={(e) => update("expectedEarning", e.target.value)}
                >
                  <option value="">Choose an earning range</option>
                  {earningOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <p className="field-help">
                  This is your preference, not a guaranteed salary. Actual
                  earnings depend on services, hours, bookings, and agreed rates.
                </p>

                <p className="field-label">
                  Do you have an identity document? <span>*</span>
                  <small>क्या आपके पास पहचान पत्र है?</small>
                </p>
                <div className="choice-list two-column">
                  {["Yes", "Not yet"].map((value) => (
                    <button
                      type="button"
                      key={value}
                      className={`choice-option ${form.hasDocuments === value ? "selected" : ""}`}
                      aria-pressed={form.hasDocuments === value}
                      onClick={() => update("hasDocuments", value)}
                    >
                      <span className="choice-radio">
                        {form.hasDocuments === value && <span />}
                      </span>
                      <span>
                        <strong>{value}</strong>
                        <small>{value === "Yes" ? "हाँ, मेरे पास है" : "अभी नहीं है"}</small>
                      </span>
                    </button>
                  ))}
                </div>
                <p className="field-help">
                  You do not need to upload a document on this screen.
                  The team can explain the next verification step.
                </p>
              </div>
            )}

            {step === 4 && (
              <div className="form-step">
                <div className="review-banner">
                  <span>✓</span>
                  <div>
                    <strong>Almost done!</strong>
                    <p>Check your information before continuing.</p>
                  </div>
                </div>

                <ReviewSection
                  title="Personal details"
                  onEdit={() => setStep(0)}
                >
                  <ReviewRow label="Full name" value={form.fullName} />
                  <ReviewRow label="Mobile" value={`+91 ${form.mobile}`} />
                  <ReviewRow label="Age" value={form.age} />
                  <ReviewRow label="Gender" value={form.gender} />
                </ReviewSection>

                <ReviewSection title="Work details" onEdit={() => setStep(1)}>
                  <ReviewRow label="Services" value={form.services.join(", ")} />
                  <ReviewRow label="Experience" value={form.experience} />
                </ReviewSection>

                <ReviewSection title="Location" onEdit={() => setStep(2)}>
                  <ReviewRow label="City" value={form.city} />
                  <ReviewRow label="Area" value={form.area} />
                  {form.address && <ReviewRow label="Address" value={form.address} />}
                </ReviewSection>

                <ReviewSection title="Availability & earnings" onEdit={() => setStep(3)}>
                  <ReviewRow label="Availability" value={form.availability} />
                  <ReviewRow label="Work preference" value={form.workType} />
                  <ReviewRow label="Expected earnings" value={form.expectedEarning} />
                  <ReviewRow label="Identity document" value={form.hasDocuments} />
                </ReviewSection>

                <label className="consent-row">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                  />
                  <span>
                    I confirm that the information above is correct and agree
                    that GharGo may contact me about registration and work
                    opportunities.
                    <small>मैं पुष्टि करता/करती हूँ कि दी गई जानकारी सही है।</small>
                  </span>
                </label>
              </div>
            )}
          </div>

          <div className="form-actions">
            {step > 0 ? (
              <button className="secondary-button" onClick={previousStep}>
                <span aria-hidden="true">←</span> Back
              </button>
            ) : (
              <span className="step-start-note">Let’s do this together.</span>
            )}

            {step < steps.length - 1 ? (
              <button className="primary-button" onClick={nextStep}>
                Continue <span aria-hidden="true">→</span>
              </button>
            ) : (
              <button className="primary-button" onClick={submitRegistration}>
                Finish registration <span aria-hidden="true">✓</span>
              </button>
            )}
          </div>

          <p className="form-support">
            Need help filling this form? Ask a family member or contact the
            GharGo support team.
          </p>
        </section>
      </div>
    </main>
  );
}

function ReviewSection({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="review-section">
      <div className="review-section-heading">
        <h3>{title}</h3>
        <button type="button" onClick={onEdit}>Edit</button>
      </div>
      <div className="review-rows">{children}</div>
    </section>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="review-row">
      <span>{label}</span>
      <strong>{value || "Not provided"}</strong>
    </div>
  );
}
