import React from 'react';
import useTitle from '../../costomHooks/hooks';

const Faq = () => {
	useTitle('FAQ')
    return (
        <section className="bg-gray-500 text-gray-900">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold text-center py-4 sm:text-4xl">Frequently Asked Questions</h2>
		
		<div className="space-y-4 w-1/2 mx-auto">
			<details className="w-full border bg-white border-slate-100 rounded-lg">
				<summary className="px-4 font-medium py-6 focus:outline-none focus-visible:ring-gray-800">What is context API?</summary>
				<p className="px-6 py-6 pt-0 ml-4 -mt-4 text-justify text-gray-700">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </p>
			</details>
			<details className="w-full border bg-white border-slate-100 rounded-lg">
				<summary className="px-4 font-medium py-6 focus:outline-none focus-visible:ring-violet-400">What react Router used for?</summary>
				<p className="px-6 text-justify py-6 pt-0 ml-4 -mt-4 text-gray-700">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. </p>
			</details>
			<details className="w-full border bg-white border-slate-100 rounded-lg">
				<summary className="px-4 font-medium py-6 focus:outline-none focus-visible:ring-violet-400">what is node js used for?</summary>
				<p className="px-6 text-justify py-6   pt-0 ml-4 -mt-4 text-gray-700">It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node. </p>
			</details>
		</div>
	</div>
</section>
    );
};

export default Faq;