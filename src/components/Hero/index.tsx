// import styles from './Hero.module.css'

// const Hero = () => (
//   <form className={styles.form}>
//     <div className="container">
//       <h2 className={styles.heroTitle}>
//         As melhores vagas para tecnologia, design e artes visuais.
//       </h2>
//     </div>
//   </form>
// )

// export default Hero

import { Banner, Container, HeroTitle } from './styles'

const Hero = () => {
  return (
    <Banner>
      <Container>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </Container>
    </Banner>
  )
}

export default Hero
