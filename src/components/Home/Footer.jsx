import React from "react";

const Footer = () => {
  return (
    <div className=" w-full bg-black text-white relative grid grid-cols-2 lg:grid-cols-7 h-auto py-4 px-4">
      <div className="col-span-2 lg:col-span-2 lg:ml-8 my-8">
        <h1 className="text-2xl font-bold ">TalentQL</h1>
        <p className=" my-3 text-gray-300/70"> Tel: 080ALTSCHOOL</p>

        </div>

      <div className="col-span-2 lg:col-span-5 mt-4 ">
        <div className="grid grid-cols-2  lg:grid-cols-5 gap-3">
          <div className="col-span-1  mb-3">
            <h1 className="text-2xl font-normal my-3 "> Schools</h1>
            <p className="text-gray-300/70 mb-2"> School Of Engineering</p>
            <p className="text-gray-300/70 mb-2"> School Of Data</p>
            <p className="text-gray-300/70 mb-2"> School Of Product</p>
          </div>

          <div className="col-span-1 mb-3 ">
            <h1 className="text-2xl font-normal my-3 "> Specializations</h1>
            <p className="text-gray-300/70 mb-2"> Frontend Engineering</p>
            <p className="text-gray-300/70 mb-2"> Backend Engineering</p>
            <p className="text-gray-300/70 mb-2"> Cloud Engineering</p>
          </div>

          <div className="col-span-1 mb-3 lg:text-end ">
          <h1 className="text-2xl font-normal my-3 "> Companies</h1>
          <p className="text-gray-300/70 mb-2"> Hire Our Grads</p>
          <p className="text-gray-300/70 mb-2"> Collaborate With Us</p>
          </div>

          <div className="col-span-1 mb-3 ">
          <h1 className="text-2xl font-normal my-3 "> About Us</h1>
            <p className="text-gray-300/70 mb-2">Our Story </p>
          <p className="text-gray-300/70 mb-2"> Contact Us</p>
          <p className="text-gray-300/70 mb-2"> Blog</p>
          </div>


          <div className="col-span-1 mb-2 lg:mr-8 ">
          <h1 className="text-2xl font-normal my-3 "> Resources</h1>
          <p className="text-gray-300/70 mb-2"> Terms Of Service</p>
          <p className="text-gray-300/70 mb-2"> FAQ</p>
          </div>

        </div>
      </div>
      <p className="border-2 border-x-0 mt-3 border-b-0 border-t-gray-300/60 lg:col-span-7 col-span-2" > </p> 
      <p className="text-gray-300/70 mb-2 mt-4 relative lg:col-span-7 lg:text-center col-span-2">@2022 TalentQL. All Rights Reserved</p>

      <a href='#header' className="absolute bottom-4 animate-bounce right-3 bg-purple-500 p-2 text-white outline-none">
        Go up
      </a>
    </div>
  );
};

export default Footer;
