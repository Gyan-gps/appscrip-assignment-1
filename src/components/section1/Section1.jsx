// import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Section1.module.css'
const Section1 = () => {
    return (
        <section className={styles.section1} 
            style={{
                // position: "absolute",
                backgroundImage: `url(/cloudtop.png),url(/cloud.png),url(/mb.png)`,
                backgroundPosition: "-30px top ,right bottom",
                backgroundSize: "80% clamp(156px,19vw,367px), 80% clamp(166px,19vw,367px), cover",
                backgroundRepeat: "no-repeat"
        }}>
            <div className={styles.left}>
                <div className={styles.div}>A Creator&apos;s Paradise</div>
                <p className={styles.p}>Were Creativity Meets Success</p>
            </div>
            <div className={styles.right}>
                <div className={styles.flex}>
                    <div className={styles.header}><div className={styles.imgdiv}><Image src='/gicon.png' alt='gicon' width={100} height={100} /></div><div>Continue With Google</div></div>
                    <hr className={styles.hr}/>
                    <div className={styles.form}>
                        <div className={styles.name}>
                            <input type="text" placeholder="First name*" required />
                            <input type="text" placeholder="Last name*" required />
                        </div>
                        <input type="email" placeholder="Email*" required />
                        <input type="password" placeholder="Password*" required />
                        <div className={styles.select}>
                            <select >
                                <option>(GMT+05:30) india standard Time - Calcutta </option>
                            </select>
                        </div>
                    </div>
                    <button className={styles.btn}>Signup as a user</button>
                    <p className={styles.p}>By signing up you agree to our Terms & Conditions and Privacy Policy. and confirm that you are at least 18 years old.</p>
                    <button className={styles.btn}>Signup as a creator</button>
                    <p className={styles.p}>Already have an account?<a href='/'> Login</a></p>
                </div>
            </div>
        </section>
    )
}

export default Section1
