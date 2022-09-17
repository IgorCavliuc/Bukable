import React from "react";
import Avatar from "../../img/not_found.jpeg";

function EducationItem({ education }) {
  return (
    <div className="education__list">
      {education ? (
        education.map((item, index) => (
          <div key={index} className="education__item">
            <div className="education__image">
              <img src={item.img ? item.img : { Avatar }} alt="Flag" />
            </div>
            <div className="education__info">
              <p className="item-name">
                {item.speciality ? item.speciality : "none Speciality"}
              </p>
              <p className="item-detale">
                {item.education ? item.education : "none Education"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="education__item">
          <div className="education__image">
            <img src={Avatar} alt="Flag" />
          </div>
          <div className="education__info">
            <p className="item-name">none Speciality</p>
            <p className="item-detale">none Education</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationItem;
