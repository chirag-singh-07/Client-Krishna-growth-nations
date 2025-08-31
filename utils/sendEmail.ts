import { CoursesData } from "@/data/CoursesData";

export const handleSendCourseEmail = async () => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser
    ? JSON.parse(storedUser)
    : { name: "Johan", email: "johan@gmail.com" };
  const courseId = localStorage.getItem("courseId");

  const course = CoursesData.find((course) => course.id === courseId);
  console.log("Course:", course);

  try {
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        courseTitle: course?.title,
        courseId: course?.id, // 👈 make sure your course object includes this
      }),
    });

    console.log("Email sent successfully");
  } catch (e) {
    console.warn("Failed to send email:", e);
  }
};

export const handleSendOfferCourseEmail = async () => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser
    ? JSON.parse(storedUser)
    : { name: "Anurag", email: "anurag.kumar6240@gmail.com" };

  try {
    await fetch("/api/send-offer-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
    });

    console.log("Email sent successfully");
  } catch (e) {
    console.warn("Failed to send email:", e);
  }
};
