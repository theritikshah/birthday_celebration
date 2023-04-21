import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-web";

import styles from "../../styles/Home.module.scss";

const Celebration = ({ haveCelebration, audioRef }) => {
  const [animation, setAnimation] = useState(null);
  const [value, setValue] = useState(0);

  let anim = null;

  useEffect(() => {
    anim = Lottie.loadAnimation({
      container: document.getElementById("lottie-container"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/assests/cake.json",
    });
    setAnimation(anim);
    return () => {
      anim.destroy();
      anim = null;
    };
  }, []);

  const handleRangeChange = (event) => {
    const newValue = Number(event.target.value);
    if (animation) {
      if (newValue === 100) {
        animation.setSpeed(0.1);
      } else {
        animation.setSpeed(1);
      }
      animation.goToAndStop(newValue, true);
    }
    setValue(newValue);
  };

  return (
    <div className={styles.celebration_container}>
      <h1 className={styles.cake_time}>Cake Time!</h1>
      <div id="lottie-container"></div>
      <p>
        Make a wish and slide away! Let's celebrate with some virtual cake and
        make this birthday as special as you are.
      </p>
      <input
        type="range"
        min="0"
        max="35"
        step="0.1"
        defaultValue="0"
        onChange={(event) => handleRangeChange(event)}
        style={{ width: "100%" }}
        onInput={() => {
          audioRef.current.play();
        }}
        className={styles.knife}
      />

      <div
        className={styles.gift_button}
        onClick={() => haveCelebration("gift")}
        style={{ cursor: "pointer" }}
      >
        <h2>A Gift For You</h2>
      </div>
    </div>
  );
};

export default Celebration;
