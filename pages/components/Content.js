import React from 'react';
import Apartment from './Apartment';

export default function Content() {
  return (
    <div>
        <main className="main">
              <section class="section-hero pb-24">
                  <div class="slogan">

                      <div class="finder">
                        <div>
                              <h1>Get a place in<br />the best travel lodge<br /> in the Middle East.</h1>
                                <p class="mb-2">Search Confidently With your Trusted Source of <br /> Homes for Sale or Rent</p>
                                <button>View Homes</button>
                            </div>
                            <div class="guyhome">
                                <img src="Images/heroimg.jpg" alt="hero img" />
                            </div>
                      </div>
                    </div>
              </section>

              <section class="section-apartments px-16 pt-36 pb-16">
                  <h1 class="text-center text-4xl font-bold">Newly Listed Apartments</h1>
                  <p class="text-center text-lg pt-2">Hundreds of homes ready for sale or rent</p>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">

                      <Apartment
                        title="Qatari Apartments"
                        list1="Lorem ipsum"
                        img="images/dome1.jpg"
                        list2="Amet mon seur"
                        list3="Mon sor ipsum"
                        price="$200" />
                    
                    <Apartment
                        title="Qatari Apartments"
                        list1="Lorem ipsum"
                        img="images/apartments1.jpg"
                        list2="Amet mon seur"
                        list3="Mon sor ipsum"
                        price="$200" />
                    
                    <Apartment
                        title="Qatari Apartments Pro"
                        list1="Lorem ipsum"
                        img="images/apartments2.jpg"
                        list2="Amet mon seur"
                        list3="Mon sor ipsum"
                        price="$250" />

                    
                    <Apartment
                        title="Balcony Apartments"
                        list1="Lorem ipsum"
                        img="images/house2.jpg"
                        list2="Amet mon seur"
                        list3="Mon sor ipsum"
                        price="$300" />

                  </div>
              </section>

              <section class="section-services">
                  <h3 class="text-center text-lg">Our Services</h3>
                  <h1 class="text-center text-4xl font-bold pt-2">How TravelLodge could help you</h1>

                  <div class="collabo">
                      <div class="house">
                          <img src="./Images/colabo2.png" alt="" />
                              <p>Get a house to rent</p>
                      </div>

                      <div class="house">
                          <img src="./Images/colabo1.png" alt="" />
                              <p>Buy a new home</p>
                      </div>

                      <div class="house">
                          <img src="./Images/colabo.png" alt="" />
                              <p>Be a partner with FindaPlace</p>
                      </div>
                  </div>
              </section>

              <section class="section-about grid grid-cols-1 md:grid-cols-2 grid-gap-2">
                  <div class="combinedimages hidden md:inline-block">
                      <img src="./Images/Component.png" alt="" />
                  </div>

                  <div class="aboutus">
                      <h3 class="text-center text-lg">About us</h3>
                      <h1 class="text-center text-4xl font-bold">Helping people to find <br /> comfortable lodge</h1><br />
                          <p>At TravelLodge, we help you easily find a place to rent or a home to stay from the comfort of your sofa.
                              A real estate agent tries to sell a house to his clients, we walk the extra mile to find a place for you,
                              which you might later call your home.</p>

                      <p>Whether dining under the African sky in the open bush, on in a dining tent in the Middle East, our team will treat you to a wide selection of menus that promise to be exciting, social and inspirational.</p>
                  </div>
              </section>

              <section class="section-gallery">
                  <div class="inline-block md:flex">
                      <div class="firstimg">
                          <img src="images/zest-tea--jPkLc4rhjQ-unsplash.jpg" alt="image" />
                      </div>

                      <div class="secondimg">
                          <img src="images/dome2.jpg" alt="image" />
                      </div>
                  </div>

                  <div class="inline-block md:flex">
                      <div class="firstimg">
                          <img src="images/dome1.jpg" alt="image" />
                      </div>

                      <div class="secondimg">
                          <img src="images/dome3.jpg" alt="image" />
                      </div>
                  </div>
              </section>
        </main>
    </div>
  )
}
