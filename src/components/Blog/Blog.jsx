import React from "react";
import Footer from "../Home/Footer";
import BlogAdmission from "./BlogAdmission";
import BlogAdmissionLg from "./BlogAdmissionLg";
import BlogCollab from "./BlogCollab";
import BlogHeader from "./BlogHeader";
import BlogSchool from "./BlogSchool";
import BlogNavbar from './BlogNavBar'
import './Blog.css'
import BlogAbout from "./BlogAbout";
import BlogLearning from "./BlogLearning";
import BlogFuture from "./BlogFuture";

const Blog = () => {
  return (
    <main className="w-full  ">
      <div className="w-full flex flex-col">
        <div className="w-full ">
          <BlogNavbar />
        </div>
        <div className="w-full border-2 border-green-500">
          <BlogHeader />
        </div>
        <div className="w-full">
          <BlogAbout/>
        </div>
        <div className="w-full">
          <BlogSchool />
        </div>
        <div className="w-full">
          <BlogLearning/>
        </div>
        <div className="block lg:hidden">
          <BlogAdmission />
        </div>
        <div className="hidden lg:block">
          <BlogAdmissionLg />
        </div>
        <div className="w-full">
          <BlogFuture/>
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
