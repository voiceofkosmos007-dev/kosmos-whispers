import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import { TeamCard } from "@/components/team-card";
import { team } from "@/lib/kosmos-data";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Our Team | Voice of Kosmos" },
    { name: "description", content: "Meet the residents, professionals and community members of Team Voice of Kosmos." },
    { property: "og:title", content: "Meet Team Voice of Kosmos" },
    { property: "og:description", content: "Residents with experience, commitment and a record of work inside Jaypee Kosmos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: TeamPage,
});

function TeamPage() {
  return <Page>
    <section className="bg-primary py-20 text-primary-foreground"><div className="mx-auto max-w-6xl px-5"><p className="eyebrow text-primary-foreground/70">Our team</p><h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-none sm:text-7xl">Residents. <span className="text-highlight">Professionals.</span><br/>Community members.</h1><p className="mt-6 max-w-2xl leading-7 text-primary-foreground/70">A diverse group of Jaypee Kosmos residents bringing professional experience, local knowledge and a commitment to visible results.</p></div></section>
    <section className="bg-surface py-16"><div className="mx-auto max-w-6xl px-5"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{team.map(member => <TeamCard key={member.name} member={member} />)}</div></div></section>
  </Page>;
}