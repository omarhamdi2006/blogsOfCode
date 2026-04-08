import React from 'react'
import Nav from './Nav'
export default function Contact() {
  return (
    <>
    <Nav/>
          <div className="hero w-full h-screen bg-black text-main-500  ">
            <div className="contact flex flex-col text-center justify-center items-center gap-10 p-30">
                          <h3 className='font-mono text-5xl font-bold'>For more info, You can contact me</h3>
            <div className="links flex flex-row gap-x-10 text-xl bigFontBold">
          <a target='_blank' href="https://github.com/omarhamdi2006"><h3 className='text-main-500 border-main-500 border-2 p-2 rounded-md hover:scale-110  hover:bg-main-500 hover:text-black hover:border-main-500 transition-all 0.3s '>Github</h3></a>
          <a target='_blank' href="https://www.linkedin.com/in/omar-hamdy-6b929334b/"><h3 className='text-white  border-white border-2 p-2  rounded-md hover:scale-110   hover:bg-main-500 hover:text-black hover:border-main-500 transition-all 0.3s'>LinkedIn</h3></a>

            </div>
            </div>
      </div>

    </>
  )
}
