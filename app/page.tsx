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
import { ArrowRight, Clock, Star } from "lucide-react";
import HeroCarousel from "@/components/custom/HeroCarousel";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (!hash) return;
      // support common aliasing (reviews -> testimonials)
      const aliasMap: Record<string, string> = {
        "#reviews": "#testimonials",
        "#review": "#testimonials",
        "#testimonials": "#testimonials",
        "#about": "#about",
      };
      const normalized = aliasMap[hash] || hash;
      const id = normalized.replace("#", "");
      // debug - log normalized target
      // eslint-disable-next-line no-console
      console.debug("home: detected hash", hash, "normalized->", normalized);

      // try immediate scroll; if not present, retry a few times to allow layout to finish
      let attempts = 0;
      const maxAttempts = 6; // ~1.8s total
  const tryScroll = () => {
        attempts += 1;
        const el = document.getElementById(id);
        // eslint-disable-next-line no-console
        console.debug(`home: tryScroll attempt=${attempts} id=${id} found=${!!el}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };
      if (!tryScroll()) {
        const interval = setInterval(() => {
          if (tryScroll() || attempts >= maxAttempts) {
            clearInterval(interval);
          }
        }, 300);
        return () => clearInterval(interval);
      }
      } catch {
      // ignore in SSR or if access denied
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50"
        id="home"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-20">
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
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6"
                  >
                    Start Learning Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
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
              <HeroCarousel />
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

            <a
              href="https://whatsapp.com/channel/0029VbAvgYaAojYq92wzif3f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-xl px-10 py-5 rounded-lg shadow-lg transition-all duration-200 text-center rounded-lg"
            >
              👉 Click here to Register NOW
            </a>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="courses" className="py-8 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-2 lg:px-4">
          <div className="text-center space-y-2 mb-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Choose Your Tech Journey
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              From beginner-friendly introductions to advanced specializations, find the perfect course to accelerate your tech career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-3 lg:gap-3">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group border-0 shadow-md p-2 m-0"
                style={{ minHeight: '180px' }}
              >
                <CardHeader className="space-y-1 p-2 pb-0">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200`}
                  >
                    {course.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{course.level}</Badge>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                    <CardTitle className="text-base font-semibold">{course.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-2 pt-0">
                  <CardDescription className="text-sm leading-snug">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-3">
            <Link href="/courses">
              <Button className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg shadow-md transition-all duration-200">
                View More &gt;
              </Button>
            </Link>
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
                <div className="rounded-2xl shadow-2xl overflow-hidden">
                  {!loadVideo ? (
                    <div
                      className="w-full h-[500px] rounded-2xl bg-black flex items-center justify-center cursor-pointer"
                      onClick={() => setLoadVideo(true)}
                      role="button"
                      aria-label="Load video"
                    >
                      <div className="text-white text-center">
                        <div className="mb-4 text-2xl font-semibold">Click to load video</div>
                        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src="https://drive.google.com/file/d/1Kx8bZVNuBAyHR-lxfvNW35lXnR8PvnkY/preview"
                      width="600"
                      height="500"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="Learning Experience Video"
                      className="w-full h-[500px] rounded-2xl"
                      style={{ background: "#000" }}
                    ></iframe>
                  )}
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
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                            style={{ background: `linear-gradient(135deg,#6EE7B7,#10B981)` }}
                          >
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")}
                          </div>
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
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
                >
                  Start Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
  </div>
  );
};

export default HomePage;
