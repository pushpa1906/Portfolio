import Reveal from "./Reveal";

const education = [
  {
    year: "2023 — 2025",
    degree: "Master of Science",
    field: "Computer Science",
    school: "University of Texas at Tyler",
    gpa: "GPA 3.6",
  },
  {
    year: "2019 — 2023",
    degree: "Bachelor of Technology",
    field: "Electronics and Communication Engineering",
    school: "Sri Padmavati Mahila Visvavidyalayam",
    gpa: "GPA 7.8",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-24">
          <p className="section-label mb-6">EDUCATION</p>

          <h2 className="display-heading text-5xl text-ink dark:text-[#F3F4F6] md:text-7xl">
            Academic
            <br />
            foundation.
          </h2>
        </Reveal>

        <div className="space-y-12">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.1}>
              <div className="grid gap-8 border-t border-border dark:border-[#2A3445] pt-10 lg:grid-cols-[1fr_2fr]">
                <p className="text-5xl font-bold tracking-tight text-[#355070] dark:text-[#8FA8C7]">
                  {item.year}
                </p>

                <div>
                  <h3 className="text-3xl font-bold text-ink dark:text-[#F3F4F6]">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-xl text-[#355070] dark:text-[#8FA8C7]">{item.field}</p>

                  <p className="mt-5 text-lg text-slate-600 dark:text-[#9CA3AF]">{item.school}</p>

                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400 dark:text-muted">
                    {item.gpa}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}