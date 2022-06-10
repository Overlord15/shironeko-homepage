import Head from 'next/head'
import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaw, FaSun, FaMoon, FaInfoCircle, FaTelegramPlane, FaCannabis, FaGithub, FaGripLines, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { AiFillMessage } from 'react-icons/ai'
import styled from '@emotion/styled'
import Section from '../pages/comp/section'

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
        <title>Anupam Kumar - Homepage</title>
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
          <Box border="lg" mb="6" p="3" textAlign="center" borderRadius="8px" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')} css={{ backdropFilter: 'blur(10px)' }}>
            Hello, I&apos;m an indie web app developer based in India !
          </Box>
          <div>
            {isLargerThan650 &&
              <p>
                <Flex>
                  <Box pl="2">
                    <Heading>
                      Anupam Kumar
                    </Heading>
                    <p>Digital Craftsman ( Artist / Developer / Designer )</p>
                  </Box>
                  <Image borderRadius='full' boxSize='100px' src='/images/prof.jpg' alt='Anupam Kumar' ml="6" />
                </Flex>
              </p>
            }
          </div>
          <div>
            {isLargerThan6502 &&
              <p>
                <Box pl="2">
                  <Heading>
                    Anupam Kumar
                  </Heading>
                  <p>Digital Craftsman ( Artist / Developer / Designer )</p>
                </Box>
                <Center mt="6">
                  <Image borderRadius='full' boxSize='150px' src='/images/prof.jpg' objectFit="cover" alt='Anupam Kumar' />
                </Center>
              </p>
            }
          </div>
        </Section>
        <Section delay={0.3}>
          <Flex mt="6">
            <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
              Work
            </Text>
          </Flex>
          <Text pl="2" pr="2" mt="3" textAlign="justify">
            &nbsp;&nbsp;Anupam is a freelance and a full-stack web developer based in Kharagpur with a passion for building web applications/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera.
          </Text>
          <Center>
            <Button mt="7" bg={isDark ? "teal.300" : "purple.300"} color={isDark ? "black" : "white"} >
              <Link textAlign="center" textDecoration="none" _hover={{ textDecoration: "none", }}>My Portfolio</Link>
            </Button>
          </Center>
        </Section>
        <Section delay={0.5}>
          <Flex mt="5">
            <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
              Bio
            </Text>
          </Flex>
          <Box ml="2" pb="30" mt="3">
            <BioSection>
              <BioYear>2003</BioYear>
              Born in Kharagpur ( খড়গপুর ), India.
            </BioSection>
            <BioSection>
              <BioYear>2020</BioYear>
              Completed the Higher Secondery&apos;s Program in the  School of
              Atulmoni Polytechnic H.S High School ( অতুলমনি পলিটেকনিক এইচএস উচ্চ বিদ্যালয় ).
            </BioSection>
            <BioSection>
              <BioYear>2020</BioYear>
              Started pursuing BCA from Midnapore College Autonomus ( মেদিনীপুর কলেজ - অটোনোমাস ).
            </BioSection>
            <BioSection>
              <BioYear>2021 to present</BioYear>
              Studying and working as freelance ....
            </BioSection>
          </Box>
        </Section>
        <Section delay={0.7}>
          <Flex>
            <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
              I &#129505;
            </Text>
          </Flex>
          <Text pl="2" mt="3">
            &nbsp;&nbsp;&nbsp;Art, Music, Drawing, Playing RPG Games,{' '}<Link textDecoration="none" color="pink.300" _hover={{ textDecoration: "underline", color: "pink.300", textUnderlineOffset: 3 }}>Photography</Link>,  Learning Javascript framework, Machine.
          </Text>
        </Section>
        <Section delay={0.9}>
          <Flex mt="6" mb="1">
            <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
              On the web
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="baseline">
            <Button variant="ghost" color="teal.300" ><FaGithub /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://github.com/Overlord15' isExternal>@Overlord15</Link></Button>
            <Button variant="ghost" color="teal.300" ><FaTwitter /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://twitter.com/AnupamKhamrai' isExternal>@AnupamKhamrai</Link></Button>
            <Button variant="ghost" color="teal.300" ><FaFacebook /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.facebook.com/anupam.khamrai.3/' isExternal>@anupam.khamrai.3</Link></Button>
            <Button variant="ghost" color="teal.300" ><FaInstagram /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.instagram.com/weird_anupam_king/' isExternal>@weird_anupam_king</Link></Button>
          </Flex>
        </Section>
        <Section delay={1.1}>
          <Box mb="10" mt="12">
            <Link textDecoration="none" href="https://github.com/Overlord15/overlord-homepage" isExternal maxW="70%">
              <Center>
                <Image src='../workimages/shironeko.png' alt='github source' width="200px" objectFit='contain' border="none" borderRadius="10px" maxW="70%" />
              </Center>
            </Link>
            <Center mt="5" mb=""><Text maxW="60%" textAlign="center" fontWeight="bold">SHIRONEKO Web App</Text></Center>
            <Center mt="2"><Text textAlign="justify" maxW="60%" fontWeight="100">Visit my Github repositery which contains the source code for this site and feel free to contribute ! If you like my work feel free to give a star.</Text></Center>
          </Box>
        </Section>
        <Box maxW="100%" h="30px" pb="10" pt="8" ><Text textAlign="center" fontSize="15px" fontWeight="light">© 2022 Anupam Kumar. All Rights Reserved.</Text></Box>
      </Container>

    </>
  )
}
