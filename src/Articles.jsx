import React from 'react'
import Nav from './Nav'

export default function Articles() {
  return (
    <><Nav/>
      <div className=" w-full h-screen bg-black text-main-500 flex flex-col  ">
            <Article/>
                        <Article/>

            <Article/>
            <Article/>

      </div>
    </>
    
  )
}


 function Article() {
  return (
    <div className='px-10 mt-10 mb-5'>
      <h1 className='bigFontBold text-3xl'>Title</h1>
      <p className='bigFont text-xl'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto perspiciatis dicta magnam hic et temporibus sunt dolorem vitae blanditiis tempora distinctio, provident quia aut neque minus cum? Praesentium, ab dolor.</p>
    </div>
  )
}
