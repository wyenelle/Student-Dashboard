import React from "react";

const BlogAdmission = () => {
  return (
    <div>
      <div className="flex snap-x snap-mandatory h-60 overflow-scroll w-full bg-black    mx-auto border border-black">
        {/* <div className="snap-center border border-black w-4/5 shrink-0 text-3xl p-4 flex justify-center items-center font-bold text-white">
                How The Admission Works
            </div> */}

        <div className="snap-center w-4/5 shrink-0 flex gap-3 justify-between items-center mr-3">
          <h1 className="number text-gray-300/60 text-3xl font-extrabold pl-3">
            01
          </h1>

          <div className="step">
            <p className="text-white text-end"> Step one</p>
            <h2 className="capitalize font-bold my-2 text-gray-200  text-end text-2xl">
              Fill And submit the application form{" "}
            </h2>
          </div>

        </div>

        <div className="snap-center w-4/5 shrink-0 flex gap-3 justify-between items-center mr-2">
          <h1 className="number text-gray-300/60 text-3xl font-extrabold pl-3">
            02
          </h1>

          <div className="step">
            <p className="text-white text-end"> Step two</p>
            <h2 className="capitalize font-bold my-2 text-gray-200  text-end text-2xl">
              take and pass all assessment test {" "}
            </h2>
          </div>

        </div>

        <div className="snap-center w-4/5 shrink-0 flex gap-3 justify-between items-center">
          <h1 className="number text-gray-300/60 text-3xl font-extrabold pl-3">
            03
          </h1>

          <div className="step">
            <p className="text-white text-end"> Step three</p>
            <h2 className="capitalize font-bold my-2 text-gray-200  text-end text-2xl">
              complete your enrollment and begin your journey into tech{" "}
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogAdmission;
