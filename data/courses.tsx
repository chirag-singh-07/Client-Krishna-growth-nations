import {
  Code,
  Database,
  Brain,
  Users,
  Megaphone,
  Share2,
} from "lucide-react";

export const courses = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full Stack Development",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js, and databases to build full-stack applications.",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Analytics",
    description:
      "Analyze and visualize data using Excel, SQL, Python, Power BI, and Tableau.",
    duration: "10 weeks",
    level: "Beginner",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Artificial Intelligence (AI)",
    description:
      "Understand AI fundamentals, use cases, and how to build AI-powered tools.",
    duration: "8 weeks",
    level: "Beginner",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Machine Learning (ML)",
    description:
      "Dive deep into ML algorithms, training models, and real-world implementation.",
    duration: "12 weeks",
    level: "Intermediate",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    description:
      "Learn SEO, SEM, content marketing, email campaigns, and performance analytics.",
    duration: "6 weeks",
    level: "Beginner",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Marketing",
    description:
      "Create strategies and ads for platforms like Instagram, LinkedIn, Facebook & YouTube.",
    duration: "5 weeks",
    level: "Beginner",
    color: "from-pink-400 to-pink-500",
  },
];
