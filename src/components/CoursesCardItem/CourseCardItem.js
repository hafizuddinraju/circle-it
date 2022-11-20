import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseCardItem = ({cat, handleAddToCart}) => {
    const {_id,name, about, price,  picture, rating} = cat
    return (
        <div>
             <div  aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={picture}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <div className='flex justify-between items-center'>
                <p className="text-base  font-medium tracking-wide text-orange-500">
                {name}
              </p>
                <p className="text-sm flex items-center font-medium tracking-wide text-white">
                  <small className='flex text-orange-400'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>

                  </small>
                 
                {rating}
              </p>
                </div>
                <div>
                    <p className='text-red-600 text-xl font-medium'> Price: $<span className='text-white'>{price}</span> </p>
                </div>
                <div className='text-white'>
                {
            about.length > 60 ?
            <small> {about.slice(0, 60) + '...'} <Link className='text-sky-700' to={`/course/${_id}`}>Read More</Link></small>
            :
            <>{about}</>
          }
                </div>
              <div className='text-center mt-3'>
                <Link to={`/course/${_id}`}>
                <button  className='btn btn-sm bg-sky-600 hover:bg-sky-700'>Course Details</button>
                </Link>
              

              </div>
              
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default CourseCardItem;