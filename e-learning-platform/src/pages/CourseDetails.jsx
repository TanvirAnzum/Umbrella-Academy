import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import { getCourses } from "../Apis/courseApi";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const ref = React.createRef();

  const param = useParams();
  const { courseId } = param || {};

  useEffect(() => {
    const getData = async () => {
      const data = await getCourses(parseInt(courseId));
      setCourse(data);
      setLoading(false);
    };

    getData();
  }, [courseId]);

  const {
    id,
    title,
    description,
    imageUrl,
    ratings,
    instructors,
    participations,
    price,
    language,
    duration,
  } = course || {};

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
      <div className="w-[96%] sm:w-[80%] min-h-[80vh] m-auto p-5 flex flex-col  gap-5 items-center shadow shadow-neutral rounded-lg justify-center  relative">
        <img className="w-full h-[30em] rounded-md" src={imageUrl} alt="" />

        <div className="absolute top-14 right-10 flex flex-col sm:flex-row gap-2 z-20 backdrop-blur-sm">
          <ReactToPdf targetRef={ref} filename={`${title}.pdf`}>
            {({ toPdf }) => (
              <button className="btn rounded-xl btn-accent" onClick={toPdf}>
                Generate pdf
              </button>
            )}
          </ReactToPdf>
          <Link to={`/premium/${id}`}>
            <button className="btn rounded-xl btn-primary">
              Get Premium Access
            </button>
          </Link>
        </div>

        <div className="w-full flex items-center justify-between flex-wrap">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-xl font-semibold">
            Rating: <span className="text-success">{ratings}</span>
          </p>
          <p className="text-xl font-semibold text-warning">{duration}</p>
        </div>

        <div className="w-full flex items-center justify-between flex-wrap">
          <p className="text-2xl font-semibold">Instructor: {instructors}</p>
          <p className="text-xl font-semibold">
            Enrolled: <span className="text-success">{participations}</span>
          </p>
          <p className="text-xl font-semibold">
            Language: <span className="text-primary">{language}</span>
          </p>
          <p className="text-xl font-semibold">
            price: <span className="text-secondary">{price}</span>
          </p>
        </div>

        <p className="text-md font-semibold">{description}</p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="w-full min-h-full flex items-center justify-between"
    >
      {content}
    </div>
  );
};

export default CourseDetails;
