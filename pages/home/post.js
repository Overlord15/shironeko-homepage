import Head from 'next/head'
import { Text,  Box, Container, Flex, Link, Spacer, useMediaQuery, Image } from '@chakra-ui/react'
import Navbar from '../home/navbar'
import Section from '../home/section'


export default function Home() {
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <Head>
                <title>Posts - Anupam Kumar</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="shortcut icon" href="/images/icon.png" />
            </Head>
            <Navbar />

            <Container pt="100">

                <div>
                    {isLargerThan650 &&
                        <p>
                            <Section delay={0.1}>
                                <Text pl="2" pb="10" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3 }}>
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
                                <Text pl="2" pb="" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3 }}>
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
