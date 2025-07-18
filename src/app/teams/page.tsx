"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TeamCard from "@/components/team-card";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  const members = [
    {
      imageUrl: "",
      name: "Andi",
      role: "Project Manager",
      twitter: "https://x.com/Handinomeric?t=HX4N8CEGxu2ywoYxMI-3BQ&s=09",
      linkedin: "https://www.linkedin.com/in/andikan-inyang",
    },
    {
      imageUrl: "",
      name: "Glory",
      role: "Marketing Strategist",
      twitter: "https://x.com/iamgloryrolland",
      linkedin: "https://www.linkedin.com/in/glory-uwazuruike-6a755b210/",
    },
    {
      imageUrl: "",
      name: "Victor",
      role: "FullStack Developer",
      twitter: "https://x.com/CodeMcEazy",
      linkedin: "https://www.linkedin.com/in/victor-ezekiel-819992236",
    },
    {
      imageUrl: "",
      name: "Lansa",
      role: "Frontend Engineer",
      twitter: "https://x.com/Lansa_18",
      linkedin: "https://www.linkedin.com/in/lancer18/",
    },
    {
      imageUrl: "",
      name: "Kitan",
      role: "Frontend Developer",
      twitter: "https://x.com/k88499?s=21",
      linkedin: "https://www.linkedin.com/in/kitan-alli-4b2636368/",
    },
    {
      imageUrl: "",
      name: "Boluwatife",
      role: "UI/UX Designer",
      twitter: "https://x.com/find_tife?s=21",
      linkedin:
        "https://www.linkedin.com/in/boluwatife-olukanni-359796263?trk=contact-info",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA]">
      <Navbar />

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
        <article className="text-black space-y-[10px] mt-[90px] mb-[50px] max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] tracking-[-2.24px] leading-tight lg:leading-[72px] font-bold">
            Meet our team
          </h1>
          <p className="text-base lg:text-lg font-normal">
            Get to know our team, a group af passionate individuals with diverse
            talents and expertise. We are a dedicated group committed to
            delivering excellence in every project.
          </p>
        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {members.map((member, index) => (
            <TeamCard
              key={index}
              imageUrl={member.imageUrl}
              name={member.name}
              role={member.role}
              twitter={member.twitter}
              linkedin={member.linkedin}
            />
          ))}
        </article>

        <article className="flex py-[23.5px] px-10 bg-white rounded-[20px] justify-between mb-20">
          <div className="flex flex-col gap-[5.9px]">
            <h2 className="text-lg font-semibold leading-[22px]">Still have questions?</h2>
            <p className="text-base leading-[20px]">Need more information? We're here to help.</p>
          </div>
          <Button variant="default">Get in touch</Button>
        </article>
      </section>

      <Footer />
    </div>
  );
}
