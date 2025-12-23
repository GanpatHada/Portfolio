import React, { useState } from "react";
import "./Skills.css";
import { skillsList } from "../../../../utils/SkillsUtils";
import { IoContract, IoExpand } from "react-icons/io5";

const SkillDetails = ({ skill }) => {
  return (
    <section id="info-section">
      {skill && (
        <>
          <h1>{skill?.name}</h1>
          <span>{skill?.description}</span>
        </>
      )}
    </section>
  );
};

const SkillBox = ({ skill: { name, description, image }, setSkill ,expended }) => {
  return (
    <div
      onMouseEnter={() => !expended && setSkill({ name, description })}
      onMouseLeave={() => !expended && setSkill(null)}
      className="skill-box"
    >
      <section className="image-section">
        <img src={image} alt="" />
      </section>
      {expended && <section className="info-section">
        <h4>{name}</h4>
        <p>{description}</p>
      </section>}
    </div>
  );
};

const SkillGroup = ({ setSkill }) => {
  return (
    <div className="group">
      {skillsList.map((skill,index) => (
        <SkillBox key={index} skill={skill} setSkill={setSkill} />
      ))}
    </div>
  );
};

const SkillSlider = ({ setSkill }) => {
  return (
    <section id="slider-section">
      <SkillGroup setSkill={setSkill} />
      <SkillGroup setSkill={setSkill} />
    </section>
  );
};

const ContractedSkills = ({ skill, setSkill }) => {
  return (
    <div id="contracted-skills">
      <SkillDetails skill={skill} />
      <SkillSlider setSkill={setSkill} />
    </div>
  );
};

const ExpandedSkills = () => {
  return (
    <div id="expanded-skills">
      {skillsList.map((skill,index) => {
        return <SkillBox key={index} skill={skill} expended/>;
      })}
    </div>
  );
};

const SkillHeader = ({expended,setExpended}) => {
  return (
    <header>
      <h1>Technologies ,I work with</h1>
      <button title={expended?'minimize':'maximize'} onClick={()=>setExpended(!expended)}>
      {expended?<IoContract />:<IoExpand />}
      </button>
    </header>
  );
};

const Skills = () => {
  const [skill, setSkill] = useState(null);
  const [expended,setExpended]=useState(false)
  return (
    <section id="skills">
      <header>
        <h1>
          Skills
        </h1>
      </header>
      <main id="skills-content">
        <SkillHeader expended={expended} setExpended={setExpended} />
        {expended ? <ExpandedSkills />:<ContractedSkills skill={skill} setSkill={setSkill} />}
      </main>
    </section>
  );
};

export default Skills;
