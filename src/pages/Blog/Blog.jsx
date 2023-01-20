import React from "react";
import Footer from "../../components/Home/Footer";
import BlogAdmission from "../../components/Blog/BlogAdmission";
import BlogAdmissionLg from "../../components/Blog/BlogAdmissionLg";
import BlogCollab from "../../components/Blog/BlogCollab";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogSchool from "../../components/Blog/BlogSchool";
import BlogNavbar from '../../components/Blog/BlogNavBar'
import './Blog.css'
import BlogAbout from "../../components/Blog/BlogAbout";
import BlogLearning from "../../components/Blog/BlogLearning";
import BlogFuture from "../../components/Blog/BlogFuture";

const Blog = () => {
  return (
    <main className="w-full  ">
      <div className="w-full flex flex-col">
        <div className="w-full mb-5 md:mb-0 ">
          <BlogNavbar />
        </div>
        <div className="w-full mt-5 md:mt-0">
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
