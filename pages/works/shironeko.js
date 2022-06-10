import Head from 'next/head'
import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaw, FaSun, FaMoon, FaInfoCircle, FaTelegramPlane, FaCannabis, FaGithub, FaGripLines, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { AiFillMessage } from 'react-icons/ai'
import styled from '@emotion/styled'
import Script from 'next/script'

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
                <title>Anupam Kumar | HOMEPAGE</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="shortcut icon" href="/images/icon.png" />
            </Head>
            <Box as="nav" position="fixed" zIndex={1} backdropFilter="auto" backdropBlur="8px" w="100%">
                <Flex w="100%" pl="7" pr="7" pb="3">
                    <Link isRound='true' mt="3.5" pr="4" pt="11.5px" fontSize="18px" transform="" href='/'><FaPaw /></Link>
                    <Nextlink href="/" passHref scroll={false}>
                        <Link mt="4" cursor="pointer" fontSize="18.5" p="5px" fontWeight="extrabold" textDecoration="none" href='/' _hover={{ textDecoration: "none" }}>
                            SHIRONEKO
                        </Link>
                    </Nextlink>
                    <div>
                        {isLargerThan650 &&
                            <p>
                                <Flex>
                                    <Nextlink href="../comp/work" passHref scroll={false}>
                                        <Link p="1px" mt="18.5px" size="sm" fontSize="lg" ml="7" border="2px" borderColor="transparent" _hover={{ color: "red.500", textDecoration: "underline", }}>Works</Link>
                                    </Nextlink>
                                    <Nextlink href="../comp/post" passHref scroll={false}>
                                        <Link p="1px" ml="5" href="../comp/work" mt="18.5px" size="sm" fontSize="lg" border="2px" borderColor="transparent" _hover={{ color: "green.500", textDecoration: "underline", }}>Post</Link>
                                    </Nextlink>
                                    <Box pt="26.5px" ml="5" mr=""><VscGithub /></Box>
                                    <Link ml="6px" href='https://github.com/Overlord15/shironeko-homepage' pt="5.5px" isExternal mt="4" size="sm" fontSize="lg" _hover={{ color: "pink.500", textDecoration: "underline", }}>Source</Link>
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
                                        <MenuItem><Flex alignItems="center"><FaCannabis /><Nextlink href="../comp/work" passHref scroll={false}><Link ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">My Works</Link></Nextlink></Flex></MenuItem>
                                        <MenuItem><Flex alignItems="center"><FaTelegramPlane /><Nextlink href="../comp/post" passHref scroll={false}><Link ml="2" href="../comp/post" alignItems="center" textDecoration="none">Popular Posts</Link></Nextlink></Flex></MenuItem>
                                        <MenuItem><Flex alignItems="center"><FaGithub /><Link ml="2" justifyContent="center" href="https://github.com/Overlord15/shironeko-homepage" textDecoration="none">View Source On Github</Link></Flex></MenuItem>
                                    </MenuList>
                                </Menu>
                            </p>}
                    </div>
                </Flex>
            </Box>

        </>
    )
}
