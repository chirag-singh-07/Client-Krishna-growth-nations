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
import { CoursesData } from "@/data/CoursesData";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const categoryName = [
  "Development Courses",
  "Programming Courses",
  "Marketing Courses",
  "SEO Courses",
  "Graphic Design Courses",
  "YouTube Courses",
  "Amazon Courses",
  "Ethical Hacking Courses",
  "Freelancing Courses",
  "Ecommerce Courses",
  "Framework Courses",
  "Other Courses",
];

const CoursesPage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (!hash) return;

      // support aliasing (reviews -> testimonials)
      const aliasMap: Record<string, string> = {
        "#reviews": "#testimonials",
        "#review": "#testimonials",
      };
      const normalized = aliasMap[hash] || hash;
      const id = normalized.replace("#", "");

      // if not on root, navigate to root with normalized hash via a full navigation
      if (window.location.pathname !== "/") {
        // build explicit absolute URL like: https://host.tld/#testimonials
        const target = `${window.location.origin}/#${id}`;
        // debug - helps local troubleshooting
        // eslint-disable-next-line no-console
        console.debug("courses -> redirect to", target, "from", window.location.href);
        // replace current entry so back doesn't stay on /courses#... page
        try {
          window.location.replace(target);
        } catch (err) {
          // fallback to assignment if replace is somehow blocked
          // eslint-disable-next-line no-console
          console.warn("location.replace failed, falling back to href assign", err);
          window.location.href = target;
        }
        // as a second-layer fallback (some environments may ignore replace), assign after short delay
        setTimeout(() => {
          if (window.location.href !== target) {
            window.location.href = target;
          }
        }, 250);
        return;
      }

      // otherwise, we're already on root - try to scroll to the element
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      if (!tryScroll()) {
        const t = setTimeout(tryScroll, 300);
        return () => clearTimeout(t);
      }
    } catch {
      // ignore in SSR
    }
  }, []);
  return (
    <>
      <div className="min-h-screen ">
        <div className="max-w-9xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Main heading  */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              📚 Explore Our Courses
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive collection of courses designed to help
              you master the skills you need for your career growth.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-12">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="w-full max-w-md px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg shadow-sm"
            />
          </div>

          <div className="space-y-12 px-4 sm:px-6 lg:px-8 mb-24 ">
            {categoryName.map((categoryTitle) => {
              // Derive raw category value from display name
              const rawCategory = categoryTitle.replace(" Courses", "");

              // Filter courses for this category, and apply search filter
              const filteredCourses = CoursesData.filter(
                (course) =>
                  course.category === rawCategory &&
                  (
                    course.title.toLowerCase().includes(search.toLowerCase()) ||
                    course.smallDescription.toLowerCase().includes(search.toLowerCase())
                  )
              );

              // Skip if no course in this category
              if (filteredCourses.length === 0) return null;

              return (
                <div key={categoryTitle} className="mb-20">
                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-2">{categoryTitle}</h2>

                  {/* Separator */}
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-700 to-gray-300 mb-6 rounded-full" />

                  {/* Course Cards */}
                  {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredCourses.map((course, index) => {
                      const Icon = course.icon;
                      return (
                        <Card
                          key={index}
                          className="group border border-gray-200 shadow-black  hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 shadow-sm"
                        >
                          <CardHeader className="space-y-4">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.IconColor} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Icon size={24} />
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Badge variant="secondary">
                                  {course.level}
                                </Badge>
                                <div className="flex items-center text-sm text-gray-500">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {course.time}
                                </div>
                              </div>
                              <CardTitle className="text-xl">
                                {course.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <CardDescription className="text-base leading-relaxed">
                              <span className="text-gray-600">
                                {course.smallDescription.length > 60 ? (
                                  <>
                                    {course.smallDescription.slice(0, 60)}
                                    <span className="text-blue-600 cursor-pointer">
                                      ... more
                                    </span>
                                  </>
                                ) : (
                                  course.smallDescription
                                )}
                              </span>
                            </CardDescription>
                            <Link
                              href={`/courses/${course.id}`}
                              className="block w-full cursor-pointer"
                            >
                              <Button className="w-full group-hover:bg-gray-900 transition-colors cursor-pointer">
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;
