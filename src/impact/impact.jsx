import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./impact.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import IMG1 from "../Images/farmer.jpg";
import IMG2 from "../Images/person.jpg";
import IMG3 from "../Images/farm.png";
import myVideo from "../videos/video.mp4";

function NextArrow({ onClick }) {
  return (
    <div className="arrow next" onClick={onClick} aria-hidden>
      <MdOutlineArrowForwardIos />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div className="arrow prev" onClick={onClick} aria-hidden>
      <MdOutlineArrowBackIos />
    </div>
  );
}

const videos = [
  {
    vid: myVideo,
  },
  {
    vid: myVideo,
  },
  {
    vid: myVideo,
  },
  {
    vid: myVideo,
  },
];

const stories = [
  {
    image: IMG1,
    caption: (
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Aut nam expedita quidem voluptatibus soluta perferendis, <br />
        deserunt molestias, possimus culpa reiciendis quisquam. <br />
      </p>
    ),
  },
  {
    image: IMG2,
    caption: (
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Aut nam expedita quidem voluptatibus soluta perferendis, <br />
        deserunt molestias, possimus culpa reiciendis quisquam. <br />
      </p>
    ),
  },
  {
    image: IMG3,
    caption: (
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Aut nam expedita quidem voluptatibus soluta perferendis, <br />
        deserunt molestias, possimus culpa reiciendis quisquam. <br />
      </p>
    ),
  },
  {
    image: IMG2,
    caption: (
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Aut nam expedita quidem voluptatibus soluta perferendis, <br />
        deserunt molestias, possimus culpa reiciendis quisquam. <br />
      </p>
    ),
  },
];

function Impact({ location: { pathname } }) {
  if (pathname !== "/impact") {
    return null;
  }

  const [index, setIndex] = useState(0);
  const settingsStories = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setIndex(next),
  };

  return (
    <div className="Impact">
      <div className="impact__header">
        <h1>IMPACT</h1>
      </div>

      <Slider {...settingsStories}>
        <div className="impact__stories">
          <h2>Our Impact Stories</h2>
          <div className="impact__stories-slider">
            {stories.map((story, idx) => (
              <div
                className={idx === index ? "slide activeSlide" : "slide"}
                key={story.image}
              >
                <img src={story.image} alt="" className="stories__image" />
                {story.caption}
              </div>
            ))}
          </div>
        </div>
        <div className="impact__videos">
          <h2>Videos</h2>
          {videos.map((story, idx) => (
              <div
                className={idx === index ? "slide activeSlide" : "slide"}
                key={story.vid}
              >
                <video
                  src={story.vid}
                  className="video-slider"
                  autoPlay
                  loop
                  muted
                  controls
                />
              </div>
            ))}
        </div>
      </Slider>

      {/* <div className="videos">
      </div> */}
    </div>
  );
}

export default Impact;
