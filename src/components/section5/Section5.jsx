// import React from 'react'
import styles from '../../styles/Section5.module.css'
import Decorate from './Decorate'

const Section5 = () => {
    return (
        <section className={styles.section5}>
            <div className={styles.top}>
                <Decorate/>
                <div className={styles.circle}></div>
                <div className={styles.desc}>
                    <div className={styles.div}>Ready to Cash in Your Connections?</div>
                    <div className={styles.div}>Join Our Affiliate Program</div>
                    <p className={styles.p}>Join now and get
                        <b> 7.5% </b>
                        commission on all creator referrals for the entire year.</p>
                    <button className={styles.btn}>
                        Earn Now
                    </button>
                </div>
            </div>
            <div className={styles.bottom} style={{
                backgroundImage: `url(/rightimg.png), url(/leftimg.png),url(/community.png)`,
                backgroundPosition: "right,left",
                backgroundSize: "contain,contain,cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "multiply"
            }}>
                <div className={styles.desc} >
                    <div className={styles.div}>Join the ABC Community</div>
                    <p className={styles.p}>Become part of a vibrant and supportive community of like-minded creators by joining ABC&apos;s exclusive platform.
                        <br />Collaborate, learn, and connect with fellow creators who share your passion for adult content creation.</p>
                    <button className={styles.btn}>
                        Join Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section5
