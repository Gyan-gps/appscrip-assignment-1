// import React from 'react'
import styles from "../../styles/Section3.module.css"
import Circle from "./Circle"
const Section3 = () => {
  return (
    <section className={styles.section3}>
      <div className={styles.shadow}></div>
      <Circle />
      <div className={styles.text}>
        <p className={styles.p}>Copy Don&apos;t miss out on ABC’s Incredible features and Opportunities.</p>
        <div className={styles.div}>Join us today and unlock your full potential as a creator</div>
        <button className={styles.btn}>
            Join Now
        </button>
      </div>
    </section>
  )
}

export default Section3
