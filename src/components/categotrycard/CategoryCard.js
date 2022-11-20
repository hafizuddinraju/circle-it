import React, { useContext } from 'react';
import { AuthDataContext } from '../../useContext/AuthContext';

import CardItem from '../cardItem/CardItem';

const CategoryCard = () => {
    const{category} = useContext(AuthDataContext);
    
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className=" mb-6  md:mb-8">
        <h2 className=" text-center mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
          Change is the end result of all true learning.
            <br className="hidden md:block" />
            Our All Courses
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1">
        {
            category?.map(cat => <CardItem key={cat._id} cat={cat}></CardItem>)
        }
        
      </div>
      
    </div>
    );
};

export default CategoryCard;