import React, { useEffect, useState } from "react";
import {
  faHouse,
  faUser,
  faChartSimple,
  faMessage,
  faFlag,
  faBriefcase,
  faSliders,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/logo.png";
import styles from "../assets/css/header.module.css";

function Header() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    photo_url: "",
  });

  useEffect(() => {
    setVisitorCount(4);
    setUserInfo({
      name: "Jane",
      email: "jane@mywebsite.com",
      photo_url:
        "https://media-exp1.licdn.com/dms/image/C4E03AQG4fbmXatBMbQ/profile-displayphoto-shrink_100_100/0/1640010369699?e=1657756800&v=beta&t=vOQggNBgPdJeihlKjj-nMA6cI3w5ftNZ7pbgLjPLgP0",
    });
  }, []);

  return (
    <div className={`${styles.header}`}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={`${styles.header_menu} d-flex flex-column`}>
        <div className={styles.header_item}>
          <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          <span className="ms-3">Home</span>
        </div>
        <div
          className={`${styles.header_item}  d-flex justify-content-between align-items-center`}
        >
          <div>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <span className="ms-3">Visitors</span>
          </div>
          <div className={styles.visitor_count}>{visitorCount}</div>
        </div>
        <div className={styles.header_item}>
          <FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon>
          <span className="ms-3">Analytics</span>
        </div>
        <div className={styles.header_item}>
          <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          <span className="ms-3">Customer Service</span>
        </div>
        <div className={styles.header_item}>
          <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
          <span className="ms-3">Reports</span>
        </div>
        <div className={styles.header_item}>
          <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
          <span className="ms-3">Billing</span>
        </div>
        <div
          className={`${styles.header_item} d-flex justify-content-between align-items-center`}
        >
          <div>
            <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
            <span className="ms-3">Settings</span>
          </div>
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
        </div>
      </div>
      <div className={styles.user_info}>
        <div className={styles.user_image_status}>
          <img
            src={userInfo.photo_url}
            alt="User"
            className={styles.user_image}
            width={48}
            height={48}
          />
          <div className={styles.user_info_status_active}></div>
        </div>
        <div className="d-flex flex-column ms-2">
          <div className={styles.username}>{userInfo.name}</div>
          <div className={styles.email}>{userInfo.email}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
