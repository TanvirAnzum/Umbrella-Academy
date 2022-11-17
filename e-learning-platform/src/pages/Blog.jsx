import React from "react";

const Blog = () => {
  return (
    <div className="w-full min-h-full flex items-center justify-between">
      <div className="w-[96%] sm:w-[80%] min-h-[80vh] m-auto p-5 flex flex-col  gap-4 items-start shadow shadow-neutral rounded-lg justify-start">
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary">What is cors?</h1>
          <p className="text-lg font-semibold text-secondary">
            Answer:{" "}
            <span className="text-accent">
              CORS stands for Cross-Origin Resource Sharing. It allows us to
              relax the security applied to an API. This is done by bypassing
              the Access-Control-Allow-Origin headers, which specify which
              origins can access the API. In other words, CORS is a browser
              security feature that restricts cross-origin HTTP requests with
              other servers and specifies which domains access your resources.
            </span>
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p className="text-lg font-semibold text-secondary">
            Answer:{" "}
            <span className="text-accent">
              Firebase is easy to use, simple, made by google so there will be
              less security issue and it is widely used. There are obviously
              some alternatives for firebase, again we can achieve this with
              backend technologies and databases. For only authentication we can
              use json server auth.
            </span>
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary">
            How does the private route work?
          </h1>
          <p className="text-lg font-semibold text-secondary">
            Answer:{" "}
            <span className="text-accent">
              The workflow of private routes is simple.Fist of all we have to
              check if we are authorized to access or not.If we are authorized
              then we pass child components to access or if not then we redirect
              to the login/register page.
            </span>
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary">
            What is Node? How does Node work?
          </h1>
          <p className="text-lg font-semibold text-secondary">
            Answer:{" "}
            <span className="text-accent">
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on a JavaScript Engine and executes
              JavaScript code outside a web browser, which was designed to build
              scalable network applications.
              <span className="block">
                Working of Node.js: Node.js accepts the request from the clients
                and sends the response, while working with the request node.js
                handles them with a single thread. To operate I/O operations or
                requests node.js use the concept of threads. Thread is a
                sequence of instructions that the server needs to perform. It
                runs parallel on the server to provide the information to
                multiple clients. Node.js is an event loop single-threaded
                language. It can handle concurrent requests with a single thread
                without blocking it for one request.
              </span>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Blog;
