import React from "react";
import Footer from "../../components/Home/Footer";
import './Blog.css'
import {BlogAdmission,BlogAdmissionLg,BlogAbout,BlogCollab,BlogFuture,BlogHeader,BlogSchool,BlogNavbar,BlogLearning,BlogFeatures,BlogAttach} from '../../components/Blog'


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
        <div className="hidden   lg:block">
          <BlogAdmissionLg />
        </div>
        <div className="w-full">
          <BlogFuture/>
        </div>
        <BlogAttach />
        <BlogCollab />
        <BlogFeatures/>
        <div className="-mb-10 border-b-0 w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Blog;
