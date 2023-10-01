import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
const list = ["Home", "About Us", "Our Blog", "Support", "Affiliate"]
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo} >LOGO</div>
      <ul className={styles.ul}>

        {
          list.map((ele) => (
            <li key={ele} className={styles.li}>
              <a href="/" className={styles.a} >{ele}</a>
            </li>
          ))
        }
        <li className={styles.li}>
          <select className={styles.select}>
            <option>Programs</option>
          </select>
        </li>
      </ul>
      <div className={styles.navbtn}>
        <button className={styles.loginbtn}>Login</button>
        <button className={styles.signupbtn}>Signup</button>
      </div>
      <div className={styles.menu}>
        <Image src="/menu.png" alt='menu' width={100} height={100}/>
      </div>
    </div>
  )
}

export default Navbar
