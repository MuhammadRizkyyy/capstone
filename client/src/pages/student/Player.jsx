import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import Footer from '../../components/student/Footer';
import Rating from '../../components/student/Rating';

const Player = () => {
  const { enrolledCourses } = useContext(AppContext);
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const foundCourse = enrolledCourses.find((course) => course._id === courseId);
    if (foundCourse) {
      setCourseData(foundCourse);
    }
  }, [enrolledCourses, courseId]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4 sm:p-10 flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
        {/* Left Column */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">Event Informations</h2>

          <div className="flex items-center gap-2 py-3 mt-10">
            <h1 className="text-xl font-bold">Rate this event:</h1>
            <Rating initialRating={0} />
          </div>
        </div>

        {/* Right Column */}
        <div>{courseData && <img src={courseData.courseThumbnail} alt="Course Thumbnail" />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Player;
