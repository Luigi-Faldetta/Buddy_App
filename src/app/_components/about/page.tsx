"use client";
import "./style.css";
import { useState } from "react";

export default function About() {
  const accordionData = [
    {
      title: "Create Your Profile",
      content:
        "Start by signing up and creating your personalized profile. Tell us about yourself, your preferences, and what you're looking for in a flatmate. Add tags that highlight your interests, lifestyle, and requirements.",
    },
    {
      title: "Discover Compatible Matches",
      content:
        "Our intelligent matching algorithm will analyze your profile and preferences to suggest potential flatmates who are a great fit for you. You'll only see profiles that align with your requirements and share similar interests, ensuring a higher chance of finding your perfect match.",
    },
    {
      title: "Get in touch and buddy up",
      content:
        "If you match with another user you can then drop them a message and start looking for properties together!",
    },
  ];

  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    // Toggle the open section state
    if (openSection === index) {
      setOpenSection(null); // Close the section if it's already open
    } else {
      setOpenSection(index); // Open the section
    }
  };

  return (
    <div className="mx-auto my-[250px] h-full w-[1600px] justify-center rounded-lg border-[2px] border-solid border-slate-300 bg-white bg-opacity-75 p-6 align-middle shadow-lg">
      <div className="animate-fade-in animate-shift-down mb-4 flex justify-center pt-4 text-3xl font-bold text-gray-800">
        <h1>
          <span className="text-red-500">Buddy</span> App
        </h1>
      </div>
      <h1 className="animate-fade-in mb-4 text-center text-3xl font-bold tracking-wide text-gray-800 opacity-0">
        Your Ultimate Flatmate Matching Website
      </h1>

      <p className="animate-shift-up text-center font-bold text-gray-800 opacity-0">
        Are you tired of the endless search for the perfect flatmate? Look no
        further! Buddy App is here to revolutionize the way you find your ideal
        living companion. <br></br> Buddy App is a user-friendly website
        designed to connect individuals in search of flatmates and properties.
        Our goal is to make the process of finding a compatible flatmate as
        effortless and enjoyable as possible.
      </p>

      <h2 className="animate-fade-in-2 animate-left-to-right mb-4 mt-8 text-center text-2xl font-bold text-gray-800 opacity-0">
        Here's how it works
      </h2>

      {accordionData.map((section, index) => (
        <div
          className="collapse collapse-arrow mt-2 bg-inherit text-black"
          key={index}
        >
          <input
            type="radio"
            name="my-accordion-2"
            checked={openSection === index} // Use openSection state to control checked status
            onChange={() => toggleAccordion(index)} // Toggle section on change
          />
          <div className="collapse-title text-xl font-bold text-gray-800">
            {section.title}
          </div>
          <div className="collapse-content font-bold tracking-wide text-gray-700">
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
