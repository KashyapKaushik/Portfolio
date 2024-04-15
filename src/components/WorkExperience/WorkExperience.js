import React,{useRef} from 'react'
import Slider from 'react-slick'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utills/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import ProjectsCard from '../Projects/ProjectsCard/ProjectsCard'

function WorkExperience() {
  const sliderRef = useRef();

  const settings ={
    dots: false,
    isfinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1, 
        },
      },
    ],
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };

  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className='experience-container' id='workexpo'>
        <h4>About Me</h4>
        <h5>Work Experience</h5>
        <div className='experience-content'>
          <div className='arrow-right' onClick={sliderRight}>
            <span className='material-symbols-outlined'>chevron_right</span>
          </div>
          <div className='arrow-left' onClick={sliderLeft}>
            <span className='material-symbols-outlined'>chevron_left</span>
          </div>
          <Slider ref={sliderRef} {...settings}>  
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item}/>
            ))} 
          </Slider>

        </div>

    </section>
    
  )
}

export default WorkExperience
