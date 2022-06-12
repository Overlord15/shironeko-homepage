import Head from 'next/head'
import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaw, FaGripLines } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import ThemeToggleButton from './theme-toggler-button';


export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <Head>
                <title>Anupam Kumar - Homepage</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="shortcut icon" href="/images/icon.png" />
            </Head>
            <Box as="nav" position="fixed" zIndex={1} backdropFilter="auto" backdropBlur="8px" w="100%">
                <Flex w="100%" pl="7" pr="7" pb="3">
                    <Link isRound='true' mt="1.5" pr="4" pt="11.5px" fontSize="18px" transform="" href='/'><FaPaw /></Link>
                    <Nextlink href="/" passHref scroll={false}>
                        <Link as="button" mt="2" cursor="pointer" fontSize="18.5" p="5px" fontWeight="extrabold" textDecoration="none" href='/' _hover={{ textDecoration: "none" }}>
                            Anupam Kumar
                        </Link>
                    </Nextlink>
                    <div>
                        {isLargerThan650 &&
                            <p>
                                <Flex>
                                    <Nextlink href="../work" passHref scroll={false}>
                                        <Link p="1px" pl="5px" pr="5px" mt="11.5px" size="sm" fontSize="lg" ml="7" border="2px" borderColor="transparent" _hover={{ color: "red.500", textDecoration: "underline", }}>Works</Link>
                                    </Nextlink>
                                    <Nextlink href="../home/post" passHref scroll={false}>
                                        <Link p="1px" pl="5px" pr="5px" ml="5" href="../work" mt="11.5px" size="sm" fontSize="lg" border="2px" borderColor="transparent" _hover={{ color: "green.500", textDecoration: "underline", }}>Post</Link>
                                    </Nextlink>
                                    <Box pt="20px" ml="5" mr=""><VscGithub /></Box>
                                    <Link ml="6px" href='https://github.com/Overlord15/shironeko-homepage' pt="" isExternal mt="15px" size="sm" fontSize="lg" _hover={{ color: "pink.500", textDecoration: "underline", }}>Source</Link>
                                </Flex>
                            </p>
                        }
                    </div>
                    <Spacer></Spacer>
                    <ThemeToggleButton />
                    <div>
                        {isLargerThan6502 &&
                            <p>
                                <Menu>
                                    <MenuButton as={IconButton} icon={<FaGripLines />} size="md" mt="2" ml="2" bg={isDark ? "blue.400" : "purple.300"}>
                                    </MenuButton>
                                    <MenuList>
                                        <Nextlink href="../work" passHref>
                                            <MenuItem as='Link'>My Works</MenuItem>
                                        </Nextlink>
                                        <Nextlink href="../home/post" passHref>
                                            <MenuItem as='Link'>Post</MenuItem>
                                        </Nextlink>
                                        <MenuItem as='Link'><Link justifyContent="center" isExternal href="https://github.com/Overlord15/shironeko-homepage" textDecoration="none">View Source On Github</Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </p>}
                    </div>
                </Flex>
            </Box>

        </>
    )
}