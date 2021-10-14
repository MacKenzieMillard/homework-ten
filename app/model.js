var MODEL = (function(){
    var homeContent = `
    <div class="home">
          <section class="hero">
            <div class="callout">
              <h1>travel-fly</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>Fugiat aliquid minus nemo sed est.</p>
              <div class="read-more">READ MORE</div>
            </div>
          </section>
          <section class="promoTrips">
            <div class="israelTour">
              <h1>ISRAEL</h1>
              <h4>FROM $1000</h4>
              <div class="learnMore">LEARN MORE</div>
            </div>
            <div class="usaTour">
              <h1>U.S.A</h1>
              <h4>FROM $1500</h4>
              <div class="learnMore">LEARN MORE</div>
            </div>
            <div class="austrailiaTour">
              <h1>AUSTRAILIA</h1>
              <h4>FROM $1800</h4>
              <div class="learnMore">LEARN MORE</div>
            </div>
          </section>
          <section class="bookingForm">
            <div class="booking-wrapper">
              <h1>Booking Form</h1>
              <form>
                <div class="textInputs">
                  <div class="firstFour">
                    <div class="topTwo">
                      <input type="text" placeholder="name..." />
                      <input type="text" placeholder="email..." />
                    </div>
                    <div class="bottomTwo">
                      <input type="text" placeholder="country..." />
                      <input type="text" placeholder="hotel..." />
                    </div>
                  </div>
                  <div class="check">
                    <div class="checkIn">
                      <label for="checkin">Check-in</label>
                      <input type="text" placeholder="05/10/2020" />
                    </div>
                    <div class="checkOut">
                      <label for="checkout">Check-out</label>
                      <input type="text" placeholder="05/20/2020" />
                    </div>
                  </div>
                  <div class="numbers">
                    <div class="adult">
                      <label for="adult">Adult</label>
                      <input type="text" placeholder="2" />
                    </div>
                    <div class="children">
                      <label for="children">Children</label>
                      <input type="text" placeholder="0" />
                    </div>
                    <div class="rooms">
                      <label for="rooms">Rooms</label>
                      <input type="text" placeholder="1" />
                    </div>
                  </div>
                  <div class="comments">
                    <input type="text" placeholder="message..." />
                  </div>
                </div>
                <div class="subBtn">
                  <input class="booking-submit" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </section>
        </div>
  `;
    var aboutContent = `
    <div class="about">
    <div class="aboutPara">
      <h1>ABOUT:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="client-quotes">
      <div class="quotes">
        <h1>CLIENT QUOTES:</h1>
        <div class="clients">
          <div class="personImage">
            <img src="images/about-client-01.jpg" alt="client one" />
          </div>
          <div class="aboutClient">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div class="author">- Miranda Brown</div>
        </div>
        <div class="clients">
          <div class="personImage">
            <img src="images/about-client-02.jpg" alt="client two" />
          </div>
          <div class="aboutClient">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div class="author">- Johnathan Wes</div>
        </div>
      </div>
    </div>
  </div>
  `;
    var toursContent = `
    <div class="tours-container">
      <div class="toursHero">
        <div class="toursCallout">
          <h1>TOURS:</h1>
        </div>
      </div>
      <div class="tourLocations">
        <div class="tourReusable">
          <h1>Israel</h1>
          <div class="tourPrice">From: $1000</div>
          <div class="learnMore">
            <a id="learnMore" href="israelTour.html">LEARN MORE</a>
          </div>
          <div class="backgroundImgTour">
            <img src="images/tour-01.jpg" alt="israel tour" />
          </div>
        </div>
        <div class="tourReusable">
          <h1>U.S.A</h1>
          <div class="tourPrice">From: $1500</div>
          <div class="learnMore">
            <a id="learnMore" href="usaTour.html">LEARN MORE</a>
          </div>
          <div class="backgroundImgTour">
            <img src="images/tour-02.jpg" alt="usa tour" />
          </div>
        </div>
        <div class="tourReusable">
          <h1>Australia</h1>
          <div class="tourPrice">From: $1800</div>
          <div class="learnMore">
            <a id="learnMore" href="australiaTour.html">LEARN MORE</a>
          </div>
          <div class="backgroundImgTour">
            <img src="images/tour-03.jpg" alt="aus tour" />
          </div>
        </div>
        <div class="tourReusable">
          <h1>New Zealand</h1>
          <div class="tourPrice">From: $1200</div>
          <div class="learnMore">
            <a id="learnMore" href="newZealandTour.html">LEARN MORE</a>
          </div>
          <div class="backgroundImgTour">
            <img src="images/tour-04.jpg" alt="new Zealand tour" />
          </div>
        </div>
        <div class="tourReusable">
          <h1>France</h1>
          <div class="tourPrice">From: $2500</div>
          <div class="learnMore">
            <a id="learnMore" href="franceTour.html">LEARN MORE</a>
          </div>
          <div class="backgroundImgTour">
            <img src="images/tour-05.jpg" alt="France tour" />
          </div>
        </div>
        <div class="tourReusable">
          <h1>Egypt</h1>
          <div class="tourPrice">From: $900</div>
          <div class="learnMore">
            <a id="learnMore" href="egyptTour.html">LEARN MORE</a>
          </div>
          <div class="backgroundImgTour">
            <img src="images/tour-06.jpg" alt="Egypt tour" />
          </div>
        </div>
        <div class="tourReusable">
          <h1>Japan</h1>
          <div class="tourPrice">From: $1300</div>
          <div class="learnMore">
            <a id="learnMore" href="japanTour.html">LEARN MORE</a>
          </div>
          <div class="backgroundImgTour">
            <img src="images/tour-07.jpg" alt="japan tour" />
          </div>
        </div>
        <div class="tourReusable">
          <h1>Canada</h1>
          <div class="tourPrice">From: $2000</div>
          <div class="learnMore">
            <a id="learnMore" href="canadaTour.html">LEARN MORE</a>
          </div>
          <div class="backgroundImgTour">
            <img src="images/tour-08.jpg" alt="Canada tour" />
          </div>
        </div>
        <div class="tourReusable">
          <h1>U.A.E</h1>
          <div class="tourPrice">From: $3000</div>
          <div class="learnMore">
            <a id="learnMore" href="uaeTour.html">LEARN MORE</a>
          </div>
          <div class="backgroundImgTour">
            <img src="images/tour-09.jpg" alt="uae tour" />
          </div>
        </div>
      </div>
    </div>
    `;
    var specialOffersContent = `
    <div class="specialContainer">
      <h1>SPECIAL OFFER(S):</h1>
      <div class="offer">
        <div class="offerImage">
          <img src="images/special-offer-01.jpg" alt="special offer 1 pic" />
        </div>
        <div class="offerDetails">
          <div class="detailsHeader">
            <h1>BARCELONA, SPAIN</h1>
            <div class="percentOff">(20% off!)</div>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div class="learnMore">LEARN MORE</div>
        </div>
      </div>
      <div class="offer">
        <div class="offerImage">
          <img src="images/special-offer-02.jpg" alt="special offer 12 pic" />
        </div>
        <div class="offerDetails">
          <div class="detailsHeader">
            <h1>BANGKOK, THAILAND</h1>
            <div class="percentOff">(10% off!)</div>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div class="learnMore">LEARN MORE</div>
        </div>
      </div>
    </div>
    `;
    var blogContent = `
    <div class="blogContainer">
      <h1>BLOG:</h1>
      <div class="blogPosts">
        <div class="blogDate">
          <p class="day">06</p>
          <p class="month">JUN</p>
        </div>
        <div class="post">
          <div class="postImage">
            <img src="images/blog.jpg" alt="blog image" />
          </div>
          <div class="postWords">
            <h6>Sed et persipiatis unde omnis iste natus</h6>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
      <div class="blogPosts">
        <div class="blogDate">
          <p class="day">23</p>
          <p class="month">JUL</p>
        </div>
        <div class="post">
          <div class="postImage">
            <img src="images/blog.jpg" alt="blog image" />
          </div>
          <div class="postWords">
            <h6>Sed et persipiatis unde omnis iste natus</h6>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
    `;
    var contactContent = `
    <div class="contactContainer">
      <h1>CONTACT US:</h1>
      <div class="contactForm">
        <div class="map">
          <img src="images/map.png" alt="map" />
          <p class="directions">travel-fly Inc.</p>
          <p class="directions">8901 Marmora Road,</p>
          <p class="directions">Glasgow, D04 89GR.</p>
          <p class="directions">Freephone:+1 800 559 6580</p>
          <p class="directions">Telephone:+1 800 603 6035</p>
          <p class="directions">FAX:+1 800 889 9898</p>
          <p class="directions">E-mail: mail@travelfly.org</p>
        </div>
        <div class="form">
          <div class="textInput">
            <input type="text" placeholder="Your name..." />
          </div>
          <div class="textInput">
            <input type="text" placeholder="Email Address..." />
          </div>
          <div class="textInput">
            <input type="text" placeholder="Company" />
          </div>
          <div class="messageInput">
            <input type="text" placeholder="Message..." />
          </div>
          <div class="subBtn">SEND MESSAGE</div>
        </div>
      </div>
    </div>
    `;

    var _changePageContent = function(pageName){
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));
        
        if (pageName == "home") {
            $("homeNav").removeClass("allNav") 
            $("allNav").addClass("homeNav") 
        }
        else {
            $("homeNav").addClass("allNav")
            $("allNav").removeClass("homeNav")
        }
    };

    return{
        changePageContent: _changePageContent,
    }
})();