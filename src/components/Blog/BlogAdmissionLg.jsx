import React from "react";
import "./BlogAdmissionLg.css";

const BlogAdmissionLg = () => {
  return (
    <section className="w-full border-4 border-white  admiss-lg bg-black">
      <div className="pt-5 admission">
        <h1 className="text-5xlpy-3 capitalize font-bold admission-h1 capitalize text-center text-gray-300">
          {" "}
          How the Admission works{" "}
        </h1>
      </div>
      <div className="w-full hidden  h-full  text-white p-4 border-4 md:flex justify-center items-center gap-4 ">
        <div className="grid grid-cols-4 w-full border border-gray-300/30 hover:border-gray-300 transition p-3 rounded-md shadow-md overflow-hidden">
          <h1 className="col-span-1 text-gray-300/70 text-5xl font-bold pt-8 num h-full">
            01
          </h1>
          <div className="col-span-3 text-start p-4 ">
            <p className="text-gray-300 font-bold text-2xl border-gray-300 admission-detail capitalize">
              {" "}
              Fill and submit the application form
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-4 w-full border border-gray-300/30 p-3
     hover:border-gray-300 rounded-md shadow-md overflow-hidden"
        >
          <h1 className="col-span-1 text-gray-300/70 text-5xl font-bold pt-8 num h-full">
            02
          </h1>
          <div className="col-span-3 text-start p-4 ">
            <p className="text-gray-300 font-bold text-2xl admission-detail capitalize">
              Take and pass all assessment test
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 w-full  border border-gray-300/30 p-3 hover:border-gray-300 rounded-md shadow-md overflow-hidden">
          <h1 className="col-span-1 text-gray-300/70 text-5xl font-bold pt-8 num h-full">
            03
          </h1>
          <div className="col-span-3 text-start p-4 ">
            <p className="text-gray-300 font-bold text-2xl admission-detail capitalize">
              complete your enrollment and begin your tech journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAdmissionLg;
