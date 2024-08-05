import React from 'react'
// import "./Home.css"
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import { Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div >
      {/* <Swiper navigation={true} modules={[Navigation]} className='myslide' >
        <SwiperSlide className='slide'></SwiperSlide>
        <SwiperSlide className='slide1'></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

      <>
        {/* hero - start */}
        <div className=" pb-6 sm:pb-8 lg:pb-12 my-3 ">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">

            <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16  md:py-20 xl:py-48">
              {/* image - start */}
              <img
                src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              {/* image - end */}
              {/* overlay - start */}
              <div className="absolute inset-0 bg-white-500 mix-blend-multiply" />
              {/* overlay - end */}
              {/* text start */}
              <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
                {/* <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
            Very proud to introduce
          </p> */}
                <h1 style={{ fontFamily: "initial" }} className=" mb-8 text-center text-4xl font-bold text-dark sm:text-5xl md:mb-12 md:text-6xl">
                  Revolutionary way to showcase their project
                </h1>
                <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                  <Link to={"/main/signup"}

                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  >
                    Start now
                  </Link>
                  <Link to={"/user/project"}

                    className="inline-block rounded-lg bg-gray-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-500 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    Take tour
                  </Link>
                </div>
              </div>
              {/* text end */}
            </section>
          </div>
        </div>
        {/* hero - end */}
        {/* gallery - start */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
              Project Showcase
            </h2>
            <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
              {/* image - start */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 border border-1 md:h-80"
              >
                <img
                  src="https://i2.wp.com/www.uniquenewsonline.com/wp-content/uploads/2020/08/Web-Designing-Project-Ideas.png?fit=1280%2C720&ssl=1"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-fit object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                {/* <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
            VR
          </span> */}
              </a>
              {/* image - end */}
              {/* image - start */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 border border-1 md:h-80"
              >
                <img
                  src="https://stonetech1.com/wp-content/uploads/2019/03/Web-Design-For-Project-780x429.jpg"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-fit object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                {/* <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
            Tech
          </span> */}
              </a>
              {/* image - end */}
              {/* image - start */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 border border-1 md:h-80"
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230105093722/10-HTML-Project-Ideas-Topics-For-Beginners.png"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-fit object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                {/* <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
            Dev
          </span> */}
              </a>
              {/* image - end */}
              {/* image - start */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 border border-1 md:h-80"
              >
                <img
                  src="https://www.interviewbit.com/blog/wp-content/uploads/2022/01/html-projects.jpg"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-fit object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                {/* <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
            Retro
          </span> */}
              </a>
              {/* image - end */}
            </div>
            <div className="flex items-start justify-between gap-8 sm:items-center">
              {/* <p className="max-w-screen-sm text-sm text-gray-500 lg:text-base">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text.
        </p> */}
              {/* <a
          href="#"
          className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
        >
          More
        </a> */}
            </div>
          </div>
        </div>
        {/* gallery - end */}
        {/* stats - start */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            {/* text - start */}
            <div className="mb-8 md:mb-12">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Our Team by the numbers
              </h2>
              {/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p> */}
            </div>
            {/* text - end */}
            <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
              {/* stat - start */}
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  200
                </div>
                <div className="text-sm text-indigo-200 sm:text-base">People</div>
              </div>
              {/* stat - end */}
              {/* stat - start */}
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  500+
                </div>
                <div className="text-sm text-indigo-200 sm:text-base">People</div>
              </div>
              {/* stat - start */}
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  1000+
                </div>
                <div className="text-sm text-indigo-200 sm:text-base">Customers</div>
              </div>
              {/* stat - end */}
              {/* stat - start */}
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  A couple
                </div>
                <div className="text-sm text-indigo-200 sm:text-base">
                  Coffee breaks
                </div>
              </div>
              {/* stat - end */}
            </div>
          </div>
        </div>
        {/* stats - end */}
        {/* team - start */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            {/* text - start */}
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Meet our Team
              </h2>
              {/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p> */}
            </div>
            {/* text - end */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
              {/* person - start */}
              <div className="flex flex-col items-center">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    John McCulling
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    Founder / CEO
                  </p>
                  {/* social - start */}
                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* social - end */}
                </div>
              </div>
              {/* person - end */}
              {/* person - start */}
              <div className="flex flex-col items-center">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Kate Berg
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    CFO
                  </p>
                  {/* social - start */}
                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* social - end */}
                </div>
              </div>
              {/* person - end */}
              {/* person - start */}
              <div className="flex flex-col items-center">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Ayo Ogunseinde"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Greg Jackson
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    CTO
                  </p>
                  {/* social - start */}
                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* social - end */}
                </div>
              </div>
              {/* person - end */}
              {/* person - start */}
              <div className="flex flex-col items-center">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Midas Hofstra"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Robert Greyson
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    Creative Director
                  </p>
                  {/* social - start */}
                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* social - end */}
                </div>
              </div>
              {/* person - end */}
              {/* person - start */}
              <div className="flex flex-col items-center">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Elizeu Dias"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    John Roberts
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    Investor Relations
                  </p>
                  {/* social - start */}
                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* social - end */}
                </div>
              </div>
              {/* person - end */}
              {/* person - start */}
              <div className="flex flex-col items-center">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Matheus Ferrero"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Judy Amandez
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    Senior Art Director
                  </p>
                  {/* social - start */}
                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* social - end */}
                </div>
              </div>
              {/* person - end */}
              {/* person - start */}
              <div className="flex flex-col items-center">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Leilani Angel"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Rahul Williams
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    Creative Director
                  </p>
                  {/* social - start */}
                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* social - end */}
                </div>
              </div>
              {/* person - end */}
              {/* person - start */}
              <div className="flex flex-col items-center">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Jernej Graj"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Ari Ferris
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    Marketing Analyst
                  </p>
                  {/* social - start */}
                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* social - end */}
                </div>
              </div>
              {/* person - end */}
            </div>
          </div>
        </div>
        {/* team - end */}
        {/* call to action - start */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
              {/* image - start */}
              <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Andras Vas"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* image - end */}
              {/* content - start */}
              <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                  Help center
                </h2>
                <p className="mb-8 max-w-md text-gray-600">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real written
                  text.
                </p>
                <div className="mt-auto">
                  <Link to={"/main/contact"}
                    
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    Contact support
                  </Link>
                </div>
              </div>
              {/* content - end */}
            </div>
          </div>
        </div>
        {/* call to action - end */}
        {/* footer - start */}
          {/* {<Footer></Footer>} */}
        {/* footer - end */}
      </>



    </div>


  )
}

export default Home

