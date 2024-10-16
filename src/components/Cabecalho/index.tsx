// import styles from './Cabecalho.module.css'

// const Cabecalho = () => (
//   <header className={styles.cabecalho}>
//     <h1>EBAC Jobs</h1>
//   </header>
// )

// export default Cabecalho

import { Cabecalho as CabecalhoEstilo } from './styles'

const Cabecalho = () => {
  return (
    <CabecalhoEstilo>
      <h1>EBAC Jobs</h1>
    </CabecalhoEstilo>
  )
}

export default Cabecalho
