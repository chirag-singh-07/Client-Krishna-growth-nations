export const getDiscount = (price, salePrice) => {
  const amount = price - salePrice;
  const percentage = parseInt(((amount / price) * 100).toFixed(2));

return percentage
};

export const getCourseUrlsById = (courses, courseId) => {
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  const urls = [];

  // 1️⃣ collect all Url keys from the main course
  Object.keys(course).forEach((key) => {
    if (key.startsWith("Url")) {
      urls.push({
        title: course.title,
        Url: course[key],
      });
    }
  });

  // 2️⃣ collect the Url of each subCourse
  if (course.subCourses && Array.isArray(course.subCourses)) {
    course.subCourses.forEach((sub) => {
      if (sub.Url) {
        urls.push({
          title: sub.title,
          Url: sub.Url,
        });
      }
    });
  }

  return urls;
};

export const getCourseWithoutUrls = (courses, courseId) => {
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  // deep clone to avoid mutating the original
  const clonedCourse = JSON.parse(JSON.stringify(course));

  // remove Url fields from main course
  Object.keys(clonedCourse).forEach((key) => {
    if (key.startsWith("Url")) {
      delete clonedCourse[key];
    }
  });

  // remove Url fields from subCourses if they exist
  if (clonedCourse.subCourses && Array.isArray(clonedCourse.subCourses)) {
    clonedCourse.subCourses.forEach((sub) => {
      Object.keys(sub).forEach((key) => {
        if (key.startsWith("Url")) {
          delete sub[key];
        }
      });
    });
  }

  return clonedCourse;
};
