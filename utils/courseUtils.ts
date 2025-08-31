// Random student count strings
const studentCountOptions = ["5K+", "10K+", "12K+", "25K+", "50K+", "100K+"];

// Common course features
export const possibleFeatures = [
  "Downloadable resources",
  "Access on mobile & desktop",
  "Certificate of completion",
  "Quizzes and assignments",
  "Lifetime access",
  "30+ hours of HD video",
  "Full source code",
  "Practice exercises",
  "Real-world projects",
  "Free updates",
  "Completion badge",
  "Beginner-friendly lessons",
  "Progress tracking",
  "Hands-on coding challenges",
  "Multilingual subtitles",
  "Offline viewing support",
  "Interactive quizzes",
  "Project-based modules",
  "Final course certificate",
  "Exclusive bonus content",

  // New additions
  "Step-by-step instructions",
  "Community forum access",
  "Topic-wise breakdown",
  "No coding experience required",
  "End-of-section quizzes",
  "Interactive coding environments",
  "Visual learning aids",
  "AI-assisted tools & tips",
  "Interview preparation material",
  "Resume building guide",
  "Cheat sheets & reference docs",
  "Regular content updates",
  "Weekly practice tasks",
  "Industry examples & case studies",
  "Mobile-friendly course design",
  "Bonus PDFs and eBooks",
  "Voiceover in regional languages",
  "Keyboard shortcuts reference",
  "Certification exam tips",
  "Mini projects with walkthroughs",
];

// Random guarantees
const guaranteeOptions = [
  "30-Day Money-Back Guarantee",
  "7-Day Satisfaction Promise",
  "No Refund Policy",
  "14-Day Trial Access",
];

// type SubCourseColorSet = {
//   color: string;
//   bgColor: string;
//   textColor: string;
// };

const colorSet = [
  "from-orange-500 to-red-500",
  "from-green-500 to-emerald-500",
  "from-purple-500 to-pink-500",
  "from-blue-500 to-cyan-500",
];

const bgColorSet = [
  "bg-orange-50",
  "bg-green-50",
  "bg-purple-50",
  "bg-blue-50",
];

const textColorSet = [
  "text-orange-600",
  "text-green-600",
  "text-purple-600",
  "text-blue-600",
];

// Generate random float like 4.7, 4.8, etc.
export function getRandomRating(): number {
  const options = [4.5, 4.6, 4.7, 4.8, 4.9];
  return options[Math.floor(Math.random() * options.length)];
}

export function getRandomReviewCount(): number {
  return Math.floor(Math.random() * (20000 - 1000) + 1000); // between 1000 and 20000
}

export function getRandomStudentCount(): string {
  return studentCountOptions[
    Math.floor(Math.random() * studentCountOptions.length)
  ];
}

export function getRandomGuarantee(): string {
  return guaranteeOptions[Math.floor(Math.random() * guaranteeOptions.length)];
}

export function getRandomFeatures(count = 5): string[] {
  const shuffled = possibleFeatures.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export const getRandomLessonCount = (): number => {
  const min = 4;
  const max = 20;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getBgColor = () => {
  for (let i = 0; i < bgColorSet.length; i++) {
    return bgColorSet[i];
  }
};

export const getTextColor = () => {
  for (let i = 0; i < textColorSet.length; i++) {
    return textColorSet[i];
  }
};

export const getColor = () => {
  for (let i = 0; i < colorSet.length; i++) {
    return colorSet[i];
  }
};
