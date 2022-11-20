import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthDataContext } from '../../useContext/AuthContext';

const LeftSideNav = () => {
    const {category} = useContext(AuthDataContext);
    return (
        
            <div className="md:w-full text-center h-full p-6 w-full  bg-gray-900 text-gray-100">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Our Course Categories</h2>
			<div className="flex flex-col space-y-1">
				{
                    category?.map(cat =>
                    <p key={cat._id}>
                    <Link to={`/courses/${cat._id}`} >{cat.name}</Link>
                    </p>)
                }
			</div>
		</div>
		
	</nav>
                </div>
            
        
    );
};

export default LeftSideNav;