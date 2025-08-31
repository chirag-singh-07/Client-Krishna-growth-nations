import {
  FaCode,
  FaMobileAlt,
  FaGamepad,
  FaPaintBrush,
  FaSearch,
  FaBullhorn,
  FaYoutube,
  FaAmazon,
  FaLock,
  FaUserTie,
  FaShoppingCart,
  FaVideo,
  FaFileInvoice,
  FaNetworkWired,
  FaGoogle,
  FaBook,
  FaReact,
  FaMicrosoft,
  FaWrench,
  FaTools,
  FaBolt,
  FaPhone,
  FaChartLine,
  FaCamera,
  FaPenFancy,
  FaHandshake,
  FaSitemap,
  FaPinterest,
  FaFacebook,
  FaInstagram,
  FaWordpress,
  FaFileAlt,
  FaPython,
  FaJava,
  FaPhp,
  FaAngular,
  FaBug,
  FaShieldAlt,
  FaGraduationCap,
} from "react-icons/fa";

export function createMultiLibUniqueIconPicker(...iconModules) {
  const used = new Set();

  return function getUniqueIcon() {
    const allIcons = iconModules.flatMap((mod) => Object.values(mod));
    const unusedIcons = allIcons.filter((icon) => !used.has(icon));

    if (unusedIcons.length === 0) {
      used.clear(); // Reset if all used
      return getUniqueIcon(); // Retry
    }

    const chosen = unusedIcons[Math.floor(Math.random() * unusedIcons.length)];
    used.add(chosen);
    return chosen;
  };
}

export const getRandomIconColor = () => {
  // const colors = [
  //   "#FF5733", // Red
  //   "#33FF57", // Green
  //   "#3357FF", // Blue
  //   "#F1C40F", // Yellow
  //   "#8E44AD", // Purple
  //   "#E67E22", // Orange
  //   "#2ECC71", // Emerald
  //   "#349

  const colors = [
    "from-emerald-500 to-emerald-600",
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-pink-500 to-pink-600",
    "from-yellow-500 to-yellow-600",
    "from-pink-400 to-pink-500",
    "from-red-500 to-red-600",
    "from-indigo-500 to-indigo-600",
    "from-cyan-500 to-cyan-600",
    "from-teal-500 to-teal-600",
    "from-orange-500 to-orange-600",
    "from-lime-500 to-lime-600",
    "from-rose-500 to-rose-600",
    "from-violet-500 to-violet-600",
    "from-fuchsia-500 to-fuchsia-600",
    "from-sky-500 to-sky-600",
    "from-amber-500 to-amber-600",
    "from-green-500 to-green-600",
    "from-zinc-500 to-zinc-600", // neutral grayscale
    "from-stone-500 to-stone-600", // muted tone
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export function getRelevantIcon(title) {
  const lower = title.toLowerCase();

  if (lower.includes("software")) return FaCode;
  if (lower.includes("app") || lower.includes("ios")) return FaMobileAlt;
  if (lower.includes("game")) return FaGamepad;
  if (lower.includes("python")) return FaPython;
  if (lower.includes("programming")) return FaCode;
  if (lower.includes("marketing") || lower.includes("digital"))
    return FaBullhorn;
  if (lower.includes("seo")) return FaSearch;
  if (
    lower.includes("design") ||
    lower.includes("photoshop") ||
    lower.includes("illustrator") ||
    lower.includes("branding")
  )
    return FaPaintBrush;
  if (lower.includes("youtube")) return FaYoutube;
  if (lower.includes("amazon")) return FaAmazon;
  if (lower.includes("hacking") || lower.includes("cyber")) return FaLock;
  if (lower.includes("freelancing")) return FaUserTie;
  if (lower.includes("ecom") || lower.includes("drop shipping"))
    return FaShoppingCart;
  if (lower.includes("video")) return FaVideo;
  if (lower.includes("tally") || lower.includes("invoice"))
    return FaFileInvoice;
  if (lower.includes("network")) return FaNetworkWired;
  if (lower.includes("adsense") || lower.includes("google")) return FaGoogle;
  if (lower.includes("basic") || lower.includes("training")) return FaBook;
  if (lower.includes("react")) return FaReact;
  if (lower.includes("microsoft")) return FaMicrosoft;
  if (lower.includes("asp") || lower.includes("mvc") || lower.includes("php"))
    return FaCode;
  if (lower.includes("plumber")) return FaWrench;
  if (lower.includes("mechanic") || lower.includes("auto")) return FaTools;
  if (lower.includes("electrician")) return FaBolt;
  if (lower.includes("mobile")) return FaPhone;
  if (lower.includes("option") || lower.includes("trading")) return FaChartLine;
  if (lower.includes("photography")) return FaCamera;
  if (lower.includes("content writing")) return FaPenFancy;
  if (lower.includes("communication") || lower.includes("closing"))
    return FaHandshake;
  if (lower.includes("wordpress")) return FaWordpress;
  if (lower.includes("resume") || lower.includes("linkedin")) return FaFileAlt;
  if (lower.includes("java")) return FaJava;
  if (lower.includes("php")) return FaPhp;
  if (lower.includes("angular")) return FaAngular;
  if (lower.includes("bug") || lower.includes("practical")) return FaBug;
  if (lower.includes("security")) return FaShieldAlt;
  if (lower.includes("pinterest")) return FaPinterest;
  if (lower.includes("facebook")) return FaFacebook;
  if (lower.includes("instagram")) return FaInstagram;
  if (lower.includes("tailor")) return FaSitemap;

  // Fallback
  return FaGraduationCap;
}
