import React from "react";
import { CourseList } from "./CourseList";

export default function Courses() {
  return (
    <div className="courses-window">
      <h3 className="window-heading">WORK EXPERIENCE</h3>
      <ul className="course-list">
        {CourseList.map((course) => {
          return <li key={course.courseName}>{course.courseName}</li>;
        })}
      </ul>
    </div>
  );
}
