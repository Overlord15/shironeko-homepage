import { ChakraProvider } from '@chakra-ui/react'
// import theme from '../pages/home/theme'
import Font from '../pages/home/font'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Font />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
