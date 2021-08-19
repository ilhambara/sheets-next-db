import Head from "next/head";
import { google } from "googleapis";
import { Heading, Box, List, ListItem, Link, Text } from "@chakra-ui/react";

export async function getServerSideProps() {
	//Auth
	const auth = await google.auth.getClient({
		scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
	});

	const sheets = google.sheets({ version: "v4", auth });

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.SHEET_ID,
		range: "Sheet1!A2:A10",
	});

	console.log(response);

	const posts = response.data.values.flat();

	return {
		props: {
			posts,
		},
	};
}

export default function Post({ posts }) {
	return (
		<>
			<Head>
				<title>List Data From: Next Sheets DB</title>
				<meta
					name="description"
					content="Turned Google Sheets into a dynamic database using Next + Chakra"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Heading my={10}>
				<Text>
					List Data From:{" "}
					<Link
						color="green.600"
						href="https://docs.google.com/spreadsheets/d/1l3wj1HKjxSS_pU7yebFDbGACpZ-_eEWbIbEdHFqiBzg/edit#gid=0"
						isExternal
					>
						Next Sheets DB
					</Link>
				</Text>
			</Heading>
			<List>
				{posts.map((name, i) => (
					<ListItem key={name} w="75%">
						<Box
							bgColor="gray.100"
							borderRadius="md"
							border="1px"
							borderColor="gray.200"
							w="100%"
							p={4}
							my={4}
							fontSize={24}
							fontWeight={600}
							color="gray.900"
							boxShadow="md"
						>
							<Link href={`/posts/${i + 2}`}>{name}</Link>
						</Box>
					</ListItem>
				))}
			</List>
		</>
	);
}
