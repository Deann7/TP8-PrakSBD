import React from 'react'

const BigCard = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className='p-10'>
    <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border-4  border-gray-600 rounded-lg max-w-full p-16">
    <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
      <img
        src={image}
        alt="card-image"
        className="h-full w-full rounded-md md:rounded-lg object-cover"
      />
    </div>
    <div className="p-6">
      <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
        COURSE
      </div>
      <h4 className="mb-2 text-slate-800 text-xl font-semibold">
        {title}
      </h4>
      <p className="mb-8 text-slate-600 leading-normal font-light">
        {description}
      </p>
      <div>
        <a href={link} className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
          Visit Course
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  </div>
  )
}

export default BigCard