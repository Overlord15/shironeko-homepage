import { ChakraProvider } from '@chakra-ui/react'
import theme from '../pages/home/theme'
import Font from '../pages/home/font'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
