import React, { useEffect, useState } from "react";
import {
  faUserPlus,
  faUserGroup,
  faFileCircleCheck,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../assets/css/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserInformation() {
  const [uniqueUsers, setUniqueUsers] = useState({ count: 0, plus: 0 });
  const [registeredMembers, setRegisteredMembers] = useState({
    count: 0,
    plus: 0,
  });
  const [resolvedIssues, setResolvedIssues] = useState({ count: 0, plus: 0 });
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    setUniqueUsers({ count: 362, plus: 112 });
    setRegisteredMembers({ count: 1056, plus: 65 });
    setResolvedIssues({ count: 89, plus: 65 });
    setExpenses(9496);
  }, []);

  return (
    <div className={styles.user_information}>
      <div className={`${styles.unique_users}`}>
        <div className={styles.unique_users_icon}>
          <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
        </div>
        <div className={styles.unique_users_info}>
          <div className={styles.unique_users_info_title}>Unique users</div>
          <div className={styles.unique_users_info_count}>
            {uniqueUsers.count}
          </div>
        </div>
        <div className={styles.unique_users_plus}>+{uniqueUsers.plus}</div>
      </div>
      <div className={`${styles.registered_members}`}>
        <div className={styles.registered_members_icon}>
          <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
        </div>
        <div className={styles.registered_members_info}>
          <div className={styles.registered_members_info_title}>
            Registered members
          </div>
          <div className={styles.registered_members_info_count}>
            {registeredMembers.count}
          </div>
        </div>
        <div className={styles.registered_members_plus}>
          +{registeredMembers.plus}
        </div>
      </div>
      <div className={`${styles.resolved_issues}`}>
        <div className={styles.resolved_issues_icon}>
          <FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon>
        </div>
        <div className={styles.resolved_issues_info}>
          <div className={styles.resolved_issues_info_title}>
            Resolved issues
          </div>
          <div className={styles.resolved_issues_info_count}>
            {resolvedIssues.count}
          </div>
        </div>
        <div className={styles.resolved_issues_plus}>
          +{resolvedIssues.plus}
        </div>
      </div>
      <div className={`${styles.expenses}`}>
        <div className={styles.expenses_icon}>
          <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
        </div>
        <div className={styles.expenses_info}>
          <div className={styles.expenses_info_title}>Expenses this week</div>
          <div className={styles.expenses_info_count}>
            {expenses} <span className={styles.expenses_usd}>USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
