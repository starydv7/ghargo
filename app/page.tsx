
"use client";

import { useState } from "react";

const services = [
  {
    id: "cleaning",
    number: "01",
    title: "Home cleaning",
    description: "A fresher home, without giving up your day.",
    tags: ["Daily cleaning", "Deep cleaning"],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    className: "service-cleaning",
  },
  {
    id: "cooking",
    number: "02",
    title: "Home cooking",
    description: "Comforting, home-style meals made with care.",
    tags: ["Everyday meals", "Meal preparation"],
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
    className: "service-cooking",
  },
  {
    id: "everyday-help",
    number: "03",
    title: "Everyday help",
    description: "The little tasks that make a big difference.",
    tags: ["Laundry", "Home organisation"],
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=900&q=85",
    className: "service-everyday",
  },
  {
    id: "shifting",
    number: "04",
    title: "Shifting help",
    description: "A helping hand for your next new beginning.",
    tags: ["Packing", "Moving assistance"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    className: "service-shifting",
  },
];

const workers = [
  {
    id: 1,
    name: "Sunita Kumari",
    role: "Home Cleaning Expert",
    experience: "5 years' experience",
    rating: "4.9",
    reviews: "128 reviews",
    price: 499,
    service: "cleaning",
    specialty: ["Deep cleaning", "Kitchen care"],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    name: "Pooja Kumari",
    role: "Home Cooking Specialist",
    experience: "4 years' experience",
    rating: "4.8",
    reviews: "96 reviews",
    price: 399,
    service: "cooking",
    specialty: ["Home-style meals", "Meal prep"],
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Rekha Devi",
    role: "Everyday Home Helper",
    experience: "7 years' experience",
    rating: "4.9",
    reviews: "174 reviews",
    price: 449,
    service: "everyday-help",
    specialty: ["Daily chores", "Laundry"],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Choose a service that fits your home and your everyday routine.",
  },
  {
    number: "02",
    title: "Find your kind of help",
    description:
      "Explore profiles, experience, specialties and available slots.",
  },
  {
    number: "03",
    title: "Book with confidence",
    description:
      "Choose a suitable time and send your booking request.",
  },
];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setNewsletterMessage(
      "Thanks for your interest! Newsletter subscriptions need a connected backend."
    );
  }

  return (
    <main className="ghargo">
      {/* HERO */}
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            A BETTER KIND OF HOME HELP
          </div>

          <h1>
            Make room for
            <br />
            what <em>matters.</em>
          </h1>

          <p className="hero-description">
            From everyday cleaning to a home-cooked meal or a little
            help with moving, GharGo makes taking care of home feel lighter.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              Find your home help <span>↗</span>
            </a>
            <a className="button button-secondary" href="#services">
              Explore services
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars" aria-hidden="true">
              <span>S</span>
              <span>P</span>
              <span>R</span>
            </div>
            <div>
              <strong>Thoughtful help, made simple.</strong>
              <p>Starting in Patna, growing with you.</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo" role="img" aria-label="A bright, welcoming modern home interior">
            <div className="hero-photo-shade" />
            <div className="hero-photo-caption">
              <span>MORE EASE IN EVERY ROOM</span>
              <h2>Your home, cared for.</h2>
              <p>A little help. A lot more life.</p>
            </div>
          </div>

          <div className="hero-sticker">
            <span>A LITTLE HELP.</span>
            <span>A LOT MORE</span>
            <span>LIFE.</span>
          </div>

          <div className="floating-service-card">
            <div className="floating-icon">✳</div>
            <div>
              <strong>Help that fits your day</strong>
              <p>Cleaning · Cooking · Everyday tasks</p>
            </div>
          </div>

          <div className="hero-image-label">
            <span className="live-dot" />
            A more thoughtful way to care for home
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section-shell" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              A LITTLE HELP GOES A LONG WAY
            </div>
            <h2>
              What can we help
              <br />
              you <em>with?</em>
            </h2>
          </div>

          <p>
            Your time matters. Find the right kind of help for
            your home, your schedule and your everyday life.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <a
              className={`service-card ${service.className}`}
              href={`/helpers?service=${service.id}`}
              key={service.id}
            >
              <div className="service-image-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <span className="service-number">{service.number}</span>
                <span className="service-arrow">↗</span>
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <span className="service-link">
                  Explore helpers <span>↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="manifesto section-shell">
        <div className="manifesto-decoration" aria-hidden="true">g.</div>
        <div className="manifesto-content">
          <span className="manifesto-label">MORE THAN A TO-DO LIST</span>
          <h2>
            Less time worrying
            <br />
            about home.
            <br />
            <em>More time living.</em>
          </h2>
        </div>
        <p>
          Home should be where you recharge, connect and feel like
          yourself. We are building a more thoughtful way to find
          the helping hands that make that possible.
        </p>
      </section>

      {/* FEATURED HELPERS */}
      <section className="helpers-section section-shell" id="helpers">
        <div className="section-heading helpers-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              MEET YOUR NEW FAVOURITE HELPER
            </div>
            <h2>
              Good people.
              <br />
              <em>Helpful hands.</em>
            </h2>
          </div>

          <a className="text-link" href="/helpers">
            Explore all helpers <span>↗</span>
          </a>
        </div>

        <div className="workers-grid">
          {workers.map((worker) => (
            <article className="worker-card" key={worker.id}>
              <a
                className="worker-photo-wrap"
                href={`/helpers?service=${worker.service}`}
                aria-label={`Explore ${worker.role}`}
              >
                <img
                  className="worker-photo"
                  src={worker.image}
                  alt={`Portrait representing ${worker.role}`}
                />
                <span className="worker-experience">
                  {worker.experience}
                </span>
              </a>

              <div className="worker-content">
                <div className="worker-name-row">
                  <div>
                    <h3>{worker.name}</h3>
                    <p>{worker.role}</p>
                  </div>
                  <div className="worker-rating">
                    <span>★</span> {worker.rating}
                    <small>({worker.reviews})</small>
                  </div>
                </div>

                <div className="worker-specialties">
                  {worker.specialty.map((specialty) => (
                    <span key={specialty}>{specialty}</span>
                  ))}
                </div>

                <div className="worker-card-footer">
                  <div className="worker-price">
                    <strong>₹{worker.price}</strong>
                    <span>/ visit</span>
                  </div>
                  <a
                    className="button button-primary worker-book-button"
                    href={`/booking?worker=${worker.id}&service=${worker.service}`}
                  >
                    View & book <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="sample-data-note">
          Worker profiles, prices and ratings shown here are sample content
          for the design. Replace them with verified worker data before launch.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">
        <div className="section-shell">
          <div className="section-heading how-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                EASY AS ONE, TWO, THREE
              </div>
              <h2>
                Home help,
                <br />
                <em>without the hassle.</em>
              </h2>
            </div>
            <p>
              A simple way to find help that works for you.
              No complicated process, just a better start.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section section-shell">
        <div className="testimonial-side">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            THE FEELING WE'RE AFTER
          </div>
          <h2>
            A little more
            <br />
            <em>breathing room.</em>
          </h2>
          <p>
            More time for the people you love, the work you care about,
            and the moments that make a house feel like home.
          </p>
        </div>

        <div className="testimonial-card">
          <span className="quote-mark">“</span>
          <blockquote>
            I just want finding help at home to feel simple,
            comfortable and dependable. That is the experience
            we want GharGo to create.
          </blockquote>
          <div className="testimonial-author">
            <div className="author-avatar">G</div>
            <div>
              <strong>The GharGo promise</strong>
              <span>Thoughtful help, made simple.</span>
            </div>
          </div>
          <span className="testimonial-stars">✳ ✳ ✳</span>
        </div>
      </section>

      {/* NEWSLETTER / FINAL CTA */}
      <section className="final-cta section-shell" id="get-started">
        <div className="final-cta-inner">
          <div className="final-cta-copy">
            <span className="final-cta-label">A LITTLE HELP. A LOT MORE LIFE.</span>
            <h2>
              Let's make home
              <br />
              feel <em>lighter.</em>
            </h2>
            <p>
              Discover home services designed around your everyday life.
              Starting in Patna, with care in every detail.
            </p>
            <a className="button button-light" href="#services">
              Find your home help <span>↗</span>
            </a>
          </div>

          <div className="newsletter-card">
            <div className="newsletter-icon">✳</div>
            <h3>Stay in the loop.</h3>
            <p>
              Hear about GharGo's launch and updates as we grow.
            </p>

            <form className="newsletter-form" onSubmit={subscribe}>
              <label className="visually-hidden" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setNewsletterMessage("");
                }}
                required
              />
              <button type="submit" aria-label="Submit email">↗</button>
            </form>

            {newsletterMessage && (
              <p className="newsletter-message" role="status">
                {newsletterMessage}
              </p>
            )}

            <small>No spam. Just thoughtful updates.</small>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#">
          <span className="brand-symbol">g.</span>
          <span>ghar<span className="brand-light">go</span></span>
        </a>

        <p>Make room for what matters.</p>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#helpers">Helpers</a>
          <a href="#how-it-works">How it works</a>
          <a href="mailto:hello@ghargo.in">Contact</a>
        </div>

        <span className="copyright">
          © 2026 GharGo. Made with care.
        </span>
      </footer>
    </main>
  );
}
