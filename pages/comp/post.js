import Head from 'next/head'
import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Image, AspectRatio } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaw, FaSun, FaMoon, FaInfoCircle, FaTelegramPlane, FaCannabis, FaGithub, FaGripLines, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { AiFillMessage } from 'react-icons/ai'
import styled from '@emotion/styled'
import Section from '../comp/section'


export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <Head>
                <title>Posts - Anupam Kumar</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="shortcut icon" href="/images/icon.png" />
            </Head>
            <Box as="nav" position="fixed" zIndex={1} backdropFilter="auto" backdropBlur="8px" w="100%">
                <Flex w="100%" pl="7" pr="7" pb="3">
                    <Link isRound='true' mt="3.5" pr="4" pt="11.5px" fontSize="18px" transform="" href='/'><FaPaw /></Link>
                    <Nextlink href="/" passHref scroll={false}>
                        <Link mt="4" cursor="pointer" fontSize="18.5" p="5px" fontWeight="extrabold" textDecoration="none" href='/' _hover={{ textDecoration: "none" }}>
                            Anupam Kumar
                        </Link>
                    </Nextlink>
                    <div>
                        {isLargerThan650 &&
                            <p>
                                <Flex>
                                    <Nextlink href="../comp/work" passHref scroll={false}>
                                        <Link p="1px" pl="5px" pr="5px" mt="18.5px" size="sm" fontSize="lg" ml="7" border="2px" borderColor="transparent" _hover={{ color: "red.500", textDecoration: "underline", }}>Works</Link>
                                    </Nextlink>
                                    <Nextlink href="../comp/post" passHref scroll={false}>
                                        <Link p="1px" pl="5px" pr="5px" ml="5" href="../comp/work" mt="18.5px" size="sm" fontSize="lg" bgColor="teal.300" borderRadius="3px" color="black" border="2px" borderColor="transparent" _hover={{ color: "green.500", textDecoration: "underline", }}>Post</Link>
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

                <div>
                    {isLargerThan650 &&
                        <p>
                            <Section delay={0.1}>
                                <Text pl="2" pb="10" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                                    Popular Posts
                                </Text>
                            </Section>
                            <Flex>
                                <Section delay={0.1}>
                                    <Link pt="10" href='https://youtu.be/dqzlKZ_p2r8' _hover={{ textDecoration: "none" }}>
                                        <Image alt='image' src='/postimages/python-lib.jpg' objectFit="cover" width="225px" borderRadius="15px"></Image>
                                        <Text textAlign="center" width="225px" pt="3">Tutorial which shows how to install Python libraries</Text>
                                    </Link>
                                </Section>
                                <Spacer></Spacer>
                                <Section delay={0.3}>
                                    <Link pt="10" href='https://youtu.be/PmTrOKAyBhY' _hover={{ textDecoration: "none" }}>
                                        <Image alt='image' src='/postimages/calculator.png' objectFit="cover" width="225px" borderRadius="15px"></Image>
                                        <Text textAlign="center" width="225px" pt="3">How to make an simple calculator app using Python</Text>
                                    </Link>
                                </Section>
                            </Flex>

                            <Flex>
                                <Section delay={0.5}>
                                    <Link pt="10" href='https://youtu.be/ME4QC-m6RXw' _hover={{ textDecoration: "none" }}>
                                        <Image alt='image' src='/postimages/insta-python.jpg' objectFit="cover" width="225px" borderRadius="15px"></Image>
                                        <Text textAlign="center" width="225px" pt="3">Tutorial which shows how to download instagram dp using Python libraries</Text>
                                    </Link>
                                </Section>
                                <Spacer></Spacer>
                                <Section delay={0.7}>
                                    <Link pt="10" href='https://youtu.be/79H6D05gq-8' _hover={{ textDecoration: "none" }}>
                                        <Image alt='image' src='/postimages/clock.jpg' objectFit="cover" width="225px" borderRadius="15px"></Image>
                                        <Text textAlign="center" width="225px" pt="3">Animated Clock using HTML , CSS and JAVASCRIPT</Text>
                                    </Link>
                                </Section>
                            </Flex>
                        </p>
                    }
                </div>
                <div>
                    {isLargerThan6502 &&
                        <p>
                            <Section delay={0.1}>
                                <Text pl="2" pb="" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                                    Popular Posts
                                </Text>
                            </Section>
                            <Section delay={0.4}>
                                <Flex flexDirection="column">

                                    <Link pt="5" href='https://youtu.be/dqzlKZ_p2r8' _hover={{ textDecoration: "none" }} m="auto">
                                        <Image alt='image' src='/postimages/python-lib.jpg' objectFit="cover" width="225px" borderRadius="15px"></Image>
                                        <Text textAlign="center" width="225px" pt="3">Tutorial which shows how to install Python libraries</Text>
                                    </Link>

                                    <Spacer></Spacer>

                                    <Link pt="10" href='https://youtu.be/PmTrOKAyBhY' _hover={{ textDecoration: "none" }} m="auto">
                                        <Image alt='image' src='/postimages/calculator.png' objectFit="cover" width="225px" borderRadius="15px"></Image>
                                        <Text textAlign="center" width="225px" pt="3">How to make an simple calculator app using Python</Text>
                                    </Link>

                                </Flex>

                                <Flex flexDirection="column">

                                    <Link pt="10" href='https://youtu.be/ME4QC-m6RXw' _hover={{ textDecoration: "none" }} m="auto">
                                        <Image alt='image' src='/postimages/insta-python.jpg' objectFit="cover" width="225px" borderRadius="15px"></Image>
                                        <Text textAlign="center" width="225px" pt="3">Tutorial which shows how to download instagram dp using Python libraries</Text>
                                    </Link>

                                    <Spacer></Spacer>

                                    <Link pt="10" href='https://youtu.be/79H6D05gq-8' _hover={{ textDecoration: "none" }} m="auto">
                                        <Image alt='image' src='/postimages/clock.jpg' objectFit="cover" width="225px" borderRadius="15px"></Image>
                                        <Text textAlign="center" width="225px" pt="3">Animated Clock using HTML , CSS and JAVASCRIPT</Text>
                                    </Link>

                                </Flex>
                            </Section>
                        </p>
                    }
                </div>


                <Section delay={0.8}>
                    <Box maxW="100%" h="0px" pt="20" pb="5"  ><Text textAlign="center" fontSize="15px" fontWeight="light">© 2022 Anupam Kumar. All Rights Reserved.</Text></Box>
                </Section>
            </Container>


        </>
    )
}
