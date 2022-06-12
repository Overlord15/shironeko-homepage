import Head from 'next/head'
import Nextlink from 'next/link'
import {Text, Box, Container, Flex, Link, Spacer, useMediaQuery, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import styled from '@emotion/styled'
import Section from './home/section'
import Navbar from './home/navbar'

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
                <title>Works - Anupam Kumar</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="icon" href="/images/icon.png" />
            </Head>
            <Navbar />
            <Container pt="100">
                <Section delay={0.1}>
                    <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3 }}>
                        Works
                    </Text>
                </Section>

                <div>
                    {isLargerThan650 &&
                        <p>
                            <Section delay={0.3}>
                                <Flex>
                                    <Nextlink href="../work/shironeko" passHref>
                                        <Link href='../work/shironeko' _hover={{ textDecoration: 'none' }}>
                                            <Image alt='image' src='/workimages/shironeko.png' width="225px" borderRadius="15px"></Image>
                                            <Text textAlign="center" pt="3" width="225px" fontSize="20px">SHIRONEKO</Text>
                                            <Text textAlign="center" width="225px" fontSize="15px" pt="1">Portfolio web app built using Next.js , Chakra-UI, react-icons , framer-motion and react-dom</Text>
                                        </Link>
                                    </Nextlink>
                                    <Spacer></Spacer>
                                    <Nextlink href="../work/shironeko" passHref>
                                        <Link href='../work/shironeko' _hover={{ textDecoration: 'none' }}>
                                            <Image alt='image' src='/workimages/watch-pro.png' width="225px" borderRadius="15px"></Image>
                                            <Text textAlign="center" pt="3" width="225px" fontSize="20px">DIGIPRO</Text>
                                            <Text textAlign="center" width="225px" fontSize="15px" pt="1">Digital Desktop clock app with shutter animation and dark theme support</Text>
                                        </Link>
                                    </Nextlink>
                                </Flex>
                            </Section>
                        </p>
                    }
                </div>
                <div>
                    {isLargerThan6502 &&
                        <p>
                            <Section delay={0.5}>
                                <Flex flexDirection="column">
                                    <Link href="../work/shironeko" pt="10">
                                        <Image maxW="100%" ml="auto" mr="auto" alt='image' src='../workimages/shironeko.png' width="270px" borderRadius="15px"></Image>
                                        <Text textAlign="center" pt="3">SHIRONEKO</Text>
                                        <Text textAlign="center" pl="5" pr="5" pt="3">Portfolio web app built using Next.js , Chakra-UI, react-icons , framer-motion<br /> and react-dom</Text>
                                    </Link>
                                    <Spacer></Spacer>
                                    <Link href="../work/shironeko" pt="10">
                                        <Image maxW="100%" ml="auto" mr="auto" alt='image' src='/workimages/watch-pro.png' width="270px" borderRadius="15px"></Image>
                                        <Text textAlign="center" pt="3">DIGIPRO</Text>
                                        <Text textAlign="center" pl="2" pr="2" pt="3">Digital Desktop clock app with shutter animation and dark theme support</Text>
                                    </Link>
                                </Flex>
                            </Section>
                        </p>
                    }
                </div>
                <Section delay={0.6}>
                    <Box pb="4" pt="4" color="white">
                        <hr />
                    </Box>
                </Section>
                <Section delay={0.8}>
                    <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3 }}>
                        Collaborations
                    </Text>
                </Section>
                <Section delay={1.1}>
                    <Flex pb="10" maxW="100%">
                        <Nextlink href="#" passHref>
                            <Link href='#' _hover={{ textDecoration: 'none' }} ml="auto" mr="auto">
                                <Image alt='image' src='/images/coming-soon.jpg' width="225px" borderRadius="15px"></Image>
                                <Text textAlign="center" pt="3" width="225px" fontSize="20px">Collab</Text>
                                <Text textAlign="center" width="225px" fontSize="15px" pt="1">Coming soon..</Text>
                            </Link>
                        </Nextlink>
                        {/* <Spacer></Spacer>
                    <Box pt="10">
                        <Image alt='image' src='https://images5.alphacoders.com/123/1238816.jpg' width="225px" borderRadius="15px"></Image>
                    </Box> */}
                    </Flex>
                </Section>


                <Section delay={1.3}>
                    <Box maxW="100%" h="30px" pb="10" pt="" ><Text textAlign="center" fontSize="15px" fontWeight="light">© 2022 Anupam Kumar. All Rights Reserved.</Text></Box>
                </Section>
            </Container>
        </>
    )
}
