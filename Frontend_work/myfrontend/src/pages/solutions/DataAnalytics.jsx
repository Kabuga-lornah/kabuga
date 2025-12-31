import React from 'react';
import dataVideo from '/data video.mp4';

const DataAnalytics = () => {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased">

      {/* HERO */}
      <section className="pt-28 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 mb-6">
              Intelligence Foundations
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.05]">
              Data systems that<br />drive decisions
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10">
              Devixa designs data pipelines, analytics frameworks, and
              decision-ready insights that help organizations understand
              performance, predict outcomes, and act with confidence.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <button className="bg-slate-900 text-white px-8 py-4 text-sm font-semibold rounded-md hover:bg-cyan-600 transition-all duration-300 shadow-sm">
                Request Data Assessment
              </button>
              <span className="text-xs text-slate-500 tracking-wide">
                From raw data to operational intelligence
              </span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-950 aspect-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            >
              <source src={dataVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-100">
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            What Data & Analytics means at Devixa
          </h2>
          <p className="text-slate-600 max-w-3xl leading-relaxed text-lg">
            At Devixa, Data & Analytics is not about charts for reporting sake.
            We engineer systems that collect, clean, structure, and analyze
            data so leadership teams can make faster, more accurate decisions —
            and prepare their organizations for AI-driven workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Data Engineering", desc: "Designing reliable pipelines, ETL workflows, and auditable data models." },
            { title: "Analytics & Insights", desc: "KPI frameworks aligned to business goals with deep performance analysis." },
            { title: "Decision Intelligence", desc: "Translating insights into actions through rule-based logic." },
            { title: "AI Readiness", desc: "Clean datasets and feature-ready structures for machine learning." }
          ].map((pillar, i) => (
            <div
              key={i}
              className="pt-6 border-t-2 border-slate-900 hover:border-cyan-600 transition-colors"
            >
              <h4 className="text-sm font-semibold uppercase mb-4 tracking-wide">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-24 bg-slate-50 px-6 lg:px-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold mb-6">The problems we solve</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We fix the foundation before adding intelligence.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {[
              "Data scattered across systems and spreadsheets",
              "Reports that arrive too late to be useful",
              "Inconsistent or unreliable numbers",
              "No single source of truth",
              "Decisions based on intuition, not evidence",
              "AI ideas blocked by poor data quality"
            ].map((problem, i) => (
              <div key={i} className="flex gap-4 items-start pb-4 border-b border-slate-200">
                <span className="text-cyan-600 text-sm font-semibold">
                  0{i + 1}
                </span>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 mb-16 text-center">
          Core Analytics Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            {
              title: "Data Architecture & Pipelines",
              items: ["Data source mapping", "Pipeline design (APIs, ETL)", "Data warehousing strategy"],
              outcome: "Reliable, centralized, and scalable data infrastructure."
            },
            {
              title: "Business Analytics & Reporting",
              items: ["KPI definition and alignment", "Dashboards and reports", "Performance tracking"],
              outcome: "Clear visibility into what is happening – and why."
            },
            {
              title: "Advanced Analytics & Forecasting",
              items: ["Trend analysis", "Scenario modeling", "Early predictive logic"],
              outcome: "Anticipate risks and opportunities before they happen."
            },
            {
              title: "Data for AI & Automation",
              items: ["Cleaning and labeling strategies", "Feature engineering support", "AI-ready datasets"],
              outcome: "Your data becomes usable for intelligent systems."
            }
          ].map((service, i) => (
            <div
              key={i}
              className="p-10 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold mb-8">{service.title}</h3>

              <ul className="space-y-4 mb-10">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="h-px w-5 bg-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-100">
                <span className="text-xs font-semibold uppercase text-slate-500 block mb-2">
                  Primary Outcome
                </span>
                <p className="text-sm font-medium">{service.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-6 lg:px-12 text-center bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6">
            Turn data into decisions
          </h2>
          <p className="text-slate-300 mb-10 text-lg leading-relaxed">
            Whether you are struggling with reporting or preparing for AI,
            Devixa helps you build data systems you can trust.
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-slate-900 px-10 py-4 text-sm font-semibold rounded-md transition-all shadow-lg">
            Book a Data & Analytics Assessment
          </button>
        </div>
      </section>

    </div>
  );
};

export default DataAnalytics;
