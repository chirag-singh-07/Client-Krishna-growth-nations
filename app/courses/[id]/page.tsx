"use client";

import { getCourseWithoutUrls, getDiscount } from "@/utils";
import { CoursesData } from "@/data/CoursesData";
import {
  Clock,
  BarChart3,
  ShoppingCart,
  Star,
  Users,
  Award,
  PlayCircle,
  CheckCircle,
  Globe,
  Download,
  Disc2Icon,
} from "lucide-react";
import { use, useEffect, useState } from "react";
import ModalDialog from "@/components/custom/modal-dialog";
import PromoCodeModal from "@/components/custom/pronmoCodeDialog";
import Script from "next/script";

type CourseProps = {
  id: string;
  title: string;
  smallDescription: string;

  IconColor: string;
  time: string;
  feedbackVideo?: string; // Optional feedback video
  Url: string;
  lessons?: number; // Total lessons in the module
  included?: boolean; // Is the module included in base course?
  // badgeColor?: string; // Optional: for label/chip background
  color?: string; // Gradient text/icon color (e.g., "from-orange-500 to-red-500")
  bgColor?: string; // Background color (e.g., "bg-orange-50")
  textColor?: string; // Text color (e.g., "text-orange-600")
};

export default function CourseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  // Fetch the course data based on the ID
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [PronmoCode, setPronmoCode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("promoCode") || "";
    }
    return "";
  });

  // when page is load then get the course data and promocode from localstorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCode = localStorage.getItem("promoCode");
      if (storedCode) {
        setPronmoCode(storedCode);
      }
    }
  }, []);

  const getCourses = getCourseWithoutUrls(CoursesData, id);

  function parseStudentCount(input: string): string {
    const cleaned = input.replace("+", "").toUpperCase();

    let number: number;

    if (cleaned.endsWith("K")) {
      number = parseFloat(cleaned) * 1000;
    } else if (cleaned.endsWith("M")) {
      number = parseFloat(cleaned) * 1000000;
    } else if (cleaned.endsWith("B")) {
      number = parseFloat(cleaned) * 1000000000;
    } else {
      number = parseFloat(cleaned);
    }

    return number.toLocaleString(); // adds commas like 50,000
  }

  function splitIntoThreeParts(text: string): string[] {
    const words = text.split(" ");
    const totalWords = words.length;
    const chunkSize = Math.ceil(totalWords / 3);

    const part1 = words.slice(0, chunkSize).join(" ").trim();
    const part2 = words
      .slice(chunkSize, chunkSize * 2)
      .join(" ")
      .trim();
    const part3 = words
      .slice(chunkSize * 2)
      .join(" ")
      .trim();

    return [part1, part2, part3];
  }

  function formatNumberWithCommas(num: number): string {
    return num.toLocaleString("en-IN"); // use "en-US" or "en-IN" as needed
  }

  // console.log(getCourses)

  const studentCount = parseStudentCount(getCourses.totalStudents);
  const paragraphs = splitIntoThreeParts(getCourses.longDescription);
  const formattedReviews = formatNumberWithCommas(getCourses.totalReviews ?? 0);
  const discountPercentage = getDiscount(
    getCourses.price,
    getCourses.salePrice
  );

  const courseForPayment = {
    id: getCourses.id,
    title: getCourses.title,
    price: getCourses.salePrice,
    PromoCodePrice: getCourses.PromoCodePrice,
    promoCode: getCourses.promoCode,
  };

  const handleBuyOpen = () => {
    setIsModalOpen(true);
    // Call the function to send email
    localStorage.setItem("courseId", getCourses.id);
  };

  const handlePronmoCodeOpen = () => {
    setIsPromoModalOpen(true);
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 lg:gap-12">
            {/* Left Section - Course Information */}
            <div className="space-y-8">
              {/* Course Badge */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold shadow-lg">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  Bestseller
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold shadow-lg">
                  <Users className="w-4 h-4 mr-2" />
                  {studentCount}+ Students
                </span>
              </div>

              {/* Course Title with Gradient */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                  {getCourses.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">
                    {getCourses.rating}
                  </span>
                  <span className="text-gray-500">
                    ({formattedReviews} Reviews)
                  </span>
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-medium">
                  {getCourses.smallDescription}
                </p>
              </div>

              {/* Enhanced Course Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Duration
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {getCourses.time}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Level</p>
                      <p className="text-lg font-bold text-gray-900">
                        {getCourses.level}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certificate info removed per request */}
              </div>

              {/* Enhanced Long Description */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                  What You&apos;ll Master
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {getCourses?.skills?.map((skill: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  {paragraphs.map((para, idx) => (
                    <p key={idx} className={idx === 0 ? "text-lg" : ""}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Sub Courses Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                  Course Modules
                </h3>

                {getCourses?.subCourses && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getCourses?.subCourses?.map(
                      (course: CourseProps, index: number) => (
                        <div
                          key={index}
                          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                        >
                          {/* Course Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <span className="text-white font-bold text-lg">
                                {index + 1}
                              </span>
                            </div>
                            <div
                              className={`px-3 py-1 rounded-full ${course.bgColor} ${course.textColor} text-sm font-semibold`}
                            >
                              {course.time}
                            </div>
                          </div>

                          {/* Course Content */}
                          <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {course.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {course.smallDescription}
                          </p>

                          {/* Course Stats */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <PlayCircle
                                className={`w-4 h-4 ${course.textColor}`}
                              />
                              <span className="text-sm text-gray-600">
                                {course.lessons} lessons
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-600">
                                Included
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${course.color} transition-all duration-500 group-hover:w-full`}
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Course Path Indicator */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">
                        Start Here
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-300 to-purple-300"></div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {getCourses.endLabel || "Complete the Course"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feedback Video Section */}
              </div>
              {/* video here */}
              {getCourses?.feedbackVideo && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                    Student Feedback
                  </h3>

                  {/* Force proper height for shorts */}
                  <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={getCourses.feedbackVideo}
                      title="Student Feedback"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[500px] rounded-xl"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Right Section */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                {/* Pricing Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="text-center">
                    <p className="text-blue-100 mb-2">Limited Time Offer</p>
                    <div className="flex items-center justify-center gap-4 mb-3">
                      {/* <span className="text-4xl sm:text-5xl font-black">
                      ₹
                      {PronmoCode &&
                      PronmoCode.toUpperCase() === getCourses.promoCode
                        ? getCourses.salePrice
                        : getCourses.PromoCodePrice}
                    </span> */}
                      <span className="text-4xl sm:text-5xl font-black">
                        ₹
                        {
                          getCourses.promoCode
                            ? PronmoCode &&
                              PronmoCode.toUpperCase() === getCourses.promoCode
                              ? getCourses.salePrice // applied promo
                              : getCourses.PromoCodePrice // not applied yet
                            : getCourses.salePrice // no promoCode for course
                        }
                      </span>
                      <span className="text-xl text-blue-200 line-through">
                        ₹{getCourses.price}
                      </span>
                    </div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500 text-white text-sm font-bold animate-pulse">
                      🔥 {discountPercentage}% OFF - 2 days left!
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Enhanced Buy Button */}
                  <button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 mb-6 group cursor-pointer"
                    onClick={handleBuyOpen}
                  >
                    <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
                    <span className="text-lg">Enroll Now</span>
                  </button>

                  {/* Enhanced Pronmocode Button */}
                  <button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 mb-6 group cursor-pointer"
                    onClick={handlePronmoCodeOpen}
                  >
                    <Disc2Icon className="w-6 h-6 group-hover:animate-bounce" />
                    <span className="text-lg">Have a Promo Code?</span>
                  </button>

                  {/* Money Back Guarantee */}
                  <div className="text-center mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-green-800 font-semibold">
                      {/* 💰 30-Day Money-Back Guarantee */}
                      💰 Value for money
                    </p>
                  </div>

                  {/* Enhanced Course Includes */}
                  <div className="space-y-4">
                    {getCourses.id === "stock-market-crash-course" && (
                      <div className="rounded-lg p-3 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200">
                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-yellow-600" />
                          <div>
                            <p className="text-sm text-yellow-800 font-semibold">
                              Also includes
                            </p>
                            <p className="text-lg font-bold text-yellow-900">
                              90+ course links
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      This course includes:
                    </h4>

                    {[
                      {
                        icon: PlayCircle,
                        text: "Live trading and sessions recordings",
                        color: "text-red-500",
                      },
                      {
                        icon: Download,
                        text: "Downloadable resources",
                        color: "text-blue-500",
                      },
                      {
                        icon: Globe,
                        text: "Access on mobile & desktop",
                        color: "text-green-500",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className="text-gray-700 font-medium">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Student Stats */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <p className="text-2xl font-bold text-blue-600">
                          {getCourses.totalStudents}
                        </p>
                        <p className="text-sm text-gray-600">Students</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-xl">
                        <p className="text-2xl font-bold text-green-600">
                          {getCourses.rating}★
                        </p>
                        <p className="text-sm text-gray-600">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalDialog
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          course={courseForPayment}
        />
        <PromoCodeModal
          course={courseForPayment}
          isOpen={isPromoModalOpen}
          onClose={() => setIsPromoModalOpen(false)}
          promoCode={PronmoCode}
          setPromoCode={setPronmoCode}
        />
      </div>
    </>
  );
}
