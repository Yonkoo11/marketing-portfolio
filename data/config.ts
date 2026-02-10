export const profile = {
  name: "Dr. Alex",
  handle: "@SOLIGXBT",
  profileImage: "https://pbs.twimg.com/profile_images/1980803386858414080/GWu3ilf9.jpg",
  founded: 2021,
  bio: "I make things people actually use, and I know how to get eyes on them.",
  tagline: "All the News That's Fit to Ship",
  status: "Currently Accepting Projects",
} as const;

export const contact = {
  x: "https://twitter.com/soligxbt",
  xHandle: "@SOLIGXBT",
  email: "alexmustapha11@gmail.com",
  telegram: "https://t.me/THaFa_11",
  telegramHandle: "@THaFa_11",
} as const;

export const stats = {
  followers: "2,142",
  engagementRate: "12%",
  engagementContext: "4-6x avg",
  buildingSince: "2021",
} as const;

export const tickerItems = [
  "Blue Verified on X",
  { text: "12% Engagement Rate", highlight: true, suffix: " (Industry avg: 1-3%)" },
  "2nd Place Hackathon Winner",
  "Building Since 2021",
  "Full Stack Developer",
  "Influencer Network Access",
] as const;

export const caseStudies = [
  {
    category: "Core Marketing Team",
    title: "Truth Bounty: Hackathon Podium Finish",
    excerpt: "Part of the core marketing team for @truthbounty, a startup that secured 2nd place at a major hackathon. Contributed to positioning, content strategy, and community growth.",
    result: "2nd Place \u2014 Hackathon",
  },
  {
    category: "Technical Marketing",
    title: "Builder Who Markets, Marketer Who Builds",
    excerpt: "I don't just write about products\u2014I can build them. Full-stack background means I speak developer and translate it for everyone else.",
    result: "Full Stack Dev",
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Content Strategy",
    description: "Posts that don't read like corporate garbage. Memes that land, threads that educate, takes that spark conversation.",
    tags: ["Memes", "Threads", "Copywriting"],
  },
  {
    number: "02",
    title: "Technical Content",
    description: "Product explainers, technical breakdowns, documentation. Complex topics made accessible without dumbing them down.",
    tags: ["Product", "Technical", "Docs"],
  },
  {
    number: "03",
    title: "Community & Growth",
    description: "Building audiences since 2021. I know what works, what doesn't, and how to build genuine engagement\u2014not bot farms.",
    tags: ["Twitter/X", "Discord", "Community"],
  },
] as const;
