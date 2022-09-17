import React from "react";
import "./PersoneDetale.css";
import Avatar from "../../img/not_found.jpeg";
import EducationItem from "../EducationItem/EducationItem";

function PersoneDetale({
  image,
  name,
  location,
  avaible_time,
  position,
  text,
  like,
  avaible,
  official,
  Education,
  Experience,
  activeDetale,
  closeViewPersone,
}) {
  let classes = "persone-detale__avaible";
  let classClose = "persone-detale";
  if (avaible == true) {
    classes += " green";
  } else {
    classes += " red";
  }
  if (activeDetale == true) {
    classClose += " block";
  } else {
    classClose += " ";
  }

  const console = () => {
    closeViewPersone()
  };
  return (
    <div className={classClose}>
      <div className="person-detale__info">
        <div className="persone-detale__content">
          <div className="persone-detale__image">
            <div className="image">
              <img src={image ? image : Avatar} alt="avatar" />
            </div>
          </div>
          <div className="persone-detale__info">
            <h1 className="name">
              {name ? name : "None Name"}
              {official == true ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.49958 13.3889L5.49045 15L4.556 12.5999L2.00994 12.9904L2.40007 10.4444L0 9.50963L1.61158 7.5L0 5.49037L2.40007 4.55557L2.00994 2.00963L4.556 2.4001L5.49045 0L7.49958 1.61114L9.50955 0L10.444 2.4001L12.9901 2.00963L12.5999 4.55557L15 5.49037L13.3884 7.5L15 9.50963L12.5999 10.4444L12.9901 12.9904L10.444 12.5999L9.50955 15L7.49958 13.3889Z"
                    fill="#9A05EB"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6783 5.25806C11.0588 5.58425 11.1028 6.15716 10.7767 6.53768L7.67059 10.1612C7.5129 10.3451 7.28819 10.4584 7.04651 10.4757C6.80483 10.4931 6.56625 10.413 6.38392 10.2535L4.31375 8.44167C3.9366 8.11158 3.89844 7.53826 4.22852 7.1611C4.5586 6.78395 5.13193 6.74579 5.50909 7.07587L6.8893 8.28382L9.39864 5.35645C9.72483 4.97592 10.2977 4.93187 10.6783 5.25806Z"
                    fill="white"
                  />
                </svg>
              ) : (
                " "
              )}
            </h1>
            <p className="position">{position ? position : "Position none"}</p>
            <div className="persone-detale__btn">
              <p className="persone-detale__connect">Connect</p>
              <p className="persone-detale__avaible-time">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_36)">
                    <path
                      d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 3V6L8 7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_36">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {avaible_time ? avaible_time : "none time"}
              </p>
              <p className={classes}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_41)">
                    <path
                      d="M6.5 1.12897L1.5 6.97412H6L5.5 10.8709L10.5 5.02574H6L6.5 1.12897Z"
                      fill="white"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_41">
                      <rect
                        width="12"
                        height="11.6903"
                        fill="white"
                        transform="translate(0 0.154846)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Avaible
              </p>
            </div>
            <div className="persone-detale__footer">
              <p className="persone-detale__location">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_27)">
                    <path
                      d="M8.75 4.8335C8.75 7.75016 5 10.2502 5 10.2502C5 10.2502 1.25 7.75016 1.25 4.8335C1.25 3.83893 1.64509 2.88511 2.34835 2.18185C3.05161 1.47858 4.00544 1.0835 5 1.0835C5.99456 1.0835 6.94839 1.47858 7.65165 2.18185C8.35491 2.88511 8.75 3.83893 8.75 4.8335Z"
                      stroke="#9A05EB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 6.0835C5.69036 6.0835 6.25 5.52385 6.25 4.8335C6.25 4.14314 5.69036 3.5835 5 3.5835C4.30964 3.5835 3.75 4.14314 3.75 4.8335C3.75 5.52385 4.30964 6.0835 5 6.0835Z"
                      stroke="#9A05EB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_27">
                      <rect width="10" height="10.6667" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {location ? location : "none Location"}
              </p>
              <p className="persone-detale__joined">Joined 5 month ago</p>
            </div>
          </div>
        </div>

        <div className="manager-btn">
          <div className="persone-detale__close">
            <div className="close" onClick={console}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 3.75L3.75 11.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.75 3.75L11.25 11.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="persone-detale__like">
            {like != true ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                  fill="#9A05EB"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2774 4.29989C11.7552 4.1019 12.2674 4 12.7846 4C13.3018 4 13.814 4.1019 14.2918 4.29989C14.7695 4.49783 15.2035 4.78793 15.5691 5.15362C15.9349 5.51926 16.2251 5.9534 16.4231 6.43122C16.6211 6.90904 16.723 7.42119 16.723 7.93841C16.723 8.45563 16.6211 8.96778 16.4231 9.44561C16.2252 9.92337 15.935 10.3575 15.5693 10.7231C15.5692 10.7231 15.5693 10.723 15.5693 10.7231L10.5266 15.7657C10.2142 16.0781 9.7077 16.0781 9.39528 15.7657L4.35266 10.7231C3.61413 9.98454 3.19922 8.98286 3.19922 7.93841C3.19922 6.89396 3.61413 5.89229 4.35266 5.15375C5.0912 4.41521 6.09288 4.00031 7.13733 4.00031C8.18178 4.00031 9.18345 4.41521 9.92199 5.15375L9.96096 5.19272L9.9998 5.15388C9.99984 5.15384 9.99976 5.15393 9.9998 5.15388C10.3654 4.78813 10.7996 4.49785 11.2774 4.29989ZM14.4378 6.28499C14.2207 6.06783 13.963 5.89556 13.6793 5.77803C13.3957 5.66049 13.0916 5.6 12.7846 5.6C12.4776 5.6 12.1735 5.66049 11.8899 5.77803C11.6062 5.89556 11.3485 6.06783 11.1314 6.28499L10.5266 6.88978C10.2142 7.2022 9.7077 7.2022 9.39528 6.88978L8.79062 6.28512C8.35214 5.84664 7.75743 5.60031 7.13733 5.60031C6.51722 5.60031 5.92251 5.84664 5.48403 6.28512C5.04555 6.7236 4.79922 7.31831 4.79922 7.93841C4.79922 8.55852 5.04555 9.15322 5.48403 9.5917L9.96096 14.0686L14.4379 9.5917C14.655 9.37465 14.8274 9.1168 14.945 8.83314C15.0625 8.54948 15.123 8.24545 15.123 7.93841C15.123 7.63137 15.0625 7.32734 14.945 7.04369C14.8274 6.76003 14.6549 6.50205 14.4378 6.28499Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                  fill="#9A05EB"
                />
                <path
                  d="M15.0044 5.71924C14.713 5.42775 14.3671 5.19652 13.9863 5.03876C13.6056 4.881 13.1975 4.7998 12.7854 4.7998C12.3732 4.7998 11.9652 4.881 11.5844 5.03876C11.2037 5.19652 10.8578 5.42775 10.5664 5.71924L9.96174 6.3239L9.35708 5.71924C8.76858 5.13073 7.97039 4.80011 7.13811 4.80011C6.30583 4.80011 5.50764 5.13073 4.91913 5.71924C4.33062 6.30775 4 7.10594 4 7.93822C4 8.77049 4.33062 9.56868 4.91913 10.1572L5.52379 10.7619L9.96174 15.1998L14.3997 10.7619L15.0044 10.1572C15.2958 9.86584 15.5271 9.51992 15.6848 9.13918C15.8426 8.75844 15.9238 8.35035 15.9238 7.93822C15.9238 7.52609 15.8426 7.118 15.6848 6.73726C15.5271 6.35652 15.2958 6.01059 15.0044 5.71924Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2774 4.29989C11.7552 4.1019 12.2674 4 12.7846 4C13.3018 4 13.814 4.1019 14.2918 4.29989C14.7695 4.49783 15.2035 4.78793 15.5691 5.15362C15.9349 5.51926 16.2251 5.9534 16.4231 6.43122C16.6211 6.90904 16.723 7.42119 16.723 7.93841C16.723 8.45563 16.6211 8.96778 16.4231 9.44561C16.2252 9.92337 15.935 10.3575 15.5693 10.7231C15.5692 10.7231 15.5693 10.723 15.5693 10.7231L10.5266 15.7657C10.2142 16.0781 9.7077 16.0781 9.39528 15.7657L4.35266 10.7231C3.61413 9.98454 3.19922 8.98286 3.19922 7.93841C3.19922 6.89396 3.61413 5.89229 4.35266 5.15375C5.0912 4.41521 6.09288 4.00031 7.13733 4.00031C8.18178 4.00031 9.18345 4.41521 9.92199 5.15375L9.96096 5.19272L9.9998 5.15388C9.99984 5.15384 9.99976 5.15393 9.9998 5.15388C10.3654 4.78813 10.7996 4.49785 11.2774 4.29989ZM14.4378 6.28499C14.2207 6.06783 13.963 5.89556 13.6793 5.77803C13.3957 5.66049 13.0916 5.6 12.7846 5.6C12.4776 5.6 12.1735 5.66049 11.8899 5.77803C11.6062 5.89556 11.3485 6.06783 11.1314 6.28499L10.5266 6.88978C10.2142 7.2022 9.7077 7.2022 9.39528 6.88978L8.79062 6.28512C8.35214 5.84664 7.75743 5.60031 7.13733 5.60031C6.51722 5.60031 5.92251 5.84664 5.48403 6.28512C5.04555 6.7236 4.79922 7.31831 4.79922 7.93841C4.79922 8.55852 5.04555 9.15322 5.48403 9.5917L9.96096 14.0686L14.4379 9.5917C14.655 9.37465 14.8274 9.1168 14.945 8.83314C15.0625 8.54948 15.123 8.24545 15.123 7.93841C15.123 7.63137 15.0625 7.32734 14.945 7.04369C14.8274 6.76003 14.6549 6.50205 14.4378 6.28499Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="persone-detale__info-text">
        <div className="persone-detale__about">
          <p className="persone-detale__about-title title">About</p>
          <p className="persone-detale__about-text text">
            {text ? text : "none text"}
          </p>
        </div>
        <div className="persone-detale__education">
          <p className="education__title title">Education</p>

          <EducationItem education={Education} />
        </div>

        <div className="persone-detale__experience">
          <p className="experience__title title">Experience</p>
          <div>
            {Experience
              ? Experience.map((item, index) => (
                  <div key={index}>
                    <div className="experience__info">
                      <div className="experience__location">
                        <div className="experience__location-image">
                          <img src={item.img} alt="Logo" />
                        </div>
                      </div>
                      <div className="experience__location-info">
                        <p className="info-position">{item.position}</p>
                        <p className="info-location">{item.location}</p>
                        <p className="info-date">{item.time}</p>
                      </div>
                    </div>
                    <div className="experience__goal-skills">
                      <ul className="experience__goal-list">
                        {item.goal
                          ? item.goal.map((item, index) => (
                              <li key={index} className="experience__goal-item">
                                {item.text}
                              </li>
                            ))
                          : "none goal"}
                      </ul>
                      <p className="experience__skills">
                        Skills : {item.skill ? item.skill : "none"}
                      </p>
                    </div>
                  </div>
                ))
              : "none Experience"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersoneDetale;
