import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useTitle from '../../costomHooks/hooks';
import { AuthDataContext } from '../../useContext/AuthContext';
import CategoryCard from '../categotrycard/CategoryCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    const {category} = useContext(AuthDataContext);
    useTitle('Courses')

    
    return (
        <div>
             <div className='md:flex block w-full '>
                <div className=' md:w-1/4  w-full'>
                <LeftSideNav></LeftSideNav>
                </div>
                <div className='bg-gray-400' >
                    <Outlet></Outlet>
                    
                    </div>

            </div>
            
        </div>
    );
};

export default Courses;