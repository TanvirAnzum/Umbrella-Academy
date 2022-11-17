import React, { useContext, useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCourses } from "../Apis/courseApi";
import { AuthContext } from "../contexts/authContext";

const PremiumAccess = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

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

  const { title, imageUrl, instructors, price, duration } = course || {};

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
      <div className="w-[96%] sm:w-[80%] min-h-[80vh] m-auto p-5 flex flex-col  gap-1 items-start shadow shadow-neutral rounded-lg justify-start">
        <ToastContainer />
        <h1 className="text-4xl font-bold uppercase tracking-wider my-4">
          Course Details:
        </h1>
        <img src={imageUrl} alt="" className="w-[20em] h-[10em]" />
        <h1 className="text-xl font-semibold tracking-wide">
          Title: <span className="text-primary">{title}</span>
        </h1>
        <h1 className="text-xl font-semibold tracking-wide">
          Instructor: <span className="text-primary">{instructors}</span>
        </h1>
        <h1 className="text-xl font-semibold tracking-wide">
          Duration: <span className="text-accent">{duration}</span>
        </h1>
        <h1 className="text-xl font-semibold tracking-wide">
          Price: <span className="text-error">{price}</span>
        </h1>

        <h1 className="text-4xl font-bold uppercase tracking-wider my-4">
          User Details:
        </h1>
        <h1 className="text-xl font-semibold tracking-wide">
          Name: <span className="text-success">{displayName}</span>
        </h1>
        <h1 className="text-xl font-semibold tracking-wide">
          Email: <span className="text-success">{email}</span>
        </h1>

        <button
          className="btn btn-success my-4"
          onClick={() => toast.success("Successfully Enrolled")}
        >
          Get Access
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-full flex items-center justify-between">
      {content}
    </div>
  );
};

export default PremiumAccess;
