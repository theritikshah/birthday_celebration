import Head from "next/head";
import styles from "@/styles/Home.module.scss";

import { useState, useRef } from "react";
import Celebration from "@/components/Celebration";
import Gift from "@/components/Gift";

export default function Home() {
  const [celebration, haveCelebration] = useState("welcome");
  const audioRef = useRef(null);

  return (
    <>
      <Head>
        <title>Celebrating Tomato's Birthday!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.body}>
          {celebration == "welcome" && (
            <>
              <h1 className={styles.hey}>
                Hey!
                <br />
                Tomato
              </h1>
              <img src="/assests/tomato.jpg"></img>
              <p>
                I wish I could be there with you in person to celebrate the
                amazing person you are. But since we can't, let's make the most
                of what we have and celebrate remotely!{" "}
              </p>
              <img
                className={styles.ok_button}
                src="/assests/ok-button.png"
                onClick={() => haveCelebration("cakeCutting")}
              />
            </>
          )}{" "}
          {celebration == "cakeCutting" && (
            <Celebration
              haveCelebration={haveCelebration}
              audioRef={audioRef}
            />
          )}
          {celebration == "gift" && <Gift />}
        </div>
        <audio
          ref={audioRef}
          src="/assests/birthdaySongForTomato.mp3"
          preload="auto"
          loop
          style={{ display: "none" }}
        />
      </main>
    </>
  );
}
