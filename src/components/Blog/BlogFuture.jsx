import React from "react";
import "./BlogFuture.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Students from "../../assets/future-students.jpg";

const BlogFuture = () => {
  const styles = {
    height: 450,
  };
  return (
    <section
      style={styles}
      className="w-full  hidden md:block   "
    >
      <div className="flex items-center  justify-center">
        <div className="bg-white/70 w-full h-80    grid grid-cols-2 ">
          <div className="col-span-1 ">
            <img
              src={Students}
              alt="students studying"
              className="w-full h-full"
            />
          </div>
          <div className="col-span-1  relative">
            <div className=" w-full absolute top-8 bg-white/50 shadow-lg h-4/5 -left-40 flex items-center">
              <div className="w-11/12 ml-5 px-5 py-5 rounded shadow-lg bg-white prep">
                <h1 className="font-bold text-xl my-1">
                  Prepare your company for the future
                </h1>
                <p className="my-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illo, nulla assumenda dolor quidem aliquam vitae sit est quo
                  enim quasi temporibus, sed ipsa quibusdam eveniet.
                </p>

                <button className="bg-black text-white w-2/5 p-2 mt-3 font-bold rounded shadow-md flex justify-center gap-2 items-center ">
                  {" "}
                  Hire Our Grads
                  <FaAngleDoubleRight
                    size={20}
                    className="text-white arrow-right"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFuture;
