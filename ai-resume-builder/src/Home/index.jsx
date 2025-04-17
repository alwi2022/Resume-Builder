import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { UserButton } from "@clerk/clerk-react";
import { Sparkles, FileText, Download, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-white to-slate-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Create a Professional Resume in Minutes</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Just fill out the form, and let AI compose the difficult sections like Summary and Experience.
        </p>
        <Button className="text-lg px-6 py-4">Create a Resume Now</Button>
        <div className="mt-10 max-w-4xl mx-auto">
          <img
            src="/images/resume-mockup.png"
            alt="AI Generated Resume Mockup"
            className="rounded-2xl shadow-xl border"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">How QuickHire Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Step 1", desc: "Fill out the Form" },
            { title: "Step 2", desc: "AI helps write important sections" },
            { title: "Step 3", desc: "Download a ready-to-use resume" },
          ].map((step, i) => (
            <Card key={i} className="p-6 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-slate-50">
        <h2 className="text-3xl font-semibold text-center mb-12">QuickHire's Featured Features</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div><Sparkles className="mx-auto mb-2" /><p>AI-assisted</p></div>
          <div><FileText className="mx-auto mb-2" /><p>Professional format</p></div>
          <div><Share2 className="mx-auto mb-2" /><p>Can be edited anytime</p></div>
          <div><Download className="mx-auto mb-2" /><p>Export PDF and share resume link</p></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">What Fresh Graduates Say</h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <Card><CardContent className="p-6">“QuickHire helped me build a job-ready resume in 10 minutes!”</CardContent></Card>
          <Card><CardContent className="p-6">“The AI summary was so accurate—it felt like I wrote it myself.”</CardContent></Card>
        </div>
      </section>

      {/* Resume Showcase */}
      <section className="py-16 px-6 bg-slate-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Resume Showcase</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {["resume1.png", "resume2.png", "resume3.png"].map((img, idx) => (
            <img key={idx} src={`/images/${img}`} alt="Resume Sample" className="w-72 rounded-xl shadow-md" />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">Graduated? Time to Apply Now with a Ready-to-Use Resume</h2>
        <p className="mb-6">Professional design. Smart AI. Instant results.</p>
        <Button className="text-lg px-6 py-4">Try It for Free</Button>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>Is QuickHire free to use?</AccordionTrigger>
              <AccordionContent>Yes! You can create and download your resume for free.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Can I edit my resume later?</AccordionTrigger>
              <AccordionContent>Absolutely. You can edit anytime and download again.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8 px-6 text-sm text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Social Media</a>
        </div>
        <p>&copy; {new Date().getFullYear()} QuickHire. All rights reserved.</p>
      </footer>
    </div>
  );
}
