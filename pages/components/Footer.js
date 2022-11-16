import React from 'react'

export default function Footer() {
  return (
    <div>
          <footer class="bg-gray-50 text-gray-600 px-6 lg:px-8 py-12">
              <div class="max-w-screen-xl mx-auto mb-12 lg:mb-16  ">
                  <img class="h-8" src="https://img.icons8.com/ios/2x/polygonal-tent.png" alt="UptimeMate logo" />
              </div>
              <div class="max-w-screen-xl mx-auto ">
                  <h1 className="text-center text-xl text-black">United Arab Emirates, TravelLodge &copy; </h1>
              </div>
              <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 lg:mt-12 border-t-2 border-gray-200 pt-8">
                  <nav class="flex flex-wrap justify-center space-x-6">
                      <a href="#" class="font-normal text-sm hover:text-gray-400 mb-2">Cookie settings</a>
                  </nav>
                  <p class="text-sm text-center md:text-right">&copy;2020 Company. All rights reserved. | All rights reserved</p>
              </div>
          </footer>
    </div>
  )
}
