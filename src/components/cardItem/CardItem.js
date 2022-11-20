import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardItem = ({cat}) => {
    const {_id,name, picture, rating} = cat
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
                <p className="text-xl  font-medium tracking-wide text-orange-500">
                {name}
              </p>
                <p className="text-sm flex items-center  font-medium tracking-wide text-white">
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
              <div className='text-center mt-3'>
                <Link to={`/courses/${_id}`}>
                <button className='btn btn-sm bg-sky-600 hover:bg-sky-700'>Course Details</button>
                </Link>
              

              </div>
              
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default CardItem;