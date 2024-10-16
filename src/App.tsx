// import Header from './components/Cabecalho'
// import Hero from './components/Hero'
// import ListaVagas from './containers/ListaVagas'

// import './global.css'

// function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <div className="container">
//         <ListaVagas />
//       </div>
//     </>
//   )
// }

// export default App

import { ThemeProvider } from 'styled-components'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal from './styles'
import themeColor from './Themes/themes'

function App() {
  return (
    <>
      <ThemeProvider theme={themeColor}>
        <EstiloGlobal />
        <Cabecalho />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
