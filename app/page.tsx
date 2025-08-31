"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stats, testimonials } from "@/data";
import { benefits } from "@/data/benefits";
import { courses } from "@/data/courses";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import React, { useState, useTransition } from "react";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [isPending, startTransition] = useTransition();

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    startTransition(() => {
      setShowModal(true);
      setStep(1);
      setFullName("");
      setEmail("");
    });
  };
  const handleCloseModal = () => {
    startTransition(() => setShowModal(false));
  };
  const handleContinue = () => {
    startTransition(() => setStep(2));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50"
        id="home"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {/* Master AI & ML with */}
                  Master Tech Skills That
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {" "}
                    {/* Growth Nation */}
                    Drive Your Career
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your career with industry-leading courses in Full
                  Stack Development, AI, Machine Learning, Data Analytics, and
                  more. Learn from experts and build real projects.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6"
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href={"/offer"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 bg-transparent"
                  >
                    Bundle Offer - 85% Off
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    12,000+ students
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.9/5 rating</span>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[500px]">
              {" "}
              {/* Adjust height as needed */}
              <Image
                src="/g1.png"
                alt="AI Learning Dashboard"
                fill
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-3xl opacity-20 transform scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-purple-800 mb-6 flex items-center gap-2 justify-center">
              <span role="img" aria-label="check"></span> FREE Live Webinar: What I Learned Over the Years
            </h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 text-gray-700 text-lg mb-6 flex-wrap justify-center">
              <span className="flex items-center gap-2 justify-center"><span role="img" aria-label="calendar">📅</span> <span className="font-semibold">Date:</span> [Insert Date]</span>
              <span className="flex items-center gap-2 justify-center"><span role="img" aria-label="clock">⏰</span> <span className="font-semibold">Time:</span> [Insert Time]</span>
              <span className="flex items-center gap-2 justify-center"><span role="img" aria-label="globe">🌐</span> Join from your phone/laptop</span>
            </div>
            <p className="font-semibold text-purple-700 mb-2 text-xl">Here’s what you’ll learn inside:</p>
            <ul className="text-gray-700 text-left space-y-2 max-w-2xl mx-auto mb-6 text-lg">
              <li className="flex items-center gap-2"><span role="img" aria-label="check">✔</span> Basics of Stock Market (Beginner-Friendly)</li>
              <li className="flex items-center gap-2"><span role="img" aria-label="check">✔</span> Proven Intraday Trading Strategy</li>
              <li className="flex items-center gap-2"><span role="img" aria-label="check">✔</span> Short-Term Swing Trading Strategy for consistent profits</li>
              <li className="flex items-center gap-2"><span role="img" aria-label="check">✔</span> Risk Management to protect your capital</li>
            </ul>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-xl p-4 mb-6 flex items-center gap-2 justify-center text-lg">
              <span className="font-semibold text-pink-700">🎁 BONUS:</span>
              <span className="text-gray-700">Free trading plan template and E-book for all attendees!</span>
            </div>
            <p className="text-pink-700 font-semibold mb-6 text-lg">🔥 Limited Seats! Don’t miss this opportunity to learn from real experience (and save years of trial & error).</p>
            <button
              onClick={handleOpenModal}
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-xl px-10 py-5 rounded-lg shadow-lg transition-all duration-200 text-center"
            >
              👉 Click here to Register NOW
            </button>

            {/* Modal Dialog */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
                  <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                    onClick={handleCloseModal}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  {step === 1 && (
                    <>
                      <h3 className="text-2xl font-bold text-purple-700 mb-2 text-center">Confirm Your Email</h3>
                      <p className="text-gray-600 mb-6 text-center">We’ll send your course access link to this email</p>
                      <form
                        className="space-y-4"
                        onSubmit={e => {
                          e.preventDefault();
                          handleContinue();
                        }}
                      >
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                          <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg transition-all duration-200 mt-2"
                        >
                          Continue to Next Step
                        </button>
                      </form>
                    </>
                  )}
                  {step === 2 && (
                    <div className="text-center py-8">
                      <h3 className="text-2xl font-bold text-purple-700 mb-2">Thank You!</h3>
                      <p className="text-gray-700 mb-4">We’ve sent your course access link to <span className="font-semibold">{email}</span>.</p>
                      <button
                        className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg transition-all duration-200"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Choose Your Tech Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner-friendly introductions to advanced specializations,
              find the perfect course to accelerate your tech career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {course.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{course.level}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                  <Link href={"/courses"}>
                    <Button className="w-full group-hover:bg-gray-900 transition-colors cursor-pointer">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Why Choose Growth Nation?
                </h2>
                <p className="text-xl text-gray-600">
                  We provide more than just courses - we offer a complete
                  learning ecosystem designed for your success.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex space-x-4">
                    {benefit.icon}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src={"/baanner-2.jpg"}
                alt="Learning Experience"
                className="rounded-2xl shadow-2xl"
                height={500}
                width={600}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Certificate Affiliated with
                    </p>
                    <p className="text-sm text-gray-600">
                      IIIT Bhubaneswar(Government University)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our graduates who transformed their careers with Growth
              Nation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">{`"${testimonial.content}"`}</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                      width={80}
                      height={80}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-purple-100">
              Join thousands of successful graduates and start your AI journey
              today. Limited-time offer: Get 30% off your first course!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              >
                Start Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6 bg-transparent"
              >
                View All Courses
              </Button>
            </div>
            <p className="text-sm text-purple-200">
              30-day money-back guarantee • No credit card required for trial
            </p>
          </div>
        </div>
      </section>
  </div>
  );
};

export default HomePage;
