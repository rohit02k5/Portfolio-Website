import { useEffect, useState } from "react";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";
import SocialIcon from "./SocialIcon";

const FORM_ACTION = `https://formsubmit.co/${site.email}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  // FormSubmit redirects back with ?sent=1 after successful submission
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("sent") === "1") {
      setSent(true);
      window.history.replaceState(null, "", window.location.pathname);
      setTimeout(() => setSent(false), 6000);
    }
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="text-gradient">worth shipping</span>
        </>
      }
      sub="Open to SWE/ML internships, research collaborations, and interesting problems. I reply fast."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Direct channels */}
        <Reveal>
          <div className="flex h-full flex-col gap-4">
            <div className="card flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3.5">
                <span className="icon-btn !cursor-default text-accent" aria-hidden="true">
                  <Mail size={17} />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-fg">{site.email}</p>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="icon-btn"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            <div className="card flex items-center gap-3.5 p-5">
              <span className="icon-btn !cursor-default text-accent" aria-hidden="true">
                <Phone size={17} />
              </span>
              <div>
                <p className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                  Phone
                </p>
                <a
                  href={`tel:${site.phone.replace(/-/g, "")}`}
                  className="text-sm font-semibold text-fg"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="card flex items-center gap-3.5 p-5">
              <span className="icon-btn !cursor-default text-accent" aria-hidden="true">
                <MapPin size={17} />
              </span>
              <div>
                <p className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                  Based at
                </p>
                <p className="text-sm font-semibold text-fg">IIT Bhilai, India</p>
              </div>
            </div>

            <div className="mt-auto flex items-center gap-2.5 pt-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="icon-btn"
                  aria-label={s.label}
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={120}>
          <form
            action={FORM_ACTION}
            method="POST"
            className="card ring-grad flex flex-col gap-4 p-6 sm:p-8"
          >
            {/* FormSubmit config — honeypot spam trap, no captcha page */}
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <input
              type="hidden"
              name="_subject"
              value={`Portfolio contact — ${site.shortName}`}
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value={`${site.url}?sent=1`} />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                  Name
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Recruiter"
                  className="rounded-xl border border-line bg-[var(--bg)] px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="rounded-xl border border-line bg-[var(--bg)] px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the role or project…"
                className="resize-y rounded-xl border border-line bg-[var(--bg)] px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none"
              />
            </label>
            <button type="submit" className="btn-primary mt-1 w-fit">
              <Send size={15} /> Send Message
            </button>
            {sent && (
              <p
                className="flex items-center gap-2 text-sm text-emerald-400"
                role="status"
              >
                <Check size={15} /> Message sent — I'll get back to you soon.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
