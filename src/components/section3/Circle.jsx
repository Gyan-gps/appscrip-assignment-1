// import React from 'react'
import styles from "../../styles/Circle.module.css"
import Image from "next/image"
const Circle = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.left}>
          <Image className={styles.l1} src={"/circle.png"} alt="circle" width={100} height={100} loading="lazy" />
          <Image className={styles.l2} src={"/circle.png"} alt="circle" width={100} height={100} loading="lazy" />
          <Image className={styles.l3} src={"/circle.png"} alt="circle" width={100} height={100} loading="lazy" />
          <Image className={styles.l4} src={"/circle.png"} alt="circle" width={100} height={100} loading="lazy" />
      </div>
      <div className={styles.right}>
          <Image className={styles.r1} src={"/circle.png"} alt="circle" width={100} height={100} loading="lazy" />
          <Image className={styles.r2} src={"/circle.png"} alt="circle" width={100} height={100} loading="lazy" />
          <Image className={styles.r3} src={"/circle.png"} alt="circle" width={100} height={100} loading="lazy" />
          <Image className={styles.r4} src={"/circle.png"} alt="circle" width={100} height={100} loading="lazy" />
      </div>
    </div>
  )
}

export default Circle
