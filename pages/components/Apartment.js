import React from 'react'

export default function Apartment(props) {
  return (
      <div class="cardimg">
          <img src={props.img} alt="apartments1" />

          <h1>{props.title}</h1>
          <ul>
              <li>{props.list1}</li>
              <li>{props.list2}</li>
              <li>{props.list3}</li>
          </ul>

          <div class="flex">
              <div class="price">
                  <p>{props.price}/Night</p>
              </div>

              <div class="button">
                  <a href="#" class="btn bg-red-500 hover:bg-red-700 text-white">Buy Now</a>
              </div>
          </div>
      </div>
  )
}
