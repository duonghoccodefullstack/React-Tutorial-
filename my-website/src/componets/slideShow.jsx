import React, { useState } from 'react';

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://images.pexels.com/photos/20410779/pexels-photo-20410779/free-photo-of-a-wooden-walkway-in-the-middle-of-a-jungle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/20445475/pexels-photo-20445475/free-photo-of-woman-on-a-field-among-windmills.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6224550/pexels-photo-6224550.jpeg',
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className='ml-28 mt-10 w-full overflow-hidden relative'>
      <div className='overflow-hidden flex transition-transform ease-in-out'>
        {images.map((src, index) => (
          <div className='overflow-hidden bg-cover h-full' key={index}>
            <img className='w-full h-full' src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div>
        <button onClick={goToPrevSlide}>Trái</button>
        <button onClick={goToNextSlide}>Phải</button>
      </div>
    </div>
  );
}
