import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "@/components/site-shell";
import { agenda } from "@/lib/kosmos-data";

export const Route = createFileRoute("/agenda")({
  head: () => ({ meta: [
    { title: "Our Agenda | Voice of Kosmos" },
    { name: "description", content: "Read the Voice of Kosmos agenda in English and Hindi, covering safety, maintenance, transparency and resident communication." },
    { property: "og:title", content: "Our Agenda | Voice of Kosmos" },
    { property: "og:description", content: "Eight resident priorities, clear actions and measurable outcomes—in English and Hindi." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: AgendaPage,
});

function AgendaPage() {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const hi = language === "hi";
  return <Page>
    <section className="bg-primary py-20 text-primary-foreground"><div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-5"><div><p className="eyebrow text-primary-foreground/70">A safer, cleaner, better-connected Kosmos</p><h1 className="mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">{hi ? "हमारा एजेंडा" : "Our Agenda"}</h1><p className="mt-5 max-w-2xl text-lg text-primary-foreground/75">{hi ? "निवासियों की चिंताओं को समयबद्ध कार्रवाई और ठोस परिणामों में बदलना।" : "Turning residents’ concerns into timely action and tangible results."}</p></div><div className="flex rounded-md border border-primary-foreground/25 p-1" role="group" aria-label="Agenda language"><button type="button" onClick={() => setLanguage("en")} className={`rounded-sm px-5 py-2 text-sm font-bold ${!hi ? "bg-highlight text-highlight-foreground" : "text-primary-foreground"}`}>English</button><button type="button" onClick={() => setLanguage("hi")} className={`rounded-sm px-5 py-2 text-sm font-bold ${hi ? "bg-highlight text-highlight-foreground" : "text-primary-foreground"}`}>हिन्दी</button></div></div></section>
    <section className="bg-surface py-16"><div className="mx-auto max-w-6xl space-y-5 px-5">{agenda.map((item, index) => <article key={item.title} className="grid overflow-hidden rounded-md border border-border bg-card shadow-card lg:grid-cols-[130px_1fr]"><div className="flex items-center justify-center bg-primary p-8 font-display text-5xl text-highlight">{String(index + 1).padStart(2,"0")}</div><div className="p-6 sm:p-8"><h2 className="font-display text-2xl uppercase text-primary sm:text-3xl">{hi ? item.hindi : item.title}</h2><div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-3"><AgendaPoint label={hi ? "हमारी चिंता" : "What we see"} text={hi ? item.seeHi : item.see}/><AgendaPoint label={hi ? "हम क्या करेंगे" : "What we will do"} text={hi ? item.doHi : item.do}/><AgendaPoint label={hi ? "हमारा लक्ष्य" : "What outcome we seek"} text={hi ? item.outcomeHi : item.outcome}/></div></div></article>)}</div></section>
  </Page>;
}

function AgendaPoint({ label, text }: { label: string; text: string }) {
  return <div><p className="text-xs font-extrabold uppercase text-highlight">{label}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>;
}