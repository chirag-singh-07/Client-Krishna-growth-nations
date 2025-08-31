
import Link from "next/link";
import { Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 pb-8 border-b border-gray-800">
          <div className="space-y-6 pr-2">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-wide">Growth Nation</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              Transform your career with industry-leading courses in Full Stack Development, AI, Machine Learning, Data Analytics, and more. Learn from experts and build real projects.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white mb-3">Courses</h3>
            <div className="space-y-2 text-gray-400 text-base">
              <Link href="/courses/wordpress-course" className="hover:text-pink-400 transition-colors duration-150 block">WordPress Full Course</Link>
              <Link href="/courses/python" className="hover:text-pink-400 transition-colors duration-150 block">Python Master Course</Link>
              <Link href="/courses/stock-market-crash-course" className="hover:text-pink-400 transition-colors duration-150 block">Stock Market Crash Course</Link>
              <Link href="/courses/basic-of-web-development" className="hover:text-pink-400 transition-colors duration-150 block">Basic of Web Development</Link>
            </div>
          </div>

          <div className="space-y-6 pl-2">
            <h3 className="font-semibold text-lg text-white mb-3">Company</h3>
            <div className="space-y-2 text-gray-400 text-base">
              <Link href="/#about" className="hover:text-pink-400 transition-colors duration-150 block">About Us</Link>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contactgrowthnation@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors duration-150 block"
              >
                Contact
              </a>
            </div>
          </div>

        </div>
        <div className="pt-8 text-center text-gray-500 text-sm">
          <span>&copy; 2025 Growth Nation. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
