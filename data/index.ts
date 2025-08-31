import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import {
  BookOpen,
  GraduationCap,
  Home,
  Settings,
  Users,
  BarChart3,
  Calendar,
  FileText,
  HelpCircle,
} from "lucide-react"


export const stats = [
  { number: "12,000+", label: "Students Enrolled" },
  { number: "95%", label: "Job Placement Rate" },
  { number: "4.8/5", label: "Average Rating" },
  { number: "200+", label: "Course Hours" },
];

export const testimonials = [
  {
    name: "Rahul Sharma",
    role: "ML Engineer at Google",
    content:
      "Growth Nation's curriculum is incredibly comprehensive. I went from zero ML knowledge to landing my dream job at Google in just 8 months!",
  },
  {
    name: "Aman Verma",
    role: "AI Consultant",
    content:
      "The hands-on projects were game-changers. I built a portfolio that directly led to multiple job offers and my own consulting business.",
  },
  {
    name: "Neha Patel",
    role: "Data Scientist at Tesla",
    content:
      "The instructors are world-class. Learning from industry experts made all the difference in understanding complex AI concepts.",
  },
];

export const adminSideBarData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: IconDashboard,
    },
    {
      title: "Courses",
      url: "/admin/courses",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
};


export interface ICourse {
  id: string;
  title: string;
  instructor: string;
  category: string;
  students: number;
  duration: string;
  status: "Published" | "Draft" | "Archived";
  rating: number;
  price: number;
  createdAt: string;
}

export const initialCourses: ICourse[] = [
  {
    id: "1",
    title: "Introduction to React Development",
    instructor: "Sarah Johnson",
    category: "Web Development",
    students: 1250,
    duration: "8 weeks",
    status: "Published",
    rating: 4.8,
    price: 199,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Advanced JavaScript Concepts",
    instructor: "Michael Chen",
    category: "Programming",
    students: 890,
    duration: "6 weeks",
    status: "Published",
    rating: 4.6,
    price: 149,
    createdAt: "2024-02-01",
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    instructor: "Emily Rodriguez",
    category: "Design",
    students: 567,
    duration: "10 weeks",
    status: "Draft",
    rating: 4.9,
    price: 299,
    createdAt: "2024-02-15",
  },
  {
    id: "4",
    title: "Data Science with Python",
    instructor: "David Kim",
    category: "Data Science",
    students: 2100,
    duration: "12 weeks",
    status: "Published",
    rating: 4.7,
    price: 399,
    createdAt: "2024-01-08",
  },
  {
    id: "5",
    title: "Mobile App Development",
    instructor: "Lisa Wang",
    category: "Mobile Development",
    students: 445,
    duration: "14 weeks",
    status: "Archived",
    rating: 4.5,
    price: 349,
    createdAt: "2023-12-20",
  },
];

export const categories = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Design",
  "Programming",
  "Marketing",
  "Business",
  "Photography",
  "Music",
  "Language Learning",
];

export const durations = [
  "4 weeks",
  "6 weeks",
  "8 weeks",
  "10 weeks",
  "12 weeks",
  "14 weeks",
  "16 weeks",
  "Self-paced",
];


export const navigationItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
    isActive: false,
  },
  {
    title: "Courses",
    url: "#",
    icon: BookOpen,
    isActive: true,
  },
  {
    title: "Students",
    url: "#",
    icon: Users,
    isActive: false,
  },
  {
    title: "Instructors",
    url: "#",
    icon: GraduationCap,
    isActive: false,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
    isActive: false,
  },
  {
    title: "Schedule",
    url: "#",
    icon: Calendar,
    isActive: false,
  },
]

export const managementItems = [
  {
    title: "Reports",
    url: "#",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help & Support",
    url: "#",
    icon: HelpCircle,
  },
]