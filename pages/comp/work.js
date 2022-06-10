import Head from 'next/head'
import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaw, FaSun, FaMoon, FaInfoCircle, FaTelegramPlane, FaCannabis, FaGithub, FaGripLines, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { AiFillMessage } from 'react-icons/ai'
import styled from '@emotion/styled'
import Section from '../comp/section'

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
    const isDark = colorMode === "dark";
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <Head>
                <title>Works - Anupam Kumar</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="icon" href="/images/icon.png" />
            </Head>
            <Box as="nav" position="fixed" zIndex={1} backdropFilter="auto" backdropBlur="8px" w="100%">
                <Flex w="100%" pl="7" pr="7" pb="3">
                    <Link isRound='true' mt="3.5" pr="4" pt="11.5px" fontSize="18px" transform="" href='/'><FaPaw /></Link>
                    <Nextlink href="/" passHref scroll={false}>
                        <Link css={{}} mt="4" cursor="pointer" fontSize="18.5" p="5px" fontWeight="extrabold" textDecoration="none" href='/' _hover={{ textDecoration: "none" }}>
                            Anupam Kumar
                        </Link>
                    </Nextlink>
                    <div>
                        {isLargerThan650 &&
                            <p>
                                <Flex>
                                    <Nextlink href="../comp/work" passHref scroll={false}>
                                        <Link p="1px" pl="5px" pr="5px" mt="18.5px" size="sm" fontSize="lg" ml="7" bgColor="teal.300" color="black" border="2px" borderRadius="3px" borderColor="transparent" _hover={{ color: "red.500", textDecoration: "underline", }}>Works</Link>
                                    </Nextlink>
                                    <Nextlink href="../comp/post" passHref scroll={false}>
                                        <Link p="1px" pl="5px" pr="5px" ml="5" href="../comp/work" mt="18.5px" size="sm" fontSize="lg" border="2px" borderColor="transparent" _hover={{ color: "green.500", textDecoration: "underline", }}>Post</Link>
                                    </Nextlink>
                                    <Box pt="27.5px" ml="5" mr=""><VscGithub /></Box>
                                    <Link p="1px" ml="5px" href='https://github.com/Overlord15/shironeko-homepage' pt="6.5px" isExternal mt="4" size="sm" fontSize="lg" _hover={{ color: "pink.500", textDecoration: "underline", }}>Source</Link>
                                </Flex>
                            </p>
                        }
                    </div>
                    <Spacer></Spacer>
                    <IconButton ml="4" mt="3" size="sm" icon={isDark ? <FaMoon /> : <FaSun />} bg={isDark ? "teal.300" : "yellow.300"} onClick={toggleColorMode}></IconButton>
                    <div>
                        {isLargerThan6502 &&
                            <p>
                                <Menu>
                                    <MenuButton as={IconButton} icon={<FaGripLines />} size="sm" mt="3" ml="2" bg={isDark ? "blue.400" : "purple.300"}>
                                    </MenuButton>
                                    <MenuList>
                                        <Nextlink href="../comp/work" passHref>
                                            <MenuItem as='Link'>My Works</MenuItem>
                                        </Nextlink>
                                        <Nextlink href="../comp/post" passHref>
                                            <MenuItem as='Link'>Post</MenuItem>
                                        </Nextlink>
                                        <MenuItem as='Link'><Link justifyContent="center" isExternal href="https://github.com/Overlord15/shironeko-homepage" textDecoration="none">View Source On Github</Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </p>}
                    </div>
                </Flex>
            </Box>
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
                                    <Nextlink href="../works/shironeko" passHref>
                                        <Link href='../works/shironeko' _hover={{ textDecoration: 'none' }}>
                                            <Image alt='image' src='/workimages/shironeko.png' width="225px" borderRadius="15px"></Image>
                                            <Text textAlign="center" pt="3" width="225px" fontSize="20px">SHIRONEKO</Text>
                                            <Text textAlign="center" width="225px" fontSize="15px" pt="1">Portfolio web app built using Next.js , Chakra-UI, react-icons , framer-motion and react-dom</Text>
                                        </Link>
                                    </Nextlink>
                                    <Spacer></Spacer>
                                    <Nextlink href="../works/shironeko" passHref>
                                        <Link href='../works/shironeko' _hover={{ textDecoration: 'none' }}>
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
                                    <Link href="../works/shironeko" pt="10">
                                        <Image maxW="100%" ml="auto" mr="auto" alt='image' src='../workimages/shironeko.png' width="270px" borderRadius="15px"></Image>
                                        <Text textAlign="center" pt="3">SHIRONEKO</Text>
                                        <Text textAlign="center" pl="5" pr="5" pt="3">Portfolio web app built using Next.js , Chakra-UI, react-icons , framer-motion<br /> and react-dom</Text>
                                    </Link>
                                    <Spacer></Spacer>
                                    <Link href="../works/shironeko" pt="10">
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
