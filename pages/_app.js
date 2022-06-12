import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Font from '../pages/home/font'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles })

function MyApp({ Component, pageProps }) {


  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Font />
        <Component {...pageProps} />
      </ChakraProvider>
    </React.StrictMode>
  )
}

export default MyApp
