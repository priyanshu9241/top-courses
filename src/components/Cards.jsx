import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);
  //Returns array of all courses
  const getCourses = () => {
    let allCourses = [];
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      // console.log(allCourses);
      return allCourses;
    } else {
      return courses[category];
    }
  };
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
