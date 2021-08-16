import { google } from "googleapis";
import {
	Container,
	Heading,
	Box,
	List,
	ListItem,
	Link,
} from "@chakra-ui/react";

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
			<Container maxW="container.lg" pt="5">
				<Heading my={10}>List Data From: Next Sheets DB</Heading>
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
			</Container>
		</>
	);
}
