import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BOMSA/bomsa-premium-suite-2068-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BOMSA/bomsa-suite-0037-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BOMSA/bomsa-deluxe-suite-2067-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BOMSA/bomsa-suite-0038-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BOMSA/bomsa-presidential-bathroom-4524-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BOMSA/bomsa-king-guestroom-2062-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Mariott Mumbai Juhu</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Ia Project Road, Chhatrapati Shivaji Intl Airport, Andheri, Mumbai, India, 400099</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 2000m from airport
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹5000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay near the airport</h1>
              <p className="hotelDesc">
                Located a 5-minute drive from Chhatrapati Shivaji Intl Airport, Mumbai, Mariott has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Juhu Beach. 
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Mumbai, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>₹40000</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
      </div>
    </div>
  );
};

export default Hotel;