import React, { useEffect, useState, useRef } from 'react';
import './slider.css'; // Import your CSS file

const Slider = ({ onPdfSelect }) => {
  // State variables
  const [value, setValue] = useState(0); // Transform value
  const [trailValue, setTrailValue] = useState(0); // Trail index number
  const interval = 2000; // Interval duration
  const startRef = useRef(null); // Ref to store the 'start' variable

  // Slides data
  const slidesData = [
    {
      title: "A Thousand Splendid Suns",
      image: process.env.PUBLIC_URL + "/img1.jpeg", // Add the absolute URL for the book cover image
      pdfUrl:  'http://127.0.0.1:8000/fetch-book/6606e21f694eb1775c95e449',
    },
    {
      title: "A Little Life",
      image: process.env.PUBLIC_URL + "/img2.jpeg",
      pdfUrl:  'http://127.0.0.1:8000/fetch-book/6606e21f694eb1775c95e449',
    },
    {
      title: "Kite Runner",
      image: process.env.PUBLIC_URL + "/img3.jpeg",
      pdfUrl:  'http://127.0.0.1:8000/fetch-book/6606e21f694eb1775c95e449',
    },
    {
      title: "Crime and Punishment",
      image: process.env.PUBLIC_URL + "/img6.jpeg",
      pdfUrl:  'http://127.0.0.1:8000/fetch-book/6606e21f694eb1775c95e449',
    },
    {
      title: "Half girlfriend",
      image: process.env.PUBLIC_URL + "/img8.jpeg",
      pdfUrl:  'http://127.0.0.1:8000/fetch-book/6606e21f694eb1775c95e449',
    }
  ];
  

  useEffect(() => {
    startRef.current = setInterval(() => slide("increase"), interval); // Assign value to 'startRef.current'
    return () => clearInterval(startRef.current);
  }, []);

  const slide = (condition, index) => {
    clearInterval(startRef.current);
    let newIndex;
    if (condition === "increase") {
      newIndex = value === 80 ? 0 : value + 20; // If at last slide, go to first slide
    } else if (condition === "decrease") {
      newIndex = value === 0 ? 80 : value - 20; // If at first slide, go to last slide
    } else {
      newIndex = index * 20;
    }
    setValue(newIndex);
    setTrailValue(newIndex / 20);
    move(newIndex, newIndex / 20);
    startRef.current = setInterval(() => slide("increase"), interval);
  };

  const move = (S, T) => {
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${S}%)`;
    const trail = document.querySelectorAll(".trail div");
    trail.forEach((trailItem) => trailItem.classList.remove("active"));
    trail[T].classList.add("active");
  };

  // Event handler for image click
  const handleImageClick = (pdfUrl) => {
    // Open PDF in a new window
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="container">
      <div className="slider">
        {slidesData.map((slide, index) => (
          <div className={`box${index + 1} box`} key={index}>
            <div className="bg"></div>
            <div className="details">
              <h1>{slide.title}</h1>
              <p>{slide.content}</p>
              <button id='readnow' onClick={() => handleImageClick(slide.pdfUrl)}>Read Now</button>
            </div>
            <div className="illustration">
              <div className="inner">
                <img src={slide.image} alt={`Book cover for ${slide.title}`} onClick={() => handleImageClick(slide.pdfUrl)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <svg xmlns="http://www.w3.org/2000/svg" className="prev" width="56.898" height="91" viewBox="0 0 56.898 91" onClick={() => slide("decrease")}>
          <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="next" width="56.898" height="91" viewBox="0 0 56.898 91" onClick={() => slide("increase")}>
          <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/>
        </svg>
      </div>
      <div className="trail">
        {slidesData.map((_, index) => (
          <div className={`box${index + 1} ${index * 20 === value ? 'active' : ''}`} key={index} onClick={() => slide("navigate", index)}>{index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
