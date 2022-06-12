import Head from 'next/head'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import Navbar from '../pages/home/navbar'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <Head>
                <title>DigiPro - Anupam Kumar</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="shortcut icon" href="/images/icon.png" />
            </Head>
            <Navbar />

        </>
    )
}
