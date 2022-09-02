import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/container.styled'


//pages

import Header from './components/pages/Header'

//Global styles
import GlobalStyles from './components/styles/Global.styled'


const App = () => {

  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footers: '#003333'

   },
  }


  return (
    <ThemeProvider theme = {theme}>
    <>

    <GlobalStyles />

    <Header  />
    
    <Container>
      <h1>Hello World</h1>
    </Container>


    </>
    </ThemeProvider>
  )
}

export default App
