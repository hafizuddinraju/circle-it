import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../costomHooks/hooks';

const Blog = () => {
	useTitle('Blog')
    return (
        <div>
            <section className="bg-gray-600 text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div rel="noopener noreferrer"  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
			<img src="https://www.keycdn.com/img/support/cors.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">What is cors?</h3>
				<span className="text-xs text-gray-400">October 24, 2022</span>
				<p className='text-justify'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
			</div>
		</div>
		<div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg" alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Why are you using firebase?</h3>
					<span className="text-xs text-gray-400">October 24, 2022</span>
					<p className='text-justify'>Thanks to Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here).</p>
				</div>
			</div>
			<div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://www.accucom.com.au/images/easyblog_shared/September_2018/9-12-18/b2ap3_large_ityt_authentication_400.jpg" alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl text-justify font-semibold group-hover:underline group-focus:underline">What other options do you have to implement authentication without firebase?</h3>
					<span className="text-xs text-gray-400">January 22, 2021</span>
					<p className='text-justify'>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
				</div>
			</div>
			<div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://res.cloudinary.com/practicaldev/image/fetch/s--IDcanLpC--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zw6ade965aztnwz1kur3.png" alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does the private route work?</h3>
					<span className="text-xs text-gray-400">January 23, 2021</span>
					<p className='text-justify'>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
				</div>
			</div>
			<div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900  sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://www.devteam.space/wp-content/uploads/2022/05/nodejs.jpg" alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">what is node js?</h3>
					<span className="text-xs text-gray-400">october 25, 2022</span>
					<p className='text-justify'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
				</div>
			</div>
			<div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900  sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://miro.medium.com/max/632/1*xsQYYYvG-07C3lAYcTvuRA.png"  alt=''/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does Node work?</h3>
					<span className="text-xs text-gray-400">January 25, 2022</span>
					<p className='text-justify'>Node. js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.</p>
				</div>
			</div>
			<div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900  sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is react?</h3>
					<span className="text-xs text-gray-400">January 26, 2021</span>
					<p className='text-justify'>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
				</div>
			</div>
		</div>
		
	</div>
</section>
            
        </div>
    );
};

export default Blog;