import React from "react";
import Footer from "../Home/Footer";
import BlogAdmission from "./BlogAdmission";
import BlogAdmissionLg from "./BlogAdmissionLg";
import BlogCollab from "./BlogCollab";
import BlogHeader from "./BlogHeader";
import BlogSchool from "./BlogSchool";

const Blog = () => {
  return (
    <main className="w-full h-screen ">
      <div className="w-full">
        <div className="w-full">
          <BlogHeader />
        </div>
        <div className="w-full">
          <BlogSchool />
        </div>
        <div className="block lg:hidden">
          <BlogAdmission />
        </div>
        <div className="hidden lg:block">
          <BlogAdmissionLg />
        </div>

        <BlogCollab />
        <div className="-mb-10 border-b-0 w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Blog;
