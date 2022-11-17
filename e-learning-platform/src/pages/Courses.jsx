import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { getCourses } from "../Apis/courseApi";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getCourses();
      setCourses(data);
      setLoading(false);
    };
    getData();
  }, []);

  let content;

  if (loading) {
    content = (
      <div className="w-full h-[20vh] flex items-center justify-center">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );
  } else {
    content = (
      <div className="w-[96%] sm:w-[80%] min-h-[80vh] m-auto p-5 flex flex-col lg:flex-row gap-5 items-center justify-center lg:items-start lg:justify-between">
        <div className="w-full lg:w-[20%] max-h-[75vh] rounded shadow shadow-neutral p-5 overflow-auto">
          <h1 className="text-2xl text-center font-bold uppercase tracking-wider">
            Courses
          </h1>
          <ul className="w-full mt-5 flex flex-col gap-5">
            {courses?.map((course) => (
              <Link key={course.id} to={`/courseDetails/${course.id}`}>
                <li className="w-full font-semibold text-md shadow shadow-neutral hover:bg-primary hover:cursor-pointer rounded px-1">
                  {course.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-[75%]  rounded  flex flex-wrap gap-10 justify-center lg:p-5">
          {courses?.map((course) => (
            <div
              key={course.id}
              className="w-full h-[34em] lg:h-[20em] flex flex-col lg:flex-row items-center justify-around lg:justify-between shadow shadow-neutral rounded"
            >
              <figure className="w-full lg:w-[50%] h-[18em] lg:h-full flex items-center justify-center">
                <img
                  className="w-full lg:w-[30em]"
                  src={course.imageUrl}
                  alt=""
                />
              </figure>

              <div className="w-full lg:w-[45%] flex flex-col items-start justify-start gap-2 p-1 lg:p-0">
                <h1 className="text-lg font-semibold">{course.title}</h1>
                <p className="font-semibold">
                  Instructors: {course.instructors}
                </p>
                <p className="font-semibold">
                  Rating :{" "}
                  <span className="text-success">{course.ratings}</span>
                </p>
                <p className="font-semibold">
                  Participants:{" "}
                  <span className="text-success">{course.participations}</span>
                </p>
                <Link to={`/courseDetails/${course.id}`}>
                  <button className="btn btn-primary btn-md">Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-full flex items-center justify-between">
      {content}
    </div>
  );
};

export default Courses;
