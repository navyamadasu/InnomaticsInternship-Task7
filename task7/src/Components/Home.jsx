import React from "react";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to
            <div className="text-red-600">
              Innomatics
              <br />
              Research Labs
            </div>
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            Get access to all the learning material on this portal
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <i class="ri-gemini-fill"></i>
              Class Material
            </li>
            <li className="flex items-center gap-2">
              <i class="ri-gemini-fill"></i>
              Course Curriculum
            </li>
            <li className="flex items-center gap-2">
              <i class="ri-gemini-fill"></i>
              LIVE Session Recording
            </li>
            <li className="flex items-center gap-2">
              <i class="ri-gemini-fill"></i>
              Projects and Case Studies
            </li>
            <li className="flex items-center gap-2">
              <i class="ri-gemini-fill"></i>
              Assignments and Quizzes
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="border-2  border-gray-700 text-black px-8 py-3 rounded hover:text-blue-600 transition-colors">
              Placements
            </button>
            <button className="border-2 border-gray-700 text-gray-700 px-8 py-3 rounded hover:text-blue-600 transition-colors">
              Refer a Friend
            </button>
          </div>
        </div>
        
        <div className="flex-1">
        <h1 className=" text-3xl font-bold text-black-1000">What we are ?<br/><br/></h1> 
          <img
            src="./one.png"
            alt="Student studying online"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
      <div className="bg-gray-100 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2">100%</h4>
              <p className="text-gray-600">Placement Assistance</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2">100+</h4>
              <p className="text-gray-600">Industry Partners</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2">20+</h4>
              <p className="text-gray-600">Courses</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2">1000+</h4>
              <p className="text-gray-600">Students Placed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
