import React,{useRef} from 'react'
import Slider from 'react-slick'
import './Projects.css'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import i1 from '../../assets/image.png'
import i2 from '../../assets/logoo.png'
import { PROJECTS_DETAILS } from '../../utills/data'


function Projects() {
  const sliderRef = useRef();

  const settings ={
    dots: false,
    isfinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
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

  return (
    <section className='projects-container'>
        <h5>Projects</h5>
        <div className='projects-content'>
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS_DETAILS.map((item) => (
            <ProjectsCard  key={item.title} title={item.title} photo={item.photo} subtitle={item.subtitle}/>
          ))}
        </Slider>
        </div>

    </section>
  )
}

export default Projects
