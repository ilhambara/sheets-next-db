import Head from "next/head";
import { Flex, Box, Code, Heading, Text, Link } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Sheets as a database</title>
				<meta
					name="description"
					content="Turned Google Sheets into a dynamic database using Next + Chakra"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Flex flexDirection="column" alignItems="center" justifyContent="center">
				<Heading as="h1" size="xl">
					DataSheets 📗 using{" "}
					<Link href="https://nextjs.org/" color="blue.500" isExternal>
						Next
					</Link>{" "}
					and{" "}
					<Link href="https://chakra-ui.com/" color="teal.400" isExternal>
						Chakra
					</Link>
				</Heading>

				<Text fontSize="xl" my={5}>
					Get started by visiting <Code>posts/index.js</Code> page below:
				</Text>
			</Flex>

			<Flex flexWrap="wrap" alignItems="center" justifyContent="center" mt="10">
				<Box
					as="a"
					w="lg"
					href="/posts"
					p="6"
					m="4"
					borderWidth="1px"
					rounded="lg"
					flexBasis="45%"
					_hover={{ borderColor: "teal.600", textColor: "green.600" }}
				>
					<Heading as="h3" size="lg" my="3">
						See the example &rarr;
					</Heading>
					<Text fontSize="lg" lineHeight={8}>
						Lists of data populated using sheets API from Google Cloud Platform.
					</Text>
				</Box>
			</Flex>
		</>
	);
}
