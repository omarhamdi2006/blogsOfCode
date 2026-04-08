import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router';
export default function Home() {
  return (
    <>
      <Nav />
      <div className=" w-full h-screen bg-black ">
        <div className="hero flex flex-col  items-center px-10 mt-0 text-center pt-30">
          <h1 className='text-main-500 bigFontBold text-7xl  '>You Just Landed in My Blog !</h1>
          <p className='text-main-500 bigFont mt-5 text-xl'>I'm <span className='text-white bigFontBold'>Omar</span> and this is my personal space to share some insights and ideas.</p>
          <div className="buttons flex mt-10 gap-10 bigFont text-2xl">
          <Link to="/articles"><h3 className='text-main-500 border-main-500 border-2 p-2 rounded-md hover:scale-110  hover:bg-main-500 hover:text-black hover:border-main-500 transition-all 0.3s'>Read my articles</h3></Link>
          <Link to="/contact"><h3 className='text-white  border-white border-2 p-2  rounded-md hover:scale-110   hover:bg-main-500 hover:text-black hover:border-main-500 transition-all 0.3s'>Contact me</h3></Link>
        
        </div>

        </div>

      </div>
    </>
  );
}
