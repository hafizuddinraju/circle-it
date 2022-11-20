import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo5  from '../../logo5.png'
import { AuthDataContext } from '../../useContext/AuthContext';
import { RiBriefcase4Fill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import './Nav.css'
import { toast } from 'react-toastify';

const Nav = () => {
    const {user, logOut, cart} = useContext(AuthDataContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const userLogOut = () =>{
        logOut()
        .then (()=>{
            toast.error('LogOut Success', {autoClose:500})
        })
        
        .catch(error =>{
            toast.error(`error${error}`, {autoClose:500})
        })
    }

    
  
    return (
        <div className="px-4 py-5 mx-auto bg-gray-200 sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <img className='h-12' src={logo5} alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Circle it
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/home"
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  aria-label="Courses"
                  title="Courses"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  aria-label="FAQ"
                  title="FAQ"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  FAQ
                </Link>
              </li>
              <li >
                <Link
                  to="/checkout" >
                    <div className='flex relative items-center py-3 px-2'>
                    <RiBriefcase4Fill></RiBriefcase4Fill>
                   
                    <p className='absolute  right-0 top-0 text-black'>{cart.length}</p>
                    
                    

                    </div>
                    
                    
                    
                  
                </Link>
              </li>
           

            </ul>
           
          </div>
          <ul  className="flex items-center hidden space-x-8 pr-4 lg:flex">  
          {
            user && user?.uid?
            <li onClick={()=>userLogOut()}>
              <Link
                to="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-sky-400 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                aria-label="Log out"
                title="Log Out"
              >
                Log out
              </Link>
            </li>
            :
            <>
            <li>
              <Link
                to="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-sky-400 transition duration-200 rounded-3xl shadow-md btn btn-outline hover:border-none hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                aria-label="Log In"
                title="Log In"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-sky-400 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
            
            </>

          }
           <li>
                <Link to= '/' className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                  {
                    user && user?
                    <img className='profile-img ' src={user?.photoURL} alt=''/>
                    :
                    <FaUserAlt></FaUserAlt>


                  }
                    
                    
                
                </Link>
                
            </li>          
            
            
            
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img className='h-10' src={logo5} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Circle it
                        </span>
                      </Link>
                       
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 text-center">
                    <li>
                <Link to= '/' className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                  {
                    user && user?
                    <img className='profile-img ' src={user?.photoURL} alt=''/>
                    :
                    ' '


                  }
                    
                    
                
                </Link>
                
                      </li> 
                      <li>
                        <Link
                          to="/home"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="FAQ"
                          title="FAQ"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                    <Link
                    to="/checkout" >
                        
                        <RiBriefcase4Fill className='w-50 mx-auto'></RiBriefcase4Fill>   
                    
                    </Link>
                    </li>
                    {
                        user && user?.uid?
                        <li>
                        <Link onClick={()=>userLogOut()}
                          to="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-400 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                          aria-label="logout"
                          title="Log Out"
                        >
                          Log out
                        </Link>
                      </li>
                      :
                      <>
                      <li>
                        <Link
                          to="/login"
                          aria-label="Log In"
                          title="Log In"
                          className="font-medium text-sky-400 tracking-wide btn btn-outline w-full transition-colors duration-200 hover:bg-sky-700"
                        >
                          Log In
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/signup"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-400 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                      
                      </>

                    }
                      
                      
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

export default Nav;