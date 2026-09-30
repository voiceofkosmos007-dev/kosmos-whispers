import { Phone, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Member = { name: string; role: string; home: string; image: string; summary: string; phone?: string; contributions: readonly string[]; vision: string };

export function TeamCard({ member }: { member: Member }) {
  return <article className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card shadow-card">
    <div className="aspect-[4/5] overflow-hidden bg-muted"><img src={member.image} alt={member.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" /></div>
    <div className="flex flex-1 flex-col p-4 text-center"><h3 className="font-display text-lg uppercase leading-tight text-primary">{member.name}</h3><p className="mt-2 min-h-10 text-xs leading-5 text-muted-foreground">{member.role}</p><div className="mt-auto flex flex-wrap justify-center gap-2 pt-4"><span className="rounded-sm bg-highlight px-2.5 py-1.5 text-[10px] font-extrabold text-highlight-foreground">{member.home}</span></div><div className="mt-4 flex items-center justify-center gap-5 border-t border-border pt-3 text-xs font-bold text-primary"><span className="inline-flex items-center gap-1"><Sparkles size={14}/> Community</span>{member.phone ? <a href={`tel:${member.phone}`} className="inline-flex items-center gap-1"><Phone size={14}/> Contact</a> : null}</div></div>
  </article>;
}

export function TeamProfile({ member }: { member: Member }) {
  return <article className="grid overflow-hidden rounded-md border border-border bg-card shadow-card md:grid-cols-[280px_1fr]">
    <div className="aspect-[4/3] border-b-4 border-highlight bg-muted sm:aspect-[16/9] md:aspect-auto md:min-h-full md:border-b-0 md:border-r-4"><img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" /></div>
    <div className="p-5 sm:p-8"><h2 className="font-display text-xl uppercase leading-tight text-primary sm:text-3xl">{member.name}</h2><p className="mt-1 text-sm font-semibold text-muted-foreground">{member.role}</p><p className="mt-4 text-sm leading-6 text-foreground">{member.summary}</p><div className="mt-4 grid gap-2 sm:flex sm:flex-wrap"><span className="rounded-sm bg-highlight px-3 py-2 text-center text-xs font-extrabold text-highlight-foreground">{member.home}</span>{member.phone ? <a href={`tel:${member.phone}`} className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-3 py-2 text-xs font-bold text-primary-foreground"><Phone size={14}/>{member.phone}</a> : null}</div><h3 className="mt-7 text-xs font-extrabold uppercase text-primary">Contributions at Kosmos</h3><ul className="mt-3 space-y-2">{member.contributions.map(item => <li key={item} className="border-l-2 border-highlight pl-3 text-sm leading-6 text-muted-foreground">{item}</li>)}</ul><div className="mt-6 rounded-md bg-accent p-4"><p className="text-[11px] font-extrabold uppercase text-accent-foreground">My vision: Fit Kosmos, Happy Kosmos</p><p className="mt-2 text-sm leading-6 text-foreground">{member.vision}</p></div></div>
  </article>;
}

export function TeamPreview({ members }: { members: readonly Member[] }) {
  return <section className="bg-surface py-14 sm:py-20"><div className="mx-auto max-w-[1400px] px-4 sm:px-5"><div className="mb-8 grid gap-5 sm:mb-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"><div className="min-w-0"><p className="eyebrow">Our team</p><h2 className="section-title max-w-4xl">Residents. <span>Professionals.</span><br />Community members.</h2><p className="mt-4 max-w-3xl text-sm text-muted-foreground sm:text-base">A diverse group of Jaypee Kosmos residents with varied professional experience and a record of work and involvement inside Kosmos.</p></div><Link to="/team" className="rounded-md bg-highlight px-5 py-3 text-center text-xs font-extrabold uppercase text-highlight-foreground">View all profiles →</Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{members.map(member => <TeamCard key={member.name} member={member} />)}</div></div></section>;
}