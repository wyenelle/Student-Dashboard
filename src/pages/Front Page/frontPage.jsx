import React from "react";
import { useNavigate } from "react-router-dom";
import './FrontPage.css'

const FrontPage = () => {
    const navigate = useNavigate()

    const go_to_blog = () => {
        navigate('/blog')
    }
    const go_to_login = () => {
        navigate('/login')
    }
  return (
    <main className="h-screen   px-3 w-full">
      <section className="flex flex-col gap-4 justify-center items-center h-full">
      <div className="text-center mb-5">
            <h1 className="font-extrabold text-4xl">AltSchool Africa</h1>
        </div>
        <div className="grid grid-cols-2 px-3 md:px-0  md:w-9/12">
          <article onClick={go_to_blog} className="col-span-2 border border-slate-200  cursor-pointer article shadow shadow-slate-200 shadow-lg md:col-span-1 md:w-10/12 px-4 py-3 h-40 flex items-start hover:border-blue-500/30 justify-center flex-col m-3 rounded-lg  md:mx-auto">
            <h1 className="font-bold mb-3 text-2xl"> Blog Page</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aut sint provident! Dolores, ab voluptates!
            </p>
          </article>
          <article onClick={go_to_login} className="col-span-2 border border-slate-200 cursor-pointer article shadow shadow-slate-200 shadow-lg md:col-span-1 md:w-10/12 px-4 py-3 h-40 hover:border-blue-500/30 flex items-start justify-center flex-col m-3 rounded-lg md:mx-auto  ">
            <h1 className="font-bold mb-3 text-2xl"> LMS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aut sint provident! Dolores, ab voluptates!
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default FrontPage;
