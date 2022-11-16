import React from 'react'

export default function Header() {
  return (
      <div class="nav">
          <input type="checkbox" id="nav-check" />
              <div class="nav-header">
                  <div class="nav-title">
                  <img src="https://img.icons8.com/ios/2x/polygonal-tent.png" alt="logo" className="logo" />
                  </div>
              </div>
              <div class="nav-btn">
                  <label for="nav-check">
                      <span></span>
                      <span></span>
                      <span></span>
                  </label>
              </div>

              <div class="nav-links">
                  <a href="#" target="_blank">BUY</a>
                  <a href="#" target="_blank">RENT</a>
                  <a href="#" target="_blank">BOOKINGS</a>
                  <a href="#" target="_blank">BLOG</a>
                  <a href="#" target="_blank">BOOK NOW</a>
              </div>
      </div>
  )
}
