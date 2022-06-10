import { ChakraProvider } from '@chakra-ui/react'
import theme from '../pages/comp/theme'
import Font from '../pages/comp/font'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
