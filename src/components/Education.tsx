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
    <section
      id="education"
      className="
        py-16
        sm:py-20
        md:py-24
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
        "
      >
        {/* ========================================
            SECTION HEADER
        ========================================= */}

        <Reveal
          className="
            mb-10
            sm:mb-12
            md:mb-16
            lg:mb-20
          "
        >
          <p
            className="
              section-label
              mb-4
              sm:mb-6
            "
          >
            EDUCATION
          </p>

          <h2
            className="
              display-heading
              text-4xl
              leading-tight
              text-ink

              sm:text-5xl
              md:text-6xl
              lg:text-7xl

              dark:text-[#F3F4F6]
            "
          >
            Academic foundation.
          </h2>
        </Reveal>

        {/* ========================================
            EDUCATION ENTRIES
        ========================================= */}

        <div
          className="
            space-y-10
            sm:space-y-12
            lg:space-y-16
          "
        >
          {education.map((item, index) => (
            <Reveal
              key={item.school}
              delay={index * 0.1}
            >
              <article
                className="
                  grid
                  min-w-0
                  gap-5
                  border-t
                  border-border
                  pt-6

                  sm:gap-6
                  sm:pt-8

                  lg:grid-cols-[0.8fr_2fr]
                  lg:gap-12
                  lg:pt-10

                  dark:border-[#2A3445]
                "
              >
                {/* ==================================
                    YEAR
                =================================== */}

                <div>
                  <p
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#355070]

                      sm:text-3xl

                      md:text-4xl

                      lg:text-5xl

                      dark:text-[#8FA8C7]
                    "
                  >
                    {item.year}
                  </p>
                </div>

                {/* ==================================
                    DEGREE INFORMATION
                =================================== */}

                <div className="min-w-0">
                  <h3
                    className="
                      text-2xl
                      font-bold
                      leading-tight
                      text-ink

                      sm:text-3xl

                      dark:text-[#F3F4F6]
                    "
                  >
                    {item.degree}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-base
                      font-medium
                      leading-relaxed
                      text-[#355070]

                      sm:text-lg

                      lg:text-xl

                      dark:text-[#8FA8C7]
                    "
                  >
                    {item.field}
                  </p>

                  <p
                    className="
                      mt-4
                      text-base
                      leading-7
                      text-slate-600

                      sm:mt-5
                      sm:text-lg

                      dark:text-[#9CA3AF]
                    "
                  >
                    {item.school}
                  </p>

                  <p
                    className="
                      mt-3
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-slate-400

                      sm:text-sm
                      sm:tracking-[0.25em]

                      dark:text-muted
                    "
                  >
                    {item.gpa}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}