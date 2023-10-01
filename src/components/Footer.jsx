// import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
const company = [
    "About Us",
    "Support",
    "Blog",
    "Login",
    "Signup",
    "Contact Us"
]
const programs = [
    "Affiliate Program",
    "Ambassador Program",
    "Partnership Program"
]
const policy = [
    "Legal",
    "DMCA",
    "USC 2257",
    "Privacy Policy",
    "Terms  and Conditions"
]
const follow = [
    "fb","twitter","insta","yt"
]
const footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.company}>
        <div>Company</div>
        <ul>
            {
                company.map((ele)=>(
                    <li key={ele}><a href="/">{ele}</a></li>
                ))
            }
        </ul>
      </div>
      <div className={styles.programs}>
        <div>Programs</div>
        <ul>
            {
                programs.map((ele)=>(
                    <li key={ele}><a href="/">{ele}</a></li>
                ))
            }
        </ul>
      </div>
      <div className={styles.policy}>
        <div>Policy</div>
        <ul>
            {
                policy.map((ele)=>(
                    <li key={ele}><a href="/">{ele}</a></li>
                ))
            }
        </ul>
      </div>
      <div className={styles.follow}>
        <div>Follow Us</div>
        <ul>
            {
                follow.map((ele)=>(
                    <li key={ele}><a href="/"><Image src={`/${ele}.png`} alt={ele} width={100} height={100} /></a></li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default footer
