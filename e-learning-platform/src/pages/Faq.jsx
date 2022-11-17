import React from "react";

const Faq = () => {
  return (
    <div className="w-full min-h-full flex items-center justify-between">
      <div className="w-[96%] sm:w-[80%] min-h-[80vh] m-auto p-5 flex flex-col  gap-4 items-start shadow shadow-neutral rounded-lg justify-start">
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary">
            What is the umbrella academy?
          </h1>
          <p className="text-lg font-semibold text-secondary">
            Answer:{" "}
            <span className="text-accent">
              The umbrella Academy is an e-learning platform that provides
              various courses for students.
            </span>
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary">
            Which payment method the umbrella academy accepts?
          </h1>
          <p className="text-lg font-semibold text-secondary">
            Answer:{" "}
            <span className="text-accent">
              The umbrella academy used very secure payment gateway. It accepts
              almost every types of card and mfs.
            </span>
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary">
            Access time of enrolled courses?
          </h1>
          <p className="text-lg font-semibold text-secondary">
            Answer:{" "}
            <span className="text-accent">
              Lifetime access of every enrolled courses.
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Faq;
