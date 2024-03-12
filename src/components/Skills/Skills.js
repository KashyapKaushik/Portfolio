import React, { useState } from 'react'
import './Skills.css'
import SkillCard from '../Skillcard/SkillCard'
import { SKILLS } from '../../utills/data'
import SkillInfoCard from '../SkillInfoCard/SkillInfoCard';

function Skills() {
    const[selectedSkill,setSelectedSkill] =useState(SKILLS[0]);
     
    const handleSelectSkill= (data) => {
        setSelectedSkill(data);
    };


  return (
    <section className='skills-container'>
        <h5>Technical Proficiency</h5>
        <div className='skills-content'>
            <div className='skills'>
                {SKILLS.map((item) => (
                    <SkillCard
                    key={item.title}
                    iconurl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => {
                        handleSelectSkill(item);
                    }}
                    />
                ))}
               
            </div>
            <div className='skills-info'>
                <SkillInfoCard
                heading={selectedSkill.title}

                skills={selectedSkill.skills}
                />
            </div>

        </div>

    </section>

  )
}

export default Skills

