import Head from 'next/head'
// import { Link as Nextlink } from 'next/link'
import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaw, FaSun, FaMoon, FaInfoCircle, FaTelegramPlane, FaCannabis, FaGithub, FaGripLines, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { AiFillMessage } from 'react-icons/ai'
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
    const isDark = colorMode === "dark";
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <Head>
                <title>OVERLORD | HOMEPAGE</title>
                <link rel="apple-touch-icon" sizes="180x180" href="https://cdn-icons.flaticon.com/png/512/1135/premium/1135729.png?token=exp=1653665482~hmac=53bdc80273655cb686732d46e1786a52" />
                <link rel="shortcut icon" href="https://cdn-icons.flaticon.com/png/512/1135/premium/1135729.png?token=exp=1653665482~hmac=53bdc80273655cb686732d46e1786a52" />
            </Head>
            <Box as="nav" position="fixed" zIndex={1} backdropFilter="auto" backdropBlur="8px" w="100%">
                <Flex w="100%" pl="7" pr="7" pb="3">
                    <Link isRound='true' mt="3.5" pr="4" pt="1.5" fontSize="18px" transform="" href='/'><FaPaw /></Link>
                    <Link mt="4" cursor="pointer" fontSize="18.5" fontWeight="extrabold" textDecoration="none" href='/' _hover={{ textDecoration: "none" }}>
                        OVERLORD
                    </Link>
                    <div>
                        {isLargerThan650 &&
                            <p>
                                <Flex>
                                    <Nextlink href="../comp/work" passHref scroll={false}>
                                        <Link mt="4" size="sm" fontSize="lg" ml="7" _hover={{ color: "red.500", textDecoration: "underline", }}>Works</Link>
                                    </Nextlink>
                                    <Box pt="21.5px" ml="6" mr="1"><AiFillMessage /></Box>
                                    <Link href='/' mt="4" size="sm" fontSize="lg" ml="0" _hover={{ color: "green.500", textDecoration: "underline", }}>Post</Link>
                                    <Box pt="21.5px" ml="6" mr="1"><VscGithub /></Box>
                                    <Link href='https://github.com/Overlord15/shironeko-homepage' isExternal mt="4" size="sm" fontSize="lg" ml="1" _hover={{ color: "pink.500", textDecoration: "underline", }}>Source</Link>
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
                                        <MenuItem><Flex alignItems="center"><FaInfoCircle /><Link ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">About</Link></Flex></MenuItem>
                                        <MenuItem><Flex alignItems="center"><FaCannabis /><Link ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">Work</Link></Flex></MenuItem>
                                        <MenuItem><Flex alignItems="center"><FaTelegramPlane /><Link ml="2" href="/" alignItems="center" textDecoration="none">Post</Link></Flex></MenuItem>
                                        <MenuItem><Flex alignItems="center"><FaGithub /><Link ml="2" justifyContent="center" href="https://github.com/Overlord15/shironeko-homepage" textDecoration="none">View Source</Link></Flex></MenuItem>
                                    </MenuList>
                                </Menu>
                            </p>}
                    </div>
                </Flex>
            </Box>
            <Container pt="100">

                <Box maxW="100%" h="30px" pb="10" pt="8" ><Text textAlign="center" fontSize="15px" fontWeight="light">© 2022 Anupam Kumar. All Rights Reserved.</Text></Box>
            </Container>
        </>
    )
}
