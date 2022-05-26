import Head from 'next/head'
import Image from 'next/image'
import { Link as Nextlink } from 'next/link'
import { Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaw, FaSun, FaMoon, FaInfoCircle, FaTelegramPlane, FaCannabis, FaGithub } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { AiFillMessage } from 'react-icons/ai'
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
  return (
    <>
      <Box bg="black">
        <Flex w="100%" pl="8" pr="8" pb="3">
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
                    <MenuItem><Flex alignItems="center"><FaInfoCircle /><Link ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">About</Link></Flex></MenuItem>
                    <MenuItem><Flex alignItems="center"><FaCannabis /><Link ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">Work</Link></Flex></MenuItem>
                    <MenuItem><Flex alignItems="center"><FaTelegramPlane /><Link ml="2" href="/" alignItems="center" textDecoration="none">Post</Link></Flex></MenuItem>
                    <MenuItem><Flex alignItems="center"><FaGithub /><Link ml="2" justifyContent="center" href="https://github.com/Overlord15/overlord-homepage" textDecoration="none">View Source</Link></Flex></MenuItem>
                  </MenuList>
                </Menu>
              </p>}
          </div>
        </Flex>
      </Box>
    </>
  )
}
