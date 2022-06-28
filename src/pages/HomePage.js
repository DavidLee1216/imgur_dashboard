import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faUserPlus,
  faUserGroup,
  faFileCircleCheck,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../assets/css/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserInformation from "../components/UserInformation";
import OrdersHistory from "../components/OrdersHistory";
import PersonalInfomation from "../components/Personalnformation";
import Password from "../components/Password";
import PaymentDetails from "../components/PaymentDetails";

const contentSections = [
  <OrdersHistory />,
  <PersonalInfomation />,
  <Password />,
  <PaymentDetails />,
];

function HomePage() {
  const [requestCount, setRequestCount] = useState(0);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [contentSectionId, setContentSectionId] = useState(0);

  useEffect(() => {
    setRequestCount(3);
    setUsername("Jane");
    setUserId("456886943");
  }, []);

  const handleContentSectionChange = (idx) => {
    setContentSectionId(idx);
  };

  return (
    <div className={styles.home}>
      <section className={styles.home_top_section}>
        <div className={styles.welcome}>
          <span className={styles.hi}>Hi!</span>{" "}
          <span className="text-black-50">
            you have {requestCount} requests.
          </span>
          <Link to="/check" className={styles.check}>
            Check
          </Link>
        </div>
        <div className={styles.subscription}>
          <div className={styles.subscription_text}>Subscription</div>
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        </div>
        <div className={styles.user_dashboard}>
          {username}'s Dashboard
          <div className={styles.user_id}>ID {userId}</div>
        </div>
        <UserInformation></UserInformation>
        <div className={styles.home_menus}>
          <div
            onClick={() => handleContentSectionChange(0)}
            className={`${
              contentSectionId === 0
                ? styles.active_menu
                : styles.non_active_menu
            } ${styles.home_menu_item}`}
          >
            Orders history
          </div>
          <div
            onClick={() => handleContentSectionChange(1)}
            className={`${
              contentSectionId === 1
                ? styles.active_menu
                : styles.non_active_menu
            } ${styles.home_menu_item}`}
          >
            Personal information
          </div>
          <div
            onClick={() => handleContentSectionChange(2)}
            className={`${
              contentSectionId === 2
                ? styles.active_menu
                : styles.non_active_menu
            } ${styles.home_menu_item}`}
          >
            Password
          </div>
          <div
            onClick={() => handleContentSectionChange(3)}
            className={`${
              contentSectionId === 3
                ? styles.active_menu
                : styles.non_active_menu
            } ${styles.home_menu_item}`}
          >
            Payment details
          </div>
        </div>
      </section>
      <section className={styles.content_section}>
        {contentSections[contentSectionId]}
      </section>
    </div>
  );
}

export default HomePage;
