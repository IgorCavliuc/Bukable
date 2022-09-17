import React from "react";
import BukableLogo from "../../img/BukableLogo(Purple&White).svg";
import Avatar from "../../img/avatar.svg";

import "./Header.css";

function Header({ onClickVisible }) {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__image">
          <img src={BukableLogo} alt="bukable logo" />
        </div>
        <div className="header__content">
          <div className="header__content_ball">
            <svg
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5939 10.1302C16.833 9.24165 16.4872 8.47161 16.4872 7.16338V6.71856C16.4872 5.01377 16.0948 3.91537 15.2418 2.81696C13.927 1.11113 11.7135 0.0830078 9.54672 0.0830078H9.45458C7.33331 0.0830078 5.18926 1.06392 3.85169 2.70051C2.95204 3.82095 2.51412 4.96657 2.51412 6.71856V7.16338C2.51412 8.47161 2.19111 9.24165 1.40741 10.1302C0.830763 10.7849 0.646484 11.6262 0.646484 12.5369C0.646484 13.4485 0.945678 14.3119 1.54614 15.0138C2.32984 15.8552 3.43654 16.3923 4.56706 16.4857C6.20383 16.6724 7.84059 16.7427 9.50117 16.7427C11.1607 16.7427 12.7975 16.6252 14.4353 16.4857C15.5648 16.3923 16.6715 15.8552 17.4552 15.0138C18.0546 14.3119 18.3548 13.4485 18.3548 12.5369C18.3548 11.6262 18.1705 10.7849 17.5939 10.1302Z"
                fill="white"
              />
              <path
                d="M11.5943 18.0287C11.0735 17.9175 7.90044 17.9175 7.37969 18.0287C6.93453 18.1315 6.45312 18.3707 6.45312 18.8953C6.47901 19.3957 6.77199 19.8374 7.17782 20.1175L7.17678 20.1185C7.70166 20.5277 8.31765 20.7878 8.96263 20.8812C9.30634 20.9284 9.65626 20.9263 10.0124 20.8812C10.6563 20.7878 11.2723 20.5277 11.7972 20.1185L11.7962 20.1175C12.202 19.8374 12.495 19.3957 12.5209 18.8953C12.5209 18.3707 12.0395 18.1315 11.5943 18.0287Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="header__profile">
            <div className="header__profile_avatar">
              <img src={Avatar} alt="Profile Avatar" />
            </div>
            <select name="profile" id="profile">
              <option></option>
            </select>
          </div>
          <div className="header__profile-menu" onClick={onClickVisible}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 12"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 2C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0H17C17.55 0 18 0.45 18 1C18 1.55 17.55 2 17 2H1ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
