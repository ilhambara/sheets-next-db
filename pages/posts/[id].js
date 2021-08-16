import { google } from "googleapis";
import { Container, Heading, Box, Text } from "@chakra-ui/react";

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
			<Container maxW="container.lg" pt="10" color="gray.900">
				<Box w="90%">
					<Heading my={10}>{name}</Heading>
					<Text fontSize="lg">{information}</Text>
				</Box>
			</Container>
		</>
	);
}
