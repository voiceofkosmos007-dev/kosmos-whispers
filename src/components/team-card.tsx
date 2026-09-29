import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Member = { name: string; role: string; home: string; image: string; summary: string; phone?: string };

export function TeamCard({ member }: { member: Member }) {
  return <article className="group overflow-hidden rounded-md border border-border bg-card shadow-card">
    <div className="aspect-[4/5] overflow-hidden bg-muted"><img src={member.image} alt={member.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" /></div>
    <div className="p-5"><p className="text-xs font-bold uppercase text-highlight">Team Voice of Kosmos</p><h3 className="mt-2 font-display text-xl uppercase text-primary">{member.name}</h3><p className="mt-1 min-h-10 text-sm font-semibold text-foreground">{member.role}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{member.summary}</p><div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs font-bold text-primary"><span>{member.home}</span>{member.phone ? <a href={`tel:${member.phone}`} aria-label={`Call ${member.name}`} className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground"><Phone size={15}/></a> : null}</div></div>
  </article>;
}

export function TeamPreview({ members }: { members: readonly Member[] }) {
  return <section className="bg-surface py-20"><div className="mx-auto max-w-6xl px-5"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Our team</p><h2 className="section-title max-w-3xl">Residents. <span>Professionals.</span><br />Community members.</h2><p className="mt-4 max-w-2xl text-muted-foreground">A diverse group of Jaypee Kosmos residents with professional experience and a record of work inside Kosmos.</p></div><Link to="/team" className="rounded-md bg-highlight px-5 py-3 text-xs font-extrabold uppercase text-highlight-foreground">View all profiles →</Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{members.map(member => <TeamCard key={member.name} member={member} />)}</div></div></section>;
}