import { Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Growth Nation</span>
            </div>
            <p className="text-gray-400">
              Transform your career with industry-leading courses in Full Stack
              Development, AI, Machine Learning, Data Analytics, and more. Learn
              from experts and build real projects.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Courses</h3>
            <div className="space-y-2 text-gray-400">
              <p>AI Fundamentals</p>
              <p>Machine Learning</p>
              <p>Deep Learning</p>
              <p>AI Automation</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-gray-400">
              <p>About Us</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-2 text-gray-400">
              <p>Help Center</p>
              <p>Community</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Growth Nation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
