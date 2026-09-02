import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { useReactToPrint } from "react-to-print";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Sujal-Maharjan-Resume",
  });
  return (
    <>
      <button
        onClick={handlePrint}
        className="fixed top-4 right-4 px-4 py-2 bg-black text-white cursor-pointer rounded"
      >
        Print/ Download
      </button>
      <div
        ref={resumeRef}
        className="mx-auto bg-white shadow-lg print:shadow-none"
        style={{
          width: "210mm",
          padding: "5mm",
        }}
      >
        {/* Page Container optimized for A4 Dimensions */}
        <div className="mx-auto max-w-200 bg-white print:p-0 print:shadow-none text-[14px] text-neutral-900 leading-relaxed">
          {/* HEADER SECTION */}
          <header className="text-center space-y-1">
            <h1 className="text-3xl tracking-wide uppercase text-black">
              Frontend Developer
            </h1>
            <p className="text-base font-medium tracking-wide text-neutral-800">
              Sujal Maharjan
            </p>
            <p className="text-neutral-600 text-sm">Thulobharang, Kathmandu</p>
            <div className="flex justify-center items-center gap-2 text-xs text-neutral-700 pt-1">
              <a href="mailto:sujalmaharjan36@gmail.com">
                sujalmaharjan36@gmail.com
              </a>
              <span>|</span>
              <span>9761844779</span>
              <span>|</span>
              <a
                href="https://github.com/maharjansujal"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/maharjansujal
              </a>
            </div>
          </header>

          {/* SECTION BREAK */}
          <hr className="border-t border-black my-5" />

          {/* SUMMARY SECTION */}
          <section className="mb-6">
            <SectionHeading sectionHeading="Career Objective" />
            <p className="text-justify text-neutral-800 px-1 text-base">
              Detail-oriented Frontend Developer with experience building
              responsive UIs using React, Next.js, and TypeScript. Focused on
              improving backend understanding, especially in databases,
              authentication, and scalable application design, with a long-term
              goal of becoming a strong full-stack developer.
            </p>
          </section>

          {/* EXPERIENCE SECTION */}
          <section className="mb-6">
            <SectionHeading sectionHeading="Experience" />
            <div className="space-y-5 px-1">
              {/* Job 1: Frontend Intern */}
              <div className="text-base job">
                <div className="flex items-center justify-between w-full font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    Frontend Intern, Fatafatsewa
                  </span>
                  <div className="grow border-neutral-400 mx-2 self-end mb-1"></div>
                  <span className="font-bold shrink-0 text-neutral-800">
                    Aug 2024 - Sep 2024
                  </span>
                </div>
                <ul className="list-disc list-outside ml-6 mt-1.5 space-y-0.5 text-neutral-800 marker:text-black">
                  <li>
                    Maintained and optimized web-facing platforms to ensure data
                    accuracy and fluid user workflows across modules.
                  </li>
                  <li>
                    Gained extensive hands-on experience identifying logical
                    bugs and resolving unexpected system error states under
                    tight deployment cycles.
                  </li>
                </ul>
              </div>
              {/* Job 2: Documentation Officer */}
              <div className="text-base job">
                <div className="flex items-center justify-between w-full font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    Documentation Officer, Ideal Study Abroad
                  </span>
                  <div className="grow border-neutral-400 mx-2 self-end mb-1"></div>
                  <span className="shrink-0 text-neutral-800">
                    Sep 2025 - Dec 2025
                  </span>
                </div>
                <ul className="list-disc list-outside ml-6 mt-1.5 space-y-0.5 text-neutral-800 marker:text-black">
                  <li>
                    Managed high-volume data entry, document verification, and
                    updating of student records with zero margin for error.
                  </li>
                  <li>
                    Executed rigorous checklist-based verification of applicant
                    profiles to ensure strict compliance with institutional and
                    visa application requirements.
                  </li>
                  <li>
                    Coordinated multi-channel communications with educational
                    institutions, agents, and counselors to streamline
                    processing timelines.
                  </li>
                </ul>
              </div>
              {/* Job 3: Next.js Developer */}
              <div className="text-base job">
                <div className="flex items-center justify-between w-full font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    Next.js Developer, Letitu
                  </span>
                  <div className="grow border-neutral-400 mx-2 self-end mb-1"></div>
                  <span className="shrink-0 text-neutral-800">
                    Oct 2025 - May 2026
                  </span>
                </div>
                <ul className="list-disc list-outside ml-6 mt-1.5 space-y-0.5 text-neutral-800 marker:text-black">
                  <li>
                    Collaborated closely with QA and development teams to trace
                    system workflows, resolve interface bugs, and optimize
                    stability.
                  </li>
                  <li>
                    Managed assignments within highly structured team workflows,
                    utilizing bug-tracking tools, feedback cycles, and clear
                    documentation.
                  </li>
                  <li>
                    Refactored critical layout data elements to eliminate data
                    rendering inconsistencies and improve system reliability.
                  </li>
                </ul>
              </div>
              <div className="text-base">
                <div className="flex items-center justify-between w-full font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    Frontend Developer Intern, Moonlight Creatives
                  </span>
                  <div className="grow border-neutral-400 mx-2 self-end mb-1"></div>
                  <span className="shrink-0 text-neutral-800">
                    May 2026 - Present
                  </span>
                </div>
                <ul className="list-disc list-outside ml-6 mt-1.5 space-y-0.5 text-neutral-800 marker:text-black">
                  <li>
                    Developed a real-time chat application using Next.js, React,
                    TypeScript, WebSockets, and REST APIs with a focus on
                    responsive and scalable user experiences.
                  </li>
                  <li>
                    Implemented real-time messaging, typing indicators,
                    conversation updates, optimistic UI, and file attachment
                    workflows while collaborating with backend services.
                  </li>
                  <li>
                    Improved application performance and maintainability by
                    debugging complex state synchronization issues, refactoring
                    components, and optimizing frontend architecture.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION SECTION */}
          <section className="mb-6 education-section">
            <SectionHeading sectionHeading="Education" />

            <div className="space-y-4 px-1">
              {/* Education 1 */}
              <div className="education-item">
                <div className="flex items-center justify-between w-full text-base font-bold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    Islington College, London Metropolitan University
                  </span>
                  <div className="grow border-neutral-400 mx-2 self-end mb-1"></div>
                  <span className="shrink-0 text-neutral-800">2022 - 2025</span>
                </div>
                <div className="flex justify-between items-start text-sm text-neutral-700 italic mt-0.5 ml-5">
                  <span>BSc (Hons) in Computing</span>
                  <span>Kamalmarg, Kamalpokhari, Kathmandu</span>
                </div>
              </div>
              {/* Education 2 */}
              <div className="education-item">
                <div className="flex items-center justify-between w-full text-base font-bold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    National Schools of Sciences (NIST), NEB
                  </span>
                  <div className="grow border-neutral-400 mx-2 self-end mb-1"></div>
                  <span className="shrink-0 text-neutral-800">2020 - 2022</span>
                </div>
                <div className="flex justify-between text-sm text-neutral-700 italic mt-0.5 ml-5">
                  <span>+2 level (Science Stream)</span>
                  <span>Lainchaur, Kathmandu</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <SectionHeading sectionHeading="Projects" />
            <div className="space-y-5 px-1">
              <div className="text-base project">
                <div className="flex items-center justify-between w-full font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    <a href="https://github.com/maharjansujal/whatup">
                      Whatup - Real-Time Chat Application
                    </a>
                  </span>
                </div>

                <ul className="list-disc list-outside ml-6 mt-1.5 space-y-0.5 text-neutral-800 marker:text-black">
                  <li>
                    Developing a full-stack real-time messaging platform using
                    React.js, TypeScript, Express.js, PostgreSQL, and
                    WebSockets.
                  </li>
                  <li>
                    Implementing one-to-one and group conversations, typing
                    indicators, optimistic UI updates, file attachments,
                    authentication, and live online presence.
                  </li>
                  <li>
                    Utilizing TanStack Query, Socket.IO, and Cloudinary to
                    deliver efficient state management, real-time
                    synchronization, and media storage.
                  </li>
                  <li>
                    Designing a scalable backend architecture with JWT
                    authentication and relational database modeling
                  </li>
                </ul>
              </div>
              <div className="text-base">
                <div className="flex items-center justify-between w-full font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    Laptop Transaction System (Python)
                  </span>
                </div>
                <ul className="list-disc list-outside ml-6 mt-1.5 space-y-0.5 text-neutral-800 marker:text-black">
                  <li>
                    Built a robust management system in Python to track and
                    record sales transactions efficiently.
                  </li>
                  <li>
                    Utilized 2D lists to store, update, and manage historical
                    transaction records.
                  </li>
                  <li>
                    Developed reporting features to generate accurate financial
                    summaries and transaction logs.
                  </li>
                </ul>
              </div>
              <div className="text-base project">
                <div className="flex items-center justify-between w-full font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    <a href="https://github.com/maharjansujal/stock-center">
                      Stock Center - Inventory Management System
                    </a>
                  </span>
                </div>

                <ul className="list-disc list-outside ml-6 mt-1.5 space-y-0.5 text-neutral-800 marker:text-black">
                  <li>
                    Building a full-stack inventory request and tracking system
                    using React, TypeScript, Express, and PostgreSQL.
                  </li>
                  <li>
                    Designing a relational database schema with UUID-based
                    records, cascading relationships, and inventory transaction
                    tracking.
                  </li>
                  <li>
                    Implementing secure authentication with bcrypt password
                    hashing, JWT authorization, and role-based access control.
                  </li>
                  <li>
                    Integrating TanStack Query and Axios to optimize data
                    fetching, caching, and API communication.
                  </li>
                </ul>
              </div>
              <div className="text-base project">
                <div className="flex items-center justify-between w-full font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    Jyaasa Creatives
                  </span>
                </div>
                <ul className="list-disc list-outside ml-6 mt-1.5 space-y-0.5 text-neutral-800 marker:text-black">
                  <li>
                    Created a desktop application using Electron.js and React to
                    manage and organize student records.
                  </li>
                  <li>
                    Integrated SQLite for local data persistence, allowing for
                    efficient storing, editing, and retrieving of records.
                  </li>
                  <li>
                    Optimized the internal dashboard for administrative ease of
                    use and data accuracy.
                  </li>
                </ul>
              </div>
              <div className="text-base project">
                <div className="flex items-center justify-between w-full font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">❖</span>
                    Smartphone Ecommerce Website
                  </span>
                </div>
                <ul className="list-disc list-outside ml-6 mt-1.5 space-y-0.5 text-neutral-800 marker:text-black">
                  <li>
                    Architected a server-side application using Java Servlets
                    and JSP for backend logic, integrated with a clean HTML/CSS
                    frontend.
                  </li>
                  <li>
                    Engineered core ecommerce functionalities including dynamic
                    content generation and secure user request handling.
                  </li>
                  <li>
                    Designed a straightforward, intuitive interface to
                    streamline the browsing and checkout process for users.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SKILLS SECTION (Three Column Grid) */}
          <section className="mb-2 page-break-inside-avoid skills-section">
            <SectionHeading sectionHeading="Technical Skills & Workflow Proficiencies" />

            <div className="grid grid-cols-3 border-t border-black text-sm text-neutral-950">
              {/* Column 1 */}
              <div className="p-3 border-r border-neutral-300 print:border-r">
                <h3 className="font-bold text-center uppercase mb-2 text-neutral-900">
                  Frontend Development
                </h3>
                <ul className="space-y-1 ml-1 list-disc list-inside marker:text-black">
                  <li>React & Next.js</li>
                  <li>TypeScript & JavaScript (ES6+)</li>
                  <li>Tailwind CSS</li>
                  <li>TanStack Query</li>
                  <li>Responsive UI Development</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="p-3 border-r border-neutral-300 print:border-r">
                <h3 className="font-bold text-center uppercase mb-2 text-neutral-900">
                  Backend & APIs
                </h3>
                <ul className="space-y-1 ml-1 list-disc list-inside marker:text-black">
                  <li>Node.js & Express.js</li>
                  <li>REST API Development</li>
                  <li>JWT Authentication</li>
                  <li>Socket.IO (WebSockets)</li>
                  <li>Cloudinary Integration</li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="p-3">
                <h3 className="font-bold text-center uppercase mb-2 text-neutral-900">
                  Databases & Workflow
                </h3>
                <ul className="space-y-1 ml-1 list-disc list-inside marker:text-black">
                  <li>PostgreSQL & SQLite</li>
                  <li>Git & GitHub</li>
                  <li>Postman</li>
                  <li>Debugging & Troubleshooting</li>
                  <li>Technical Documentation</li>
                </ul>
              </div>
            </div>
            <div className="border-b border-black w-full"></div>
          </section>
        </div>
      </div>
    </>
  );
}
