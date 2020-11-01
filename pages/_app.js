import '../styles/globals.css'

import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

function MyApp({ Component, pageProps }) {

  return (

    // <ThemeProvider theme={theme}>
    //   <Component {...pageProps} />
    // </ThemeProvider>

    <Component {...pageProps} />


  )
}

export default MyApp
