"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/lib/site";
import { Check, Mail, WhatsApp } from "./icons";

type Fields = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.phone.trim() && !/^[+\d][\d\s-]{6,17}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (f.message.trim().length < 10) e.message = "Please write a short message (at least 10 characters).";
  return e;
}

function compose(f: Fields) {
  return `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone || "-"}\n\n${f.message}`;
}

/**
 * Enquiry form. There is no backend: on submit it opens the visitor's
 * email app with the enquiry pre-filled (or WhatsApp, if they prefer).
 * Connect a form service or server action here later if needed.
 */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const check = () => {
    const e = validate(fields);
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!check()) return;
    const subject = `Enquiry from ${fields.name} — ${site.name}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose(fields))}`;
    setSent(true);
  };

  const onWhatsApp = () => {
    if (!check()) return;
    window.open(whatsappLink(`Namaskaram,\n\n${compose(fields)}`), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" value={fields.name} onChange={update("name")} className={inputCls(errors.name)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        </Field>
        <Field label="Phone" id="phone" optional error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={fields.phone} onChange={update("phone")} className={inputCls(errors.phone)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
        </Field>
      </div>
      <Field label="Email" id="email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" value={fields.email} onChange={update("email")} className={inputCls(errors.email)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
      </Field>
      <Field label="Message" id="message" error={errors.message}>
        <textarea id="message" name="message" rows={5} value={fields.message} onChange={update("message")} className={`${inputCls(errors.message)} resize-y`} placeholder="Tell us briefly what you would like to know…" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
      </Field>

      <div className="flex flex-wrap gap-3 pt-2">
        <button type="submit" className="inline-flex items-center gap-2.5 rounded-full bg-maroon-800 px-6 py-3 font-medium text-ivory transition-colors hover:bg-maroon-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500">
          <Mail className="h-5 w-5" /> Send Enquiry by Email
        </button>
        <button type="button" onClick={onWhatsApp} className="inline-flex items-center gap-2.5 rounded-full border border-maroon-800/30 px-6 py-3 font-medium text-maroon-800 transition-colors hover:border-maroon-800 hover:bg-maroon-800/5">
          <WhatsApp className="h-5 w-5" /> Send via WhatsApp
        </button>
      </div>

      <p className="text-sm text-brown-400">
        This form only sends an enquiry. Your email or WhatsApp app opens with your message ready to send. No payment or booking is made here.
      </p>

      {sent && (
        <p role="status" className="flex items-start gap-2 rounded-2xl bg-cream-100 px-4 py-3 text-sm text-brown-700">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
          Thank you. Please complete sending the message in the app that opened. If nothing opened, write to {site.contact.email} directly.
        </p>
      )}
    </form>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-2xl border bg-ivory px-4 py-3 text-brown-900 placeholder:text-brown-300 outline-none transition-colors focus:border-gold-500 focus:ring-4 focus:ring-gold-500/15 ${
    error ? "border-maroon-600" : "border-brown-900/15"
  }`;
}

function Field({ label, id, error, optional, children }: { label: string; id: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-brown-700">
        {label} {optional && <span className="font-normal text-brown-400">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-maroon-600">
          {error}
        </p>
      )}
    </div>
  );
}
