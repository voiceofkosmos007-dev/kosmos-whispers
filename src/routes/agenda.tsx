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
    <section className="bg-primary py-20 text-primary-foreground"><div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-5"><div><p className="eyebrow text-primary-foreground/70">Your vote · Your AOA · Your rights</p><h1 className="mt-4 font-display text-5xl uppercase leading-none sm:text-7xl">{hi ? "हमारी 30 प्रमुख प्रतिबद्धताएँ" : "Our 30 Key Commitments"}</h1><p className="mt-5 max-w-2xl text-lg text-primary-foreground/75">{hi ? "हर रुपये की जवाबदेही, हर निर्णय में पारदर्शिता और हर निवासी का सम्मान।" : "Accountability for every rupee, transparency in every decision and respect for every resident."}</p></div><div className="flex rounded-md border border-primary-foreground/25 p-1" role="group" aria-label="Agenda language"><button type="button" onClick={() => setLanguage("en")} className={`rounded-sm px-5 py-2 text-sm font-bold ${!hi ? "bg-highlight text-highlight-foreground" : "text-primary-foreground"}`}>English</button><button type="button" onClick={() => setLanguage("hi")} className={`rounded-sm px-5 py-2 text-sm font-bold ${hi ? "bg-highlight text-highlight-foreground" : "text-primary-foreground"}`}>हिन्दी</button></div></div></section>
    <section className="bg-surface py-16"><div className="mx-auto max-w-6xl px-5"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{agenda.map((item, index) => <article key={item[0]} className="grid min-h-56 grid-rows-[auto_1fr] overflow-hidden rounded-md border border-border bg-card shadow-card"><div className="flex items-center gap-4 bg-primary px-5 py-4"><span className="font-display text-3xl text-highlight">{String(index + 1).padStart(2,"0")}</span><h2 className="font-display text-lg uppercase leading-tight text-primary-foreground">{hi ? item[1] : item[0]}</h2></div><div className="p-5"><AgendaPoint label={hi ? "हमारी प्रतिबद्धता" : "Our commitment"} text={hi ? item[3] : item[2]}/></div></article>)}</div><div className="mt-10 grid gap-4 rounded-md bg-primary p-6 text-center text-sm font-extrabold uppercase text-primary-foreground sm:grid-cols-2 lg:grid-cols-4"><p>Accountability for every rupee</p><p className="text-highlight">Transparency in every decision</p><p>Accountability in every service</p><p className="text-highlight">Respect for every resident</p></div></div></section>
  </Page>;
}

function AgendaPoint({ label, text }: { label: string; text: string }) {
  return <div><p className="text-xs font-extrabold uppercase text-highlight">{label}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>;
}