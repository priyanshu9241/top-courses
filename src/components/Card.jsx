import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => {
        prev.filter((id) => id !== course.id);
      });
      toast.warning("Like Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked");
    }
  }
  return (
    <>
      <div className="w-[300px] bg-blue-950 bg-opacity-70 rounded-md overflow-hidden border border-gray-400">
        <div className="relative ">
          <img src={course.image.url} alt={course.image.alt} />
          <div className="absolute w-[40px] h-[40px] -bottom-4 right-3 bg-white rounded-full grid place-items-center ">
            <button onClick={clickHandler}>
              {likedCourses.includes(course.id) ? (
                <FcLike fontSize="1.75em" />
              ) : (
                <FcLikePlaceholder fontSize="1.75em" />
              )}
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-lg font-semibold leading-6 text-white ">
            {course.title}
          </p>
          <p className="mt-2 text-white">
            {course.description.length > 100
              ? course.description.substring(0, 100) + "..."
              : course.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
