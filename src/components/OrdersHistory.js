import React, { useEffect } from "react";
import {
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import graph from "../assets/img/current_balance_graph.png";
import homeIcon from "../assets/img/home.png";
import refundIcon from "../assets/img/refund.png";
import caseIcon from "../assets/img/case.png";
import paymentDetails1 from "../assets/img/payment_details.png";
import paymentDetails2 from "../assets/img/payment_details2.png";
import outIcon from "../assets/img/out.png";
import fromIcon from "../assets/img/from.png";
import styles from "../assets/css/orderhistory.module.css";

function OrdersHistory() {
  useEffect(() => {}, []);

  return (
    <div className={styles.order_history_wrapper}>
      <div className={styles.balance}>
        <div className={styles.current_balance}>
          <div className={styles.current_balance_title}>
            <div className={styles.current_balance_title_title}>
              Current balance
            </div>
            <div className={styles.dots}>...</div>
          </div>
          <div className={styles.current_balance_content}>
            <div className={styles.current_balance_content_first}>
              <div className={styles.current_balance_content_first_up}>
                +567.99 USD
              </div>
              <div className={styles.current_balance_content_first_down}>
                5,000 <span className={styles.USD}>USD</span>
              </div>
            </div>
            <div className={styles.current_balance_content_second}>
              <img src={graph} width={150} height={100} alt="graph" />
            </div>
            <div className={styles.current_balance_content_third}>
              <button className={styles.current_balance_button}>
                Add credit
              </button>
            </div>
          </div>
        </div>
        <div className={styles.history}>
          <div className={styles.history_title}>
            <div className={styles.history_title_title}>History</div>
            <div className={styles.history_title_right}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className={styles.balance_top_up}>
              <div className="d-flex align-items-center">
                <div className={styles.icon}>
                  <img src={caseIcon} alt="balance" />
                </div>
                <div className="ms-3">
                  <div className={styles.history_item_text}>Balance top-up</div>
                  <div className={styles.history_item_date}>
                    02 Feb 2022 12:43
                  </div>
                </div>
              </div>
              <div>
                <span className={styles.amount}>+ 5,000 </span>
                <span className={styles.USD}>USD</span>
              </div>
            </div>
            <div className={styles.refund_of_order}>
              <div className="d-flex align-items-center">
                <div className={styles.icon}>
                  <img src={refundIcon} alt="refund" />
                </div>
                <div className="ms-3">
                  <div className={styles.history_item_text}>
                    Refund of order
                  </div>
                  <div className={styles.history_item_date}>
                    02 Feb 2022 10:45
                  </div>
                </div>
              </div>
              <div>
                <span className={styles.amount}>- 5.421 </span>
                <span className={styles.USD}>USD</span>
              </div>
            </div>
            <div className={styles.office_rent}>
              <div className="d-flex align-items-center">
                <div className={styles.icon}>
                  <img src={homeIcon} alt="refund" />
                </div>
                <div className="ms-3">
                  <div className={styles.history_item_text}>Office rent</div>
                  <div className={styles.history_item_date}>
                    07 Feb 2022 11:49
                  </div>
                </div>
              </div>
              <div>
                <span className={styles.amount}>- 155.99 </span>
                <span className={styles.USD}>USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.payment_details}>
          <div className={styles.payment_details_title}>
            <div className={styles.payment_details_title_title}>
              Payment details
            </div>
            <div className={styles.dots}>...</div>
          </div>
          <div className={styles.payment_details_content}>
            <div className={styles.payment_details_first}>
              <div className={styles.USD}>Next payment 68.99 USD</div>
              <div>February 14, 2022</div>
            </div>
            <div className={styles.payment_details_second}>
              <img src={paymentDetails1} alt="payment detail" />
            </div>
            <div className={styles.payment_details_third}>
              <div className={styles.USD}>Total to pay</div>
              <div>
                <span className={styles.amount}>9,496 </span>
                <span className={styles.USD}>USD</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.other_things}>
          <div className={styles.history_title}>
            <div className={styles.history_title_title}>Other things</div>
            <div className={styles.history_title_right}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </div>
          </div>
          <div className="d-flex mt-3 gap-4">
            <div className={styles.screen_time}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <div className={styles.USD}>Screen time</div>
                  <div className="fw-bold">Payment details</div>
                </div>
                <div>
                  <img src={outIcon} alt="out" />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <img
                  src={paymentDetails2}
                  alt="detail"
                  width={200}
                  height={120}
                />
              </div>
            </div>
            <div className={styles.total_time}>
              <div className="fw-bold">TOTAL TIME</div>
              <div className={`${styles.total_time_times}`}>
                <div className="d-flex flex-column">
                  <div className={styles.USD}>This week</div>
                  <div className={styles.amount}>1h 27m</div>
                </div>
                <div className={styles.arrow_right}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    width={15}
                    height={15}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="d-flex align-items-center">
                  <div className={styles.from_icon}>
                    <img src={fromIcon} alt="from" />
                  </div>
                  <div className="d-flex flex-column ms-2">
                    <div className={styles.from_last_week}>From last week</div>
                    <div className={styles.percent}>14%</div>
                  </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersHistory;
