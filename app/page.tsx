"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Home } from "lucide-react";

export default function Homepage() {
  return (
    <div className="space-y-8 p-6 max-w-5xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">ASPIRE: Austrian Study on Post-Intervention Recovery and Employment</h1>
        <p className="text-lg text-muted-foreground">
          Understanding how surgery and intensive care affect income, employment, and recovery – to build a fairer healthcare and social system.
        </p>
        <img src="/images/aspire-landing.jpg" alt="Surgery and Recovery" className="rounded-2xl shadow-lg mx-auto" />
        <Button className="mt-4 text-lg px-6 py-2">Learn More</Button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Lorenz Kapral",
              role: "Data Scientist",
              text: "Leads data integration and modeling. Researcher of the Month at MedUni Vienna (2025). Published in JAMA Network Open.",
              img: "/images/lorenz.jpg"
            },
            {
              name: "Aylin Bilir",
              role: "Anaesthesiologist",
              text: "Recipient of the Anton Proksch Prize and the Austrian Pain Society’s Prof. Klinger Prize for pain research.",
              img: "/images/aylin.jpg"
            },
            {
              name: "Magdalena Eitenberger",
              role: "Social Scientist",
              text: "Postdoc at University of Vienna. Focuses on digital health, equity, and ICU recovery policy. Fulbright and Stanford FSI alumna.",
              img: "/images/magdalena.jpg"
            }
          ].map((person) => (
            <Card key={person.name} className="rounded-2xl shadow-md">
              <img src={person.img} alt={person.name} className="rounded-t-2xl h-60 w-full object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-muted-foreground italic mb-2">{person.role}</p>
                <p className="text-sm">{person.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Partner Institutions</h2>
        <ul className="space-y-2 text-lg list-disc list-inside">
          <li>Medical University of Vienna</li>
          <li>Ludwig Boltzmann Institute for Digital Health & Patient Safety</li>
          <li>University of Vienna, Department of Political Science</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">Interested in collaborating or contributing data? Contact us:</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2"><Mail /> <span>aspire@meduniwien.ac.at</span></div>
          <div className="flex items-center gap-2"><Linkedin /> <a href="https://www.linkedin.com/company/aspire-study" className="underline">Follow us on LinkedIn</a></div>
          <div className="flex items-center gap-2"><Home /> Vienna, Austria</div>
        </div>
      </section>
    </div>
  );
}
