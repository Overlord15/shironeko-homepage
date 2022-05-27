import Head from 'next/head'
import { Link as Nextlink } from 'next/link'
import { Image, Text, Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Center, Button } from '@chakra-ui/react'
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
      <Box>
        <Flex w="100%" pl="5" pr="5" pb="3">
          <IconButton variant="link" isRound='true' mt="3.5" size="lg" icon={<FaPaw />} transform=""></IconButton>
          <Heading mt="5" size="sm" cursor="pointer" >
            OVERLORD
          </Heading>
          <div>
            {isLargerThan650 &&
              <p>
                <Flex>
                  <Link href='/' mt="4" size="sm" fontSize="lg" ml="7" _hover={{ color: "red.500", textDecoration: "underline", }}>Works</Link>
                  <Box pt="21.5px" ml="6" mr="1"><AiFillMessage /></Box>
                  <Link href='/' mt="4" size="sm" fontSize="lg" ml="0" _hover={{ color: "green.500", textDecoration: "underline", }}>Post</Link>
                  <Box pt="21.5px" ml="6" mr="1"><VscGithub /></Box>
                  <Link href='https://github.com/Overlord15/overlord-homepage' isExternal mt="4" size="sm" fontSize="lg" ml="1" _hover={{ color: "pink.500", textDecoration: "underline", }}>Source</Link>
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
                    <MenuItem><Flex alignItems="center"><FaInfoCircle /><Nextlink ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">About</Nextlink></Flex></MenuItem>
                    <MenuItem><Flex alignItems="center"><FaCannabis /><Nextlink ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">Work</Nextlink></Flex></MenuItem>
                    <MenuItem><Flex alignItems="center"><FaTelegramPlane /><Nextlink ml="2" href="/" alignItems="center" textDecoration="none">Post</Nextlink></Flex></MenuItem>
                    <MenuItem><Flex alignItems="center"><FaGithub /><Nextlink ml="2" justifyContent="center" href="https://github.com/Overlord15/overlord-homepage" textDecoration="none">View Source</Nextlink></Flex></MenuItem>
                  </MenuList>
                </Menu>
              </p>}
          </div>
        </Flex>
      </Box>
      <Container pt="20">
        <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')} css={{ backdropFilter: 'blur(10px)' }}>Hello, I'm an indie web app developer based in India!</Box>
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
                <Image borderRadius='full' boxSize='100px' src='https://bit.ly/dan-abramov' alt='Anupam Kumar' ml="6" />
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
                <Image borderRadius='full' boxSize='150px' src='https://i.pinimg.com/originals/f6/25/19/f6251928ce4061912bf0926e8c80a6f4.gif' objectFit="cover" alt='Anupam Kumar' />
              </Center>
            </p>
          }
        </div>

        <Flex mt="6">
          <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
            Work
          </Text>
        </Flex>
        <Text pl="2" mt="3" textAlign="justify">
          Anupam is a freelance and a full-stack web developer based in Kharagpur with a passion for building web applications/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera.
        </Text>

        <Center>
          <Button mt="7" bg={isDark ? "teal.300" : "purple.300"} color={isDark ? "black" : "white"} >
            <Link textAlign="center" textDecoration="none" _hover={{ textDecoration: "none", }}>My Portfolio</Link>
          </Button>
        </Center>

        <Flex mt="5">
          <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
            Bio
          </Text>
        </Flex>
        <Box ml="2">
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
        <Flex mt="6" mb="3">
          <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
            <Flex alignItems="center" >I ♥</Flex>
          </Text>
        </Flex>
        <Text pl="2" >
          &nbsp;&nbsp;&nbsp;&nbsp;Art, Music, Drawing, Playing RPG Games,{' '}<Link textDecoration="none" color="pink.300" _hover={{ textDecoration: "underline", color: "pink.300", textUnderlineOffset: 3 }}>Photography</Link>,  Learning Javascript framework, Machine.
        </Text>
        <Flex mt="3" mb="1">
          <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
            On the web
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="baseline" mb="5">
          <Button variant="ghost" color="teal.300" ><FaGithub /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://github.com/Overlord15' isExternal>@Overlord15</Link></Button>
          <Button variant="ghost" color="teal.300" ><FaTwitter /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://twitter.com/AnupamKhamrai' isExternal>@AnupamKhamrai</Link></Button>
          <Button variant="ghost" color="teal.300" ><FaFacebook /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.facebook.com/anupam.khamrai.3/' isExternal>@anupam.khamrai.3</Link></Button>
          <Button variant="ghost" color="teal.300" ><FaInstagram /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.instagram.com/weird_anupam_king/' isExternal>@weird_anupam_king</Link></Button>
        </Flex>

        <Box mb="10">
          <Link textDecoration="none" href="https://github.com/Overlord15/overlord-homepage" isExternal maxW="70%">
            <Center>
              <Image src='../images/github-source.jpg' alt='github source' objectFit='contain' border="none" borderRadius="10px" maxW="70%" />
            </Center>
          </Link>

          <Center mt="2" mb=""><Text maxW="60%" textAlign="center" fontWeight="bold">Overlord - Homepage Web app</Text></Center>
          <Center><Text textAlign="justify" maxW="60%" fontWeight="100">Visit my Github repositery which contains the source code for this site and feel free to contribute ! If you like my work feel free to give a star.</Text></Center>
        </Box>
      </Container>
    </>
  )
}
