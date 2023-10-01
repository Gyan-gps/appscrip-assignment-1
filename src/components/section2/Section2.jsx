// import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Section2.module.css'
const Section2 = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.header}>Elevate Your Craft</div>
      <div >
        <div className={styles.top}>
          <div className={styles.topcard}>
            <div className={styles.shadow}></div>
            <div className={styles.div}>Unlock Your ABC Earning Potential</div>
            <p className={styles.p}>Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.</p>
            <div className={styles.mobile} 
            style={{
            }}>
              <Image className={styles.img} src='/mobileimg.png' alt='mobileimg' width={100} height={100} loading='lazy' />
              <div className={styles.doller} style={{
              }}>

              <Image src={'/dollerimg.png'} alt='dollerimg' width={100} height={100} loading='lazy' />
              </div>
            </div>
          </div>
          <div className={styles.topcard}>
            <div className={styles.shadow}></div>
            <div className={styles.div}>Boost Your Sales with Built-in E-commerce</div>
            <p className={styles.p}>Take control of your brand and boost your sales with ABC&apos;s built-in e-commerce functionality. Showcase and sell your exclusive products, whether it&apos;s merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.</p>
            <div className={styles.topcardflex}>
              <div className={styles.card} >
                <div><Image className={styles.img} src={'/bagimg.png'} alt='img' width={100} height={100} loading='lazy' /></div>
              </div>
              {
                [1, 2, 3, 4, 5].map((ele) => (
                  <div key={ele} className={styles.card} >
                    <div><Image className={styles.img} src={'/img1.jpg'} alt='img' width={100} height={100} loading='lazy' /></div>
                    <div className={styles.desc}>
                      <div className={styles.title}>Green modern bikini</div>
                      <div className={styles.price}>
                        <div className={styles.value}>$100</div>
                        <div className={styles.star}><Image className={styles.img} src="/star.png" alt='star' width={100} height={100} loading='lazy' /> 4.3</div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          {
            [1, 2, 3].map((ele,idx) => (
              <div key={ele} className={styles.card}>
                <div className={styles.shadow} ></div>
                <div className={styles.imgdiv}><Image className={styles.img} src={`/bimg${idx+1}.png`} alt={"bimg"+ele} width={100} height={100} loading='lazy' /></div>
                <div className={styles.div}>Save Time with Automation and Efficiency</div>
                <p className={styles.p}>Supercharge your content creation with ABC&apos;s automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content.</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Section2
