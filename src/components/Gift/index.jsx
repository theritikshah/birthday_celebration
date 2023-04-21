import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-web";

import styles from "../../styles/Home.module.scss";

const Gift = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/assets/the_compound_effect_book.pdf";
    downloadLink.download = "the_compound_effect_book.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className={styles.gift_container}>
      <h1>Happy Birthday</h1>
      <img src="/assests/us.png"></img>
      <p>
        You're an incredible person with a heart of gold, and I feel so lucky to
        have you in my life. I can't wait to see all the wonderful things you'll
        achieve in the coming year.
      </p>
      <img
        src="/assests/gift.jpg"
        style={{ cursor: "pointer" }}
        onClick={handleDownload}
      ></img>
    </div>
  );
};

export default Gift;
