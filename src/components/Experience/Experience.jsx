import "./experience.css";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { skillsFrontend } from "../../data";
import { skillsBackend } from "../../data";
import { useState } from "react";
const Experience = () => {
  const [percent, setPersent] = useState(0);
  const [lanName, setLanName] = useState("");
  const handlePercentSkill = (perc, lName) => {
    setPersent(Number(perc));
    setLanName(lName);
  };
  return (
    <section id="experience">
      <h5>What Skills I Have </h5>
      <h2>My Experience </h2>
      <div class="progressbar-title" style={{ width: "50vw",margin:'0 auto'}}>
        <h5 style={{ display: "flex", justifyContent: "center" }}>
          {percent ===0?'':(lanName + "   /   ") +(percent + "%")}
        </h5>
        <progress
          value={percent}
          max="100"
          style={{ width: "100%", height: "4px"}}
        />
      </div>
      <div className="container experience_container">
        <div className="experience_frontEnd">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {skillsFrontend.map(({ language, status, percent }, index) => {
              return (
                <article
                  key={index}
                  style={{ cursor: "pointer" }}
                  className="experience_detail"
                  onClick={() => handlePercentSkill(percent, language)}
                >
                  <FaLaptopCode className="experience_detail-icon" />
                  <div>
                    <h4>{language}</h4>
                    <small className="text-light">{status}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* End of Front End  */}

        <div className="experience_backEnd">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {skillsBackend.map(({ language, status, percent }, index) => {
              return (
                <article
                  key={index}
                  style={{ cursor: "pointer" }}
                  className="experience_detail"
                  onClick={() => handlePercentSkill(percent, language)}
                >
                  <BiSolidMessageRoundedCheck className="experience_detail-icon" />
                  <div>
                    <h4>{language}</h4>
                    <small className="text-light">{status}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
