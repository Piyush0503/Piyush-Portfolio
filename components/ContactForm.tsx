"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Network error. Try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={120}
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)] px-4 py-3 text-slate-100 outline-none transition focus:border-[var(--color-accent)]/40 focus:ring-2 focus:ring-[var(--color-accent)]/25"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)] px-4 py-3 text-slate-100 outline-none transition focus:border-[var(--color-accent)]/40 focus:ring-2 focus:ring-[var(--color-accent)]/25"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          className="mt-2 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)] px-4 py-3 text-slate-100 outline-none transition focus:border-[var(--color-accent)]/40 focus:ring-2 focus:ring-[var(--color-accent)]/25"
        />
      </div>
      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="text-sm text-[var(--color-accent)]" role="status">
          Thanks—your message was sent.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[var(--color-accent)] py-3 text-sm font-semibold text-[var(--color-surface-0)] transition hover:bg-[var(--color-accent-dim)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
