import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { SkillsSection } from "../sections/SkillSection";
import { EducationSection } from "../sections/EducationSection";
import { ProjectSection } from "../sections/ProjectSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { ObjectiveSection } from "../sections/ObjectiveSection";
import { Header } from "../sections/HeaderSection";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Sujal-Maharjan-Resume",
    pageStyle: `
      @page { size: A4; margin: 10mm; }
      * {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    `,
  });

  return (
    <>
      <button
        onClick={handlePrint}
        className="fixed top-4 right-4 px-4 py-2 bg-black text-white cursor-pointer rounded print:hidden"
      >
        Print / Download
      </button>

      <div
        ref={resumeRef}
        className="mx-auto bg-white shadow-lg print:shadow-none"
        style={{ width: "210mm", padding: "6mm" }}
      >
        <div className="text-[15px] text-neutral-900 leading-normal">
          {/* HEADER */}
          <Header />

          <hr className="border-t border-black my-4" />

          {/* OBJECTIVE */}
          <ObjectiveSection />

          {/* EXPERIENCE */}
          <ExperienceSection />
          {/* PROJECTS */}
          <ProjectSection />

          {/* EDUCATION */}
          <EducationSection />

          {/* SKILLS */}
          <SkillsSection />
        </div>
      </div>
    </>
  );
}
