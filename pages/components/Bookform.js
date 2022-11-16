import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
// import './../script.js';


export default function Bookform() {

  return (
      <div>
        <div className="py-10 min-h-screen bg-gray-300 px-2">
              <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
                      <div className="w-full">
                          <p className="flex justify-center items-center h-16 w-full bg-orange-700 text-white">Create Account</p>
                          <div className="main block">
                              <h4 className="flex justify-center items-center mt-5 text-lg text-gray-800 font-medium">Step 1. User Profile</h4>
                              <div className="mt-7 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg user_name" type="text" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">First Name</label> </div>
                              <div className="mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Last Name</label> </div>
                              <div className="mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="number" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Phone Number</label> </div>
                              <div className="flex w-full gap-px">
                                  <div className="w-full mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">E-mail</label> </div>
                                  <div className="w-full mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none pr-8 w-full border rounded-lg pass" type="password" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Password</label> <i className="text-orange-800 fa fa-eye-slash absolute top-4 cursor-pointer right-6"></i> </div>
                              </div>
                              <div className="mt-6 flex justify-center px-4 relative"> <button className="create_acc text-md h-12 w-full bg-green-400 rounded-full text-white hover:bg-green-600 transition-all">Create Account<i className="fa fa-long-arrow-right absolute top-4 right-8"></i></button> </div>
                              <p className="my-10 text-center text-sm px-4 text-gray-500">By clicking "Create Account",I agree<br /> to Earnify's <a className="text-blue-800" href="#">Privacy Policy</a></p>
                          </div>
                          <div className="main hidden">
                              <h4 className="flex justify-center items-center mt-5 text-lg text-gray-800 font-medium">Step 2. Contact Details</h4>
                              <div className="flex w-full gap-px">
                                  <div className="w-full mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Place of Birth</label> </div>
                                  {/* <div className="w-full mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Village/City/Town</label> </div> */}
                              </div>
                              <div className="flex w-full gap-px">
                                  <div className="w-full mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">District</label> </div>
                                  {/* <div className="w-full mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">State</label> </div> */}
                              </div>
                              <div className="flex w-full gap-px">
                                  <div className="w-full mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Nationality</label> </div>
                                  {/* <div className="w-full mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Religion</label> </div> */}
                              </div>
                              <div className="flex w-full gap-px">
                                  <div className="w-full mt-6 px-4 relative"> <input className="mt-6 cursor-pointer" type="radio" name="gender" /> MALE <input className=" cursor-pointer" type="radio" name="gender" />FEMALE <span className="text-orange-800 absolute transition-all pointer-events-none text-sm left-4">Select Gender</span> </div>
                                      <div className="w-full mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Blood Group</label> </div>
                                  </div>
                                  <div className="mt-6 flex mb-10 justify-center px-4 relative gap-2"> <button className="back_page text-md h-12 w-full bg-green-400 rounded-full text-white hover:bg-green-600 transition-all ">Previous<i className="fa fa-long-arrow-left absolute top-4 left-8"></i></button> <button className="next_page text-md h-12 w-full bg-green-400 rounded-full text-white hover:bg-green-600 transition-all">Next<i className="fa fa-long-arrow-right absolute top-4 right-8"></i></button> </div>
                              </div>
                              <div className="main hidden">
                                  <h4 className="flex justify-center items-center mt-5 text-lg text-gray-800 font-medium">Step 3. Payment Details</h4>
                                  <div className="mt-7 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Card No</label> </div>
                                  <div className="mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="text" require required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">Date</label> </div>
                                  <div className="mt-6 px-4 relative"> <input className="h-12 transition-all px-1 outline-none w-full border rounded-lg" type="number" required /> <label className="text-orange-800 absolute transition-all top-4 pointer-events-none text-sm left-5">CVC</label> </div>
                                  <div className="mt-6 flex mb-10 justify-center px-4 relative gap-2"> <button className="back_page text-md h-12 w-full bg-green-400 rounded-full text-white hover:bg-green-600 transition-all ">Previous<i className="fa fa-long-arrow-left absolute top-4 left-8"></i></button> <button className="submit_page text-sm h-12 w-full bg-blue-400 rounded-full text-white hover:bg-blue-600 transition-all">Submit Details<i className="fa fa-long-arrow-right absolute top-5 right-8"></i></button> </div>
                                  <p className="my-10 text-center text-sm px-4 text-gray-500">By clicking "Create Account",I agree<br /> to Earnify's <a className="text-blue-800" href="#">Privacy Policy</a></p>
                              </div>
                              <div className="main hidden">
                                  <h4 className="flex justify-center items-center mt-5 text-lg text-gray-800 font-medium">Congrats Mr./Mrs. <span className="shown_name"></span></h4> <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                      <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                      <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /> </svg>
                                  <p className="mt-5 mb-10 text-sm px-4 text-center text-pink-700 font-semibold	tracking-wide">Thanks for creating campaign with earnify,your details have been submitted successfully we fill contact you soon for further regards. </p>
                              </div>
                          </div>
                  </div>
        </div>

        
    </div>
  )
}
