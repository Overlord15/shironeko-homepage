import { Box, Center, Flex, Spinner, HStack, VStack, Text, Link } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../pages//home/navbar'
export default function Home() {
    return (
        <>
            <Head>
                <title>Anupam Kumar - 404 !</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="shortcut icon" href="/images/icon.png" />
            </Head>

            <Navbar />

            <Center>
                <HStack mt="40vh" mb="auto" maxH="100%" maxW="100%" justifyContent="center" alignItems="center">
                    <Box pt="2" size="xl" ><Text fontSize="50px">4</Text></Box>
                    <Spinner
                        thickness='4px'
                        speed='5s'
                        emptyColor='pink.200'
                        color='teal.500'
                        size='xl'
                    />
                    <Box pt="2" size="xl" ><Text fontSize="50px">4</Text></Box>
                    <Text fontSize="40px"> | </Text>
                    <Text fontSize="40px" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' pt="10px">PAGE NOT FOUND !</Text>
                </HStack>
            </Center>
            
        </>
    )
}


