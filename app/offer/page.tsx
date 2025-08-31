"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Clock,
  CheckCircle,
  Shield,
  ChevronDown,
  ChevronUp,
  Zap,
  Target,
  Palette,
  Code,
  TrendingUp,
  Briefcase,
  ArrowRight,
  Monitor,
} from "lucide-react";
import OfferModelDialog from "@/components/custom/OfferModelDialog";

export default function CourseLandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45,
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const courseCategories = [
    {
      icon: Code,
      title: "Web Development",
      courses: "15+ Courses",
      description: "Full-stack development, React, Node.js",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      courses: "12+ Courses",
      description: "SEO, Social Media, Analytics",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      courses: "10+ Courses",
      description: "Figma, Adobe XD, Design Systems",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Artificial Intelligence",
      courses: "8+ Courses",
      description: "Machine Learning, Python, TensorFlow",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Briefcase,
      title: "Business & Finance",
      courses: "6+ Courses",
      description: "Entrepreneurship, Investment, Strategy",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: Target,
      title: "Project Management",
      courses: "9+ Courses",
      description: "Agile, Scrum, Leadership",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const faqs = [
    {
      question: "Will I receive any recognition upon course completion?",
      answer:
        "You will receive a completion acknowledgement and access to shareable course achievements. These can be used to demonstrate course completion in portfolios or profiles.",
    },
    {
      question: "Do I need prior experience to enroll in these courses?",
      answer:
        "Our courses are designed for all skill levels. Each course includes foundational content for beginners while also covering advanced topics for experienced professionals.",
    },
    {
      question: "How long will I have access to the course materials?",
      answer:
        "You receive lifetime access to all course materials, including future updates. Learn at your own pace and revisit content whenever needed.",
    },
    {
      question: "Can I access courses on different devices?",
      answer:
        "Absolutely. Our platform is fully responsive and optimized for desktop, tablet, mobile devices, and smart TVs for maximum flexibility.",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Lifetime Access",
      description:
        "Learn at your own pace with unlimited access to all course materials",
    },
    {
      icon: Monitor,
      title: "Multi-Device Learning",
      description: "Access courses seamlessly across all your devices",
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description:
        "Resume reviews, interview preparation, and placement support to help you land roles.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-fade-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .animate-fade-left {
            animation: fadeInLeft 0.6s ease-out forwards;
          }
          .animate-fade-right {
            animation: fadeInRight 0.6s ease-out forwards;
          }
          .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientShift 8s ease infinite;
          }

          .glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow:
              0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          .text-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="relative container mx-auto px-4 py-20 lg:py-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              {/* <div>
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                  🚀 Affiliated with IIIT Bhubaneswar (Government
                  University)
                </Badge>
              </div> */}
          
            </div>

            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Master{" "}
                <span className="text-gradient">90+ Premium Courses</span>
                <br />
                for Just <span className="text-emerald-400">₹699</span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-3xl mx-auto">
                Transform your career with our comprehensive course collection.
                Originally{" "}
                <span className="line-through text-red-400">₹5,999</span>, now
                available at an exclusive price.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-1000 delay-600 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => setIsModalOpen(true)}
              >
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="h-5 w-5" />
                <span className="font-medium">
                  Join 10,000+ successful learners
                </span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div
              className={`glass-card rounded-2xl p-6 max-w-lg mx-auto shadow-xl transition-all duration-1000 delay-800 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
            >
              <p className="text-slate-700 font-semibold mb-4 flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Offer expires in:
              </p>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm"
                  >
                    <div className="text-2xl font-bold text-slate-900">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Course Collection
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access 90+ premium courses across 6 major categories, designed by
              industry experts and updated regularly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courseCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover-lift border-0 shadow-lg bg-white overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {category.courses}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about our courses
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="mb-4 border shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-slate-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-500" />
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-slate-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Modal */}
      <OfferModelDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
