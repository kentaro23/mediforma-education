"use client";

import { FormEvent, useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { contactFormOptions, contactPageContent } from "@/lib/page-content";

type SubmitState = "idle" | "success" | "error";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorDetail, setErrorDetail] = useState("");

  const labels = contactPageContent.formLabels;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorDetail("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      furigana: formData.get("furigana"),
      relation: formData.get("relation"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      school: formData.get("school"),
      grade: formData.get("grade"),
      interests: formData.getAll("interests"),
      message: formData.get("message"),
      agreed: formData.get("agreed") === "on"
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const detail = Array.isArray(data?.attempts)
          ? data.attempts
              .map((attempt: { channel?: string; detail?: string }) => `${attempt.channel ?? "unknown"}:${attempt.detail ?? "failed"}`)
              .join(" | ")
          : "submit failed";
        throw new Error(detail);
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      if (error instanceof Error) {
        setErrorDetail(error.message);
      }
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-2xl bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-navy-900">
          <span>
            {labels.name}
            {contactPageContent.requiredSuffix}
          </span>
          <Input name="name" required />
        </label>

        <label className="space-y-2 text-sm text-navy-900">
          <span>
            {labels.furigana}
            {contactPageContent.requiredSuffix}
          </span>
          <Input name="furigana" required />
        </label>

        <label className="space-y-2 text-sm text-navy-900">
          <span>{labels.relation}</span>
          <Select name="relation" defaultValue={contactFormOptions.relation[0]}>
            {contactFormOptions.relation.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </label>

        <label className="space-y-2 text-sm text-navy-900">
          <span>
            {labels.email}
            {contactPageContent.requiredSuffix}
          </span>
          <Input name="email" type="email" required />
        </label>

        <label className="space-y-2 text-sm text-navy-900">
          <span>
            {labels.phone}
            {contactPageContent.optionalSuffix}
          </span>
          <Input name="phone" type="tel" />
        </label>

        <label className="space-y-2 text-sm text-navy-900">
          <span>
            {labels.school}
            {contactPageContent.optionalSuffix}
          </span>
          <Input name="school" />
        </label>

        <label className="space-y-2 text-sm text-navy-900">
          <span>{labels.grade}</span>
          <Select name="grade" defaultValue={contactFormOptions.grade[0]}>
            {contactFormOptions.grade.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </label>
      </div>

      <fieldset className="space-y-3">
        <legend className="mb-2 text-sm font-medium text-navy-900">{labels.interests}</legend>
        <div className="grid gap-2 md:grid-cols-2">
          {contactFormOptions.interests.map((interest) => (
            <label key={interest} className="flex items-center gap-2 rounded-xl border border-neutralGray-100 px-3 py-2 text-sm text-neutralGray-600">
              <Checkbox name="interests" value={interest} />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block space-y-2 text-sm text-navy-900">
        <span>{labels.message}</span>
        <Textarea name="message" rows={6} />
      </label>

      <label className="flex items-center gap-2 text-sm text-neutralGray-600">
        <Checkbox name="agreed" required />
        <span>{contactPageContent.privacyText}</span>
      </label>

      <Button type="submit" disabled={loading} className="w-full md:w-auto">
        {loading ? contactPageContent.sendingLabel : contactPageContent.submitLabel}
      </Button>

      {status === "success" ? <p className="text-sm text-teal-500">{contactPageContent.successMessage}</p> : null}
      {status === "error" ? (
        <div className="space-y-1">
          <p className="text-sm text-red-600">{contactPageContent.errorMessage}</p>
          {errorDetail ? <p className="text-xs text-red-500">{errorDetail}</p> : null}
        </div>
      ) : null}
    </form>
  );
}
