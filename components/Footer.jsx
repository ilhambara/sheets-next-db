import { Center, Text, Link, Box } from "@chakra-ui/react";

export default function Footer() {
	return (
		<>
			<Box
				as="footer"
				borderWidth="1px"
				borderTopColor="gray.500"
				borderBottomColor="transparent"
			>
				<Center height="60px">
					<Text fontSize="lg" fontWeight="medium">
						Visit the source here:{" "}
						<Link
							color="green.600"
							href="https://github.com/ilhambara/sheets-next-db"
							isExternal
						>
							github.com/ilhambara/sheets-next-db
						</Link>
					</Text>
				</Center>
			</Box>
		</>
	);
}
