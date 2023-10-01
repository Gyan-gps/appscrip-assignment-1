// import React from 'react'
import Image from "next/image"
import styles from "../../styles/Decorate.module.css"
const Decorate = () => {
    return (
        <div className={styles.decorate}>
            <div className={styles.c1}>
                <Image className={styles.c11}  src={"/StarStruck.png"} alt={"StarStruck"} loading='lazy' width={100} height={100} />
                <Image className={styles.c12}  src={"/MoneyWithWings.png"} alt={"MoneyWithWings"} loading='lazy' width={100} height={100} />
            </div>
            <div className={styles.c2}>
                <Image className={styles.c21}  src={"/SmilingFaceWithSunglasses.png"} alt={"SmilingFaceWithSunglasses"} loading='lazy' width={100} height={100} />
                <Image className={styles.c22}  src={"/MoneyBag.png"} alt={"MoneyBag"} loading='lazy' width={100} height={100} />
                <Image className={styles.c23}  src={"/Globe.png"} alt={"Globe"} loading='lazy' width={100} height={100} />
                <Image className={styles.c24}  src={"/Unicorn.png"} alt={"Unicorn"} loading='lazy' width={100} height={100} />
                <Image className={styles.c25}  src={"/Confetti.png"} alt={"Confetti"} loading='lazy' width={100} height={100}/>
            </div>
            <div className={styles.c3}>
                <Image className={styles.c31}  src={"/Fire.png"} alt={"Fire"} loading='lazy' width={100} height={100} />
                <Image className={styles.c32}  src={"/Honeybee.png"} alt={"Honeybee"} loading='lazy' width={100} height={100} />
                <Image className={styles.c33}  src={"/Cowboy.png"} alt={"Cowboy"} loading='lazy' width={100} height={100} />
                <Image className={styles.c34}  src={"/PartyPopper.png"} alt={"PartyPopper"} loading='lazy' width={100} height={100} />
                <Image className={styles.c35}  src={"/CrystalBall.png"} alt={"CrystalBall"} loading='lazy' width={100} height={100} />
                <Image className={styles.c36}  src={"/WrappedGift.png"} alt={"WrappedGift"} loading='lazy' width={100} height={100}/>
            </div>
            <div className={styles.c4}></div>
        </div>
    )
}

export default Decorate
