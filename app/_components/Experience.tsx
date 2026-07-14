import { experience } from "@/data/portfolio";
import { LuMapPin, LuCalendar, LuChevronsRight, LuChevronDown } from "react-icons/lu";

const Experience = () => {
  return (
    <section className="mt-5">
      <div className="max-w-4xl space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <details
              key={index}
              className="group transition"
            >
              <summary className="flex cursor-pointer flex-col gap-4 list-none md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="font-semibold text-foreground">{item.company}</span>
                  </div>
                  <div className="text-lg font-semibold">{item.role}</div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                    {item.type ? <span>{item.type}</span> : null}
                    <span className="inline-flex items-center gap-1">
                      <LuCalendar className="h-4 w-4" /> {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <LuMapPin className="h-4 w-4" /> {item.location}
                    </span>
                  </div>
                </div>

                <LuChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="pb-5 pt-2 text-gray-300">
                <p className="mt-4 text-gray-300">{item.summary}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3">
                      <LuChevronsRight className="mt-1 h-4 w-4 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {item.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience