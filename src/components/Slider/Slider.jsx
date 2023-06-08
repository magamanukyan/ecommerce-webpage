import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { sliderItems } from '../../data';
import scss from './Slider.module.scss';

const Slider = () => {
  const [slides] = useState(sliderItems);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prvSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className={scss.container}>
      <div className={scss.arrow} style={{ left: '10px' }} onClick={prvSlide}>
        <ArrowLeftOutlined />
      </div>
      <div className={scss.wrapper}>
        {sliderItems.map((item, index) => {
          if (index === activeSlide) {
            return (
              <div key={item.id} className={scss.slide} style={{ background:`#${item?.bg}`}}>
                <div className={scss.imageContainer}>
                  <img src={item.img} alt="shopping-model" />
                </div>
                <div className={scss.infoContainer}>
                  <h1 className={scss.title}>{item.title}</h1>
                  <p className={scss.desc}>{item.desc}</p>
                  <Link to='/productList/:id'><button>SHOP NOW</button> </Link>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className={scss.arrow} style={{ right: '10px' }} onClick={nextSlide}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
