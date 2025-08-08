// MicrobiomeLabSite.jsx
// Single-file React component for Texas A&M GI Laboratory — Microbiome Lab
// NOTE: paste this as a single file (replace the previous content)

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Users, BookOpenCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

/*
  Key fixes:
  - Single `import React` at top (no duplicate imports)
  - Single default export
  - No duplicate top-level declarations of React or other identifiers
*/

const PUBLICATIONS = [
  {
    title: "Gut microbial shifts in canine gastrointestinal disorders",
    authors: "Hong MP, Park SY et al.",
    journal: "Journal of Veterinary Internal Medicine",
    year: 2024,
    link: "#",
  },
  {
    title: "Comparative feline intestinal metagenomes",
    authors: "Gonzalez V, Patel R et al.",
    journal: "ISME Journal",
    year: 2023,
    link: "#",
  },
];

const TEAM = [
  { name: "So Young Park", role: "Laboratory Manager, Microbiome" },
  { name: "Dr. Min Pyo Hong", role: "Associate Research Scientist" },
  { name: "Victoria Gonzalez", role: "Diagnostic Laboratory Supervisor I" },
  { name: "Ria Patel", role: "Diagnostic Laboratory Technician I" },
  { name: "Alessandra Flor", role: "Student Worker" },
  { name: "Aracely Hernandez", role: "Student Worker" },
  { name: "Madhulika Jeyakumar", role: "Student Worker" },
  { name: "Aditi Rai", role: "Student Worker" },
  { name: "Faith Field", role: "Student Worker" },
  { name: "Shifa Shaik", role: "Student Worker" },
];

export default function MicrobiomeLabSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#500000] flex items-center justify-center text-white font-bold">
              TAMU
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                Texas A&M GI Laboratory — Microbiome Lab
              </h1>
              <p className="text-xs text-gray-500">
                Companion Animal Gastrointestinal & Microbiome Research
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:underline">About</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#publications" className="hover:underline">Publications</a>
            <a href="#team" className="hover:underline">Team</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold leading-tight text-[#500000]">
              Advancing pet health through gastrointestinal microbiome science
            </h2>
            <p className="mt-4 text-gray-600">
              At Texas A&M University’s GI Laboratory, we investigate the
              complex microbial ecosystems of dogs and cats. Our mission:
              improve diagnosis, treatment, and prevention of GI disorders
              through cutting-edge microbiome research.
            </p>
            <div className="mt-6 flex gap-3">
              <Button className="bg-[#500000] text-white hover:bg-[#6a0000]">
                Explore Research
              </Button>
              <Button variant="outline">Join our mailing list</Button>
            </div>
          </motion.div>

          <div className="order-first md:order-last">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="font-semibold text-[#500000]">
                Latest microbiome dataset
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Samples: 1,240 — Species profiled: 2,300+ — Public release: Jan
                2025
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-12">
          <h3 className="text-2xl font-semibold text-[#500000]">About the lab</h3>
          <p className="mt-3 text-gray-600">
            The Texas A&M GI Laboratory — Microbiome Lab studies the composition
            and function of gut microbial communities in companion animals. We
            aim to translate microbiome science into better diagnostics,
            nutritional strategies, and therapeutics that improve pet health
            and longevity.
          </p>
        </section>

        {/* RESEARCH */}
        <section id="research" className="mt-12">
          <h3 className="text-2xl font-semibold text-[#500000]">
            Research highlights
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <h4 className="font-semibold">Aging & microbiome</h4>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Identifying microbial signatures associated with healthy aging
                  vs. GI disease in dogs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h4 className="font-semibold">Diet–microbe interactions</h4>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Controlled diet interventions to map metabolite production and
                  microbiome shifts.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h4 className="font-semibold">Antimicrobial resistance</h4>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Surveillance of resistance genes in GI microbiomes of
                  companion animals.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications" className="mt-12">
          <h3 className="text-2xl font-semibold text-[#500000]">
            Selected publications
          </h3>
          <ul className="mt-4 space-y-3">
            {PUBLICATIONS.map((p, idx) => (
              <li
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-start"
              >
                <div>
                  <div className="font-semibold">
                    {p.title} <span className="text-gray-500 text-sm">({p.year})</span>
                  </div>
                  <div className="text-xs text-gray-500">{p.authors} — <em>{p.journal}</em></div>
                </div>
                <Button variant="ghost" className="text-sm">PDF</Button>
              </li>
            ))}
          </ul>
        </section>

        {/* TEAM */}
        <section id="team" className="mt-12">
          <h3 className="text-2xl font-semibold text-[#500000]">Our Team</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {TEAM.map((m, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-[#f3e8e8] flex items-center justify-center font-semibold text-[#500000]">
                    {m.name.split(" ")[0][0]}
                  </div>
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-xs text-gray-500">{m.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROTOCOLS */}
        <section id="protocols" className="mt-12">
          <h3 className="text-2xl font-semibold text-[#500000]">
            Protocols & resources
          </h3>
          <p className="mt-2 text-gray-600">
            We publish our sample collection SOPs and bioinformatics pipelines
            under open licenses.
          </p>
          <div className="mt-4 flex gap-3">
            <Button>Sample collection SOP (PDF)</Button>
            <Button variant="outline">Bioinformatics pipeline (Git)</Button>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-semibold text-[#500000]">
            Contact & collaboration
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="space-y-3 max-w-xl">
              <Input placeholder="Your name" />
              <Input placeholder="Institution / clinic" />
              <Input placeholder="Email" />
              <Textarea placeholder="Short message" />
              <Button type="submit" className="bg-[#500000] text-white hover:bg-[#6a0000]">Send message</Button>
            </form>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold flex items-center gap-2"><MapPin className="w-4 h-4" /> Lab location</h4>
              <p className="mt-2 text-sm text-gray-600">
                Department of Small Animal Clinical Sciences
                <br />
                College of Veterinary Medicine & Biomedical Sciences
                <br />
                Texas A&M University, College Station, TX
              </p>
              <div className="mt-3 flex gap-2 text-sm">
                <Button variant="ghost" className="flex items-center gap-2 text-[#500000]">
                  <Mail className="w-4 h-4" /> gilab@cvm.tamu.edu
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-6 pb-12 text-sm text-gray-500">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Texas A&M GI Laboratory — Microbiome Lab. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
