import Head from 'next/head'
import { Box, Image, useMediaQuery } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import Navbar from '../home/navbar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Shironeko - Anupam Kumar</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
        <link rel="shortcut icon" href="/images/icon.png" />
      </Head>
      <Navbar />

      <Image src=''>

      </Image>

    </>
  )
}
