const cv = {
  name: "Philippe Hosey Vinchon",
  headline: "Staff Engineer · 18 years experience",
  location: "Kilkenny, Ireland · Remote",
  email: "p.vinchon@gmail.com",
  phone: "+353 85 117 4745",

  intro: [
    `For eighteen years, I’ve been building software: websites, microservices, data
     pipelines, and machine learning. If it had a buzz name, I probably touched it.
     I’ve learned how to break down problems, weigh different approaches, and choose
     the right trade-offs. Writing the code was often the slow part.`,
    `Now, I let AI agents do much of that work. I set the goal, answer their questions,
     and steer them towards a solution I know will work. I usually have several agents
     working in parallel, so I can focus on the next problem while they handle the
     implementation.`,
  ],

  projects: {
    title: "Personal projects",
    entries: [
      {
        from: "Sep 2025",
        to: "now",
        duration: "1 yr 2 mo",
        name: "LittleLamb.ie",
        url: "https://littlelamb.ie",
        bullets: [
          `Compliance platform that keeps the records a Tusla inspection asks for in one
           place: children, staff vetting and qualifications, incidents, complaints,
           insurance, medication, fire drills and attendance.`,
          `A readiness dashboard groups what is missing by the regulation it breaches, so
           a gap reads as the requirement it fails rather than an empty field.`,
        ],
        stack: ["Go", "GraphQL", "SvelteKit", "PostgreSQL", "Cloud Run"],
      },
      {
        from: "Feb 2023",
        to: "Sep 2024",
        duration: "1 yr 8 mo",
        name: "Nok.ie",
        url: "https://github.com/nokdotie",
        bullets: [
          `Every Irish property for sale in one place. Scrapers collect listings from
           various portals and merge duplicate listings.`,
          `Each listing is joined to public record, so it carries its energy rating from
           the SEAI register and what the house last sold for from the Property Price
           Register.`,
        ],
        stack: ["Scala 3", "ZIO", "GraphQL", "SvelteKit", "Firestore", "Cloud Run"],
      },
    ],
  },

  experience: {
    title: "Experience",
    entries: [
      {
        from: "Jan 2025",
        to: "Oct 2026",
        duration: "1 yr 10 mo",
        name: "Spoak Design",
        role: "Staff Software Engineer",
        url: "https://spoak.com",
        bullets: [
          `Built and ran the product’s image and text search: a CLIP model served on GPU,
           the Elasticsearch vector index, and the catalogue re-indexing.`,
          `Built the credit ledger that prices the generative tools, and moved the
           business off monthly subscriptions onto it.`,
          `Built the shared Scala libraries the other services depend on, replacing logic
           that had been duplicated across several monoliths.`,
        ],
        stack: ["Scala", "Python", "PyTorch", "Vue", "PostgreSQL", "Elasticsearch", "GCP"],
      },
      {
        from: "Oct 2023",
        to: "Jan 2025",
        duration: "1 yr 4 mo",
        name: "Utmost",
        role: "Senior Software Engineer",
        note: "(now Beeline)",
        url: "https://beeline.com",
        bullets: [
          `Replaced nulls and thrown exceptions with Optional and Result types, so a
           failure shows up in the function’s signature rather than in production.`,
          `Standardised the GraphQL API across teams, giving clients one contract instead
           of a variant per team.`,
        ],
        stack: ["Kotlin", "GraphQL"],
      },
      {
        from: "Dec 2021",
        to: "Jul 2023",
        duration: "1 yr 8 mo",
        name: "Thrive Global",
        role: "Senior Software Engineer",
        url: "https://thriveglobal.com",
        bullets: [
          `Designed and built video discovery from the backend to the UI, as rows of
           videos whose selection was personalised per user.`,
          `Built a testing framework that finds service degradation before a user reports it.`,
          `Built an automated dependency-update service, which keeps the platform patched
           without anyone tracking it by hand.`,
        ],
        stack: ["Kotlin", "TypeScript", "PostgreSQL", "Redis"],
      },
      {
        from: "Jun 2020",
        to: "Nov 2021",
        duration: "1 yr 6 mo",
        name: "TD Securities",
        role: "Senior Software Engineer",
        url: "https://tdsecurities.com",
        bullets: [
          `Ran weekly technical training for engineers across the team, and wrote the
           internal engineering standards that came out of it.`,
          `Replaced thrown exceptions with sealed traits naming each success and error
           state, so the compiler flags any state a caller leaves unhandled.`,
        ],
        stack: ["Scala", "MongoDB"],
      },
      {
        from: "Aug 2018",
        to: "May 2020",
        duration: "1 yr 10 mo",
        name: "Flow Commerce",
        role: "Senior Software Engineer",
        note: "(now Global-e)",
        url: "https://global-e.com",
        bullets: [
          `Built monitoring scrapers that validated customer integrations and surfaced
           operational issues across accounts.`,
          `Made Kubernetes CronJobs the standard for operational automation.`,
        ],
        stack: ["Scala", "Kubernetes", "AWS (RDS, S3)"],
      },
      {
        from: "Apr 2008",
        to: "Aug 2018",
        duration: "10 yrs",
        name: "Earlier",
        role: "Software Engineer",
        text: `Engineering roles at <strong>Intercom</strong>, <strong>Gilt</strong>,
               <strong>Wengo</strong>, <strong>PAP.fr</strong>, and more: distributed
               systems, search infrastructure, cloud platforms and developer tooling, in
               Scala, Java, Go, Ruby, C#, PHP, JavaScript and Python.`,
      },
    ],
  },
};
