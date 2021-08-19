import Head from "next/head";
import { google } from "googleapis";
import { Heading, Box, Text } from "@chakra-ui/react";

export async function getServerSideProps({ query }) {
	//Auth
	const auth = await google.auth.getClient({
		scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
	});

	const sheets = google.sheets({ version: "v4", auth });

	//Query
	const { id } = query;
	const range = `Sheet1!A${id}:B${id}`;

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.SHEET_ID,
		range,
	});

	//Result
	const [name, information] = response.data.values[0];

	return {
		props: {
			name,
			information,
		},
	};
}

export default function Post({ name, information }) {
	return (
		<>
			<Head>
				<title>Data From: {name}</title>
				<meta
					name="description"
					content="Turned Google Sheets into a dynamic database using Next + Chakra"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box w="90%">
				<Heading my={10}>{name}</Heading>
				<Text fontSize="lg">{information}</Text>
			</Box>
		</>
	);
}
